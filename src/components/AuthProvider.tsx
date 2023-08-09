"use client";

import { ReactNode, createContext, useCallback, useState } from "react";
import { Credentials }                                     from "@typings/auth";
import { IProfile }                                        from "@typings/user";
import { AuthServiceResponse, authService }                from "@utils/authService";

export interface IAuthContext {
  user        : IProfile | null;
  isLoading   : boolean;
  isAuthorized: boolean;
  signIn      : (credentials: Credentials) => Promise<AuthServiceResponse<IProfile>>;
  signOut     : () => Promise<AuthServiceResponse<IProfile>>;
}

export const AuthContext = createContext<IAuthContext>({
  user        : null,
  isLoading   : false,
  isAuthorized: false,
  signIn      : async () => { return {} as any; },
  signOut     : async () => { return {} as any; }
});

export interface AuthProviderProps {
  children?: ReactNode;
  user     : IProfile | null;
}

export const AuthProvider = ({ user: propUser, children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser]           = useState<IProfile | null>(propUser);
  const isAuthorized              = !!user;

  const signIn = useCallback(
    async (credentials: Credentials) => {
      setIsLoading(true);
      const response = await authService.signIn(credentials);
      setUser(response.data);
      setIsLoading(false);
      return response;
    },
    []
  );

  const signOut = useCallback(
    async () => {
      const response = await authService.signOut();
      setUser(null);
      return response;
    },
    []
  );

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthorized, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
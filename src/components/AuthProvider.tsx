"use client";

import { ReactNode, createContext, useCallback, useEffect, useState }       from "react";
import { useSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";
import { getUser }                                                          from "@utils/user";
import { User }                                                             from "@typings/user";
import { Credentials }                                                      from "@typings/auth";

export interface IAuthContext {
  user        : User | null;
  isLoading   : boolean;
  isAuthorized: boolean;
  signIn      : (credentials: Credentials) => Promise<void>;
  signOut     : () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({
  user        : null,
  isLoading   : false,
  isAuthorized: false,
  signIn      : async () => { return; },
  signOut     : async () => { return; }
});

export interface AuthProviderProps {
  children?: ReactNode;
  user     : User | null;
}

export const AuthProvider = ({ user: propUser, children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const session                   = useSession();
  const [user, setUser]           = useState<User | null>(propUser);
  const sessionUserId             = session.data?.user?.id ?? null;
  const userId                    = user?.email ?? null;
  const isAuthorized              = !!user;

  useEffect(
    () => {
      (async () => {
        if (!sessionUserId) {
          setUser(null);
          return;
        }
        if (sessionUserId === userId) {
          return;
        }
        setIsLoading(true);
        const newUser = await getUser(sessionUserId);
        setUser(newUser);
        setIsLoading(false);
      })();
    },
    [sessionUserId, userId]
  );

  const signIn = useCallback(
    async (credentials: Credentials) => {
      const response = await nextAuthSignIn("credentials", { 
        redirect: false, 
        ...credentials 
      });
      if (response && response.error) {
        throw new Error(response.error);
      }
    },
    []
  );

  const signOut = useCallback(
    async () => {
      await nextAuthSignOut();
    },
    []
  );

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthorized, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
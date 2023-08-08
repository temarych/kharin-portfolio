"use client";

import { ReactNode, createContext, useCallback, useEffect, useState }       from "react";
import { useSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";
import { getUser }                                                          from "@utils/user";
import { User }                                                             from "@typings/user";
import { Credentials }                                                      from "@typings/auth";
import { updateUser as updateUserAction }                                   from "@utils/user";

export interface IAuthContext {
  user        : User | null;
  isLoading   : boolean;
  isAuthorized: boolean;
  updateUser  : (data: Partial<Omit<User, "id">>) => Promise<User>;
  signIn      : (credentials: Credentials) => Promise<void>;
  signOut     : () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({
  user        : null,
  isLoading   : false,
  isAuthorized: false,
  updateUser  : async () => { return {} as User; },
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

  const updateUser = useCallback(
    async (data: Partial<Omit<User, "id">>) => {
      if (!sessionUserId) throw new Error("Unauthorized");
      const user = await updateUserAction(sessionUserId, data);
      setUser(user);
      return user;
    },
    [sessionUserId]
  );

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthorized, updateUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
"use client";

import { ReactNode, createContext, useEffect, useState, useTransition } from "react";
import { useSession }                                                   from "next-auth/react";
import { getUser }                                                      from "@utils/user";
import { User }                                                         from "@typings/user";

export interface IAuthContext {
  user     : User | null;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  user     : null,
  isLoading: false
});

export interface AuthProviderProps {
  children?: ReactNode;
  user     : User | null;
}

export const AuthProvider = ({ user: propUser, children }: AuthProviderProps) => {
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading]    = useState(false);
  const session                      = useSession();
  const [user, setUser]              = useState<User | null>(propUser);
  const sessionEmail                 = session.data?.user?.email ?? null;
  const userEmail                    = user?.email ?? null;

  useEffect(
    () => {
      if (!sessionEmail) {
        setUser(null);
        return;
      }
      if (sessionEmail === userEmail) {
        return;
      }
      startTransition(async () => {
        setIsLoading(true);
        const newUser = await getUser(sessionEmail);
        setUser(newUser);
        setIsLoading(false);
      });
    },
    [sessionEmail, userEmail]
  );

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
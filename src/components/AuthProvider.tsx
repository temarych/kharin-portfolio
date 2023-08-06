"use client";

import { ReactNode, createContext, useEffect, useState, useTransition } from "react";
import { useSession }                                                   from "next-auth/react";
import { User }                                                         from "@prisma/client";
import { getUser }                                                      from "@utils/user";

export interface IAuthContext {
  user: User | null;
}

export const AuthContext = createContext<IAuthContext>({
  user: null
});

export interface AuthProviderProps {
  children?: ReactNode;
  user     : User | null;
}

export const AuthProvider = ({ user: propUser, children }: AuthProviderProps) => {
  const [isPending, startTransition] = useTransition();
  const session                      = useSession();
  const [user, setUser]              = useState<User | null>(propUser);
  const sessionEmail                 = session.data?.user?.email ?? null;
  const userEmail                    = user?.email ?? null;

  useEffect(
    () => {
      if (sessionEmail && sessionEmail !== userEmail) {
        startTransition(async () => {
          const newUser = await getUser(sessionEmail);
          setUser(newUser);
        });
      }
    },
    [sessionEmail, userEmail]
  );

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
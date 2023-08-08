"use client";

import { ReactNode }       from "react";
import { Session }         from "next-auth";
import { SessionProvider } from "next-auth/react";
import { User }            from "@typings/user";
import { AuthProvider }    from "./AuthProvider";

export interface ProvidersProps {
  children?: ReactNode;
  session  : Session | null;
  user     : User | null;
}

export const Providers = ({ children, session, user }: ProvidersProps) => {
  return (
    <SessionProvider session={session}>
      <AuthProvider user={user}>
        {children}
      </AuthProvider>
    </SessionProvider>
  );
};
"use client";

import { ReactNode }    from "react";
import { IProfile }     from "@typings/user";
import { AuthProvider } from "./AuthProvider";

export interface ProvidersProps {
  children?: ReactNode;
  user     : IProfile | null;
}

export const Providers = ({ children, user }: ProvidersProps) => {
  return (
    <AuthProvider user={user}>
      {children}
    </AuthProvider>
  );
};
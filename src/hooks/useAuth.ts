import { useCallback } from "react";
import { Credentials } from "@typings/auth";
import { useUser }     from "./useUser";

export const useAuth = () => {
  const { user, isLoading, setUser } = useUser();
  const isAuthorized                 = !!user;

  const signIn = useCallback(
    async (credentials: Credentials) => {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        body  : JSON.stringify(credentials)
      });
      const data = await response.json();
      if (!response.ok) {
        return { 
          error: data.message as string, 
          user : null 
        };
      }
      await setUser(data);
      return { data, error: null };
    },
    [setUser]
  );

  const signOut = useCallback(
    async () => {
      await fetch("/api/auth/signin", { method: "POST" });
      await setUser(null);
      return { data: null, error: null };
    },
    [setUser]
  );

  return { user, isLoading, isAuthorized, signIn, signOut };
};
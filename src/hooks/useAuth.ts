import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { data, status }      = useSession();
  const email        = data?.user?.email ?? null;
  const isAuthorized = status === "authenticated";
  const isLoading    = status === "loading";
  return { email, isAuthorized, isLoading };
};
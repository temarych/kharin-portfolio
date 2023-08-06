import { useContext }  from "react";
import { useSession }  from "next-auth/react";
import { AuthContext } from "@components/AuthProvider";

export const useAuth = () => {
  const { status }   = useSession();
  const { user }     = useContext(AuthContext);
  const isAuthorized = status === "authenticated";
  const isLoading    = status === "loading";
  return { user, isAuthorized, isLoading };
};
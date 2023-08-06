import { useContext }  from "react";
import { AuthContext } from "@components/AuthProvider";

export const useAuth = () => {
  const { user, isLoading } = useContext(AuthContext);
  const isAuthorized        = !!user;
  return { user, isAuthorized, isLoading };
};
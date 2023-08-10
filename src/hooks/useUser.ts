import useSWR       from "swr";
import { IProfile } from "@typings/user";

export const useUser = () => {
  const { data, isLoading, mutate } = useSWR<IProfile | null>("/api/auth/me");
  const setUser = async (user: IProfile | null) => await mutate(user) ?? null;
  return { user: data ?? null, isLoading, setUser };
};
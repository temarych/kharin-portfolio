import { useCallback } from "react";
import useSWR          from "swr";
import { IProfile }    from "@typings/user";
import { fetcher }     from "@utils/fetcher";

export const useUser = () => {
  const { data, isLoading, mutate, error } = useSWR<IProfile | null>("/api/auth/me", fetcher, { 
    shouldRetryOnError: false
  });

  const user = !error ? data ?? null : null;

  const setUser = useCallback(
    async (user: IProfile | null) => {
      return await mutate(user) ?? null;
    },
    [mutate]
  );

  const refreshUser = useCallback(
    async () => {
      return await mutate() ?? null;
    },
    [mutate]
  );

  return { user, isLoading, setUser, refreshUser, error };
};
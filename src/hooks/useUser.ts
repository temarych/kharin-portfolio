import { useCallback, useEffect } from "react";
import useSWR                     from "swr";
import { IProfile }               from "@typings/user";
import { FetchError, fetcher }    from "@utils/fetcher";

export const useUser = () => {
  const { data, isLoading, mutate, error } = useSWR<IProfile | null>("/api/auth/me", fetcher);

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

  useEffect(
    () => {
      if (error instanceof FetchError && error.status === 401 && data !== null) {
        setUser(null);
      }
    },
    [data, error, setUser]
  );

  return { user: data ?? null, isLoading, setUser, refreshUser, error };
};
import { useCallback } from "react";
import useSWR          from "swr";
import { IPhoto }      from "@typings/photos";
import { fetcher }     from "@utils/fetcher";

export const usePhoto = (id: string) => {
  const { data, mutate, error } = useSWR(`/api/photos/${id}`, fetcher);
  const photo                   = (!error && data) ? data as IPhoto : null;

  const refreshPhoto = useCallback(
    async () => {
      return await mutate() ?? null;
    },
    [mutate]
  );

  return { photo, refreshPhoto };
};
import { useCallback } from "react";
import useSWR          from "swr";
import { IPhoto }      from "@typings/photos";
import { fetcher }     from "@utils/fetcher";

export const usePhoto = (id: string) => {
  const { data, mutate } = useSWR(`/api/photos/${id}`, fetcher);

  const refreshPhoto = useCallback(
    async () => {
      return await mutate() ?? null;
    },
    [mutate]
  );

  return { photo: data ? data as IPhoto : null, refreshPhoto };
};
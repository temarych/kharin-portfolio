import { useCallback } from "react";
import useSWR          from "swr";
import { IPhoto }      from "@typings/photos";
import { fetcher }     from "@utils/fetcher";

export const usePhoto = (id: string) => {
  const { data, mutate, error, isLoading } = useSWR(`/api/gallery/photos/${id}`, fetcher, { shouldRetryOnError: false });
  const photo                              = (!error && data) ? data as IPhoto : null;

  const refreshPhoto = useCallback(
    async () => {
      return await mutate() ?? null;
    },
    [mutate]
  );

  const updatePhoto = useCallback(
    async (photo: IPhoto) => {
      return await mutate(photo) ?? null;
    },
    [mutate]
  );

  return { photo, refreshPhoto, isLoading, updatePhoto };
};
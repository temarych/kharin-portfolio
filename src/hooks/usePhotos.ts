import { useCallback } from "react";
import useSWR          from "swr";
import { IPhoto }      from "@typings/photos";
import { fetcher }     from "@utils/fetcher";

export const usePhotos = () => {
  const { data, mutate } = useSWR("/api/photos", fetcher);

  const refreshPhotos = useCallback(
    async () => {
      return await mutate() ?? null;
    },
    [mutate]
  );

  return { photos: data ? data.photos as IPhoto[] : [], refreshPhotos };
};
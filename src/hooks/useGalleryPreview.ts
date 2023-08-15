import { useCallback } from "react";
import useSWR          from "swr";
import { IPhoto }      from "@typings/photos";
import { fetcher }     from "@utils/fetcher";

export const useGalleryPreview = () => {
  const { data, mutate, error, isLoading } = useSWR(`/api/gallery/preview`, fetcher, { shouldRetryOnError: false });
  const photos                             = (!error && data) ? data.photos as IPhoto[] : [];

  const refreshPhotos = useCallback(
    async () => {
      return await mutate() ?? null;
    },
    [mutate]
  );

  const updatePhotos = useCallback(
    async (photos: IPhoto[]) => {
      return await mutate(photos) ?? null;
    },
    [mutate]
  );

  return { photos, refreshPhotos, isLoading, updatePhotos };
};
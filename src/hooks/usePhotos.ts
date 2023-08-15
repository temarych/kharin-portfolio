import { useCallback } from "react";
import useSWRInfinite  from "swr/infinite";
import { IPhoto }      from "@typings/photos";
import { fetcher }     from "@utils/fetcher";

export interface IGetPhotoResponse {
  page  : number;
  pages : number;
  limit : number;
  photos: IPhoto[];
}

export const usePhotos = () => {
  const { data, setSize, size, mutate, isValidating } = useSWRInfinite<IGetPhotoResponse>((pageIndex, prevPageData) => {
    if (prevPageData && prevPageData.page === prevPageData.pages) return null;
    return `/api/photos?page=${pageIndex + 1}`;
  }, fetcher, {
    shouldRetryOnError: false
  });

  const photos            = data ? data.flatMap(response => response.photos as IPhoto[]) : [];
  const lastPhotoResponse = data ? data.at(data.length - 1) ?? null : null;
  const canFetchMore      = lastPhotoResponse ? lastPhotoResponse.page < lastPhotoResponse.pages : false;

  const refreshPhotos = useCallback(
    async () => {
      return await mutate() ?? null;
    },
    [mutate]
  );

  return { photos, setSize, size, refreshPhotos, isValidating, canFetchMore };
};
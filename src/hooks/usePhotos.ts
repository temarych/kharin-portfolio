import useSWR      from "swr";
import { IPhoto }  from "@typings/photos";
import { fetcher } from "@utils/fetcher";

export const usePhotos = () => {
  const { data } = useSWR("/api/photos", fetcher);
  return { photos: data ? data.photos as IPhoto[] : [] };
};
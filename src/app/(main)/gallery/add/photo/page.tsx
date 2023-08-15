"use client";

import { useCallback, useEffect, useState } from "react";
import { enqueueSnackbar }                  from "notistack";
import { revalidate }                       from "@utils/revalidate";
import { IPhoto }                           from "@typings/photos";
import { usePhotos }                        from "@hooks/usePhotos";
import { useGalleryPreview }                from "@hooks/useGalleryPreview";
import { Photo, PickPhoto }                 from "./PickPhoto";
import { ViewPhoto }                        from "./ViewPhoto";

const AddPhoto = () => {
  const [isUploading, setIsUploading]                  = useState(false);
  const [photo, setPhotoPlain]                         = useState<Photo | null>(null);
  const { refreshPhotos }                              = usePhotos();
  const { refreshPhotos: refreshGalleryPreviewPhotos } = useGalleryPreview();

  useEffect(
    () => () => {
      photo && URL.revokeObjectURL(photo.url);
    },
    [photo]
  );

  const setPhoto = useCallback(
    (photo: Photo | null) => {
      setPhotoPlain(prevPhoto => {
        prevPhoto && URL.revokeObjectURL(prevPhoto.url);
        return photo;
      });
    },
    []
  );

  const handleRemove = useCallback(
    () => {
      if (isUploading) return;
      setPhoto(null);
    },
    [setPhoto, isUploading]
  );

  const handleUpload = useCallback(
    async () => {
      if (!photo || isUploading) return;
      const formData = new FormData();
      formData.set("photo", photo.file);
      setIsUploading(true);
      const response = await fetch("/api/gallery/photos", {
        method: "POST",
        body  : formData
      });
      const newPhoto = await response.json() as IPhoto;
      setPhoto(null);
      setIsUploading(false);
      enqueueSnackbar("Uploaded!", { variant: "success" });
      await Promise.all([
        refreshPhotos(),
        refreshGalleryPreviewPhotos(),
        revalidate("preview"),
        revalidate("photos"),
        revalidate(`photo/${newPhoto.id}`)
      ]);
    },
    [photo, isUploading, refreshPhotos, setPhoto, refreshGalleryPreviewPhotos]
  );

  return !photo ? (
    <PickPhoto onPick={setPhoto} />
  ) : (
    <ViewPhoto 
      photo       = {photo} 
      onRemove    = {handleRemove} 
      onUpload    = {handleUpload}
      isUploading = {isUploading}
    />
  );
};

export default AddPhoto;
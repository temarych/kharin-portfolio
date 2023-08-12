"use client";

import { useCallback, useEffect, useState } from "react";
import { Photo, PickPhoto }                 from "./PickPhoto";
import { ViewPhoto }                        from "./ViewPhoto";

const AddPhoto = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [photo, setPhotoPlain]        = useState<Photo | null>(null);

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
      await fetch("/api/photos", {
        method: "POST",
        body  : formData
      });
      setPhoto(null);
      setIsUploading(false);
    },
    [photo, isUploading, setPhoto]
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
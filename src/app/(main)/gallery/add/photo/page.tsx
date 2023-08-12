"use client";

import { useCallback, useEffect, useState } from "react";
import { Photo, PickPhoto }                 from "./PickPhoto";
import { EditPhoto }                        from "./EditPhoto";

const AddPhoto = () => {
  const [photo, setPhotoPlain] = useState<Photo | null>(null);

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

  return !photo ? (
    <PickPhoto onPick={setPhoto} />
  ) : (
    <EditPhoto photo={photo} onRemove={() => setPhoto(null)} />
  );
};

export default AddPhoto;
"use client";

import { useParams }  from "next/navigation";
import { useAuth }    from "@hooks/useAuth";
import { usePhotos }  from "@hooks/usePhotos";
import { Button }     from "@components/Button";
import { revalidate } from "@utils/revalidate";

const ViewPhoto = () => {
  const params            = useParams();
  const id                = params.id as string;
  const { isAuthorized }  = useAuth();
  const { refreshPhotos } = usePhotos();

  return (
    <div className="pt-16">
      <h1>Photo</h1>
      {isAuthorized && (
        <Button 
          onClick={async () => {
            await fetch(`/api/photos/${id}`, { method: "DELETE" });
            await refreshPhotos();
            await revalidate("photos");
          }}
        >
          Delete
        </Button>
      )}
    </div>
  );
};

export default ViewPhoto;
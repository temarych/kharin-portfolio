"use client";

import { useParams }  from "next/navigation";
import { useAuth }    from "@hooks/useAuth";
import { Button }     from "@components/Button";
import { revalidate } from "@utils/revalidate";

const ViewPhoto = () => {
  const params           = useParams();
  const id               = params.id as string;
  const { isAuthorized } = useAuth();

  return (
    <div className="pt-16">
      <h1>Photo</h1>
      {isAuthorized && (
        <Button 
          onClick={async () => {
            await fetch(`/api/photos/${id}`, { method: "DELETE" });
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
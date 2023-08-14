"use client";

import { useState }                       from "react";
import Image                              from "next/image";
import { useParams, useRouter }           from "next/navigation";
import { HiChevronLeft, HiLink, HiTrash } from "react-icons/hi";
import { useAuth }                        from "@hooks/useAuth";
import { usePhotos }                      from "@hooks/usePhotos";
import { usePhoto }                       from "@hooks/usePhoto";
import { revalidate }                     from "@utils/revalidate";
import { IconButton }                     from "@components/IconButton";
import { CircularProgress }               from "@components/CircularProgress";
import { Link }                           from "@components/Link";
import { PhotoDetail }                    from "../../PhotoDetail";

const ViewPhoto = () => {
  const router                      = useRouter();
  const params                      = useParams();
  const id                          = params.id as string;
  const { isAuthorized }            = useAuth();
  const { refreshPhotos }           = usePhotos();
  const { photo, refreshPhoto }     = usePhoto(id);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await fetch(`/api/photos/${id}`, { method: "DELETE" });
    await refreshPhoto();
    setIsDeleting(false);
    await refreshPhotos();
    await revalidate("photos");
    router.push("/gallery");
  };

  if (!photo) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <CircularProgress className="w-10 h-10" color="black" />
        <h1 className="text-lg">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center px-4 md:px-8 pt-16">
      <div className="max-w-[80em] w-full py-8 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
        <div className="relative rounded-xl bg-gray-50 aspect-[0.75] w-full overflow-hidden">
          <Image
            fill
            src       = {photo.url}
            alt       = "preview"
            sizes     = "33vw"
            className = "object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 gap-8 md:py-8">
          <div className="flex flex-row items-center justify-between">
            <Link href="/gallery" className="text-lg flex flex-row items-center gap-2">
              <HiChevronLeft className="text-2xl" />
              Back to gallery
            </Link>
            <div className="flex flex-row items-center gap-2">
              <IconButton 
                className = "border"
                disabled  = {isDeleting}
              >
                <HiLink className="text-2xl" />
              </IconButton>
              {isAuthorized && (
                <IconButton 
                  disabled  = {isDeleting}
                  className = "border" 
                  onClick   = {handleDelete}
                >
                  {!isDeleting ? (
                    <HiTrash className="text-2xl" />
                  ) : (
                    <CircularProgress color="gray" className="w-6 h-6" />
                  )}
                </IconButton>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 border rounded-xl p-6 md:p-8">
            <PhotoDetail
              name  = "Size"
              value = {`${(photo.size / 1000).toFixed()} KB`}
            />
            <PhotoDetail 
              name  = "Resolution"
              value = {`${photo.width}x${photo.height}`}
            />
            <PhotoDetail 
              name  = "Format"
              value = {photo.format}
            />
            <PhotoDetail 
              name  = "Created at"
              value = "12/12/2023"
            />
            <PhotoDetail 
              name  = "Views"
              value = "5485948"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewPhoto;
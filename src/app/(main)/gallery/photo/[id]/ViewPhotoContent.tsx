"use client";

import { useCallback, useState }          from "react";
import Image                              from "next/image";
import { useParams, useRouter }           from "next/navigation";
import { enqueueSnackbar }                from "notistack";
import { HiChevronLeft, HiLink, HiTrash } from "react-icons/hi";
import { useAuth }                        from "@hooks/useAuth";
import { usePhotos }                      from "@hooks/usePhotos";
import { usePhoto }                       from "@hooks/usePhoto";
import { revalidate }                     from "@utils/revalidate";
import { IconButton }                     from "@components/IconButton";
import { CircularProgress }               from "@components/CircularProgress";
import { Link }                           from "@components/Link";
import { Button }                         from "@components/Button";
import { PhotoDetail }                    from "../../PhotoDetail";

const BASE_URL = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.NEXT_PUBLIC_BASE_URL as string;

export const ViewPhotoContent = () => {
  const router                      = useRouter();
  const params                      = useParams();
  const id                          = params.id as string;
  const { isAuthorized }            = useAuth();
  const { refreshPhotos }           = usePhotos();
  const { photo, refreshPhoto }     = usePhoto(id);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = useCallback(
    async () => {
      setIsDeleting(true);
      await fetch(`/api/photos/${id}`, { method: "DELETE" });
      await refreshPhoto();
      setIsDeleting(false);
      enqueueSnackbar("Deleted!", { variant: "success" });
      await refreshPhotos();
      await revalidate("photos");
      await revalidate(`photo/${id}`);
    },
    []
  );

  const handleCopyLink = useCallback(
    async () => {
      navigator.clipboard.writeText(`${BASE_URL}/gallery/photo/${id}`);
      enqueueSnackbar("Link copied!", { variant: "success" });
    },
    []
  );

  if (!photo) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold text-5xl">404</h1>
          <p className="text-md">Photo not found</p>
        </div>
        <Button 
          onClick       = {() => router.push("/gallery")} 
          className     = "text-lg flex flex-row items-center gap-2 min-h-[2.7em]"
          leftAdornment = {<HiChevronLeft className="text-2xl" />}
        >
          Back to gallery
        </Button>
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
                onClick   = {handleCopyLink}
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
              name  = "Uploaded at"
              value = {Intl.DateTimeFormat("en-US").format(new Date(photo.uploadDate))}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
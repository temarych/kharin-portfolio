"use client";

import { useRef }              from "react";
import { Button }              from "@components/Button";
import { Dialog, DialogProps } from "@components/Dialog";

export interface AddPhotoDialogProps extends Omit<DialogProps, "title" | "children"> {

}

export const AddPhotoDialog = ({ ...props }: AddPhotoDialogProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Dialog {...props} title="Add photo">
      <input type="file" ref={ref} />
      <Button
        onClick={async () => {
          const formData = new FormData();
          const files    = ref.current?.files;

          if (!files) return;

          const [file] = Array.from(files);

          formData.set("photo", file);

          await fetch("/api/photos", {
            method: "POST",
            body  : formData
          });
        }}
      >
        Add photo
      </Button>
    </Dialog>
  );
};
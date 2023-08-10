import { Dialog, DialogProps } from "@components/Dialog";

export interface ViewPhotoDialogProps extends Omit<DialogProps, "title" | "children"> {

}

export const ViewPhotoDialog = ({ ...props }: ViewPhotoDialogProps) => {
  return (
    <Dialog {...props} title="Photo">
      <h1>Photo</h1>
    </Dialog>
  );
};
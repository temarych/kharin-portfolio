import { Dialog, DialogProps } from "@components/Dialog";

export interface AddPhotoDialogProps extends Omit<DialogProps, "title" | "children"> {

}

export const AddPhotoDialog = ({ ...props }: AddPhotoDialogProps) => {
  return (
    <Dialog {...props} title="Add photo">
      <h1>Add photo</h1>
    </Dialog>
  );
};
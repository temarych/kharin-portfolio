"use client";

import { forwardRef }                from "react";
import { HiOutlineCheckCircle, HiX } from "react-icons/hi";
import { useSnackbar }               from "notistack";
import { IconButton }                from "../IconButton";

export interface SuccessSnackbarProps {
  id     : string;
  message: string;
}

export const SuccessSnackbar = forwardRef<HTMLDivElement, SuccessSnackbarProps>((props, ref) => {
  const { closeSnackbar }   = useSnackbar();
  const handleCloseSnackbar = () => closeSnackbar(props.id);

  return (
    <div ref={ref} className="border border-green-500 bg-green-100/90 text-green-500 rounded-xl pl-4 pr-2 py-2 flex flex-row items-center justify-between gap-3">
      <div className="flex flex-row items-center gap-3">
        <HiOutlineCheckCircle className="text-xl" />
        <h1>{props.message}</h1>
      </div>
      <IconButton onClick={handleCloseSnackbar} color="green">
        <HiX className="text-xl" />
      </IconButton>
    </div>
  );
});
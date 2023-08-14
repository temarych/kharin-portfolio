"use client";

import { forwardRef }           from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { 
  SnackbarProvider as NotistackProvider, 
  SnackbarProviderProps as NotistackProviderProps,
  CustomContentProps
}                               from "notistack";

export interface SnackbarProviderProps extends NotistackProviderProps {

}

export const SnackbarProvider = (props: SnackbarProviderProps) => {
  return (
    <NotistackProvider 
      {...props}
      anchorOrigin={{
        vertical  : "bottom",
        horizontal: "center"
      }}
      Components={{
        success: forwardRef<HTMLDivElement, CustomContentProps>((props, ref) => (
          <div ref={ref} className="border border-green-500 bg-green-100/90 text-green-500 rounded-xl p-4 flex flex-row items-center gap-3">
            <HiOutlineCheckCircle />
            <h1>{props.message}</h1>
          </div>
        ))
      }}
    />
  );
};
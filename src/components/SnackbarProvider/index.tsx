"use client";

import { 
  SnackbarProvider as NotistackProvider, 
  SnackbarProviderProps as NotistackProviderProps
}                          from "notistack";
import { SuccessSnackbar } from "./SuccessSnackbar";

export interface SnackbarProviderProps extends Omit<NotistackProviderProps, "anchorOrigin" | "Components"> {

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
        success: SuccessSnackbar
      }}
    />
  );
};
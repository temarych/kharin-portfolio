"use client";

import { ReactNode }        from "react";
import { SWRConfiguration } from "swr";
import { SWRProvider }      from "./SWRProvider";

export interface ProvidersProps {
  children? : ReactNode;
  swrConfig?: SWRConfiguration;
}

export const Providers = ({ children, swrConfig }: ProvidersProps) => {
  return (
    <SWRProvider config={swrConfig}>
      {children}
    </SWRProvider>
  );
};
"use client";

import { ReactNode }                   from "react";
import { SWRConfig, SWRConfiguration } from "swr";

export interface ProvidersProps {
  children? : ReactNode;
  swrConfig?: SWRConfiguration;
}

export const Providers = ({ children, swrConfig }: ProvidersProps) => {
  return (
    <SWRConfig value={swrConfig}>
      {children}
    </SWRConfig>
  );
};
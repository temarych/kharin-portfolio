"use client";

import { ReactNode }                   from "react";
import { SWRConfig, SWRConfiguration } from "swr";

export interface SWRProviderProps {
  config?: SWRConfiguration;
  children?: ReactNode;
}

export const SWRProvider = ({ children, config }: SWRProviderProps) => {
  return (
    <SWRConfig value={config}>
      {children}
    </SWRConfig>
  );
};
"use client";

import { ReactNode } from "react";
import { redirect }  from "next/navigation";
import { useAuth }   from "@hooks/useAuth";

export interface AddLayoutProps {
  children: ReactNode;
}

const AddLayout = ({ children }: AddLayoutProps) => {
  const { isAuthorized } = useAuth();

  if (!isAuthorized) {
    redirect("/login");
  }
  
  return children;
};

export default AddLayout;
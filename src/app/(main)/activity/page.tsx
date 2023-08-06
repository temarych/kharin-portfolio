"use client";

import { redirect } from "next/navigation";
import { useAuth }  from "@hooks/useAuth";

const Activity = () => {
  const { isAuthorized } = useAuth();

  if (!isAuthorized) {
    redirect("/login");
  }

  return (
    <h1 className="text-center">Activity</h1>
  );
};

export default Activity;
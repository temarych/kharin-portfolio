"use client";

import { redirect } from "next/navigation";
import { useAuth }  from "@hooks/useAuth";

const Activity = () => {
  const { isAuthorized } = useAuth();

  if (!isAuthorized) {
    redirect("/login");
  }

  return (
    <div className="pt-16">
      <h1 className="text-center">Activity</h1>
    </div>
  );
};

export default Activity;
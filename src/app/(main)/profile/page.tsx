"use client";

import { redirect } from "next/navigation";
import { useAuth }  from "@hooks/useAuth";

const Profile = () => {
  const { isAuthorized } = useAuth();

  if (!isAuthorized) {
    redirect("/login");
  }

  return (
    <h1 className="text-center">Profile</h1>
  );
};

export default Profile;
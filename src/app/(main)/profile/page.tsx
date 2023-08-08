"use client";

import { redirect }        from "next/navigation";
import { useAuth }         from "@hooks/useAuth";
import { EditProfileForm } from "./EditProfileForm";

const Profile = () => {
  const { isAuthorized } = useAuth();

  if (!isAuthorized) {
    redirect("/login");
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start sm:justify-center px-4 pb-0 sm:pb-16 pt-32 sm:pt-16">
      <div className="w-full max-w-[20em] sm:max-w-[40em]">
        <EditProfileForm />
      </div>
    </section>
  );
};

export default Profile;
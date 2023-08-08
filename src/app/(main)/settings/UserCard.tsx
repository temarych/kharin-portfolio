"use client";

import { User }    from "@typings/user";
import { useAuth } from "@hooks/useAuth";
import { Avatar }  from "@components/Avatar";

export const UserCard = () => {
  const auth = useAuth();
  const user = auth.user as User;

  return (
    <div className="rounded-xl flex flex-col items-center gap-4 border px-4 py-8">
      <Avatar className="w-24 h-24 text-2xl" />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-md">{user.firstName} {user.lastName}</h1>
        <p className="text-sm text-gray-400">{user.email}</p>
      </div>
    </div>
  );
};
"use client";

import { Tag }      from "@components/Tag";
import { useAuth }  from "@hooks/useAuth";
import { NavBar }   from "./NavBar";
import { UserMenu } from "../UserMenu";

export const Header = () => {
  const { isAuthorized, user } = useAuth();

  return (
    <header className="fixed z-10 w-full h-16 px-4 flex flex-row justify-center border-b border-gray-100 bg-white">
      <div className="w-full max-w-[80em] flex flex-row items-center">
        <div className="flex-1 flex items-center justify-start">
          <Tag>Portfolio</Tag>
        </div>
        <h1 className="font-bold">Nazar Kharin</h1>
        <div className="flex-1 flex items-center justify-end gap-2">
          {isAuthorized && user ? (
            <UserMenu user={user} />
          ) : (
            <NavBar />
          )}
        </div>
      </div>
    </header>
  );
};
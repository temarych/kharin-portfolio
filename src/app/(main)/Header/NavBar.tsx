"use client";

import { HiOutlineCamera, HiOutlineHome } from "react-icons/hi";
import { IconButton }                     from "@components/IconButton";

export const NavBar = () => {
  return (
    <div className="flex flex-row items-center">
      <IconButton>
        <HiOutlineHome className="text-xl" />
      </IconButton>
      <IconButton>
        <HiOutlineCamera className="text-xl" />
      </IconButton>
    </div>
  );
};
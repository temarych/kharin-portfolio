"use client";

import { HiOutlineCamera, HiOutlineHome } from "react-icons/hi";
import { useRouter }                      from "next/navigation";
import { IconButton }                     from "@components/IconButton";

export const NavBar = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center">
      <IconButton onClick={() => router.push("/")}>
        <HiOutlineHome className="text-xl" />
      </IconButton>
      <IconButton onClick={() => router.push("/gallery")}>
        <HiOutlineCamera className="text-xl" />
      </IconButton>
    </div>
  );
};
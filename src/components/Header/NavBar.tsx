import { HiOutlineHeart, HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { IconButton }                                   from "../IconButton";

export const NavBar = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <IconButton>
        <HiOutlineHome className="text-lg" />
      </IconButton>
      <IconButton>
        <HiOutlineHeart className="text-lg" />
      </IconButton>
      <IconButton>
        <HiOutlineUser className="text-lg" />
      </IconButton>
    </div>
  );
};
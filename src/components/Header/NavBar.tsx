import { HiOutlineHeart, HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { IconButton }                                   from "../IconButton";

export const NavBar = () => {
  return (
    <div className="flex flex-row items-center">
      <IconButton>
        <HiOutlineHome className="text-xl" />
      </IconButton>
      <IconButton>
        <HiOutlineHeart className="text-xl" />
      </IconButton>
      <IconButton>
        <HiOutlineUser className="text-xl" />
      </IconButton>
    </div>
  );
};
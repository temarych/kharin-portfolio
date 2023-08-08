import { HiOutlineUser, HiOutlineUsers, HiUser, HiUsers } from "react-icons/hi";
import { ShortNavItem }                                   from "./ShortNavItem";

export const ShortNavBar = () => {
  return (
    <ul className="flex flex-row gap-4">
      <ShortNavItem 
        icon       = {<HiOutlineUser />} 
        activeIcon = {<HiUser />}
        path       = "/settings"
      />
      <ShortNavItem 
        icon       = {<HiOutlineUsers />} 
        activeIcon = {<HiUsers />}
        path       = "/settings/admins"
      />
    </ul>
  );
};
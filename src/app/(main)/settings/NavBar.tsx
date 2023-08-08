import { HiOutlineUser, HiOutlineUsers, HiUser, HiUsers } from "react-icons/hi";
import { List }                                           from "@components/List";
import { NavItem }                                        from "../NavItem";

export const NavBar = () => {
  return (
    <List className="border rounded-xl">
      <NavItem 
        name       = "Profile" 
        icon       = {<HiOutlineUser />} 
        activeIcon = {<HiUser />}
        path       = "/settings"
      />
      <NavItem 
        name       = "Admins" 
        icon       = {<HiOutlineUsers />} 
        activeIcon = {<HiUsers />}
        path       = "/settings/admins"
      />
    </List>
  );
};
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { List }                          from "@components/List";
import { NavItem }                       from "./NavItem";

export const NavBar = () => {
  return (
    <List className="border rounded-xl">
      <NavItem name="Profile" icon={<HiOutlineUser />} />
      <NavItem name="Admins" icon={<HiOutlineUsers />} />
    </List>
  );
};
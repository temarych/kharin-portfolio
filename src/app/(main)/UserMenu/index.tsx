"use client";

import { Fragment }                from "react";
import { signOut }                 from "next-auth/react";
import { Menu, Transition }        from "@headlessui/react";
import { HiMenu, HiOutlineLogout } from "react-icons/hi";
import { User }                    from "@typings/user";
import { List }                    from "@components/List";
import { Divider }                 from "@components/Divider";
import { IconButton }              from "@components/IconButton";
import { NavItem }                 from "./NavItem";
import { routes }                  from "../routes";

export interface UserMenuProps {
  user: User;
}

export const UserMenu = ({ user }: UserMenuProps) => {
  return (
    <Menu>
      {({ open }) => (
        <div className="relative flex flex-col">
          <Menu.Button as={IconButton}>
            <HiMenu className="text-xl" />
          </Menu.Button>
          <div className="relative">
            <Transition
              as        = {Fragment}
              show      = {open}
              enter     = "duration-100 transition origin-top-right"
              leave     = "duration-100 transition origin-top-right"
              enterFrom = "scale-75 opacity-0"
              enterTo   = "scale-100 opacity-1"
              leaveFrom = "scale-100 opacity-1"
              leaveTo   = "scale-75 opacity-0"
            >
              <Menu.Items static className="absolute mt-1.5 right-0 w-72 bg-white rounded-xl border outline-none flex flex-col">
                <div className="px-6 py-4 border-b flex flex-col">
                  <h1 className="font-bold text-md">{user.firstName} {user.lastName}</h1>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
                <List className="py-3">
                  {routes.map(route => (
                    <NavItem key={route.name} {...route} />
                  ))}
                  <Divider className="my-3" />
                  <Menu.Item>
                    {({ active }) => (
                      <List.ItemWrapper onClick={() => signOut({ redirect: false })}>
                        <List.ItemButton isSelected={active} color="red">
                          <List.ItemContent leftAdornment={<HiOutlineLogout />}>
                            Log out
                          </List.ItemContent>
                        </List.ItemButton>
                      </List.ItemWrapper>
                    )}
                  </Menu.Item>
                </List>
              </Menu.Items>
            </Transition>
          </div>
        </div>
      )}
    </Menu>
  );
};
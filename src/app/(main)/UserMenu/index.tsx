"use client";

import { Fragment, ReactNode } from "react";
import { useRouter }           from "next/navigation";
import { signOut }             from "next-auth/react";
import { Menu, Transition }    from "@headlessui/react";
import { 
  HiOutlineChartBar, 
  HiOutlineCog, 
  HiOutlineLogout
}                              from "react-icons/hi";
import { User }                from "@typings/user";
import { List }                from "@components/List";
import { Avatar }              from "@components/Avatar";
import { Divider }             from "@components/Divider";

export interface IRoute {
  name: string;
  icon: ReactNode;
  path: string;
}

export const routes: IRoute[] = [
  {
    name: "Activity",
    icon: <HiOutlineChartBar />,
    path: "/activity"
  },
  {
    name: "Settings",
    icon: <HiOutlineCog />,
    path: "/settings"
  }
];

export interface UserMenuProps {
  user: User;
}

export const UserMenu = ({ user }: UserMenuProps) => {
  const router = useRouter();

  return (
    <Menu>
      {({ open }) => (
        <div className="relative flex flex-col">
          <Menu.Button className="rounded-full border border-gray-300 after:absolute after:inset-0 after:rounded-full hover:after:bg-gray-400/10 active:after:bg-gray-400/25 transition">
            <Avatar />
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
                    <Menu.Item key={route.name}>
                      {({ active }) => (
                        <List.ItemWrapper onClick={() => router.push(route.path)}>
                          <List.ItemButton isSelected={active}>
                            <List.ItemContent leftAdornment={route.icon}>
                              {route.name}
                            </List.ItemContent>
                          </List.ItemButton>
                        </List.ItemWrapper>
                      )}
                    </Menu.Item>
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
"use client";

import { twMerge } from "tailwind-merge";
import { Avatar }  from "@components/Avatar";
import { Menu }    from "@headlessui/react";
import { useAuth } from "@hooks/useAuth";
import { User }    from "@prisma/client";

export const UserMenu = () => {
  const auth = useAuth();
  const user = auth.user as User;

  return (
    <Menu as="div" className="relative flex flex-col">
      <Menu.Button className="rounded-full border border-gray-300 after:absolute after:inset-0 after:rounded-full hover:after:bg-gray-400/10 active:after:bg-gray-400/25 transition">
        <Avatar />
      </Menu.Button>
      <div className="relative">
        <Menu.Items className="absolute mt-1.5 right-0 w-72 bg-white rounded-xl border outline-none flex flex-col">
          <div className="px-6 py-4 border-b flex flex-col">
            <h1 className="font-bold text-md">{user.firstName} {user.lastName}</h1>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
          <ul className="py-3">
            {["Profile", "Activity", "Settings"].map(name => (
              <Menu.Item key={name}>
                {({ active }) => (
                  <li className={twMerge(["px-6 py-2 cursor-pointer", active ? "bg-gray-100" : null])}>
                    {name}
                  </li>
                )}
              </Menu.Item>
            ))}
          </ul>
          <div className="py-3 border-t flex flex-col">
            <Menu.Item>
              {({ active }) => (
                <p className={twMerge(["px-6 py-2 cursor-pointer", active ? "bg-gray-100" : null])}>
                  Log out
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
};
"use client";

import { HiPlus }       from "react-icons/hi";
import { IconButton }   from "@components/IconButton";
import { List }         from "@components/List";
import { UserItem }     from "./UserItem";
import { AddAdminForm } from "./AddAdminForm";

const Admins = () => {
  return (
    <div className="flex flex-row">
      <div className="min-w-[25em] w-full border-r flex flex-col">
        <div className="border-b px-6 py-4 flex flex-row items-center justify-between">
          <h1 className="font-bold text-xl">Edit admins</h1>
          <IconButton>
            <HiPlus className="text-lg" />
          </IconButton>
        </div>
        <List>
          <UserItem 
            firstName = "Tymur" 
            lastName  = "Yavtushenko" 
            email     = "temarych@gmail.com" 
          />
          <UserItem 
            firstName = "Tymur" 
            lastName  = "Yavtushenko" 
            email     = "temarych@gmail.com" 
          />
          <UserItem 
            firstName = "Tymur" 
            lastName  = "Yavtushenko" 
            email     = "temarych@gmail.com" 
          />
        </List>
      </div>
      <div className="min-w-[25em] px-8 py-16 hidden xl:flex">
        <AddAdminForm />
      </div>
    </div>
  );
};

export default Admins;
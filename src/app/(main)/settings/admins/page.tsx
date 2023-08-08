"use client";

import { HiPlus }       from "react-icons/hi";
import { List }         from "@components/List";
import { Button }       from "@components/Button";
import { UserItem }     from "./UserItem";
import { AddAdminForm } from "./AddAdminForm";

const Admins = () => {
  return (
    <div className="flex flex-row">
      <div className="w-full border-r flex flex-col">
        <div className="border-b px-6 min-h-[4.5em] flex flex-row items-center justify-between">
          <h1 className="font-bold text-xl">Edit admins</h1>
          <Button 
            color         = "green" 
            className     = "min-h-[2.5em] xl:hidden"
            leftAdornment = {<HiPlus className="text-lg" />}
          >
            Add
          </Button>
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
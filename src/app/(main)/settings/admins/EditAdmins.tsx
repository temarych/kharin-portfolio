"use client";

import { User }     from "@typings/user";
import { List }     from "@components/List";
import { UserItem } from "./UserItem";

export interface EditAdminsProps {
  admins: User[];
}

export const EditAdmins = ({ admins }: EditAdminsProps) => {
  return (
    <List>
      {admins.map(admin => (
        <UserItem key={admin.id} {...admin} />
      ))}
    </List>
  );
};
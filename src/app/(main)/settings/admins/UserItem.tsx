"use client";

import { HiX }        from "react-icons/hi";
import { Avatar }     from "@components/Avatar";
import { List }       from "@components/List";
import { IconButton } from "@components/IconButton";

export interface UserItemProps {
  firstName: string;
  lastName : string;
  email    : string;
}

export const UserItem = ({ firstName, lastName, email }: UserItemProps) => {
  return (
    <List.ItemWrapper>
      <List.ItemTabDiv>
        <List.ItemContent 
          className      = "py-3"
          leftAdornment  = {<Avatar className="border" />} 
          rightAdornment = {(
            <IconButton>
              <HiX className="text-xl text-gray-400" />
            </IconButton>
          )}
        >
          <h1 className="font-bold text-md">{firstName} {lastName}</h1>
          <p className="text-sm text-gray-400">{email}</p>
        </List.ItemContent>
      </List.ItemTabDiv>
    </List.ItemWrapper>
  );
};
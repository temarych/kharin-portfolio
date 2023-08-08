import { ReactNode } from "react";
import { List }      from "@components/List";

export interface NavItemProps {
  icon: ReactNode;
  name: string;
}

export const NavItem = ({ icon, name }: NavItemProps) => {
  return (
    <List.ItemWrapper>
      <List.ItemButton>
        <List.ItemContent leftAdornment={icon}>
          {name}
        </List.ItemContent>
      </List.ItemButton>
    </List.ItemWrapper>
  );
};
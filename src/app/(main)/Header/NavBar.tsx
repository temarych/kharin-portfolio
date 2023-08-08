import { NavItem } from "./NavItem";
import { routes }  from "../routes";

export const NavBar = () => {
  return (
    <div className="flex flex-row items-center">
      {routes.map(route => (
        <NavItem key={route.name} {...route} />
      ))}
    </div>
  );
};
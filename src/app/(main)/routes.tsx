import { ReactNode } from "react";
import { 
  HiCamera, 
  HiHome, 
  HiOutlineCamera, 
  HiOutlineHome 
}                    from "react-icons/hi";

export interface IRoute {
  name      : string;
  icon      : ReactNode;
  activeIcon: ReactNode;
  path      : string;
}

export const routes: IRoute[] = [
  {
    name      : "Home",
    icon      : <HiOutlineHome />,
    activeIcon: <HiHome />,
    path      : "/"
  },
  {
    name      : "Gallery",
    icon      : <HiOutlineCamera />,
    activeIcon: <HiCamera />,
    path      : "/gallery"
  }
];
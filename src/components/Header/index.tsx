import { Fragment } from "react";
import { NavBar }   from "./NavBar";
import { Tag }      from "../Tag";

export const Header = () => {
  return (
    <Fragment>
      <div className="relative w-full h-14 border-b border-transparent" />
      <header className="fixed z-10 w-full h-14 px-4 flex flex-row justify-center border-b border-gray-100 bg-white">
        <div className="w-full max-w-[80em] flex flex-row items-center">
          <div className="flex-1 flex items-center justify-start">
            <Tag>Portfolio</Tag>
          </div>
          <h1 className="font-bold">Nazar Kharin</h1>
          <div className="flex-1 flex items-center justify-end">
            <NavBar />
          </div>
        </div>
      </header>
    </Fragment>
  );
};
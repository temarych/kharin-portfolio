import { NavBar }   from "./NavBar";
import { UserCard } from "./UserCard";

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-8">
      <UserCard />
      <NavBar />
    </div>
  );
};
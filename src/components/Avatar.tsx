import { HiOutlineUser } from "react-icons/hi";
import { twMerge }       from "tailwind-merge";

export interface AvatarProps {
  className?: string;
}

export const Avatar = ({ className }: AvatarProps) => {
  return (
    <div className={twMerge(["w-11 h-11 rounded-full bg-gray-100 flex flex-row items-center justify-center", className])}>
      <HiOutlineUser className="text-xl text-gray-400" />
    </div>
  );
};
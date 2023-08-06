import { HiOutlineUser } from "react-icons/hi";

export interface AvatarProps {
  
}

export const Avatar = ({}: AvatarProps) => {
  return (
    <div className="w-11 h-11 rounded-full bg-gray-100 flex flex-row items-center justify-center">
      <HiOutlineUser className="text-xl text-gray-400" />
    </div>
  );
};
import { ShortNavBar } from "./ShortNavBar";

export const ControlBar = () => {
  return (
    <div className="border-b bg-gray-50 h-36 flex flex-col justify-end p-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold text-3xl">Settings</h1>
        <ShortNavBar />
      </div>
    </div>
  );
};
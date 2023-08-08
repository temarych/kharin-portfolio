import { Pexels }    from "@icons/Pexels";
import { Instagram } from "@icons/Instagram";
import { Telegram }  from "@icons/Telegram";
import { YouTube }   from "@icons/YouTube";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 flex flex-row justify-center border-t py-16 px-4">
      <div className="max-w-[80em] w-full flex flex-col gap-16">
        <div className="flex flex-row gap-8 justify-center items-center">
          <Instagram className="text-4xl hover:scale-125 transition cursor-pointer" />
          <Pexels className="text-4xl hover:scale-125 transition cursor-pointer"  />
          <Telegram className="text-4xl hover:scale-125 transition cursor-pointer"  />
          <YouTube className="text-4xl hover:scale-125 transition cursor-pointer"  />
        </div>
        <div className="text-center flex flex-col items-center text-gray-400">
          <p className="text-sm">Developed by</p>
          <h1 className="text-lg">temarych</h1>
        </div>
      </div>
    </footer>
  );
};
import { forwardRef } from "react";
import Image          from "next/image";

export const Showcase = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section {...props} ref={ref} className="w-full px-4 bg-gray-50 flex flex-col gap-6 py-24 sm:flex-row sm:items-center sm:py-0 sm:gap-0">
      <div className="flex-1 flex flex-row justify-center sm:justify-end">
        <Image 
          priority
          alt       = "portrait"
          src       = "/portrait.png"
          width     = {640}
          height    = {640}
          className = "rounded-full border max-w-[20em] w-full h-full sm:rounded-none sm:border-none sm:max-w-[30em]"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
        <h1 className="font-bold text-3xl">Nazar Kharin</h1>
        <p className="text-lg text-gray-400">Photographer</p>
      </div>
    </section>
  );
});
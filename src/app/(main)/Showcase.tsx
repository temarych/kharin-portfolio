import Image from "next/image";

export const Showcase = () => {
  return (
    <section className="w-full px-4 bg-gray-50 flex flex-col items-center justify-center gap-6 py-8 sm:flex-row sm:py-0">
      <div className="flex-1 flex flex-row justify-end">
        <Image 
          alt       = "portrait"
          src       = "/portrait.png"
          width     = {640}
          height    = {640}
          className = "rounded-full border max-w-[20em] w-full h-full sm:rounded-none sm:border-none sm:max-w-[30em]"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="font-bold text-4xl">Nazar Kharin</h1>
        <p className="text-lg text-gray-400">Photographer</p>
      </div>
    </section>
  );
};
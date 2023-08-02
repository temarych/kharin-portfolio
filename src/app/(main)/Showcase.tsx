import Image from "next/image";

export const Showcase = () => {
  return (
    <section className="w-full min-h-[30em] px-4 bg-gray-50 flex flex-row justify-center">
      <div className="w-full max-w-[80em]">
        <div className="h-full flex flex-col pt-4 pb-8 gap-6 sm:flex-row sm:py-0 sm:gap-0">
          <div className="h-full flex-1 flex flex-col items-center justify-center sm:items-end sm:justify-end">
            <Image 
              alt       = "portrait"
              src       = "/portrait.png"
              width     = {500}
              height    = {500}
              className = "rounded-full object-contain border border-gray-200 sm:max-h-[30em] sm:rounded-none sm:border-none"
            />
          </div>
          <div className="h-full flex-1 flex flex-col justify-center gap-2">
            <h1 className="font-bold text-4xl text-center sm:text-left">Nazar Kharin</h1>
            <p className="text-gray-400 text-lg text-center sm:text-left">Photographer</p>
          </div>
        </div>
      </div>
    </section>
  );
};
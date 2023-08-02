import Image from "next/image";

export const Showcase = () => {
  return (
    <section className="w-full h-[30em] px-4 bg-gray-50 flex flex-row justify-center">
      <div className="w-full max-w-[80em]">
        <div className="h-full flex flex-row">
          <div className="h-full flex-1 flex flex-col items-end justify-end">
            <Image 
              alt       = "portrait"
              src       = "/portrait.png"
              width     = {500}
              height    = {500}
              className = "max-h-[30em]"
            />
          </div>
          <div className="h-full flex-1 flex flex-col justify-center gap-2">
            <h1 className="font-bold text-4xl">Nazar Kharin</h1>
            <p className="text-gray-400 text-lg">Photographer</p>
          </div>
        </div>
      </div>
    </section>
  );
};
import { PhotoStroke } from "./PhotoStroke";

export const PhotoStrokes = () => {
  return (
    <div className="flex flex-col gap-8">
      <PhotoStroke direction="right" />
      <PhotoStroke direction="left" />
      <PhotoStroke direction="right" />
    </div>
  );
};
import { HiCamera, HiSparkles, HiUpload } from "react-icons/hi";
import { Button }                         from "@components/Button";
import { Dropzone }                       from "./Dropzone";
import { Hint }                           from "./Hint";

const AddPhoto = () => {
  return (
    <div>
      <section className="flex flex-col items-center pt-16 pb-20 pb- px-4">
        <div className="max-w-[80em] w-full py-8 flex flex-col gap-8">
          <Dropzone />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4">
            <Hint 
              icon        = {<HiUpload className="text-4xl text-gray-800" />}
              title       = "Size limit"
              description = "Make sure size is less than 10 MB"
            />
            <Hint 
              icon        = {<HiCamera className="text-4xl text-gray-800" />}
              title       = "Format"
              description = "Images can only be JPG or PNG"
            />
            <Hint 
              icon        = {<HiSparkles className="text-4xl text-gray-800" />}
              title       = "Quality"
              description = "High quality preserved"
            />
          </div>
        </div>
      </section>
      <div className="fixed left-0 right-0 bottom-0 h-20 px-4 flex flex-col items-center border-t bg-white">
        <div className="max-w-[80em] w-full h-full flex flex-row items-center justify-end">
          <Button>
            Add photo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
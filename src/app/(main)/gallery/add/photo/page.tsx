import { Button }    from "@components/Button";
import { PickPhoto } from "./PickPhoto";

const AddPhoto = () => {
  return (
    <div>
      <section className="flex flex-col items-center pt-16 pb-20 pb- px-4">
        <div className="max-w-[80em] w-full py-8 flex flex-col">
          <PickPhoto />
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
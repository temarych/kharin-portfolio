import { HiPlus }       from "react-icons/hi";
import { getAdmins }    from "@utils/user";
import { Button }       from "@components/Button";
import { AddAdminForm } from "./AddAdminForm";
import { EditAdmins }   from "./EditAdmins";

const Admins = async () => {
  const admins = await getAdmins();

  return (
    <section className="flex flex-row">
      <div className="w-full xl:border-r flex flex-col">
        <div className="border-b px-6 min-h-[4.5em] flex flex-row items-center justify-between">
          <h1 className="font-bold text-xl">Admins</h1>
          <Button 
            color         = "green" 
            className     = "min-h-[2.5em] xl:hidden"
            leftAdornment = {<HiPlus className="text-lg" />}
          >
            Add
          </Button>
        </div>
        <EditAdmins admins={admins} />
      </div>
      <div className="min-w-[23em] px-8 py-16 hidden xl:flex">
        <AddAdminForm />
      </div>
    </section>
  );
};

export default Admins;
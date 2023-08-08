import { Button } from "@components/Button";
import { Input }  from "@components/Input";

export const AddAdminForm = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">Create admin</h1>
        <p className="text-md text-gray-400">
          The new admin will be able to update your gallery content
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
      </div>
      <Button>
        Create
      </Button>
    </div>
  );
};
"use client";

import { useForm }       from "react-hook-form";
import { z }             from "zod";
import { zodResolver }   from "@hookform/resolvers/zod";
import { useAuth }       from "@hooks/useAuth";
import { Avatar }        from "@components/Avatar";
import { Form }          from "@components/Form";
import { LoadingButton } from "@components/LoadingButton";

export const editProfileFormSchema = z.object({
  firstName: z.string().nonempty(),
  lastName : z.string().nonempty(),
  email    : z.string().nonempty().email()
});

export type ICompleteEditProfileSchema   = z.infer<typeof editProfileFormSchema>;
export type IIncompleteEditProfileSchema = ICompleteEditProfileSchema;

export const EditProfileForm = () => {
  const { user } = useAuth();

  const { control, handleSubmit } = useForm<IIncompleteEditProfileSchema, unknown, ICompleteEditProfileSchema>({
    defaultValues: {
      firstName: "",
      lastName : "",
      email    : "",
      ...user
    },
    resolver: zodResolver(editProfileFormSchema)
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-0">
      <div className="flex flex-col items-center justify-center">
        <Avatar className="w-36 h-36 text-6xl" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Form.Input 
            name        = "firstName"
            control     = {control}
            placeholder = "Email" 
          />
          <Form.Input 
            name        = "lastName"
            control     = {control}
            placeholder = "Last name" 
          />
          <Form.Input 
            name        = "email"
            control     = {control}
            placeholder = "Email" 
          />
        </div>
        <LoadingButton 
          onClick={handleSubmit(values => {
            console.log(values);
          })}
        >
          Edit
        </LoadingButton>
      </div>
    </div>
  );
};
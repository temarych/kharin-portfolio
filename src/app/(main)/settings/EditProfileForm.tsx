"use client";

import { useForm }       from "react-hook-form";
import { z }             from "zod";
import { zodResolver }   from "@hookform/resolvers/zod";
import { useAuth }       from "@hooks/useAuth";
import { User }          from "@typings/user";
import { Form }          from "@components/Form";
import { LoadingButton } from "@components/LoadingButton";
import { Avatar }        from "@components/Avatar";

export const editProfileFormSchema = z.object({
  firstName: z.string().nonempty(),
  lastName : z.string().nonempty(),
  email    : z.string().nonempty().email()
});

export type ICompleteEditProfileSchema   = z.infer<typeof editProfileFormSchema>;
export type IIncompleteEditProfileSchema = ICompleteEditProfileSchema;

export const EditProfileForm = () => {
  const { user, updateUser } = useAuth();

  const { 
    control, 
    handleSubmit, 
    formState: { isSubmitting, isDirty }, 
    reset
  } = useForm<IIncompleteEditProfileSchema, unknown, ICompleteEditProfileSchema>({
    defaultValues: {
      firstName: "",
      lastName : "",
      email    : "",
      ...user
    },
    resolver: zodResolver(editProfileFormSchema)
  });

  return (
    <div className="flex flex-col">
      <div className="relative w-full flex flex-col">
        <div className="w-full h-[13em] mb-12 bg-gray-50 flex flex-col items-center p-8" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-8 pointer-events-none">
          <Avatar className="w-40 h-40 text-5xl border" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-12">
        <div className="max-w-[20em] w-full flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Form.Input 
              name        = "firstName"
              control     = {control}
              placeholder = "First name"
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
          <div className="flex flex-col gap-4">
            <LoadingButton 
              disabled  = {isSubmitting || !isDirty}
              isLoading = {isSubmitting}
              variant   = "contained"
              onClick   = {handleSubmit(async values => {
                const user = await updateUser(values);
                reset(user);
              })}
            >
              Edit
            </LoadingButton>
            <LoadingButton 
              disabled = {isSubmitting || !isDirty}
              variant  = "outlined"
              onClick  = {() => reset(user as User)}
            >
              Restore defaults
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
};
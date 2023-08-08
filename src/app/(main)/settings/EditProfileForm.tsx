"use client";

import { useForm }       from "react-hook-form";
import { z }             from "zod";
import { HiPencil }      from "react-icons/hi";
import { zodResolver }   from "@hookform/resolvers/zod";
import { useAuth }       from "@hooks/useAuth";
import { User }          from "@typings/user";
import { Form }          from "@components/Form";
import { LoadingButton } from "@components/LoadingButton";
import { Avatar }        from "@components/Avatar";
import { Button }        from "@components/Button";

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
    formState: { isSubmitting }, 
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
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[40em] px-6 lg:px-0 py-16 lg:py-0 gap-12 lg:gap-0">
      <div className="w-full flex flex-row lg:flex-col items-center justify-center gap-8 lg:border-r">
        <Avatar className="w-36 h-36 text-4xl lg:w-40 lg:h-40 lg:text-5xl border" />
        <Button color="green" leftAdornment={<HiPencil />}>Edit</Button>
      </div>
      <div className="flex flex-col items-center justify-center lg:px-8 lg:py-16">
        <div className="max-w-[23em] lg:max-w-[20em] w-full flex flex-col gap-12">
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
              disabled  = {isSubmitting}
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
              disabled = {isSubmitting}
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
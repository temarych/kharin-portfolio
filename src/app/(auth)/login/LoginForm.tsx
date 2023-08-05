"use client";

import { useTransition } from "react";
import { useForm }       from "react-hook-form";
import { z }             from "zod";
import { signIn }        from "next-auth/react";
import { zodResolver }   from "@hookform/resolvers/zod";
import { Form }          from "@components/Form";
import { LoadingButton } from "@components/LoadingButton";

export const incompleteLoginFormSchema = z.object({
  email   : z.string().nonempty(),
  password: z.string().nonempty()
});

export type IIncompleteLoginFormSchema = z.infer<typeof incompleteLoginFormSchema>;
export type ICompleteLoginFormSchema   = IIncompleteLoginFormSchema;

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const { control, handleSubmit } = useForm<ICompleteLoginFormSchema, unknown, IIncompleteLoginFormSchema>({
    defaultValues: {
      email   : "",
      password: ""
    },
    resolver     : zodResolver(incompleteLoginFormSchema)
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Form.Input 
          name    = "email"
          control = {control}
          placeholder = "Email" 
        />
        <Form.Input 
          name        = "password"
          control     = {control}
          placeholder = "Password" 
          type        = "password" 
        />
      </div>
      <LoadingButton
        disabled  = {isPending}
        isLoading = {isPending}
        onClick   = {handleSubmit(values => {
          startTransition(async () => {
            await signIn("credentials", { redirect: false, ...values });
          });
        })}
      >
        Log in
      </LoadingButton>
    </div>
  );
};
"use client";

import { useTransition } from "react";
import { useForm }       from "react-hook-form";
import { z }             from "zod";
import { useRouter }     from "next/navigation";
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
  const router                       = useRouter();

  const { control, handleSubmit, formState: { errors }, setError, clearErrors } = useForm<ICompleteLoginFormSchema, unknown, IIncompleteLoginFormSchema>({
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
          name        = "email"
          control     = {control}
          placeholder = "Email" 
          hasError    = {!!errors.email || !!errors.root}
          onChange    = {() => errors.root && clearErrors("root")}
        />
        <Form.Input 
          name        = "password"
          control     = {control}
          placeholder = "Password" 
          type        = "password" 
          hasError    = {!!errors.email || !!errors.root}
          onChange    = {() => errors.root && clearErrors("root")}
        />
        {errors.root && (
          <h1 className="text-sm text-red-400 text-center">
            {errors.root.message}
          </h1>
        )}
      </div>
      <LoadingButton
        disabled  = {isPending}
        isLoading = {isPending}
        onClick   = {handleSubmit(values => {
          startTransition(async () => {
            const response = await signIn("credentials", { redirect: false, ...values });
            if (!response) {
              setError("root", { message: "An error occurred, try again later" });
              return;
            }
            if (response.error) {
              setError("root", { message: "Incorrect email or password" });
              return;
            }
            router.push("/");
          });
        })}
      >
        Log in
      </LoadingButton>
    </div>
  );
};
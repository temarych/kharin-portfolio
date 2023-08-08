"use client";

import { useForm }       from "react-hook-form";
import { z }             from "zod";
import { useRouter }     from "next/navigation";
import { zodResolver }   from "@hookform/resolvers/zod";
import { Form }          from "@components/Form";
import { LoadingButton } from "@components/LoadingButton";
import { useAuth }       from "@hooks/useAuth";

export const incompleteLoginFormSchema = z.object({
  email   : z.string().nonempty(),
  password: z.string().nonempty()
});

export type IIncompleteLoginFormSchema = z.infer<typeof incompleteLoginFormSchema>;
export type ICompleteLoginFormSchema   = IIncompleteLoginFormSchema;

export const LoginForm = () => {
  const router     = useRouter();
  const { signIn } = useAuth();

  const { 
    control, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    setError, 
    clearErrors 
  } = useForm<ICompleteLoginFormSchema, unknown, IIncompleteLoginFormSchema>({
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
        disabled  = {isSubmitting}
        isLoading = {isSubmitting}
        onClick   = {handleSubmit(async values => {
          try {
            await signIn(values);
            router.push("/");
          } catch (error) {
            setError("root", { message: "Incorrect email or password" });
          }
        })}
      >
        Log in
      </LoadingButton>
    </div>
  );
};
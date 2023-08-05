"use client";

import { useForm }     from "react-hook-form";
import { z }           from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form }        from "@components/Form";
import { Button }      from "@components/Button";

export const incompleteLoginFormSchema = z.object({
  email   : z.string().nonempty(),
  password: z.string().nonempty()
});

export type IIncompleteLoginFormSchema = z.infer<typeof incompleteLoginFormSchema>;
export type ICompleteLoginFormSchema   = IIncompleteLoginFormSchema;

export const LoginForm = () => {
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
      <Button
        onClick={handleSubmit(values => {
          console.log(values);
        })}
      >
        Log in
      </Button>
    </div>
  );
};
"use client";

import { Control, FieldValues as BaseFieldValues, Path, useController } from "react-hook-form";
import { Input, InputProps }                                            from "@components/Input";

export type FormInputBaseProps = Omit<InputProps, "value" | "onChange" | "hasError" | "helperText" | "name">;

export interface FormInputProps<FieldValues extends BaseFieldValues> extends FormInputBaseProps {
  name   : Path<FieldValues>;
  control: Control<FieldValues>;
}

export const FormInput = <FieldValues extends BaseFieldValues>({
  control,
  name,
  onBlur,
  ...props
}: FormInputProps<FieldValues>) => {
  const { field, fieldState } = useController({ control, name });

  return (
    <Input 
      {...field}
      {...props}
      hasError   = {!!fieldState.error}
      helperText = {fieldState.error?.message}
      onBlur     = {event => {
        field.onBlur();
        onBlur && onBlur(event);
      }}
    />
  );
};
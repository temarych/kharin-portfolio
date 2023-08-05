"use client";

import { Control, FieldValues as BaseFieldValues, Path, useController } from "react-hook-form";
import { Input, InputProps }                                            from "@components/Input";

export type FormInputBaseProps = Omit<InputProps, "value" | "name">;

export interface FormInputProps<FieldValues extends BaseFieldValues> extends FormInputBaseProps {
  name   : Path<FieldValues>;
  control: Control<FieldValues>;
}

export const FormInput = <FieldValues extends BaseFieldValues>({
  control,
  name,
  onBlur,
  helperText,
  hasError,
  onChange,
  ...props
}: FormInputProps<FieldValues>) => {
  const { field, fieldState } = useController({ control, name });

  return (
    <Input 
      {...field}
      {...props}
      hasError   = {hasError ?? !!fieldState.error}
      helperText = {helperText ?? fieldState.error?.message}
      onChange   = {(event, value) => {
        field.onChange(event);
        onChange && onChange(event, value);
      }}
      onBlur     = {event => {
        field.onBlur();
        onBlur && onBlur(event);
      }}
    />
  );
};
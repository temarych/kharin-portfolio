import { forwardRef }                                      from "react";
import { Button, ButtonColor, ButtonProps, ButtonVariant } from "./Button";
import { CircularProgress, CircularProgressColor }         from "./CircularProgress";

export interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export type ColorMap = {
  [variant in ButtonVariant]: {
    [color in ButtonColor]: CircularProgressColor;
  }
}

export const colorMap: ColorMap = {
  contained: {
    sky  : "white",
    red  : "white",
    green: "white",
    black: "white"
  },
  outlined: {
    sky  : "black",
    red  : "black",
    green: "black",
    black: "black"
  }
};

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(({
  children,
  isLoading,
  color   = "black",
  variant = "contained",
  disabled,
  ...props
}, ref) => {
  return (
    <Button {...props} ref={ref} disabled={disabled} color={color} variant={variant}>
      {!isLoading ? children : (
        <CircularProgress 
          className = "w-[1.5em] h-[1.5em]" 
          color     = {disabled ? "gray" : colorMap[variant][color]}
        />
      )}
    </Button>
  );
});
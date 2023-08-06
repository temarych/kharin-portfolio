import { forwardRef }                              from "react";
import { Button, ButtonColor, ButtonProps }        from "./Button";
import { CircularProgress, CircularProgressColor } from "./CircularProgress";

export interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export type ColorMap = {
  [color in ButtonColor]: CircularProgressColor;
}

export const colorMap: ColorMap = {
  sky  : "white",
  red  : "white",
  green: "white",
  black: "white"
};

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(({
  children,
  isLoading,
  color = "black",
  disabled,
  ...props
}, ref) => {
  return (
    <Button {...props} ref={ref} disabled={disabled} color={color}>
      {!isLoading ? children : (
        <CircularProgress 
          className = "w-[1.5em] h-[1.5em]" 
          color     = {disabled ? "gray" : colorMap[color]}
        />
      )}
    </Button>
  );
});
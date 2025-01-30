import React from "react";
import { cn } from "../utils/cnUtil";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-[#222] pr-[47px] pl-[16px] h-12 text-[16px] rounded-xl w-full text-[#ececec] min-w-[100px] ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
export { Input };

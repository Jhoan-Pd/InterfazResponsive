import React, { forwardRef } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ children, className, asChild = false, ...props }, ref) => {
  if (asChild) {
    return (
      <span className={className} ref={ref} {...props}>
        {children}
      </span>
    );
  }
  return (
    <button className={className} ref={ref} {...props}>
      {children}
    </button>
  );
});
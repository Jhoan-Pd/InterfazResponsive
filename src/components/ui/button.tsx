import React, { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <span className={className} {...props}>
          {children}
        </span>
      );
    }
    return (
      <button className={className} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

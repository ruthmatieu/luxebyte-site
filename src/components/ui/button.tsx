import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center px-6 py-2 rounded-lg font-semibold transition-colors duration-200";

  const variants = {
    primary:
      "bg-[#5acaae] text-[#0b1832] hover:bg-[#2085b8] focus:ring-2 focus:ring-[#2085b8]",
    outline:
      "border border-[#2085b8] text-[#2085b8] hover:bg-[#5acaae] hover:text-white",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

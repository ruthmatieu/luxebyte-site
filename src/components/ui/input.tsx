import React from "react";
import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        "w-full px-4 py-2 border border-[#8a9ba8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5acaae] text-[#0b1832] placeholder-gray-400",
        className
      )}
      {...props}
    />
  );
};

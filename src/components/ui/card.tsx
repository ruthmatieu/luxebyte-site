import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={clsx("rounded-2xl bg-white shadow-md p-6 md:p-8", className)}>
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-left text-xl sm:text-2xl font-bold text-[#2085b8] mb-2">
    {children}
  </h3>
);

export const CardSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-left text-sm text-gray-700">{children}</p>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="text-left text-sm text-gray-700 space-y-1">{children}</div>
);

export const CardCTA = () => (
  <button className="text-white bg-[#2085b8] p-2 mt-6 w-full cursor-pointer hover:bg-[#5acaae]">
    Get a Free Quote
  </button>
);

export const CardPrice = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-400 text-3xl text-left font-semibold mb-4">
    {children}
  </p>
);

export const CardIcon = ({ children, className }: CardProps) => (
  <div
    className={clsx(
      "flex items-center justify-center w-12 h-12 rounded-xl bg-[#e6f9f7] text-[#2085b8] mb-4",
      className
    )}
  >
    {children}
  </div>
);

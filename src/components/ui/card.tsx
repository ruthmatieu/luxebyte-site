import React from "react";
import clsx from "clsx";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={clsx("rounded-2xl bg-white shadow-md p-6", className)}>
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-bold text-[#0b1832]">{children}</h3>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="text-sm text-gray-700 space-y-1">{children}</div>
);

import React from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface PortfolioCardProps {
  //   children: React.ReactNode;
  className?: string;
  imageSrc: string | StaticImageData;
  altTitle?: string;
}

export const PortfolioImage = ({
  imageSrc,
  className,
  altTitle,
}: PortfolioCardProps) => (
  <Image
    src={imageSrc}
    alt={altTitle || "Card image"}
    fill
    className={clsx("rounded-xl object-cover h-64", className)}
  />
);

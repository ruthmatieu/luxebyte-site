// src/components/ImageCard.tsx
import Image, { StaticImageData }  from "next/image";

interface ImageCardProps {
  imageSrc: string | StaticImageData;
  alt?: string;
}

export default function ImageCard({ imageSrc, alt }: ImageCardProps) {
  return (
    <div
      className="relative max-w-xs overflow-hidden bg-white rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105 aspect-[250/350]"
      style={{
        transform:
          "translate3d(10%, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(4.89deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
        opacity: 1,
        willChange: "transform",
      }}
    >
      <Image
        src={imageSrc}
        alt={alt || "Card image"}
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  );
}

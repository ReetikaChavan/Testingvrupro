import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";

export function DecorImage({
  src,
  alt = "",
  className,
  style,
}: {
  src: StaticImageData;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`select-none ${className ?? ""}`} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="220px"
        priority={false}
      />
    </div>
  );
}

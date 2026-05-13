import React from "react";
import { siteFullName, siteShortName } from "@/shared/site";

type BrandMarkProps = {
  /** Clases extra para el contenedor flex */
  className?: string;
  /** Tamaño del ícono en píxeles (altura/ancho aprox.) */
  iconSize?: number;
};

export function BrandMark({ className = "", iconSize = 40 }: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/favicon.svg"
        alt=""
        className="object-contain shrink-0"
        width={iconSize}
        height={iconSize}
        loading="eager"
        decoding="async"
      />
      <div className="min-w-0 text-left">
        <div className="font-bold text-[#2C312D] leading-tight tracking-tight">{siteShortName}</div>
        <div className="text-xs text-[#2C312D]/60 leading-snug line-clamp-2">{siteFullName}</div>
      </div>
    </div>
  );
}

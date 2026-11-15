import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ArchitecturalPlateImageProps {
  src: string;
  alt: string;
  plateCode: string;
  caption?: string;
  aspectClass?: string;
}

export const ArchitecturalPlateImage: React.FC<ArchitecturalPlateImageProps> = ({
  src,
  alt,
  plateCode,
  caption,
  aspectClass = 'aspect-[4/3]',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="bg-white border border-[#171717]">
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#EFEFEC] border-b border-[#171717]`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover grayscale contrast-[1.06]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#F7F7F5]">
            <Building2 className="w-7 h-7 text-[#171717] mb-2" aria-hidden="true" />
            <span className="font-mono-tech text-xs text-[#171717] font-semibold">
              {plateCode}
            </span>
            <span className="text-xs text-[#52524E] mt-1">{alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="px-3 py-2 flex items-center justify-between gap-2 text-[11px] font-mono-tech text-[#52524E] bg-white">
          <span className="truncate">{caption}</span>
          <span className="text-[#171717] font-semibold shrink-0">{plateCode}</span>
        </figcaption>
      )}
    </figure>
  );
};

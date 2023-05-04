'use client';
import Image from 'next/image';
import { CSSProperties, useState } from 'react';

interface BlurImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  priority?: boolean;
  unoptimized?: boolean;
  fill?: boolean;
  className: string;
}

const BlurImage = ({ src, alt, width, height, style, priority, unoptimized, fill, className }: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="group">
      <Image
        src={src}
        width={width}
        height={height}
        style={style}
        alt={alt}
        className={`${className || ''} duration-700 w-auto h-auto ease-in-out ${isLoading ? 'blur' : 'blur-0'}`}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        unoptimized={unoptimized}
        fill={fill}
      />
    </div>
  );
};

export default BlurImage;

/* eslint-disable unicorn/no-keyword-prefix */
'use client';

import { type CSSProperties, useState } from 'react';
import Image from 'next/image';

interface BlurImageProps {
  readonly src: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
  readonly style?: CSSProperties;
  readonly priority?: boolean;
  readonly fill?: boolean;
  readonly className?: string;
}

export const BlurImage = ({ src, alt, width, height, style, priority, fill, className }: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="group">
      <Image
        src={src}
        width={width}
        height={height}
        style={style}
        alt={alt}
        className={`${className ?? ''} duration-700 rounded w-auto h-auto ease-in-out ${isLoading ? 'blur' : 'blur-0'}`}
        onLoad={onLoad}
        priority={priority}
        fill={fill}
      />
    </div>
  );
};

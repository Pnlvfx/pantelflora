'use client';

import { type CSSProperties, useEffect, useState } from 'react';
import { BlurImage } from '../utils/blur-image';

const duration = 15;

interface CarouselProps {
  readonly images: string[];
  readonly height: number;
}

export const Carousel = ({ images, height }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 1) return;
    setInterval(() => {
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, duration * 1000);
  }, [images]);

  const currentImage = images[currentIndex];

  if (!currentImage) return;

  return (
    <div className="w-full relative" style={{ height, '--duration': `${duration.toString()}s` } as CSSProperties}>
      <div className="relative w-full h-full">
        <div className="relative max-h-[600px] overflow-hidden w-full h-full flex items-center justify-center">
          <BlurImage
            priority={currentIndex === 0}
            width={512}
            height={512}
            className="single-img"
            src={currentImage}
            alt={`SLIDER IMAGE ${currentIndex.toString()}`}
          />
        </div>
      </div>
    </div>
  );
};

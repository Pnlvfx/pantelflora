'use client';

import { type CSSProperties, useEffect, useState } from 'react';
import Image from 'next/image';

const duration = 15;

interface CarouselProps {
  readonly images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
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
    <div className="h-[calc(100vh/2)] relative max-h-[600px] overflow-hidden" style={{ '--duration': `${duration.toString()}s` } as CSSProperties}>
      <Image
        priority={currentIndex === 0}
        fill
        className="single-img object-cover select-none pointer-events-none"
        src={currentImage}
        alt={`SLIDER IMAGE ${currentIndex.toString()}`}
      />
    </div>
  );
};

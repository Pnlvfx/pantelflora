'use client';
import { CSSProperties, useEffect, useState } from 'react';
import BlurImage from '../utils/BlurImage';
const duration = 15;

interface CarouselProps {
  images: string[];
  height: number;
}

const Carousel = ({ images, height }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 1) return;
    setInterval(() => {
      setCurrentIndex((prev) => (prev < images.length - 1 ? (prev += 1) : 0));
    }, duration * 1000);
  }, [images]);

  return (
    <div className="w-full relative" style={{ height, '--duration': `${duration}s` } as CSSProperties}>
      <div className="relative w-full h-full">
        <div className="relative max-h-[600px] overflow-hidden w-full h-full flex items-center justify-center">
          <BlurImage
            unoptimized
            priority={currentIndex === 0 ? true : false}
            width={512}
            height={512}
            className="single-img"
            src={images[currentIndex]}
            alt={`SLIDER IMAGE ${currentIndex}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

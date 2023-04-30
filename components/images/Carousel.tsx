'use client';
import Image from 'next/image';
import { CSSProperties, useEffect, useState } from 'react';

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
    }, 15000);
  }, [images]);

  return (
    <div className="w-full bg-transparent overflow-hidden relative max-h-[390px] md:max-h-[600px]" style={{ height }}>
      <div className="carousel slide">
        <div className="carousel-inner" style={{ '--iteration-count': images.length - 1 } as CSSProperties}>
          {images.map((_, index) => (
            <div key={index} className={`item ${currentIndex === index ? 'active opacity-100' : 'opacity-0'}`}>
              <div className="fill">
                <Image priority={index <= 3 ? true : false} unoptimized src={images[currentIndex]} alt="LOGO" fill className="bg-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

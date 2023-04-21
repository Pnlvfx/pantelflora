'use client';
import Image from 'next/image';
import { banners } from './images';
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
      setCurrentIndex((prev) => (prev < banners.length - 1 ? (prev += 1) : 0));
    }, 15000);
  }, [images]);

  return (
    <div className="w-full bg-transparent overflow-hidden relative" style={{ height }}>
      <div className="carousel slide">
        <div className="carousel-inner" style={{ '--iteration-count': banners.length - 1 } as CSSProperties}>
          {images.map((_, index) => (
            <div key={index} className={`item ${currentIndex === index ? 'active opacity-100' : 'opacity-0'}`}>
              <div className="fill">
                <Image priority={index <= 3 ? true : false} unoptimized src={banners[currentIndex]} alt="LOGO" fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

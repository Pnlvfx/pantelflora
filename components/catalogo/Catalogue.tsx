'use client';
import Image from 'next/image';
import Link from 'next/link';

const Catalogue = ({ image, i }: { image: string; i: number }) => {
  return (
    <div className="mx-auto mb-[15px]">
      <div className="text-[11px]">
        <div className="relative">
          <Link
            href={image}
            target="_blank"
            className="cursor-pointer w-full bg-[rgb(49,58,50)] absolute z-[5] inset-0 text-center transition-opacity opacity-0 hover:opacity-60"
          />
          <Image
            src={image}
            width={260}
            height={200}
            alt={`IMAGE${i}`}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="md:h-[200px] w-full md:w-[260px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;

import type { Route } from 'next';
import Link from 'next/link';
import Image from 'next/image';

interface Props<T extends string> {
  readonly image: Route<T>;
  readonly i: number;
}

export const Catalogue = <T extends string>({ image, i }: Props<T>) => {
  return (
    <div className="mx-auto text-[11px]">
      <div className="relative">
        <Link
          className="cursor-pointer w-full bg-[rgb(49,58,50)] absolute z-5 inset-0 text-center transition-opacity opacity-0 hover:opacity-60"
          href={image}
          target="_blank"
        />
        <Image alt={`IMAGE${i.toString()}`} className="bg-center bg-cover" height={200} priority src={image} width={260} />
      </div>
    </div>
  );
};

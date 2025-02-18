import Link from 'next/link';
import Image from 'next/image';

interface Props {
  readonly image: string;
  readonly i: number;
}

export const Catalogue = ({ image, i }: Props) => {
  return (
    <div className="mx-auto text-[11px]">
      <div className="relative">
        <Link
          /** @ts-expect-error Typed routes doesn't count images, as it suck. */
          href={image}
          target="_blank"
          className="cursor-pointer w-full bg-[rgb(49,58,50)] absolute z-[5] inset-0 text-center transition-opacity opacity-0 hover:opacity-60"
        />
        <Image priority src={image} width={260} height={200} alt={`IMAGE${i.toString()}`} className="bg-center bg-cover" />
      </div>
    </div>
  );
};

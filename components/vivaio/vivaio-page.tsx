import type { ReactNode } from 'react';
import { VivaioMenu, type VivaioMenuNames } from './vivaio-menu';
import Link from 'next/link';

interface Props {
  readonly children: ReactNode;
  readonly activeRoute: VivaioMenuNames;
}

export const VivaioPage = ({ activeRoute, children }: Props) => {
  return (
    <div className="pb-[30px]">
      <div className="mx-2 my-1 md:mx-0 md:my-0">
        <div className="mb-5 z-10 border-b border-solid border-[#dedede]">
          <h1 className="font-normal p-0 m-0 text-[#333333]">
            <Link href={'/il-vivaio'} target="_blank">
              {'Il vivaio'}
            </Link>
          </h1>
        </div>
        <VivaioMenu activeRoute={activeRoute} />
      </div>
      <div className="mb-2.5 h-[5px]" />
      {children}
    </div>
  );
};

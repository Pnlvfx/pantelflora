import type { ReactNode } from 'react';
import { type CatalogueMenuName, Menu } from './menu';
import Link from 'next/link';

interface Props {
  readonly children: ReactNode;
  readonly activeRoute: CatalogueMenuName;
}

export const CataloguePage = ({ children, activeRoute }: Props) => {
  return (
    <div className="pb-[30px]">
      <div className="mx-2 my-1 md:mx-0 md:my-0">
        <div className="mb-5 z-10 border-b border-solid border-[#dedede]">
          <h1 className="font-normal p-0 m-0 text-[#333333]">
            <Link href={'/catalogo'} target="_blank">
              {'Catalogo'}
            </Link>
            {' » '}
            <span className="text-lg">{'Le nostre Piante'}</span>
          </h1>
        </div>
        <Menu activeMenu={activeRoute} />
      </div>
      <div className="mb-2.5 h-[5px]" />
      {children}
    </div>
  );
};

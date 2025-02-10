import type { ReactNode } from 'react';
import Menu from '@/components/catalogo/Menu';
import Carousel from '@/components/images/Carousel';
import Link from 'next/link';

const CatalogoLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <div>
      <Carousel images={['/catalogo/header.jpg']} height={250} />
      <div className="md:m-[20px] md:ml-10">
        <div className="pt-[20px] pb-[30px]">
          <div className="pb-[30px]">
            <div className="mx-2 my-1 md:mx-0 md:my-0">
              <div className="mb-[20px] z-10 border-b border-solid border-[#dedede]">
                <h1 className="font-normal p-0 m-0 text-[#333333]">
                  <Link href={'/catalogo'} target="_blank">
                    Catalogo
                  </Link>{' '}
                  » <span className="text-lg">Le nostre Piante</span>
                </h1>
              </div>
              <Menu />
            </div>
            <div className="mb-[10px] h-[5px]" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogoLayout;

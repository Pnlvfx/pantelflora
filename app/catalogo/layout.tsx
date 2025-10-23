import type { ReactNode } from 'react';
import { Carousel } from '@/components/images/carousel';
import { NavBar } from '@/components/nav/nav-bar';

const CatalogoLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <div className="size-full">
      <NavBar activeRoute="catalogue" />
      <Carousel images={['/catalogo/header.jpg']} />
      <div className="md:m-5 md:ml-10">
        <div className="pt-5 pb-[30px]">{children}</div>
      </div>
    </div>
  );
};

export default CatalogoLayout;

import type { ReactNode } from 'react';
import { NavBar } from '@/components/nav/nav-bar';

const VivaioLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <>
      <NavBar activeRoute="vivaio" />
      <div className="md:m-[20px] md:ml-10">
        <div className="pt-[20px] pb-[30px]">{children}</div>
      </div>
    </>
  );
};

export default VivaioLayout;

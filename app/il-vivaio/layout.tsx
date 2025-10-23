import type { ReactNode } from 'react';
import { NavBar } from '@/components/nav/nav-bar';

const VivaioLayout = ({ children }: { readonly children: ReactNode }) => {
  return (
    <>
      <NavBar activeRoute="vivaio" />
      <div className="md:m-5 md:ml-10">
        <div className="pt-5 pb-[30px]">{children}</div>
      </div>
    </>
  );
};

export default VivaioLayout;

import Menu from '@/components/catalogo/Menu';
import VivaioMenu from '@/components/vivaio/VivaioMenu';
import Link from 'next/link';

const VivaioLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="md:m-[20px] md:ml-10">
      <div className="pt-[20px] pb-[30px]">
        <div className="pb-[30px]">
          <div className="mx-2 my-1 md:mx-0 md:my-0">
            <div className="mb-[20px] z-10 border-b border-solid border-[#dedede]">
              <h1 className="font-normal p-0 m-0 text-[#333333]">
                <Link href={'/il-vivaio'} target="_blank">
                  Il vivaio
                </Link>{' '}
              </h1>
            </div>
            <VivaioMenu />
          </div>
          <div className="mb-[10px] h-[5px]" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default VivaioLayout;

import Link from 'next/link';
import { Logo } from '../utils/Logoo';

const Header = () => {
  return (
    <div className="w-full h-[125px] md:pt-[13px]">
      <div className="h-full">
        <div className="w-full lg:w-[920px] lg:ml-10 text-left">
          <Link className="overflow-hidden w-full h-full" href={'/'}>
            <Logo className="max-h-[125px] max-w-[390px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

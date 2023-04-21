import Link from 'next/link';
import { Logo } from '../utils/Logo';

const Header = () => {
  return (
    <div className="relative w-full h-[125px] pt-[13px]">
      <div className="relative h-full overflow-hidden">
        <div className="w-[920px] ml-10 overflow-y-hidden text-left">
          <Link href={'/'}>
            <Logo className="max-h-[125px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

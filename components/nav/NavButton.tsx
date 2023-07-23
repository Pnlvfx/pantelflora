'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavButton = ({ name, url }: { name: string; url: string }) => {
    const pathname = usePathname();
    const active = `/${pathname.split('/')[1]}`;
    return (
      <Link
        href={url}
        className={`inline-block flex-none ${
          active === url ? 'text-white' : 'text-white opacity-50'
        } hover:text-white py-4 px-2 hover:bg-[rgba(0,0,0,.2)]`}
      >
        {name}
      </Link>
    );
  };

export default NavButton
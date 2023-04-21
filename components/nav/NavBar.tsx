'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const list = [
  { name: 'Home', url: '/' },
  { name: 'Chi siamo', url: '/chi-siamo' },
  { name: 'Catalogo', url: '/catalogo' },
  { name: 'Il vivaio', url: '/vivaio' },
  { name: 'Contatti', url: '/contatti' },
];

const Button = ({ name, url }: { name: string; url: string }) => {
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

const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-[#13961c] mt-6">
      <div className="grow flex items-center w-auto overflow-x-auto">
        <div className="flex grow items-center justify-between md:mx-10">
          {list.map((l, i) => (
            <Button name={l.name} url={l.url} key={i} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const menu = ['Palme', 'Ulivi', 'Agrumi', 'Piante Grasse', 'Altre Piante'];

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="mt-[20px] z-[1] w-full">
      <ul className="leading-[2em] mt-[11px] p-0 text-[12px]">
        {menu.map((type, i) => {
          const encodedActive = type.toLowerCase().replace(' ', '-');
          return (
            <li className="inline" key={i}>
              {i > 0 && <span className="mx-1" />}
              <Link
                href={`/catalogo/${encodedActive}`}
                className={`pb-[6px] text-[14px] border-b border-solid hover:opacity-40 ${
                  (pathname === '/catalogo' && i === 0) || pathname === `/catalogo/${encodedActive}`
                    ? 'border-[#13961c] text-black'
                    : 'border-transparent text-gray-600/75'
                } mr-1`}
              >
                {` ${type} `}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;

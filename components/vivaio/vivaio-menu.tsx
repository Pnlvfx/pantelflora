import Link from 'next/link';

export type VivaioMenuNames = keyof typeof menu;

const menu = {
  vivaio: { name: 'Il Vivaio', href: '/il-vivaio' },
} as const;

const menuMap = Object.entries(menu);

interface Props {
  readonly activeRoute: VivaioMenuNames;
}

export const VivaioMenu = ({ activeRoute }: Props) => {
  return (
    <div className="mt-[20px] z-[1] w-full">
      <ul className="leading-[2em] mt-[11px] p-0 text-[12px]">
        {menuMap.map(([id, { name, href }], i) => {
          return (
            <li className="inline" key={id}>
              {i > 0 && <span className="mx-1" />}
              <Link
                href={href}
                className={`pb-[6px] text-[14px] border-b border-solid hover:opacity-40 mr-1 ${
                  activeRoute === id ? 'border-[#13961c] text-black' : 'border-transparent text-gray-600/75'
                }`}
              >
                {` ${name} `}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

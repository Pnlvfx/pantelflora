import Link from 'next/link';

export type CatalogueMenuName = keyof typeof menu;

const menu = {
  palme: { name: 'Palme' },
  ulivi: { name: 'Ulivi' },
  agrumi: { name: 'Agrumi' },
  'piante-grasse': { name: 'Piante Grasse' },
  'altre-piante': { name: 'Altre Piante' },
};

const menuMap = Object.entries(menu);

interface Props {
  readonly activeMenu: CatalogueMenuName;
}

export const Menu = ({ activeMenu }: Props) => {
  return (
    <div className="mt-5 z-1 w-full">
      <ul className="leading-[2em] mt-[11px] p-0 text-[12px]">
        {menuMap.map(([id, { name }], i) => (
          <li className="inline" key={id}>
            {i > 0 && <span className="mx-1" />}
            <Link
              className={`pb-1.5 text-[14px] border-b border-solid hover:opacity-40 mr-1 ${
                activeMenu === id ? 'border-[#13961c] text-black' : 'border-transparent text-gray-600/75'
              }`}
              href={`/catalogo/${id}`}
            >
              {` ${name} `}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

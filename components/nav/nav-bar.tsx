import { NavButton } from './nav-button';

export type NavigationRoutes = keyof typeof list;

const list = {
  home: { name: 'Home', url: '/' },
  whoami: { name: 'Chi siamo', url: '/chi-siamo' },
  catalogue: { name: 'Catalogo', url: '/catalogo' },
  vivaio: { name: 'Il vivaio', url: '/il-vivaio' },
  contacts: { name: 'Contatti', url: '/contatti' },
} as const;

const listMap = Object.entries(list);

export const NavBar = ({ activeRoute }: { readonly activeRoute: NavigationRoutes }) => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-[#13961c] mt-10">
      <div className="grow flex items-center w-auto overflow-x-auto no-scrollbar">
        <div className="flex grow items-center justify-between">
          {listMap.map(([id, { name, url }]) => (
            <NavButton id={id as NavigationRoutes} active={activeRoute} name={name} url={url} key={id} />
          ))}
        </div>
      </div>
    </nav>
  );
};

import type { NavigationRoutes } from './nav-bar';
import type { Route } from 'next';
import Link from 'next/link';

interface Props<T extends string> {
  readonly name: string;
  readonly url: Route<T>;
  readonly active: NavigationRoutes;
  readonly id: NavigationRoutes;
}

export const NavButton = <T extends string>({ name, url, active, id }: Props<T>) => {
  return (
    <Link className={`${active === id ? 'text-white' : 'text-white/60'} px-2 md:px-12 hover:text-white py-4 hover:bg-[rgba(0,0,0,.2)]`} href={url}>
      {name}
    </Link>
  );
};

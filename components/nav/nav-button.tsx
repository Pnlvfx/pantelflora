import Link from 'next/link';
import { NavigationRoutes } from './nav-bar';
import { Route } from 'next';

interface Props<T extends string> {
  readonly name: string;
  readonly url: Route<T>;
  readonly active: NavigationRoutes;
  readonly id: NavigationRoutes;
}

export const NavButton = <T extends string>({ name, url, active, id }: Props<T>) => {
  return (
    <Link href={url} className={`${active === id ? 'text-white' : 'text-white/60'} px-2 md:px-12 hover:text-white py-4 hover:bg-[rgba(0,0,0,.2)]`}>
      {name}
    </Link>
  );
};

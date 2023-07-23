import NavButton from "./NavButton";

const list = [
  { name: 'Home', url: '/' },
  { name: 'Chi siamo', url: '/chi-siamo' },
  { name: 'Catalogo', url: '/catalogo' },
  { name: 'Il vivaio', url: '/il-vivaio' },
  { name: 'Contatti', url: '/contatti' },
];

const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-[#13961c] mt-10">
      <div className="grow flex items-center w-auto overflow-x-auto">
        <div className="flex grow items-center justify-between md:mx-10">
          {list.map((l, i) => (
            <NavButton name={l.name} url={l.url} key={i} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

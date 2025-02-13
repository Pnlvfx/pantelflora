import { Carousel } from '@/components/images/carousel';
import { NavBar } from '@/components/nav/nav-bar';

const Page = () => {
  return (
    <div>
      <NavBar activeRoute="whoami" />
      <div className="mt-20" />
      <Carousel images={['/chi-siamo.jpg']} />
      <div className="my-[25px]">
        <div className="pt-[20px] pb-[30px]">
          <div className="pr-6 pb-[30px] pl-[10px]">
            <div className="p-[5px] mb-[20px] border-b border-[#dedede]">
              <h1 className="font-normal text-[#333333]">{'Chi siamo'}</h1>
            </div>
            <div>
              <p className="text-justify">
                <span>
                  <span>
                    {'Il'}
                    <strong>{' Vivaio Pantelflora '}</strong>
                    {
                      ' è un vivaio specializzato nel giardinaggio a 360°. Nel vivaio si possono trovare piante di ogni genere adatte ad ogni esigenza ed ambiente.'
                    }
                    <br />
                    <br />
                    {
                      'A disposizione dei clienti molteplici specie e varietà per ambienti esterni ed interni e accessori come vasi e terricci il tutto accompagnato dalla pluriennale esperienza dello staff, pronto a fornire consigli ed aiuto per gli acquisti.'
                    }
                  </span>
                </span>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

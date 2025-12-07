import { NavBar } from '@/components/nav/nav-bar';
import { address, cellNum, tellNum } from '@/config/constants';
import { Fragment } from 'react/jsx-runtime';

const Page = () => {
  return (
    <Fragment>
      <NavBar activeRoute="contacts" />
      <div className="pt-5 pb-[30px]">
        <div className="pr-6 pb-[30px] pl-2.5">
          <div className="p-[5px] mb-5 border-b border-[#dedede]">
            <h1 className="font-normal text-[#333333]">{'Contatti'}</h1>
          </div>
          <div className="w-full mb-5 leading-[1.9em] grid md:grid-cols-2">
            <div className="text-justify pb-[18px]">
              <span className="text-[14px]">
                <span className="text-[#008000]">
                  <strong>
                    {'Pantelflora'}
                    <br />
                    {'di Guida Giuseppe'}
                  </strong>
                  <br />
                </span>
                <br />
                {address} {' - 91017 - Pantelleria (TP)'}
                <br />
                {'Sicilia - Italia'}
              </span>
            </div>
            <span className="text-[14px]">
              <span>
                {'Tel. '} {tellNum} <br />
                {'Cell. '} {cellNum} {' (Michael)'}
                <br />
                <br />
                {/* E-mail:  */}
                <br />
              </span>
            </span>
          </div>
          {/* <ContactForm /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Page;

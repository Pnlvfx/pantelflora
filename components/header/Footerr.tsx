import { address, cellNum, pIVA, tellNum } from '@/config/config';

const Footer = () => {
  return (
    <div className="bg-[#13961c] w-full">
      <div className="w-[320px] text-sm text-white m-[20px] ml-10">
        <div className="pt-[20px]">
          <h3 className="text-[16px] leading-[22px] mb-[10px] border-b border-gray-200/90">Info Contatti</h3>
          <div className="mb-[10px]">
            <strong>Pantelflora di Guida Giuseppe</strong>
            <br />
            {address}
            <br />
            91017 - Pantelleria
            <br />
            Trapani - Italia
          </div>
          <div>
            C.F. / P.Iva: {pIVA}
            <br />
            Tel: {tellNum}
            <br />
            Cell: {cellNum} (Michael)
            <br />
            info@pantelflora.com
          </div>
        </div>
      </div>
      <div className="mt-[5.25rem] bg-white pb-[5.25rem]">
        <div className="mt-[23px]">
          {Array.from({ length: 24 }, (_, i) => i)
            .reverse()
            .map((reverse, i) => (
              <div key={i} className="bg-[#13961c]" style={{ marginTop: i, height: reverse }} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

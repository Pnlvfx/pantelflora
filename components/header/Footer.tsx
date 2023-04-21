const Footer = () => {
  return (
    <div className="bg-[#13961c] w-full">
      <div className="w-[320px] text-sm text-white m-[20px] ml-10">
        <div className="pt-[20px]">
          <h3>Info Contatti</h3>
          <div className="w-full border-b border-gray-200/90" />
          <div className="mb-[10px]">
            <strong>Pantelflora di Guida Giuseppe</strong>
            <br />
            Via Bue Marino
            <br />
            91017 - Pantelleria
            <br />
            Trapani - Italia
          </div>
          <div>
            C.F. / P.Iva: 0845835460486405
            <br />
            Tel: 092390294850
            <br />
            Fax: 968546846945684
            <br />
            info@pantelflora.com
          </div>
        </div>
      </div>
      <div className="spacing bg-white pb-spacing">
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

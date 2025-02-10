import Catalogue from '@/components/catalogo/Cataloguee';
import { vivaioImages } from '@/config/images';

const VivaioPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {vivaioImages.map((image, index) => (
        <Catalogue image={image} i={index} key={index} />
      ))}
    </div>
  );
};

export default VivaioPage;

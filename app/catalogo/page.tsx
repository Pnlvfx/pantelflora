import Catalogue from '@/components/catalogo/Cataloguee';
import { catalogueImages } from '@/components/images/images';

const CatalogoPage = () => {
  const images = catalogueImages.find((c) => c.name === 'palme');

  if (!images) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {images.images.map((image, index) => (
        <Catalogue image={image} i={index} key={index} />
      ))}
    </div>
  );
};

export default CatalogoPage;

import { Catalogue } from '@/components/catalogo/catalogue';
import { CataloguePage } from '@/components/catalogo/catalogue-page';
import { catalogueImages } from '@/config/images';

const CatalogoPage = () => {
  const images = catalogueImages.find((c) => c.name === 'palme');

  if (!images) return;

  return (
    <CataloguePage activeRoute="palme">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.images.map((image, index) => (
          <Catalogue image={image} i={index} key={image} />
        ))}
      </div>
    </CataloguePage>
  );
};

export default CatalogoPage;

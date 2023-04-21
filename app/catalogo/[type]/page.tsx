import Catalogue from '@/components/catalogo/Catalogue';
import { catalogueImages } from '@/components/images/images';

interface CatalogoTypePageProps {
  params: {
    type: string;
  };
}

const CatalogoTypePage = ({ params }: CatalogoTypePageProps) => {
  const images = catalogueImages.find((c) => c.name === params.type);

  if (!images) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {images.images.map((image, index) => (
        <Catalogue image={image} i={index} key={index} />
      ))}
    </div>
  );
};

export default CatalogoTypePage;

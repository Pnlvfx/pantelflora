import { Catalogue } from '@/components/catalogo/catalogue';
import { catalogueImages } from '@/config/images';

interface CatalogoTypePageProps {
  readonly params: Promise<{
    type: string;
  }>;
}

const CatalogoTypePage = async ({ params }: CatalogoTypePageProps) => {
  const { type } = await params;
  const images = catalogueImages.find((c) => c.name === type);

  if (!images) return;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {images.images.map((image, index) => (
        <Catalogue image={image} i={index} key={index} />
      ))}
    </div>
  );
};

export default CatalogoTypePage;

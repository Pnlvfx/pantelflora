import type { CatalogueMenuName } from '@/components/catalogo/menu';
import { Catalogue } from '@/components/catalogo/catalogue';
import { catalogueImages } from '@/config/images';
import { CataloguePage } from '@/components/catalogo/catalogue-page';

interface CatalogoTypePageProps {
  readonly params: Promise<{
    type: CatalogueMenuName;
  }>;
}

const CatalogoTypePage = async ({ params }: CatalogoTypePageProps) => {
  const { type } = await params;
  const images = catalogueImages.find((c) => c.name === type);

  if (!images) return;

  return (
    <CataloguePage activeRoute={type}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {images.images.map((image, index) => (
          <Catalogue i={index} image={image} key={image} />
        ))}
      </div>
    </CataloguePage>
  );
};

export default CatalogoTypePage;

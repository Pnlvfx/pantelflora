import { Catalogue } from '@/components/catalogo/catalogue';
import { VivaioPage } from '@/components/vivaio/vivaio-page';
import { vivaioImages } from '@/config/images';

const VivaioPageWrapper = () => {
  return (
    <VivaioPage activeRoute="vivaio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {vivaioImages.map((image, index) => (
          <div className="my-4" key={image}>
            <Catalogue i={index} image={image} />
          </div>
        ))}
      </div>
    </VivaioPage>
  );
};

export default VivaioPageWrapper;

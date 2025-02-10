import Carousel from '@/components/images/Carousell';
import { banners } from '@/config/images';

const Home = () => {
  return (
    <div className="relative">
      <Carousel images={banners} height={600} />
    </div>
  );
};

export default Home;

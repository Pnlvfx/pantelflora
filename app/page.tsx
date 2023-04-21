import Carousel from '@/components/images/Carousel';
import { banners } from '@/components/images/images';

const Home = () => {
  return (
    <div className="relative">
      <Carousel images={banners} height={600} />
    </div>
  );
};

export default Home;

import { Carousel } from '@/components/images/carousel';
import { NavBar } from '@/components/nav/nav-bar';
import { banners } from '@/config/images';

const Home = () => {
  return (
    <>
      <NavBar activeRoute="home" />
      <div className="relative">
        <Carousel images={banners} height={600} />
      </div>
    </>
  );
};

export default Home;

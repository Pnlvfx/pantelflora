import { Carousel } from '@/components/images/carousel';
import { NavBar } from '@/components/nav/nav-bar';
import { banners } from '@/config/images';

const Home = () => {
  return (
    <>
      <NavBar activeRoute="home" />
      <div className="mt-4" />
      <div className="relative">
        <Carousel images={banners} />
      </div>
    </>
  );
};

export default Home;

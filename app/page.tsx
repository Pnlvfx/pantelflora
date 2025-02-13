import { Carousel } from '@/components/images/carousel';
import { NavBar } from '@/components/nav/nav-bar';
import { banners } from '@/config/images';

const Home = () => {
  return (
    <>
      <NavBar activeRoute="home" />
      <div className="relative mt-20">
        <Carousel images={banners} />
      </div>
    </>
  );
};

export default Home;

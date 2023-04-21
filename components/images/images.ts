const banner1 = '/banner/001.jpg';
const banner2 = '/banner/002.jpg';
const banner3 = '/banner/003.jpeg';
const banner4 = '/banner/004.jpeg';
const banner5 = '/banner/06.jpeg';
const banner6 = '/banner/banner1.jpg';
const banner7 = '/banner/banner5.jpg';

export const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];

const palmImages = Array.from({ length: 21 }).map((_, i) => `/palme/${i}.jpeg`);
const oliveImages = Array.from({ length: 14 }).map((_, i) => `/ulivi/${i}.jpeg`);
const agrumiImages = Array.from({ length: 8 }).map((_, i) => `/agrumi/${i}.jpeg`);
const pianteGrasseImages = Array.from({ length: 8 }).map((_, i) => `/piante-grasse/${i}.jpeg`);
const altrePianteImages = Array.from({ length: 5 }).map((_, i) => `/altre-piante/${i}.jpeg`);

export const catalogueImages = [
  {
    name: 'palme',
    images: palmImages,
  },
  {
    name: 'ulivi',
    images: oliveImages,
  },
  {
    name: 'agrumi',
    images: agrumiImages,
  },
  {
    name: 'piante-grasse',
    images: pianteGrasseImages,
  },
  {
    name: 'altre-piante',
    images: altrePianteImages,
  },
];

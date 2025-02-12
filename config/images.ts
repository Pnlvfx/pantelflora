import fs from 'node:fs/promises';
import path from 'node:path';

const publicPath = path.join(process.cwd(), '/public');

const bannersContent = await fs.readdir(path.join(publicPath, '/banner'));
export const banners = bannersContent.map((b) => `/banner/${b}`);

const palmsContent = await fs.readdir(path.join(publicPath, '/palme'));
const palmImages = palmsContent.map((p) => `/palme/${p}`);

const oliveContent = await fs.readdir(path.join(publicPath, '/ulivi'));
const oliveImages = oliveContent.map((p) => `/ulivi/${p}`);

const agrumiContent = await fs.readdir(path.join(publicPath, '/agrumi'));
const agrumiImages = agrumiContent.map((p) => `/agrumi/${p}`);

const pianteGrasseContent = await fs.readdir(path.join(publicPath, '/piante-grasse'));
const pianteGrasseImages = pianteGrasseContent.map((p) => `/piante-grasse/${p}`);

const altrePianteContent = await fs.readdir(path.join(publicPath, '/altre-piante'));
const altrePianteImages = altrePianteContent.map((p) => `/altre-piante/${p}`);

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

export const vivaioImages = Array.from({ length: 96 }).map((_, i) => `/vivaio/${i.toString()}.jpeg`);

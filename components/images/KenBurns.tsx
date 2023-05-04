import { type } from 'os';
import { useEffect } from 'react';

const Direction = {
  Normal: 'normal',
  Reverse: 'reverse',
  Random: 'random',
};

const animationNames = [
  'ken-burns-bottom-right',
  'ken-burns-top-left',
  'ken-burns-bottom-left',
  'ken-burns-top-right',
  'ken-burns-middle-left',
  'ken-burns-middle-right',
  'ken-burns-top-middle',
  'ken-burns-bottom-middle',
  'ken-burns-center',
];

const Attributes = {
  AnimationDirection: 'animation-direction',
  AnimationNames: 'animation-names',
  FadeDuration: 'fade-duration',
  Images: 'images',
  SlideDuration: 'slide-duration',
};

const KenBurns = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default KenBurns;

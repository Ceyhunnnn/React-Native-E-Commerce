import {
  Kitchen,
  Medicine,
  MenTshirt,
  Sports,
  TVIcon,
  WomanBag,
} from '../components/Icon';

export const sliderImageList = [
  {
    img: 'https://c8.alamy.com/comp/2A3JC4P/shop-now-banner-design-on-white-background-vector-illustration-2A3JC4P.jpg',
    id: 1,
  },
  {
    img: 'https://c8.alamy.com/comp/2A3JC4P/shop-now-banner-design-on-white-background-vector-illustration-2A3JC4P.jpg',
    id: 2,
  },
  {
    img: 'https://c8.alamy.com/comp/2A3JC4P/shop-now-banner-design-on-white-background-vector-illustration-2A3JC4P.jpg',
    id: 4,
  },
];

export const categoryIcons = (slug: string) => {
  let iconComponent;
  switch (slug) {
    case 'woman-fashion':
      iconComponent = WomanBag({size: 24, color: 'black'});
      break;
    case 'men-fashion':
      iconComponent = MenTshirt({size: 24, color: 'black'});
      break;
    case 'electronics':
      iconComponent = TVIcon({size: 24, color: 'black'});
      break;
    case 'home-lifestyle':
      iconComponent = Kitchen({size: 24, color: 'black'});
      break;
    case 'medicine':
      iconComponent = Medicine({size: 24, color: 'black'});
      break;
    case 'sports-outdoor':
      iconComponent = Sports({size: 24, color: 'black'});
      break;
    default:
      iconComponent = 'Unknown category';
  }
  return iconComponent;
};

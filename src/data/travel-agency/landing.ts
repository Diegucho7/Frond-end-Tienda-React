import thailand from 'assets/img/country/thailand.png';
import switzerland from 'assets/img/country/switzerland.png';
import turkey from 'assets/img/country/turkey.png';
import newZealand from 'assets/img/country/new-zealand.png';
import sweden from 'assets/img/country/sweden.png';
import vietnam from 'assets/img/country/vietnam.png';
import japan from 'assets/img/country/japan.png';
import gallery39 from 'assets/img/gallery/39.png';
import gallery40 from 'assets/img/gallery/40.png';
import gallery41 from 'assets/img/gallery/41.png';
import gallery42 from 'assets/img/gallery/42.png';
import gallery43 from 'assets/img/gallery/43.png';
import gallery44 from 'assets/img/gallery/44.png';
import gallery57 from 'assets/img/gallery/57.png';
import gallery58 from 'assets/img/gallery/58.png';
import gallery45 from 'assets/img/gallery/45.png';
import gallery46 from 'assets/img/gallery/46.png';
import gallery47 from 'assets/img/gallery/47.png';
import tokyo1 from 'assets/img/gallery/tokyo-1.png';
import tokyo2 from 'assets/img/gallery/tokyo-2.png';
import tokyo3 from 'assets/img/gallery/tokyo-3.png';
import bali1 from 'assets/img/gallery/bali-1.png';
import bali2 from 'assets/img/gallery/bali-2.png';
import bali3 from 'assets/img/gallery/bali-3.png';
import sydney1 from 'assets/img/gallery/sydney-1.png';
import sydney2 from 'assets/img/gallery/sydney-2.png';
import sydney3 from 'assets/img/gallery/sydney-3.png';
import paris1 from 'assets/img/gallery/paris-1.png';
import paris2 from 'assets/img/gallery/paris-2.png';
import paris3 from 'assets/img/gallery/paris-3.png';
import { BadgeBg } from 'components/base/Badge';

interface placesData {
  country: string;
  flag: string;
  img: string;
  hotels: number;
  packages: number;
}
export const placesData: placesData[] = [
  {
    country: 'Thailand',
    flag: thailand,
    img: gallery39,
    hotels: 17,
    packages: 22
  },
  {
    country: 'Switzerland',
    flag: switzerland,
    img: gallery40,
    hotels: 15,
    packages: 24
  },
  {
    country: 'Turkey',
    flag: turkey,
    img: gallery42,
    hotels: 44,
    packages: 123
  },
  {
    country: 'New Zealand',
    flag: newZealand,
    img: gallery41,
    hotels: 55,
    packages: 41
  },
  {
    country: 'Sweden',
    flag: sweden,
    img: gallery43,
    hotels: 17,
    packages: 22
  },
  {
    country: 'Turkey',
    flag: turkey,
    img: gallery44,
    hotels: 44,
    packages: 123
  },
  {
    country: 'Vietnam',
    flag: vietnam,
    img: gallery58,
    hotels: 54,
    packages: 123
  },
  {
    country: 'Japan',
    flag: japan,
    img: gallery57,
    hotels: 17,
    packages: 22
  }
];

export interface hotelInterFace {
  name: string;
  located: string;
  price: string;
  image: string;
  rating: number;
  stay: number;
  status: {
    label: string;
    type: BadgeBg;
  };
  package: {
    label: string;
    type: BadgeBg;
  };
}
export const hotelsData: hotelInterFace[] = [
  {
    name: 'Royal Mansour Marrakech',
    located: 'Morocco',
    price: '60.00',
    image: gallery45,
    rating: 4.8,
    stay: 1.4,
    status: {
      label: 'promoted',
      type: 'warning'
    },
    package: {
      label: 'Couple package',
      type: 'info'
    }
  },
  {
    name: 'Mandarin Oriental Jumeira',
    located: 'Abu dhabi',
    price: '90.00',
    image: gallery46,
    rating: 4.8,
    stay: 1.4,
    status: {
      label: 'promoted',
      type: 'warning'
    },
    package: {
      label: 'Couple package',
      type: 'info'
    }
  },
  {
    name: 'Swissotel Bangkok',
    located: 'Bangkok',
    price: '70.00',
    image: gallery47,
    rating: 4.8,
    stay: 1.4,
    status: {
      label: 'promoted',
      type: 'warning'
    },
    package: {
      label: 'Couple package',
      type: 'info'
    }
  }
];

export interface GalleryInterface {
  img: string;
  category: string;
  location: string;
  rating: number;
  review: number;
}
export const galleryItems: GalleryInterface[] = [
  {
    img: tokyo1,
    category: 'tokyo',
    location: 'King Power Mahanakhon',
    rating: 4.8,
    review: 1.4
  },
  {
    img: tokyo2,
    category: 'tokyo',
    location: 'Meiji Jingu',
    rating: 5.0,
    review: 2.2
  },
  {
    img: tokyo3,
    category: 'tokyo',
    location: 'Imperial Palace',
    rating: 4.5,
    review: 1.2
  },
  {
    img: bali1,
    category: 'bali',
    location: 'Nusa Lembongan',
    rating: 4.7,
    review: 1.2
  },
  {
    img: bali2,
    category: 'bali',
    location: 'Waterbom Bali',
    rating: 4.5,
    review: 1.8
  },
  {
    img: bali3,
    category: 'bali',
    location: 'Kuta Beach',
    rating: 5.0,
    review: 4.1
  },
  {
    img: sydney1,
    category: 'sydney',
    location: 'The Rocks',
    rating: 4.8,
    review: 1.9
  },
  {
    img: sydney2,
    category: 'sydney',
    location: 'Manly Beach',
    rating: 4.7,
    review: 1.1
  },
  {
    img: sydney3,
    category: 'sydney',
    location: 'Darling Harbour',
    rating: 5.0,
    review: 3.2
  },
  {
    img: paris1,
    category: 'paris',
    location: 'Louvre Museum',
    rating: 4.4,
    review: 4.3
  },
  {
    img: paris2,
    category: 'paris',
    location: 'Montmartre',
    rating: 5.0,
    review: 5.0
  },
  {
    img: paris3,
    category: 'paris',
    location: 'Tuileries Garden',
    rating: 4.1,
    review: 4.5
  }
];

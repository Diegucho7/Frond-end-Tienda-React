import dell from 'assets/img/brands/dell.png';
import honda from 'assets/img/brands/honda.png';
import xiaomi from 'assets/img/brands/xiaomi.png';
import intel from 'assets/img/brands/intel.png';
import asus from 'assets/img/brands/asus-rog.png';
import yamaha from 'assets/img/brands/yamaha.png';
import ibm from 'assets/img/brands/ibm.png';
import apple from 'assets/img/brands/apple-2.png';
import oppo from 'assets/img/brands/oppo.png';
import redragon from 'assets/img/brands/redragon.png';
import xbox from 'assets/img/brands/xbox.png';
import lenovo from 'assets/img/brands/lenovo.png';
import oneplus from 'assets/img/brands/oneplus-2.png';
import suzuki from 'assets/img/brands/suzuki-2.png';
import googleStore from 'assets/img/brands/google-store.png';
import hp from 'assets/img/brands/hp.png';

export type StoreItem = {
  name: string;
  rating: number;
  rated: number;
  logo: string;
};

export const stores: StoreItem[] = [
  {
    name: 'Dell Technologies',
    rating: 4,
    rated: 1263,
    logo: dell
  },
  {
    name: 'Intel',
    rating: 5,
    rated: 1542,
    logo: intel
  },
  {
    name: 'Honda',
    rating: 5,
    rated: 596,
    logo: honda
  },
  {
    name: 'Asus ROG',
    rating: 3,
    rated: 2365,
    logo: asus
  },
  {
    name: 'Yamaha',
    rating: 5,
    rated: 1253,
    logo: yamaha
  },
  {
    name: 'IBM',
    rating: 3,
    rated: 996,
    logo: ibm
  },
  {
    name: 'Apple Store',
    rating: 3,
    rated: 365,
    logo: apple
  },
  {
    name: 'Oppo',
    rating: 3,
    rated: 576,
    logo: oppo
  },
  {
    name: 'Redragon',
    rating: 2,
    rated: 1125,
    logo: redragon
  },
  {
    name: 'Microsoft XBOX',
    rating: 4,
    rated: 830,
    logo: xbox
  },
  {
    name: 'Lenovo',
    rating: 3,
    rated: 1032,
    logo: lenovo
  },
  {
    name: 'Xiaomi',
    rating: 3,
    rated: 965,
    logo: xiaomi
  },
  {
    name: 'Oneplus',
    rating: 4,
    rated: 562,
    logo: oneplus
  },
  {
    name: 'Suzuki',
    rating: 3,
    rated: 125,
    logo: suzuki
  },
  {
    name: 'Google store',
    rating: 4,
    rated: 1859,
    logo: googleStore
  },
  {
    name: 'HP Global Store',
    rating: 3,
    rated: 365,
    logo: hp
  }
];

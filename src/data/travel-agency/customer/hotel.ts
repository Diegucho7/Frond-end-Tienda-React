import hotel1 from 'assets/img/hotels/1.png';
import hotel2 from 'assets/img/hotels/2.png';
import hotel3 from 'assets/img/hotels/3.png';
import hotel4 from 'assets/img/hotels/4.png';
import hotel5 from 'assets/img/hotels/5.png';
import hotel6 from 'assets/img/hotels/6.png';
import hotel7 from 'assets/img/hotels/7.png';
import hotel8 from 'assets/img/hotels/8.png';
import hotel9 from 'assets/img/hotels/9.png';
import hotel10 from 'assets/img/hotels/10.png';
import hotel11 from 'assets/img/hotels/11.png';
import hotel12 from 'assets/img/hotels/12.png';
import hotel13 from 'assets/img/hotels/13.png';
import hotel14 from 'assets/img/hotels/14.png';
import hotel15 from 'assets/img/hotels/15.png';
import hotel16 from 'assets/img/hotels/16.png';
import hotel70 from 'assets/img/hotels/70.png';
import hotel71 from 'assets/img/hotels/71.png';
import hotel72 from 'assets/img/hotels/72.png';
import hotel73 from 'assets/img/hotels/73.png';

export interface hotelInterFace {
  name: string;
  location: string;
  price: string;
  rating: string;
  img: string;
}

interface SearchRoomCollapsibleItem {
  title: string;
  key: string;
}

interface AmenitiesCheckboxItem {
  id: string;
  label: string;
  className?: string;
}
interface HomepageOffcanvasAmenitiesItem {
  id: number;
  title: string;
  className?: string;
  checkboxItems: AmenitiesCheckboxItem[];
}

export const hotels: hotelInterFace[] = [
  {
    name: 'Hotel Palace',
    location: 'Bangkok, Thailand',
    price: '33.48',
    rating: '3.8',
    img: hotel1
  },
  {
    name: 'Silom Furama',
    location: 'Bangkok, Thailand',
    price: '32.27',
    rating: '4.0',
    img: hotel2
  },
  {
    name: 'Hotel Prince Palace',
    location: 'Bangkok, Thailand',
    price: '38.96',
    rating: '3.9',
    img: hotel3
  },
  {
    name: 'Hotel Grandmas Plus',
    location: 'Bali, Indonesia',
    price: '13.99',
    rating: '4.5',
    img: hotel4
  },
  {
    name: 'Hotel Asia Solo',
    location: 'Jawa Tengah, Indonesia',
    price: '14.66',
    rating: '3.9',
    img: hotel5
  },
  {
    name: 'Golden Inn Kuta',
    location: 'Bali, Indonesia',
    price: '52.91',
    rating: '4.4',
    img: hotel6
  },
  {
    name: 'The Shanty House',
    location: 'Bali, Indonesia',
    price: '87.71',
    rating: '4.7',
    img: hotel7
  },
  {
    name: 'Hotel Kiwi International',
    location: 'New Zealand',
    price: '41.19',
    rating: '3.7',
    img: hotel8
  },
  {
    name: 'Residences of the Angel',
    location: 'Locarno, Switzerland',
    price: '83.41',
    rating: '4.9',
    img: hotel9
  },
  {
    name: "Brenig Kulm's Gasthaus",
    location: 'Meiringen, Switzerland',
    price: '109.29',
    rating: '4.2',
    img: hotel10
  },
  {
    name: 'The Andermatt Chedi',
    location: 'Andermatt, Switzerland',
    price: '107.25',
    rating: '4.6',
    img: hotel11
  },
  {
    name: 'Interlaken Alplodge',
    location: 'Interlaken, Switzerland',
    price: '120.32',
    rating: '4.5',
    img: hotel12
  },
  {
    name: 'Inn at Agus Beach',
    location: 'Bali, Indonesia',
    price: '25.98',
    rating: '4.2',
    img: hotel13
  },
  {
    name: 'Hotel Cahya Nirwana',
    location: 'Jawa Tengah, Indonesia',
    price: '22.45',
    rating: '4.1',
    img: hotel14
  },
  {
    name: 'Villas at Atoll Haven',
    location: 'Bali, Indonesia',
    price: '145.10',
    rating: '3.3',
    img: hotel15
  },
  {
    name: 'The Sanchaya Hotel',
    location: 'Bali, Indonesia',
    price: '45.22',
    rating: '4.5',
    img: hotel16
  }
];

export interface roomSearchInterface {
  name: string;
  category: string;
  price: string;
  img: string;
  bedRooms: string;
  beds: string;
  guest: string;
  child: string;
  bathrooms: string;
  available: number;
  total: number;
  availableOnDates: {
    date: string;
    price: string;
    units?: string;
    priceUp?: boolean;
    priceDown?: boolean;
  }[];
  amenities: string[];
}
[];

export const roomsSearchData: roomSearchInterface[] = [
  {
    name: 'Double Bed',
    category: 'Presidential Suite',
    price: '699.67',
    img: hotel70,
    bedRooms: '01',
    beds: '02',
    guest: '02',
    child: '01',
    bathrooms: '01',
    available: 20,
    total: 100,
    availableOnDates: [
      {
        date: '10 March',
        price: '599.00',
        units: '09'
      },
      {
        date: '11 March',
        price: '599.00',
        units: '06'
      },
      {
        date: '12 March',
        price: '599.00',
        units: '03'
      },
      {
        date: '13 March',
        price: '699.00',
        priceUp: true
      },
      {
        date: '14 March',
        price: '599.00',
        units: '10'
      },
      {
        date: '15 March',
        price: '599.00',
        units: '08'
      },
      {
        date: '16 March',
        price: '499.00',
        units: '12',
        priceDown: true
      },
      {
        date: '17 March',
        price: '599.00',
        units: '09'
      },
      {
        date: '18 March',
        price: '599.00',
        units: '10'
      },
      {
        date: '19 March',
        price: '599.00',
        units: '02'
      },
      {
        date: '20 March',
        price: '599.00',
        units: '04'
      }
    ],
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'common area',
      'bathtub',
      'Heating',
      'Telephone'
    ]
  },
  {
    name: 'Queen bed',
    category: 'Deluxe Room',
    price: '400.5',
    img: hotel71,
    bedRooms: '02',
    beds: '02',
    guest: '02',
    child: '01',
    bathrooms: '02',
    available: 25,
    total: 77,
    availableOnDates: [
      {
        date: '10 March',
        price: '599.00',
        units: '09'
      },
      {
        date: '11 March',
        price: '599.00',
        units: '06'
      },
      {
        date: '12 March',
        price: '599.00',
        units: '03'
      },
      {
        date: '13 March',
        price: '699.00',
        priceUp: true
      },
      {
        date: '14 March',
        price: '599.00',
        units: '10'
      },
      {
        date: '15 March',
        price: '599.00',
        units: '08'
      },
      {
        date: '16 March',
        price: '499.00',
        units: '12',
        priceDown: true
      },
      {
        date: '17 March',
        price: '599.00',
        units: '09'
      },
      {
        date: '18 March',
        price: '599.00',
        units: '10'
      },
      {
        date: '19 March',
        price: '599.00',
        units: '02'
      },
      {
        date: '20 March',
        price: '599.00',
        units: '04'
      }
    ],
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'common area',
      'bathtub',
      'Heating',
      'Telephone'
    ]
  },
  {
    name: 'Twin bed',
    category: 'Family Room',
    price: '600.41',
    img: hotel72,
    bedRooms: '03',
    beds: '05',
    guest: '07',
    child: '01',
    bathrooms: '03',
    available: 8,
    total: 12,
    availableOnDates: [
      {
        date: '10 March',
        price: '599.00',
        units: '09'
      },
      {
        date: '11 March',
        price: '599.00',
        units: '06'
      },
      {
        date: '12 March',
        price: '599.00',
        units: '03'
      },
      {
        date: '13 March',
        price: '699.00',
        priceUp: true
      },
      {
        date: '14 March',
        price: '599.00',
        units: '10'
      },
      {
        date: '15 March',
        price: '599.00',
        units: '08'
      },
      {
        date: '16 March',
        price: '499.00',
        units: '12',
        priceDown: true
      },
      {
        date: '17 March',
        price: '599.00',
        units: '09'
      },
      {
        date: '18 March',
        price: '599.00',
        units: '10'
      },
      {
        date: '19 March',
        price: '599.00',
        units: '02'
      },
      {
        date: '20 March',
        price: '599.00',
        units: '04'
      }
    ],
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'common area',
      'bathtub',
      'Heating',
      'Telephone'
    ]
  },
  {
    name: 'Single bed',
    category: 'Honeymoon Suite',
    price: '350.8',
    img: hotel73,
    bedRooms: '01',
    beds: '01',
    guest: '02',
    child: '00',
    bathrooms: '01',
    available: 5,
    total: 15,
    availableOnDates: [
      {
        date: '10 March',
        price: '599.00',
        units: '09'
      },
      {
        date: '11 March',
        price: '599.00',
        units: '06'
      },
      {
        date: '12 March',
        price: '599.00',
        units: '03'
      },
      {
        date: '13 March',
        price: '699.00',
        priceUp: true
      },
      {
        date: '14 March',
        price: '599.00',
        units: '10'
      },
      {
        date: '15 March',
        price: '599.00',
        units: '08'
      },
      {
        date: '16 March',
        price: '499.00',
        units: '12',
        priceDown: true
      },
      {
        date: '17 March',
        price: '599.00',
        units: '09'
      },
      {
        date: '18 March',
        price: '599.00',
        units: '10'
      },
      {
        date: '19 March',
        price: '599.00',
        units: '02'
      },
      {
        date: '20 March',
        price: '599.00',
        units: '04'
      }
    ],
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'common area',
      'bathtub',
      'Heating',
      'Telephone'
    ]
  }
];

export const searchRoomCollapsibleItems: SearchRoomCollapsibleItem[] = [
  {
    title: 'Adult',
    key: 'adult'
  },
  {
    title: 'Child',
    key: 'child'
  },
  {
    title: 'Bedroom',
    key: 'bedroom'
  },
  {
    title: 'Number of Bed',
    key: 'numberOfBed'
  },
  {
    title: 'Bathroom',
    key: 'bathroom'
  }
];

export const homepageOffcanvasAmenitiesItems: HomepageOffcanvasAmenitiesItem[] =
  [
    {
      id: 1,
      title: 'Essentials',
      checkboxItems: [
        {
          id: 'wifi',
          label: 'Wifi'
        },
        {
          id: 'kitchen',
          label: 'Kitchen'
        },
        {
          id: 'airConditioning',
          label: 'Air conditioning'
        },
        {
          id: 'washer',
          label: 'Washer'
        },
        {
          id: 'dryer',
          label: 'Dryer'
        },
        {
          id: 'heating',
          label: 'Heating'
        }
      ]
    },
    {
      id: 2,
      title: 'Location',
      className: 'mt-3',
      checkboxItems: [
        {
          id: 'beachFront',
          label: 'Beach-front'
        },
        {
          id: 'nearMarkets',
          label: 'Near markets'
        },
        {
          id: 'waterFront',
          label: 'Water-front'
        }
      ]
    }
  ];

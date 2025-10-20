import img1 from 'assets/img/hotels/25_2.png';
import img2 from 'assets/img/hotels/26_2.png';
import img3 from 'assets/img/hotels/27_2.png';
import img4 from 'assets/img/hotels/28_2.png';
import img5 from 'assets/img/hotels/29_2.png';
import img6 from 'assets/img/hotels/30_2.png';
import img7 from 'assets/img/hotels/31_2.png';
import img8 from 'assets/img/hotels/32_2.png';
import largeImg1 from 'assets/img/hotels/25.png';
import largeImg2 from 'assets/img/hotels/26.png';
import largeImg3 from 'assets/img/hotels/27.png';
import largeImg4 from 'assets/img/hotels/28.png';
import largeImg5 from 'assets/img/hotels/29.png';
import largeImg6 from 'assets/img/hotels/30.png';
import largeImg7 from 'assets/img/hotels/31.png';
import largeImg8 from 'assets/img/hotels/32.png';
import img9 from 'assets/img/hotels/33.png';
import img10 from 'assets/img/hotels/34.png';
import img11 from 'assets/img/hotels/35.png';
import img12 from 'assets/img/hotels/36.png';
import img13 from 'assets/img/hotels/37.png';
import img14 from 'assets/img/hotels/38.png';
import indiaImage from 'assets/img/country/india.png';
import norwayImage from 'assets/img/country/norway.png';
import canadaImage from 'assets/img/country/canada.png';
import img59 from 'assets/img/team/59.webp';
import img58 from 'assets/img/team/58.webp';
import img30 from 'assets/img/team/30.webp';

import {
  faBath,
  faBellConcierge,
  faBicycle,
  faBriefcase,
  faBroom,
  faCar,
  faDog,
  faEarth,
  faGhost,
  faInfoCircle,
  faSmoking,
  faSquareParking,
  faTree,
  faUmbrellaBeach,
  faUser,
  faUtensils,
  faWheelchair,
  faWifi,
  faWineGlass,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

export interface CartItem {
  id: number;
  roomName: string;
  price: number;
  checkIn: string;
  checkOut: string;
  bedType: string;
  adults: number;
  child?: number;
  nights: number;
}

export interface Facility {
  id: number;
  title: string;
  icon: IconDefinition;
  classes: string;
}

export interface ChargeItem {
  name: string;
  required?: boolean;
}

export interface Charge {
  id: number;
  title: string;
  icon: IconDefinition;
  desc?: string;
  items: ChargeItem[];
}

export interface Rating {
  name: string;
  rating: number;
}

export interface Review {
  avatar: string;
  name: string;
  country: string;
  flag: string;
  service: string;
  date: string;
  travelerType: string;
  rating: number;
  liked: string;
  disLiked: string;
  hotelsReply: string;
}

export interface HotelImageType {
  id: number;
  img: string;
  largeImg: string;
  classNames: string;
}

export interface AvailableRoom {
  id: number;
  name: string;
  desc: string;
  beds: number;
  person: number;
  breakfast: boolean;
  discount: number;
  price: number;
  discountPrice: number;
  tax: number;
  amenities: string[];
  images: string[];
}

export const cartItems: CartItem[] = [
  {
    id: 1,
    roomName: 'King-Super deluxe',
    price: 2056.75,
    checkIn: '25 January, 2023',
    checkOut: '27 January, 2023',
    bedType: 'Double bed',
    adults: 2,
    nights: 2
  },
  {
    id: 2,
    roomName: 'Standard double queen',
    price: 1456.65,
    checkIn: '25 January, 2023',
    checkOut: '28 January, 2023',
    bedType: 'Double bed',
    adults: 2,
    child: 1,
    nights: 3
  }
];

export const hotelImages: HotelImageType[] = [
  {
    id: 1,
    img: img1,
    largeImg: largeImg1,
    classNames: 'col-span-12 col-span-md-6 row-span-md-2'
  },
  {
    id: 2,
    img: img2,
    largeImg: largeImg2,
    classNames: 'd-none d-md-block col-span-6 row-span-1'
  },
  {
    id: 3,
    img: img3,
    largeImg: largeImg3,
    classNames: 'd-none d-md-block col-span-3 row-span-1'
  },
  {
    id: 4,
    img: img4,
    largeImg: largeImg4,
    classNames: 'd-none d-md-block col-span-3 row-span-1'
  },
  {
    id: 5,
    img: img5,
    largeImg: largeImg5,
    classNames: 'd-none d-md-block col-span-3'
  },
  {
    id: 6,
    img: img6,
    largeImg: largeImg6,
    classNames: 'd-none d-md-block col-span-3'
  },
  {
    id: 7,
    img: img7,
    largeImg: largeImg7,
    classNames: 'd-none d-md-block col-span-3'
  },
  {
    id: 8,
    img: img8,
    largeImg: largeImg8,
    classNames: 'col-span-12 col-span-md-3'
  }
];

export const availableRooms: AvailableRoom[] = [
  {
    id: 1,
    name: 'Standard double queen',
    desc: 'A standard double queen room has two queen-sized beds and may accept up to two people for a convenient and comfortable stay.',
    beds: 2,
    person: 2,
    breakfast: true,
    discount: 10,
    price: 1456.65,
    discountPrice: 1256.65,
    tax: 123,
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
    ],
    images: [img9, img10, img11]
  },
  {
    id: 2,
    name: 'Standard double king',
    desc: 'A standard double king room is a hotel room with two king-size beds that can comfortably fit up to four guests.',
    beds: 2,
    person: 4,
    breakfast: true,
    discount: 15,
    price: 1456.65,
    discountPrice: 1856.65,
    tax: 155,
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
    ],
    images: [img12, img13, img14]
  }
];

export const facilities: Facility[] = [
  {
    id: 1234,
    title: 'Airport shuttle',
    icon: faCar,
    classes: 'border'
  },
  {
    id: 1235,
    title: 'Free wifi',
    icon: faWifi,
    classes:
      'border-bottom border-top-sm border-end border-start border-start-sm-0'
  },
  {
    id: 1236,
    title: 'Restaurant',
    icon: faUtensils,
    classes:
      'border-end border-start border-start-md-0 border-top-md border-bottom'
  },
  {
    id: 1237,
    title: 'Smoking zone',
    icon: faSmoking,
    classes:
      'border-end border-start border-start-sm-0 border-start-md border-bottom'
  },
  {
    id: 1238,
    title: 'Room service',
    icon: faUser,
    classes: 'border-bottom border-end border-start border-start-lg-0'
  },
  {
    id: 1239,
    title: 'Pet-Friendly',
    icon: faDog,
    classes: 'border-bottom border-end border-start border-start-sm-0'
  },
  {
    id: 1240,
    title: 'Free parking',
    icon: faSquareParking,
    classes: 'border-x border-bottom'
  },
  {
    id: 1241,
    title: 'Beach-front',
    icon: faUmbrellaBeach,
    classes: 'border-bottom border-end border-start border-start-sm-0'
  },
  {
    id: 1242,
    title: 'Facilities for disabled guests',
    icon: faWheelchair,
    classes: 'border-bottom border-end border-start border-start-lg-0'
  },
  {
    id: 1243,
    title: 'Bar',
    icon: faWineGlass,
    classes:
      'border-x border-bottom border-start border-start-sm-0 border-start-lg'
  },
  {
    id: 1245,
    title: 'Free Breakfast',
    icon: faUtensils,
    classes: 'border-bottom border-end border-start border-start-lg-0'
  },
  {
    id: 1246,
    title: '24-hour front desk',
    icon: faBellConcierge,
    classes: 'border-bottom border-end border-start border-start-sm-0'
  }
];

export const charges: Charge[] = [
  {
    id: 1300,
    title: 'Washroom',
    icon: faBath,
    items: [
      {
        name: 'Toilet'
      },
      {
        name: 'Bath'
      }
    ]
  },
  {
    id: 1301,
    title: 'Outdoors',
    icon: faTree,
    items: [
      {
        name: 'Beachfront'
      },
      {
        name: 'BBQ facilities',
        required: true
      },
      {
        name: 'Garden'
      }
    ]
  },
  {
    id: 1302,
    title: 'Activities',
    icon: faBicycle,
    items: [
      {
        name: 'Bicycle rental'
      },
      {
        name: 'Beach'
      },
      {
        name: 'Water sport facilities',
        required: true
      },
      {
        name: 'Horse riding',
        required: true
      },
      {
        name: 'Wind surfing',
        required: true
      }
    ]
  },
  {
    id: 1303,
    title: 'Food & Drink',
    icon: faUtensils,
    items: [
      {
        name: 'Fruits'
      },
      {
        name: 'Kid meals'
      },
      {
        name: 'Snack bar',
        required: true
      },
      {
        name: 'Bar',
        required: true
      },
      {
        name: 'Restaurant'
      }
    ]
  },
  {
    id: 1304,
    title: 'Internet',
    icon: faWifi,
    items: [
      {
        name: 'WiFi'
      }
    ]
  },
  {
    id: 1305,
    title: 'Parking',
    icon: faSquareParking,
    desc: 'On-site, free private parking is possible (reservations are not needed).',
    items: [
      {
        name: 'Street Parking'
      }
    ]
  },
  {
    id: 1306,
    title: 'Reception Service',
    icon: faBellConcierge,
    items: [
      {
        name: 'Luggage storage'
      },
      {
        name: 'Tour desk'
      },
      {
        name: '24-hour front desk'
      }
    ]
  },
  {
    id: 1307,
    title: 'Cleaning service',
    icon: faBroom,
    items: [
      {
        name: 'Daily housekeeping',
        required: true
      },
      {
        name: 'Trouser press'
      },
      {
        name: 'Ironing service'
      },
      {
        name: 'Dry cleaning'
      },
      {
        name: 'Laundry'
      }
    ]
  },
  {
    id: 1307,
    title: 'Business facilities',
    icon: faBriefcase,
    items: [
      {
        name: 'Fax / photocopying'
      },
      {
        name: 'Business centre'
      },
      {
        name: 'Meeting / banquet facilities',
        required: true
      }
    ]
  },
  {
    id: 1308,
    title: 'Safety and security',
    icon: faBriefcase,
    items: [
      {
        name: 'CCTV outside property'
      },
      {
        name: 'key card access'
      },
      {
        name: 'Safety deposit box'
      }
    ]
  },
  {
    id: 1309,
    title: 'General',
    icon: faInfoCircle,
    items: [
      {
        name: 'Mini market on site'
      },
      {
        name: 'Shared lounge / TV area'
      },
      {
        name: 'Designated smoking area'
      },
      {
        name: 'Air conditioning'
      },
      {
        name: 'Car hire'
      },
      {
        name: 'Lift'
      },
      {
        name: 'Barber / beauty shop'
      },
      {
        name: 'Airport shuttle',
        required: true
      },
      {
        name: 'Non-smoking rooms'
      },
      {
        name: 'Room service'
      }
    ]
  },
  {
    id: 1310,
    title: 'Accessibility',
    icon: faWheelchair,
    items: [
      {
        name: 'Elevator access'
      }
    ]
  },
  {
    id: 1311,
    title: 'Languages spoken',
    icon: faEarth,
    items: [
      {
        name: 'Bengali'
      },
      {
        name: 'English'
      }
    ]
  },
  {
    id: 1312,
    title: 'Ghosts haunting',
    icon: faGhost,
    items: [
      {
        name: 'Not that much'
      }
    ]
  }
];

export const ratings: Rating[] = [
  {
    name: 'Staff',
    rating: 4
  },
  {
    name: 'Comfort',
    rating: 4
  },
  {
    name: 'Facilities',
    rating: 4.5
  },
  {
    name: 'Location',
    rating: 3.5
  },
  {
    name: 'Cleanliness',
    rating: 4.8
  },
  {
    name: 'Free WiFi',
    rating: 5
  }
];

export const reviews: Review[] = [
  {
    avatar: img59,
    name: 'Navina Koothrapali',
    country: 'India',
    flag: indiaImage,
    service: 'Single Room with Private Bathroom',
    date: 'January, 2023',
    travelerType: 'Solo traveler',
    rating: 4.5,
    liked:
      'The amazing facilities at this hotel just left me speechless. Modern and equipped with everything I needed to maintain my workout schedule while on vacation, the fitness center was state-of-the-art. Another highlight was the indoor pool, which had crystal-clear water and lots of lounge couches for relaxation.',
    disLiked:
      'It is necessary to provide some amenities for guests, such as drinking water and toothpaste.',
    hotelsReply:
      'Thank you for choosing us. We will try to improve accordingly.'
  },
  {
    avatar: img58,
    name: 'Weston Ryan',
    country: 'Norway',
    flag: norwayImage,
    service: 'Double Room with Private Bathroom',
    date: 'February, 2023',
    travelerType: 'Couple traveler',
    rating: 3.5,
    liked:
      'The amenities at this hotel were excellent during my most recent time there. The gym was up-to-date and well-stocked, allowing me to continue my exercise regimen while I was away from home. The spa was another noteworthy aspect that offered a restful and revitalising experience.',
    disLiked:
      'It was a letdown to stay at this motel. Small, out-of-date, and lacking in comforts, the room. The staff was unwelcoming.',
    hotelsReply:
      'Thank you for choosing us. We will try to improve accordingly.'
  },
  {
    avatar: img30,
    name: 'Travis Adams',
    country: 'Canada',
    flag: canadaImage,
    service: 'Single Room with Private Bathroom',
    date: 'March, 2023',
    travelerType: 'Solo traveler',
    rating: 4.6,
    liked:
      "At this hotel, I had a fantastic time! The amenities were excellent, including a lovely pool, a cutting-edge gym, and a soothing spa. Also, the staff went above and beyond to make sure my stay was nice. They were really friendly. My stay was made comfortable and enjoyable by the room's size, comfort, and facilities. Also, the on-site restaurant was outstanding, with delectable fare and first-rate service.",
    disLiked:
      'Due to the uncleanliness and subpar treatment, I was quite dissatisfied with my stay at this hotel.',
    hotelsReply: "Sorry for the inconvenience. We'll investigate."
  }
];

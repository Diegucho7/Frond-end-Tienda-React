import img1 from 'assets/img/hotels/40.png';
import img2 from 'assets/img/hotels/41.png';
import img3 from 'assets/img/hotels/42.png';
import img4 from 'assets/img/hotels/43.png';
import img5 from 'assets/img/hotels/44.png';
import img6 from 'assets/img/hotels/45.png';
import img7 from 'assets/img/hotels/46.png';
import img8 from 'assets/img/hotels/48.png';
import img9 from 'assets/img/hotels/48.png';
import img10 from 'assets/img/hotels/49.png';
import img11 from 'assets/img/hotels/50.png';
import img12 from 'assets/img/hotels/51.png';
import img13 from 'assets/img/hotels/52.png';
import img14 from 'assets/img/hotels/53.png';
import img15 from 'assets/img/hotels/54.png';
import img16 from 'assets/img/hotels/55.png';
import img17 from 'assets/img/hotels/56.png';
import img18 from 'assets/img/hotels/57.png';
import img19 from 'assets/img/hotels/58.png';
import img20 from 'assets/img/hotels/59.png';
import img21 from 'assets/img/hotels/60.png';
import img22 from 'assets/img/hotels/61.png';
import img23 from 'assets/img/hotels/62.png';
import img24 from 'assets/img/hotels/63.png';
import img25 from 'assets/img/hotels/64.png';
import img26 from 'assets/img/hotels/65.png';
import img27 from 'assets/img/hotels/66.png';
import img28 from 'assets/img/hotels/67.png';
import img29 from 'assets/img/hotels/68.png';
import img30 from 'assets/img/hotels/69.png';
import img31 from 'assets/img/hotels/33.png';
import img32 from 'assets/img/hotels/34.png';
import img33 from 'assets/img/hotels/35.png';
import img34 from 'assets/img/hotels/36.png';
import img35 from 'assets/img/hotels/37.png';
import img36 from 'assets/img/hotels/38.png';
import {
  faBellConcierge,
  faCar,
  faDog,
  faSmoking,
  faSquareParking,
  faUmbrellaBeach,
  faUser,
  faUtensils,
  faWheelchair,
  faWifi,
  faWineGlass,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

export interface Rating {
  staff: number;
  comfort: number;
  facilities: number;
  location: number;
  cleanliness: number;
  freeWifi: number;
}

export interface ReviewField {
  id: number;
  title: string;
  field: string;
}
interface Room {
  id: number;
  type: string;
  price: number;
  discountPrice: number;
  images: string[];
  beds: number;
  adults: number;
  child: number;
  bathrooms: number;
}

export interface PopularAmenities {
  airportShuttle: boolean;
  freeWifi: boolean;
  restaurant: boolean;
  smokingZone: boolean;
  roomService: boolean;
  freeParking: boolean;
  petFriendly: boolean;
  beachFront: boolean;
  disableGuest: boolean;
  bar: boolean;
  breakfast: boolean;
  frontDesk: boolean;
}
export interface HotelInfo {
  id: number;
  name: string;
  overallRating: number;
  images: string[];
  ratings: Rating;
  facilities: string[];
  rooms: Room[];
  popularAmenities: PopularAmenities;
}

export interface PopularAmenity {
  id: number;
  title: string;
  icon: IconDefinition;
  classes: string;
}

export interface RoomType {
  id: number;
  type: string;
  discount: number;
  price: number;
  discountPrice: number;
  desc: string;
  beds: number;
  adults: number;
  child: number;
  bathrooms: number;
  images: string[];
  popularAmenities: PopularAmenity[];
  amenities: string[];
}

export const reviewFields: ReviewField[] = [
  {
    id: 1,
    title: 'Staff',
    field: 'staff'
  },
  {
    id: 2,
    title: 'Comfort',
    field: 'comfort'
  },
  {
    id: 3,
    title: 'Facilities',
    field: 'facilities'
  },
  {
    id: 4,
    title: 'Location',
    field: 'location'
  },
  {
    id: 5,
    title: 'cleanliness',
    field: 'cleanliness'
  },
  {
    id: 6,
    title: 'Free Wifi',
    field: 'freeWifi'
  }
];

export const popularAmenitiesFields: ReviewField[] = [
  {
    id: 1,
    title: 'Airport Shuttle',
    field: 'airportShuttle'
  },
  {
    id: 2,
    title: 'Free Wifi',
    field: 'freeWifi'
  },
  {
    id: 3,
    title: 'Restaurant',
    field: 'restaurant'
  },
  {
    id: 4,
    title: 'Smoking Zone',
    field: 'smokingZone'
  },
  {
    id: 5,
    title: 'Room Service',
    field: 'roomService'
  },
  {
    id: 6,
    title: 'Free Parking',
    field: 'freeParking'
  },
  {
    id: 7,
    title: 'Pet-Friendly',
    field: 'petFriendly'
  },
  {
    id: 8,
    title: 'Beach-Front',
    field: 'beachFront'
  },
  {
    id: 9,
    title: 'Facilities for disabled guests',
    field: 'disableGuest'
  },
  {
    id: 10,
    title: 'Bar',
    field: 'bar'
  },
  {
    id: 11,
    title: 'Free Breakfast',
    field: 'breakfast'
  },
  {
    id: 12,
    title: '24-hour front desk',
    field: 'frontDesk'
  }
];

export const hotelInfo: HotelInfo[] = [
  {
    id: 1,
    name: 'Bubble Hotel Bali Ubud',
    overallRating: 3,
    images: [img1, img2, img3, img4, img5],
    ratings: {
      staff: 4,
      comfort: 4.5,
      facilities: 4.8,
      location: 4,
      cleanliness: 3.5,
      freeWifi: 5
    },
    facilities: [
      'Free - Breakfast',
      'Beach View',
      'Airport Shuttle',
      'Gym',
      'Swimming Pool',
      'Free Parking'
    ],
    rooms: [
      {
        id: 10,
        type: 'Deluxe Room',
        price: 279.98,
        discountPrice: 259.65,
        images: [img16, img17, img18, img19, img20],
        beds: 1,
        adults: 2,
        child: 0,
        bathrooms: 1
      }
    ],
    popularAmenities: {
      airportShuttle: true,
      freeWifi: true,
      restaurant: false,
      smokingZone: false,
      roomService: true,
      freeParking: true,
      petFriendly: true,
      beachFront: true,
      disableGuest: false,
      bar: false,
      breakfast: true,
      frontDesk: false
    }
  },
  {
    id: 2,
    name: 'ONAYA Bali Resort',
    overallRating: 4,
    images: [img6, img7, img8, img9, img10],
    ratings: {
      staff: 4,
      comfort: 4.5,
      facilities: 4.8,
      location: 4,
      cleanliness: 3.5,
      freeWifi: 5
    },
    facilities: [
      'Free - Breakfast',
      'Fitness Center',
      'Airport Shuttle',
      'Bar/Lounge',
      'Accommodation',
      'Room Service'
    ],
    rooms: [
      {
        id: 20,
        type: 'Deluxe Room',
        price: 299.76,
        discountPrice: 260.99,
        images: [img21, img22, img23, img24, img25],
        beds: 1,
        adults: 2,
        child: 0,
        bathrooms: 1
      }
    ],
    popularAmenities: {
      airportShuttle: true,
      freeWifi: true,
      restaurant: false,
      smokingZone: false,
      roomService: false,
      freeParking: false,
      petFriendly: true,
      beachFront: false,
      disableGuest: true,
      bar: false,
      breakfast: true,
      frontDesk: false
    }
  },
  {
    id: 3,
    name: 'Gynandha Ubud Cottage',
    overallRating: 5,
    images: [img11, img12, img13, img14, img15],
    ratings: {
      staff: 4,
      comfort: 4.5,
      facilities: 4.8,
      location: 4,
      cleanliness: 3.5,
      freeWifi: 5
    },
    facilities: [
      'Reception Desk',
      'Meeting Rooms',
      'Restaurant',
      'ATM/Banking Services',
      'Business Center',
      'Free Parking'
    ],
    rooms: [
      {
        id: 3,
        type: 'Deluxe Room',
        price: 309.89,
        discountPrice: 299.98,
        images: [img26, img27, img28, img29, img30],
        beds: 1,
        adults: 2,
        child: 0,
        bathrooms: 1
      }
    ],
    popularAmenities: {
      airportShuttle: false,
      freeWifi: true,
      restaurant: true,
      smokingZone: true,
      roomService: true,
      freeParking: true,
      petFriendly: false,
      beachFront: false,
      disableGuest: true,
      bar: true,
      breakfast: true,
      frontDesk: false
    }
  }
];

export const roomTypes: RoomType[] = [
  {
    id: 1,
    type: 'Standard Double Queen',
    discount: 10,
    price: 143.65,
    discountPrice: 123.65,
    desc: 'A standard double queen room has two queen-sized beds and may accept up to two people for a convenient and comfortable stay.',
    beds: 1,
    adults: 2,
    child: 0,
    bathrooms: 1,
    images: [img31, img32, img33, img34, img35, img36],
    popularAmenities: [
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
          'border-end border-start border-start-lg-0 border-top-lg border-bottom'
      },
      {
        id: 1237,
        title: 'Smoking zone',
        icon: faSmoking,
        classes:
          'border-end border-start border-start-sm-0 border-start-lg border-bottom'
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
    ],
    amenities: [
      'Wifi',
      'Luggage rack',
      'Hairdryer',
      'Toiletries',
      'Seating area',
      'Bed sheets',
      'Room service',
      'Blankets',
      'Air conditioning',
      'Television',
      'Heating',
      'Sofa or couch',
      'Coffee table',
      'Ironing service',
      'Dry cleaning',
      'Coffee maker',
      'Electric kettle',
      'Garden view',
      'Baby cots',
      'Desk or workstation'
    ]
  },
  {
    id: 2,
    type: 'Deluxe Room',
    discount: 10,
    price: 199.65,
    discountPrice: 165.98,
    desc: 'A Deluxe Room is a spacious and luxurious hotel accommodation offering upgraded amenities and enhanced comfort for a more indulgent stay.',
    beds: 1,
    adults: 2,
    child: 0,
    bathrooms: 1,
    images: [img31, img32, img33, img34, img35, img36],
    popularAmenities: [
      {
        id: 1247,
        title: 'Airport shuttle',
        icon: faCar,
        classes: 'border'
      },
      {
        id: 1248,
        title: 'Free wifi',
        icon: faWifi,
        classes:
          'border-bottom border-top-sm border-end border-start border-start-sm-0'
      },
      {
        id: 1249,
        title: 'Restaurant',
        icon: faUtensils,
        classes:
          'border-end border-start border-start-lg-0 border-top-lg border-bottom'
      },
      {
        id: 1250,
        title: 'Smoking zone',
        icon: faSmoking,
        classes:
          'border-end border-start border-start-sm-0 border-start-lg border-bottom'
      },
      {
        id: 1251,
        title: 'Room service',
        icon: faUser,
        classes: 'border-bottom border-end border-start border-start-lg-0'
      },
      {
        id: 1252,
        title: 'Pet-Friendly',
        icon: faDog,
        classes: 'border-bottom border-end border-start border-start-sm-0'
      },
      {
        id: 1253,
        title: 'Free parking',
        icon: faSquareParking,
        classes: 'border-x border-bottom'
      },
      {
        id: 1254,
        title: 'Beach-front',
        icon: faUmbrellaBeach,
        classes: 'border-bottom border-end border-start border-start-sm-0'
      },
      {
        id: 1255,
        title: 'Facilities for disabled guests',
        icon: faWheelchair,
        classes: 'border-bottom border-end border-start border-start-lg-0'
      },
      {
        id: 1256,
        title: 'Bar',
        icon: faWineGlass,
        classes:
          'border-x border-bottom border-start border-start-sm-0 border-start-lg'
      },
      {
        id: 1257,
        title: 'Free Breakfast',
        icon: faUtensils,
        classes: 'border-bottom border-end border-start border-start-lg-0'
      },
      {
        id: 1258,
        title: '24-hour front desk',
        icon: faBellConcierge,
        classes: 'border-bottom border-end border-start border-start-sm-0'
      }
    ],
    amenities: [
      'Wifi',
      'Luggage rack',
      'Hairdryer',
      'Toiletries',
      'Seating area',
      'Bed sheets',
      'Room service',
      'Blankets',
      'Air conditioning',
      'Television',
      'Heating',
      'Sofa or couch',
      'Coffee table',
      'Ironing service',
      'Dry cleaning',
      'Coffee maker',
      'Electric kettle',
      'Garden view',
      'Baby cots',
      'Desk or workstation'
    ]
  },
  {
    id: 3,
    type: 'Presidential Suite',
    discount: 10,
    price: 156.23,
    discountPrice: 130.65,
    desc: 'The Presidential Suite: The pinnacle of luxury accommodations, reserved for VIPs and boasting the utmost opulence and prestige.',
    beds: 1,
    adults: 2,
    child: 0,
    bathrooms: 1,
    images: [img31, img32, img33, img34, img35, img36],
    popularAmenities: [
      {
        id: 1259,
        title: 'Airport shuttle',
        icon: faCar,
        classes: 'border'
      },
      {
        id: 1260,
        title: 'Free wifi',
        icon: faWifi,
        classes:
          'border-bottom border-top-sm border-end border-start border-start-sm-0'
      },
      {
        id: 1261,
        title: 'Restaurant',
        icon: faUtensils,
        classes:
          'border-end border-start border-start-lg-0 border-top-lg border-bottom'
      },
      {
        id: 1262,
        title: 'Smoking zone',
        icon: faSmoking,
        classes:
          'border-end border-start border-start-sm-0 border-start-lg border-bottom'
      },
      {
        id: 1263,
        title: 'Room service',
        icon: faUser,
        classes: 'border-bottom border-end border-start border-start-lg-0'
      },
      {
        id: 1264,
        title: 'Pet-Friendly',
        icon: faDog,
        classes: 'border-bottom border-end border-start border-start-sm-0'
      },
      {
        id: 1265,
        title: 'Free parking',
        icon: faSquareParking,
        classes: 'border-x border-bottom'
      },
      {
        id: 1266,
        title: 'Beach-front',
        icon: faUmbrellaBeach,
        classes: 'border-bottom border-end border-start border-start-sm-0'
      },
      {
        id: 1267,
        title: 'Facilities for disabled guests',
        icon: faWheelchair,
        classes: 'border-bottom border-end border-start border-start-lg-0'
      },
      {
        id: 1268,
        title: 'Bar',
        icon: faWineGlass,
        classes:
          'border-x border-bottom border-start border-start-sm-0 border-start-lg'
      },
      {
        id: 1269,
        title: 'Free Breakfast',
        icon: faUtensils,
        classes: 'border-bottom border-end border-start border-start-lg-0'
      },
      {
        id: 1270,
        title: '24-hour front desk',
        icon: faBellConcierge,
        classes: 'border-bottom border-end border-start border-start-sm-0'
      }
    ],
    amenities: [
      'Wifi',
      'Luggage rack',
      'Hairdryer',
      'Toiletries',
      'Seating area',
      'Bed sheets',
      'Room service',
      'Blankets',
      'Air conditioning',
      'Television',
      'Heating',
      'Sofa or couch',
      'Coffee table',
      'Ironing service',
      'Dry cleaning',
      'Coffee maker',
      'Electric kettle',
      'Garden view',
      'Baby cots',
      'Desk or workstation'
    ]
  },
  {
    id: 4,
    type: 'Ocean View Room',
    discount: 10,
    price: 271.65,
    discountPrice: 240.96,
    desc: 'An Ocean View Room offers breathtaking vistas of the sea, providing guests with a captivating and serene coastal experience.',
    beds: 1,
    adults: 2,
    child: 0,
    bathrooms: 1,
    images: [img31, img32, img33, img34, img35, img36],
    popularAmenities: [
      {
        id: 1271,
        title: 'Airport shuttle',
        icon: faCar,
        classes: 'border'
      },
      {
        id: 1272,
        title: 'Free wifi',
        icon: faWifi,
        classes:
          'border-bottom border-top-sm border-end border-start border-start-sm-0'
      },
      {
        id: 1273,
        title: 'Restaurant',
        icon: faUtensils,
        classes:
          'border-end border-start border-start-lg-0 border-top-lg border-bottom'
      },
      {
        id: 1274,
        title: 'Smoking zone',
        icon: faSmoking,
        classes:
          'border-end border-start border-start-sm-0 border-start-lg border-bottom'
      },
      {
        id: 1275,
        title: 'Room service',
        icon: faUser,
        classes: 'border-bottom border-end border-start border-start-lg-0'
      },
      {
        id: 1276,
        title: 'Pet-Friendly',
        icon: faDog,
        classes: 'border-bottom border-end border-start border-start-sm-0'
      },
      {
        id: 1277,
        title: 'Free parking',
        icon: faSquareParking,
        classes: 'border-x border-bottom'
      },
      {
        id: 1278,
        title: 'Beach-front',
        icon: faUmbrellaBeach,
        classes: 'border-bottom border-end border-start border-start-sm-0'
      },
      {
        id: 1279,
        title: 'Facilities for disabled guests',
        icon: faWheelchair,
        classes: 'border-bottom border-end border-start border-start-lg-0'
      },
      {
        id: 1280,
        title: 'Bar',
        icon: faWineGlass,
        classes:
          'border-x border-bottom border-start border-start-sm-0 border-start-lg'
      },
      {
        id: 1281,
        title: 'Free Breakfast',
        icon: faUtensils,
        classes: 'border-bottom border-end border-start border-start-lg-0'
      },
      {
        id: 1282,
        title: '24-hour front desk',
        icon: faBellConcierge,
        classes: 'border-bottom border-end border-start border-start-sm-0'
      }
    ],
    amenities: [
      'Wifi',
      'Luggage rack',
      'Hairdryer',
      'Toiletries',
      'Seating area',
      'Bed sheets',
      'Room service',
      'Blankets',
      'Air conditioning',
      'Television',
      'Heating',
      'Sofa or couch',
      'Coffee table',
      'Ironing service',
      'Dry cleaning',
      'Coffee maker',
      'Electric kettle',
      'Garden view',
      'Baby cots',
      'Desk or workstation'
    ]
  }
];

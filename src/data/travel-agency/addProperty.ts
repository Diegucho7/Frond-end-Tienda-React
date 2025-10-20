import {
  IconDefinition,
  faCartShopping,
  faFire,
  faUmbrellaBeach,
  faUniversalAccess,
  faUtensils,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import gallery59 from 'assets/img/gallery/59.png';
import gallery60 from 'assets/img/gallery/60.png';
import gallery61 from 'assets/img/gallery/61.png';
import gallery62 from 'assets/img/gallery/62.png';
import gallery63 from 'assets/img/gallery/63.png';

export interface AddPropertyWizardFormData {
  propertyName: string;
  propertyInfo: string;
  propertyType: string;
  propertyRating: string;
  contactEmail: string;
  contactNumber: number;
  propertyChain: string;
  channelManagement: string;

  apartment: string;
  state: string;
  country: string;
  city: string;
  zipCode: string;

  wifi: boolean;
  hotelBar: boolean;
  restaurant: boolean;
  commonAreas: boolean;
  pool: boolean;
  tennisCourts: boolean;
  noSmoking: boolean;
  parking: boolean;
  bathtub: boolean;
  beachView: boolean;
  flatScreenTv: boolean;
  balcony: boolean;

  photos: File[];
  paymentCurrency: string;
  paymentMethod: string;
  receivedPayment: string;
  cardType: string;
  cardNumber: string;
  cardHolderName: string;
  commissionPercentage: string;
  invoiceEmail: string;
  cashPayment: boolean;
  cardPayment: boolean;
  onlinePayment: boolean;

  // policy
  checkInType: string;
  checkInStarts: Date;
  checkInEnds: Date;
  ageRegistration: string;
  depositAtCheckin: string;
  documentationAtCheckin: string;
  lateCheckIn: boolean;

  checkinEnd: string;
  checkOutBefore: Date;
  flexibleCheckout: string;
  checkoutType: string;
  checkoutAmount: string;

  refundType: string;
  isFullRefand: string;
  isPartialRefand: string;

  petPolicyType: string;
  petRestictedZone: string;
  petAdditionalCharge: string;

  ageSegment1: number[];
  ageSegment2: number[];
  ageSegment3: number[];
  childDocPolicy: string;

  vat: string;
  taxType: string;
  taxAmount: string;
  depositAtCheckIn: string;
  gst: string;
  hotelTax: string;
  cityTax: string;
  touristTax: string;
  propertyRegNo: string;
  businessRegNo: string;
  taxpayeerIdNo: string;
}
interface PriceTier {
  id: string;
  name: string;
  className?: string;
}

interface GeneralAmenities {
  title: string;
  eventKey: string;
  icon: IconDefinition;
  innerItems: PriceTier[];
}
export interface PropertyDetails {
  property: string;
  value: string | number;
}
export interface PropertyDetailsWithTitle {
  name: string;
  data: PropertyDetails[];
}
export interface AccordionItemInterface {
  img1: string;
  img2: string;
  title: string;
  eventKey: string;
}
export interface SummaryTableProp {
  tableData: PropertyDetails[];
}

export const pictures = [gallery59, gallery60, gallery61, gallery62, gallery63];

export const addPropertyDefaultFormData: AddPropertyWizardFormData = {
  propertyName: 'With help text',
  propertyInfo:
    'Welcome to Phoenix Oasis, where luxury meets tranquility. Our hotel offers lavish accommodations, exquisite dining, rejuvenating spa experiences, and stunning views. Experience opulence redefined in a haven of serenity.',
  propertyType: 'Hotel',
  propertyRating: '5',
  contactEmail: 'phoenix.oasis@femail.com',
  contactNumber: 9349073716,
  propertyChain: 'With help text',
  channelManagement: 'Eagle Eye',

  apartment: '123 Luxe Boulevard',
  state: 'Suite 567',
  country: 'United States',
  city: 'Sunshine City',
  zipCode: 'AZ 85001',

  wifi: true,
  hotelBar: true,
  restaurant: true,
  commonAreas: true,
  pool: true,
  tennisCourts: true,
  noSmoking: true,
  parking: true,
  bathtub: true,
  beachView: true,
  flatScreenTv: true,
  balcony: true,

  photos: [],
  paymentCurrency: 'US Dollar',
  paymentMethod: 'Electronic Funds Transfer (EFT)',
  receivedPayment: 'Credit Card',
  cardType: 'Visa Debit Card',
  cardNumber: '123 456 7890',
  cardHolderName: 'Phoenix Oasis',
  commissionPercentage: 'Flat 10%',
  invoiceEmail: 'Not-Available',
  cashPayment: false,
  cardPayment: false,
  onlinePayment: false,

  // policy

  checkInType: 'Limited Check-in',
  checkInStarts: new Date(new Date().setHours(9, 0, 0, 0)),
  checkInEnds: new Date(new Date().setHours(12, 0, 0, 0)),
  ageRegistration: 'No',
  depositAtCheckin: 'No',
  documentationAtCheckin: 'No',
  lateCheckIn: true,

  checkinEnd: '12:00 PM',
  checkOutBefore: new Date(new Date().setHours(11, 0, 0, 0)),
  flexibleCheckout: 'Available',
  checkoutType: 'Amount per night',
  checkoutAmount: '$100.00',

  refundType: 'Optimal refund',
  isFullRefand: 'No',
  isPartialRefand: 'No',

  petPolicyType: 'Allowed',
  petRestictedZone: 'Not-Available',
  petAdditionalCharge: 'No',

  ageSegment1: [0, 7],
  ageSegment2: [7, 12],
  ageSegment3: [12, 18],
  childDocPolicy: 'Not-Available',

  vat: 'Available',
  taxType: 'Amount per night',
  taxAmount: '$100.00',
  depositAtCheckIn: 'No',
  gst: 'No',
  hotelTax: 'No',
  cityTax: 'No',
  touristTax: 'No',
  propertyRegNo: 'Null',
  businessRegNo: 'Null',
  taxpayeerIdNo: 'Null'
};

const popularAmenities: PriceTier[] = [
  {
    id: 'wifi',
    name: 'Wifi',
    className: 'my-3'
  },
  {
    id: 'breakfast',
    name: 'Breakfast'
  },
  {
    id: 'gym',
    name: 'Gym'
  },
  {
    id: 'swimming',
    name: 'Swimming pool'
  },
  {
    id: 'in-room',
    name: 'In-room coffee/tea'
  },
  {
    id: 'daily-housekeeping',
    name: 'Daily housekeeping'
  },
  {
    id: 'bar',
    name: 'Bar / Lounge'
  },
  {
    id: 'laundry',
    name: 'Laundry'
  },
  {
    id: 'newspaper',
    name: 'newspaper'
  },
  {
    id: 'bicycle',
    name: 'Bicycle'
  },
  {
    id: 'air',
    name: 'Air conditioning'
  },
  {
    id: 'games',
    name: 'Games room'
  },
  {
    id: 'beach',
    name: 'Beach view',
    className: 'mb-0'
  }
];

const FoodAndDrink: PriceTier[] = [
  {
    id: 'restaurants',
    name: 'Restaurants',
    className: 'my-3'
  },
  {
    id: 'bars',
    name: 'Bars'
  },
  {
    id: 'in-room-dining',
    name: 'In Room Dining'
  },
  {
    id: 'family-friendly-dining',
    name: 'Family-Friendly Dining'
  },
  {
    id: 'breakfast-buffet',
    name: 'Breakfast Buffet',
    className: 'mb-0'
  }
];

const OutdoorAndView: PriceTier[] = [
  {
    id: 'garden-or-courtyard',
    name: 'Garden Or Courtyard',
    className: 'my-3'
  },
  {
    id: 'scenic-views',
    name: 'Scenic Views'
  },
  {
    id: 'sunbathing-areas',
    name: 'Sunbathin Aareas'
  },
  {
    id: 'outdoor-lounge-areas',
    name: 'Outdoor Lounge Areas',
    className: 'mb-0'
  }
];

const EntertainmentAndFamily: PriceTier[] = [
  {
    id: 'game-room',
    name: 'Game Room',
    className: 'my-3'
  },
  {
    id: 'play-area',
    name: `Children's Play Area`
  },
  {
    id: 'sports-facilities',
    name: 'Sports Facilities'
  },
  {
    id: 'babysitting-services',
    name: 'Babysitting Services',
    className: 'mb-0'
  }
];

const MediaAndTechnology: PriceTier[] = [
  {
    id: 'high-speed-internet',
    name: 'High Speed Iinternet',
    className: 'my-3'
  },
  {
    id: 'business-center',
    name: `Business Center`
  },
  {
    id: 'video-conferencing',
    name: 'Video Conferencing Facilities'
  },
  {
    id: 'vr',
    name: 'Virtual Reality (VR) Experiences',
    className: 'mb-0'
  }
];

const accessibility: PriceTier[] = [
  {
    id: 'accessible-common-areas',
    name: 'Accessible Common Areas',
    className: 'my-3'
  },
  {
    id: 'accessible-parking-spaces',
    name: `Accessible Parking Spaces`
  },
  {
    id: 'accessible-fitness-center',
    name: 'Accessible Fitness Center'
  },
  {
    id: 'accessible-swimmings-pool',
    name: 'Accessible Swimming Pool',
    className: 'mb-0'
  }
];

export const generalAmenities: GeneralAmenities[] = [
  {
    title: 'Popular amenities',
    eventKey: '0',
    icon: faFire,
    innerItems: popularAmenities
  },
  {
    title: 'Food & Drink',
    eventKey: '1',
    icon: faUtensils,
    innerItems: FoodAndDrink
  },
  {
    title: 'Outdoor & View',
    eventKey: '2',
    icon: faUmbrellaBeach,
    innerItems: OutdoorAndView
  },
  {
    title: 'Entertainment & Family Services',
    eventKey: '3',
    icon: faCartShopping,
    innerItems: EntertainmentAndFamily
  },
  {
    title: 'Media & Technology',
    eventKey: '4',
    icon: faVideo,
    innerItems: MediaAndTechnology
  },
  {
    title: 'Accessibility',
    eventKey: '5',
    icon: faUniversalAccess,
    innerItems: accessibility
  }
];

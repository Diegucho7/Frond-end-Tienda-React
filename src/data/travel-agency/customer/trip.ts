import Img1 from 'assets/img/trip/1.png';
import Img2 from 'assets/img/trip/2.png';
import Img3 from 'assets/img/trip/3.png';
import Img4 from 'assets/img/trip/4.png';
import Img5 from 'assets/img/trip/5.png';
import Img6 from 'assets/img/trip/6.png';
import Img7 from 'assets/img/trip/7.png';
import Img8 from 'assets/img/trip/8.png';
import Img9 from 'assets/img/trip/9.png';

import Img10 from 'assets/img/trip/10.png';
import Img17 from 'assets/img/trip/17.png';
import Img18 from 'assets/img/trip/18.png';
import Img19 from 'assets/img/trip/19.png';
import Img20 from 'assets/img/trip/20.png';
import Img21 from 'assets/img/trip/21.png';
import Img22 from 'assets/img/trip/22.png';
import Img23 from 'assets/img/trip/23.png';
import Img24 from 'assets/img/trip/24.png';
import largeImg1 from 'assets/img/trip/11.jpg';
import largeImg2 from 'assets/img/trip/12.jpg';
import largeImg3 from 'assets/img/trip/13.jpg';
import largeImg4 from 'assets/img/trip/14.jpg';
import largeImg5 from 'assets/img/trip/15.jpg';
import largeImg6 from 'assets/img/trip/16.jpg';

import profile1 from 'assets/img/team/59.webp';
import profile2 from 'assets/img/team/58.webp';
import profile3 from 'assets/img/team/60.webp';

import Img25 from 'assets/img/trip/25.png';
import Img26 from 'assets/img/trip/26.png';
import Img27 from 'assets/img/trip/27.png';
import Img28 from 'assets/img/trip/28.png';
import Img29 from 'assets/img/trip/29.png';
import Img30 from 'assets/img/trip/30.png';
import Img31 from 'assets/img/trip/31.png';
import Img32 from 'assets/img/trip/32.png';
import Img33 from 'assets/img/trip/33.png';
import Img34 from 'assets/img/trip/10.png';

import largeImg7 from 'assets/img/trip/25_large.jpg';
import largeImg8 from 'assets/img/trip/26_large.jpg';
import largeImg9 from 'assets/img/trip/27_large.jpg';
import largeImg10 from 'assets/img/trip/28_large.jpg';
import largeImg11 from 'assets/img/trip/29_large.jpg';
import largeImg12 from 'assets/img/trip/30_large.jpg';
import largeImg13 from 'assets/img/trip/31_large.jpg';
import largeImg14 from 'assets/img/trip/32_large.jpg';
import largeImg15 from 'assets/img/trip/33_large.jpg';

export interface TripHomepageItems {
  id: number;
  title: string;
  location: string;
  price: number;
  days: number;
  maxPeople: number;
  image: string;
}

interface CheckboxItem {
  id: string;
  label: string;
  className?: string;
}

interface TagCheckboxItem {
  id: number;
  title: string;
  children: CheckboxItem[];
}

interface HomepageFilterCheckboxItem {
  categories: CheckboxItem[];
  durations: CheckboxItem[];
  times: CheckboxItem[];
  travelStyles: CheckboxItem[];
  tags: TagCheckboxItem[];
}

export interface TripOverview {
  cost: number;
  totalRate: number;
  totalReviews: number;
  recommendBy: number;
  tripLocation: string;
  tripDuration: string;
  minPeoples: number;
  maxPeoples: number;
  tripTags: string[];
  description: string;
}

export interface TripDetailsModalPricingPlan {
  id: number;
  name: string;
  facilities: {
    id: number;
    facility: string;
  }[];
  total: number;
  additionalCharge: number;
  checked: boolean;
}

export interface HighlightItem {
  id: number;
  image: string;
  largeImage: string;
}

export interface MostHighlightedImage {
  id: number;
  image: string;
}
export interface TripDetailsAlbum {
  mostHighlightedImage: MostHighlightedImage[];
  highlightImages: HighlightItem[];
}

export interface Expectation {
  id: number;
  event: string;
  description: string;
  duration: string;
  location: string;
}

interface Encompass {
  id: number;
  encompass: string;
}

export interface IncludeOrExclude {
  include: Encompass[];
  exclude: Encompass[];
}

export interface JourneyDetail {
  id: number;
  label: string;
  description: string;
}

export interface Accessibility {
  items: string[];
  query: string;
  promo: string;
  tel: string;
}

interface Additional {
  id: number;
  additionalItem: string;
}

interface PolicyItem {
  id: number;
  policyItem: string;
}

export interface Policy {
  id: number;
  label: string;
  policyItems: PolicyItem[];
}

export interface TourSummary {
  id: number;
  serial: number;
  label: string;
}

export interface TripDetailsTabDetailItem {
  expectation: Expectation[];
  includeOrExclude: IncludeOrExclude;
  departOrReturn: JourneyDetail[];
  accessibility: Accessibility;
  additional: Additional[];
  policy: Policy[];
  tourSummary: TourSummary[];
}

export interface ReviewStat {
  id: number;
  name: string;
  count: number;
}

export interface TripOverallReview {
  rating: number;
  status: string;
  reviewCount: number;
  reviewStates: ReviewStat[];
}

export interface UploadedImage {
  id: number;
  image: string;
  largeImg: string;
}
interface Reply {
  id: number;
  replier: string;
  reply: string;
}

export interface Comment {
  id: number;
  profilePic: string;
  commenter: string;
  liked: number;
  disliked: number;
  rate: number;
  commentTitle: string;
  commentDate: string;
  commentDes: string;
  uploadedImage?: UploadedImage[];
  replies: Reply[];
}

export interface TripReview {
  overallReview: TripOverallReview;
  comments: Comment[];
}

export interface SelectedTrip {
  image: string;
  title: string;
  date: string;
  people: string;
  pickupTime: string;
  dropOffTime: string;
  bookingFee: number;
  subTotal: number;
}

export const tripHomepageItems: TripHomepageItems[] = [
  {
    id: 1,
    title: 'Selfie with Snape',
    location: 'Hogwarts',
    price: 2340,
    days: 3,
    maxPeople: 24,
    image: Img1
  },
  {
    id: 2,
    title: 'Dine with Joker',
    location: 'Gotham',
    price: 4540,
    days: 5,
    maxPeople: 32,
    image: Img2
  },
  {
    id: 3,
    title: 'Ask Frodo to visit Mordor',
    location: 'The Shire',
    price: 3000,
    days: 2,
    maxPeople: 18,
    image: Img3
  },
  {
    id: 4,
    title: 'Sit on the iron throne',
    location: 'King’s Landing',
    price: 1500,
    days: 2,
    maxPeople: 10,
    image: Img4
  },
  {
    id: 5,
    title: 'Day out with Luke Skywalker',
    location: 'Tatooine',
    price: 2899,
    days: 3,
    maxPeople: 14,
    image: Img5
  },
  {
    id: 6,
    title: 'Feed the smelly cat',
    location: 'New York',
    price: 3799,
    days: 4,
    maxPeople: 12,
    image: Img6
  },
  {
    id: 7,
    title: 'Stormtrooper for a day',
    location: 'The Death Star',
    price: 2899,
    days: 3,
    maxPeople: 16,
    image: Img7
  },
  {
    id: 8,
    title: 'Walk where the king walked',
    location: 'Wakanda',
    price: 5999,
    days: 3,
    maxPeople: 20,
    image: Img8
  },
  {
    id: 9,
    title: 'Petting the ghost',
    location: 'Winterfell',
    price: 2999,
    days: 3,
    maxPeople: 10,
    image: Img9
  }
];

export const homepageFilterCheckboxItems: HomepageFilterCheckboxItem = {
  categories: [
    {
      id: 'attraction-show',
      label: 'Attraction & Shows'
    },
    {
      id: 'activities',
      label: 'Activities'
    },
    {
      id: 'day-tours',
      label: 'Day-tours'
    },
    {
      id: 'adventures',
      label: 'Adventures'
    },
    {
      id: 'sight-seeing',
      label: 'Sight-seeing'
    }
  ],
  durations: [
    {
      id: 'less-6-hours',
      label: 'Less than 6 hours'
    },
    {
      id: '6-12',
      label: '6 - 12 hours'
    },
    {
      id: '12-24',
      label: '12 - 24 hours',
      className: 'mb-0'
    },
    {
      id: '24+hours',
      label: '24+ hours',
      className: 'mb-0'
    }
  ],
  times: [
    {
      id: '8am-10am',
      label: '8 AM - 10 AM'
    },
    {
      id: '10am-12pm',
      label: '10 AM - 12 PM'
    },
    {
      id: '12pm-2pm',
      label: '12 PM - 2 PM'
    },
    {
      id: '2pm-4pm',
      label: '2 PM - 4 PM'
    },
    {
      id: '4pm-6pm',
      label: '4 PM - 6 PM'
    },
    {
      id: '6pm-8pm',
      label: '6 PM - 8 PM'
    }
  ],
  travelStyles: [
    {
      id: 'soloTravel',
      label: 'Solo Travel'
    },
    {
      id: 'groupTravel',
      label: 'Group Travel'
    },
    {
      id: 'familyFriendly',
      label: 'Family-Friendly',
      className: 'mb-0'
    },
    {
      id: 'adventureTravel',
      label: 'Adventure Travel',
      className: 'mb-0'
    }
  ],
  tags: [
    {
      id: 1,
      title: 'Destination Type',
      children: [
        {
          id: 'beach',
          label: 'Beach'
        },
        {
          id: 'mountain',
          label: 'Mountain'
        },
        {
          id: 'city',
          label: 'City'
        },
        {
          id: 'countryside',
          label: 'Countryside'
        },
        {
          id: 'island',
          label: 'Island'
        },
        {
          id: 'jungle',
          label: 'Jungle'
        }
      ]
    },
    {
      id: 2,
      title: 'Activities',
      children: [
        {
          id: 'hiking',
          label: 'Hiking'
        },
        {
          id: 'camping',
          label: 'Camping'
        },
        {
          id: 'sightseeing',
          label: 'Sightseeing'
        },
        {
          id: 'wildLifViewing',
          label: 'Wildlife Viewing'
        }
      ]
    },
    {
      id: 3,
      title: 'Season',
      children: [
        {
          id: 'summer',
          label: 'Summer'
        },
        {
          id: 'winter',
          label: 'Winter'
        },
        {
          id: 'spring',
          label: 'Spring'
        },
        {
          id: 'autumn',
          label: 'Fall/Autumn'
        }
      ]
    },
    {
      id: 4,
      title: 'Budget',
      children: [
        {
          id: 'luxury',
          label: 'Luxury'
        },
        {
          id: 'midRange',
          label: 'Mid-range'
        },
        {
          id: 'budget',
          label: 'Budget'
        }
      ]
    },
    {
      id: 5,
      title: 'Accommodation',
      children: [
        {
          id: 'hotel',
          label: 'Hotel'
        },
        {
          id: 'resort',
          label: 'Resort'
        },
        {
          id: 'vacationRental',
          label: 'Vacation Rental'
        },
        {
          id: 'homeStay',
          label: 'Homestay'
        }
      ]
    }
  ]
};

export const tripOverview: TripOverview = {
  cost: 300,
  totalReviews: 32,
  totalRate: 5,
  recommendBy: 25,
  tripLocation: 'Birnin Zana, Wakanda',
  tripDuration: '3 Days, 1 Night',
  minPeoples: 1,
  maxPeoples: 12,
  tripTags: ['sightseeing', 'eco-tourism'],
  description: `A private guide will allow you to fully experience Wakanda's native culture 
  without having to worry about getting lost. Set out on a full-day tour that concentrates on 
  off-the-beaten-path sites like the active wholesale markets for produce and seafood. The 
  old-fashioned way to get around is via rickshaw, which allows for a slower, more immersive 
  journey through the bustling streets. Visitors can also explore local art workshops, 
  historic landmarks, and enjoy traditional cuisine prepared with fresh, local ingredients. 
  The experience promises a unique look at the hidden treasures of Wakanda that most travelers 
  miss out on, giving you stories and memories that last a lifetime.`
};

export const tripDetailsModalPricingPlan: TripDetailsModalPricingPlan[] = [
  {
    id: 44,
    name: 'Economy Plan',
    facilities: [
      { id: 22, facility: 'Non A/C transport' },
      { id: 23, facility: 'No extra luggage carrier' }
    ],
    total: 87,
    additionalCharge: 0,
    checked: true
  },
  {
    id: 45,
    name: 'Business/Premium Plan',
    facilities: [
      { id: 32, facility: 'A/C transport' },
      { id: 33, facility: 'Extra luggage carrier' }
    ],
    total: 120,
    additionalCharge: 0,
    checked: false
  }
];

export const tripDetailsAlbum: TripDetailsAlbum = {
  mostHighlightedImage: [
    {
      id: 1,
      image: Img10
    },
    {
      id: 2,
      image: Img17
    },
    {
      id: 3,
      image: Img18
    }
  ],
  highlightImages: [
    {
      id: 4,
      image: Img19,
      largeImage: largeImg1
    },
    {
      id: 5,
      image: Img20,
      largeImage: largeImg2
    },
    {
      id: 6,
      image: Img21,
      largeImage: largeImg3
    },
    {
      id: 7,
      image: Img22,
      largeImage: largeImg4
    },
    {
      id: 8,
      image: Img23,
      largeImage: largeImg5
    },
    {
      id: 9,
      image: Img24,
      largeImage: largeImg6
    }
  ]
};

export const tripDetailsTabDetailItems: TripDetailsTabDetailItem = {
  expectation: [
    {
      id: 1,
      event: 'Breakfast in Birnin Zana',
      description:
        'Enjoy the traditional Wakandan bread and butter, along with the sweet aroma of freshly baked cakes, beside the large streets of Birnin Zana.',
      duration: '30 min',
      location: 'Royal street, Birnin Zana'
    },
    {
      id: 2,
      event: 'Safari at the Alkama fields',
      description:
        'Observe the Wakandan wildlife in its natural habitat in the savanna of Alkama.',
      duration: '2 hours',
      location: 'Zone 23, Alkama'
    },
    {
      id: 3,
      event: 'Jabari tribe habitats',
      description:
        'See the colorful lifestyle of the people from the Jabari tribe. Interact with the locals, visit their shops, and buy famous traditional Jabari articles of clothing.',
      duration: '1 hour',
      location: 'Jabariland'
    },
    {
      id: 4,
      event: 'King T’Challa’s memorial',
      description: `Visit the tomb of the greatest king of Wakanda, King T'Challa, the black panther.`,
      duration: '1 hour',
      location: 'Birnin Bashenga'
    },
    {
      id: 5,
      event: 'Lunch',
      description:
        'Have lunch with the authentic cuisine of Wakanda at the mountaintop restaurant of Mena Ngai.',
      duration: '1 hour',
      location: 'Vibranium hill top restaurant, the Great Mount'
    }
  ],
  includeOrExclude: {
    include: [
      {
        id: 6,
        encompass: 'PhoenixTrip experience brokerage free'
      },
      {
        id: 7,
        encompass: 'Bottled water'
      },
      {
        id: 8,
        encompass: 'Professional guide'
      },
      {
        id: 9,
        encompass: 'Hotel pickup and drop off'
      },
      {
        id: 10,
        encompass: 'Private tour'
      }
    ],
    exclude: [
      {
        id: 11,
        encompass: 'Gratuities'
      },
      {
        id: 12,
        encompass: 'Snacks'
      },
      {
        id: 13,
        encompass: 'Air-conditioned vehicle'
      }
    ]
  },
  departOrReturn: [
    {
      id: 14,
      label: 'Departure details',
      description: `Traveler pickup is offered. We will pickup you all from your pickup places even it's home or hotel inside Birnin Zana. Hotel pickup is offered. View the hotel list on our checkout page to see if yours is included.`
    },
    {
      id: 15,
      label: 'Return details',
      description: `Returns to the original departure point.`
    }
  ],
  accessibility: {
    items: [
      'Infant seats available',
      'Wheelchair accessible',
      'Service animals allowed',
      'Infants must sit on lap'
    ],
    query:
      'If you have questions about accessibility, we’d be happy to help. Just call the number below and reference the product code:',
    promo: '74936P4',
    tel: '+1 800 000 000'
  },
  additional: [
    {
      id: 16,
      additionalItem: 'Confirmation will be received at time of booking'
    },
    {
      id: 17,
      additionalItem: 'Minimum age is 18 years'
    },
    {
      id: 18,
      additionalItem: 'Infant meals not included'
    },
    {
      id: 19,
      additionalItem: 'A minimum if 01 people per booking is required'
    },
    {
      id: 20,
      additionalItem: 'Most travelers can participate'
    },
    {
      id: 21,
      additionalItem:
        'This tour is to explore the city using local transportation like rickshaw , tuktuk, uber.'
    },
    {
      id: 22,
      additionalItem: `Woman's need to cover the head during visiting mosque`
    },
    {
      id: 23,
      additionalItem:
        'This is a private tour / activity. Only your group will participate.'
    }
  ],
  policy: [
    {
      id: 24,
      label: 'Cancellation',
      policyItems: [
        {
          id: 25,
          policyItem:
            'To cancel any tour, an email has to be sent to tours@phoenix.com mentioning the tour booking ID and details about the cancellation.'
        },
        {
          id: 26,
          policyItem:
            'The time of sending the email will be considered as the time of cancellation.'
        },
        {
          id: 27,
          policyItem:
            'The email will be considered as the final application for cancellation. A phone call to the Phoenix hotline number or any other team member of Phoenix will not be considered as a request for cancellation of booking.'
        }
      ]
    },
    {
      id: 28,
      label: 'Refund',
      policyItems: [
        {
          id: 29,
          policyItem:
            'The full amount of the tour fee will be refunded if the booking is canceled five (5) days prior to the start of the experience/tour.'
        },
        {
          id: 30,
          policyItem:
            'Fifty Percent (50%) of the tour fee will be refunded if the booking is canceled three (3) days prior to the start of the experience/tour.'
        },
        {
          id: 31,
          policyItem:
            'No refund will be provided if the booking is canceled less than three (3) days prior to the start of the experience/tour.'
        },
        {
          id: 32,
          policyItem:
            'Convenience fee is non-refundable and will be deducted from the paid amount.'
        },
        {
          id: 33,
          policyItem:
            'All refunds will be processed within seven (7) working days.'
        }
      ]
    },
    {
      id: 34,
      label: 'Child policy',
      policyItems: [
        {
          id: 35,
          policyItem:
            'No fee will be needed for children below the age of four (4). No separate seat will be provided in case of transportation and accommodation.'
        },
        {
          id: 36,
          policyItem:
            '50% fee must be paid for any child between the age of five (5) and ten (10) years old.'
        },
        {
          id: 37,
          policyItem:
            'Full amount of money must be paid for anyone above ten (10) years old.'
        }
      ]
    }
  ],
  tourSummary: [
    {
      id: 38,
      serial: 1,
      label: 'Breakfast'
    },
    {
      id: 39,
      serial: 2,
      label: 'Desert safari'
    },
    {
      id: 40,
      serial: 3,
      label: 'Jabari tribe habitats'
    },
    {
      id: 41,
      serial: 4,
      label: 'King T’Challa’s memorial'
    },
    {
      id: 42,
      serial: 5,
      label: 'Lunch'
    }
  ]
};

export const tripDetailsReviews: TripReview = {
  overallReview: {
    rating: 5,
    reviewCount: 32,
    status: 'recommended',
    reviewStates: [
      {
        id: 55,
        name: 'Excellent',
        count: 24
      },
      {
        id: 56,
        name: 'Very good',
        count: 8
      },
      {
        id: 57,
        name: 'Average',
        count: 0
      },
      {
        id: 58,
        name: 'Poor',
        count: 0
      },
      {
        id: 59,
        name: 'Terrible',
        count: 0
      }
    ]
  },
  comments: [
    {
      id: 1,
      profilePic: profile1,
      commenter: 'Navina Koothrapali',
      rate: 5,
      liked: 35,
      disliked: 2,
      commentTitle: 'Memorable day in Wakanda',
      commentDes:
        "First time here in Wakanda, nice weather but one thing can't miss out was the one day highlight city tour guided by Shuri from Panther Travels. Shuri came in earlier to pick me up at the hotel and we started the tour with a good briefing by him. The activities were packed and the information given to me was clear and useful, really appreciated Shuri's knowledge and care for the tour, which included memorable stories of not only Birnin but also people in Wakanda. Look forward to coming back again! Navina Koothrapali from Hong Kong",
      commentDate: 'Oct 2022',
      replies: [
        {
          id: 2,
          replier: 'Panther Travels Limited',
          reply:
            "Great to have your review on our tour. It's our honor to get a tourist like you. Good luck to you. Hope to see you again."
        }
      ]
    },
    {
      id: 3,
      profilePic: profile2,
      commenter: 'Henry Cavill',
      rate: 5,
      liked: 24,
      disliked: 3,
      commentTitle: 'Unforgettable experience',
      commentDes:
        'Great tour in beautiful Wakanda. Everything we imagined about Wakanda changed in a day. Kind and lovely people all around. Unforgettable experience.',
      commentDate: 'Oct 2022',
      uploadedImage: [
        {
          id: 70,
          image: Img25,
          largeImg: largeImg7
        },
        {
          id: 71,
          image: Img26,
          largeImg: largeImg8
        },
        {
          id: 73,
          image: Img27,
          largeImg: largeImg9
        },
        {
          id: 74,
          image: Img28,
          largeImg: largeImg10
        },
        {
          id: 75,
          image: Img29,
          largeImg: largeImg11
        },
        {
          id: 76,
          image: Img30,
          largeImg: largeImg12
        }
      ],
      replies: [
        {
          id: 10,
          replier: 'Panther Travels Limited',
          reply:
            'Thanks for this review. It is a great motivation from you. Hope to see you again in Wakanda. Good luck.'
        }
      ]
    },
    {
      id: 11,
      profilePic: profile3,
      commenter: 'Ibn Batuta',
      rate: 4,
      liked: 45,
      disliked: 1,
      commentTitle:
        "Great 1 day trip which makes you feel as if you've seen the whole of Wakanda",
      commentDes:
        "I've seen so much in one day thanks to the great guidance of Mehdi, who customized the trip as per how we felt. I recommend this trip and this guide.",
      commentDate: 'Oct 2022',
      uploadedImage: [
        {
          id: 77,
          image: Img31,
          largeImg: largeImg13
        },
        {
          id: 78,
          image: Img32,
          largeImg: largeImg14
        },
        {
          id: 79,
          image: Img33,
          largeImg: largeImg15
        }
      ],
      replies: [
        {
          id: 2,
          replier: 'Panther Travels Limited',
          reply:
            'Thanks for this review. It is a great motivation from you. Hope to see you again in Wakanda. Good luck.'
        }
      ]
    }
  ]
};

export const selectedTrip: SelectedTrip = {
  image: Img34,
  title: 'Walk where the king walked once in Wakanda',
  date: 'March 9, 2023',
  people: '1 adult',
  pickupTime: '10:00 am',
  dropOffTime: '10:00 am',
  bookingFee: 0,
  subTotal: 300
};

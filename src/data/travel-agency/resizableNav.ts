interface ResizableNavItem {
  id: number;
  label: string;
  url: string;
}

export interface ResizableNav {
  navItems: ResizableNavItem[];
}

export const landingNavItems: ResizableNavItem[] = [
  {
    id: 1,
    label: 'Homepage',
    url: '/apps/travel-agency/flight/homepage'
  },
  {
    id: 2,
    label: 'Checkout',
    url: '/apps/travel-agency/hotel/customer/checkout'
  }
];

export const hotelNavItems: ResizableNavItem[] = [
  {
    id: 1,
    label: 'Homepage',
    url: '/apps/travel-agency/hotel/customer/homepage'
  },
  {
    id: 2,
    label: 'Hotel Details',
    url: '/apps/travel-agency/hotel/customer/hotel-details'
  },
  {
    id: 3,
    label: 'Hotel Compare',
    url: '/apps/travel-agency/hotel/customer/hotel-compare'
  },
  {
    id: 4,
    label: 'Checkout',
    url: '/apps/travel-agency/hotel/customer/checkout'
  },
  {
    id: 5,
    label: 'Payment',
    url: '/apps/travel-agency/hotel/customer/payment'
  },
  {
    id: 6,
    label: 'Gallery',
    url: '/apps/travel-agency/hotel/customer/gallery'
  }
];

export const flightNavItems: ResizableNavItem[] = [
  {
    id: 1,
    label: 'Homepage',
    url: '/apps/travel-agency/flight/homepage'
  },
  {
    id: 2,
    label: 'Booking',
    url: '/apps/travel-agency/flight/booking'
  },
  {
    id: 3,
    label: 'Payment',
    url: '/apps/travel-agency/flight/payment'
  }
];

export const tripNavItems: ResizableNavItem[] = [
  {
    id: 1,
    label: 'Homepage',
    url: '/apps/travel-agency/trip/homepage'
  },
  {
    id: 2,
    label: 'Trip Details',
    url: '/apps/travel-agency/trip/trip-details'
  },
  {
    id: 3,
    label: 'Checkout',
    url: '/apps/travel-agency/trip/checkout'
  }
];

import china from 'assets/img/country/china-2.png';
import usa from 'assets/img/country/usa-2.png';
import india from 'assets/img/country/india-2.png';
import phoenixFirelines from 'assets/img/brands/phoenix-firelines.png';
import qatarAirways from 'assets/img/brands/qatar-airways.png';
import japanAirlines from 'assets/img/brands/jal.png';
import emirates from 'assets/img/brands/emirates.png';
// import china from 'assets/img/country/china.png';
// import usa from 'assets/img/country/usa.png';
import canada from 'assets/img/country/canada.png';
import denmark from 'assets/img/country/denmark.png';
import southKorea from 'assets/img/country/south-korea.png';
import qatar from 'assets/img/country/qatar.png';
import norway from 'assets/img/country/norway.png';
import { BadgeBg } from 'components/base/Badge';

import {
  IconDefinition,
  faCloudBolt,
  faCloudShowersHeavy,
  faSun,
  faWind
} from '@fortawesome/free-solid-svg-icons';

interface FinancialActivities {
  profitData: number[][];
  revenueData: number[][];
  expensesData: number[][];
}
export const FinancialActivitiesData: FinancialActivities = {
  profitData: [
    [350000, 390000, 410700, 450000, 390000, 410700],
    [245000, 310000, 420000, 480000, 530000, 580000],
    [278450, 513220, 359890, 444567, 201345, 589000]
  ],
  revenueData: [
    [-810000, -640000, -630000, -590000, -620000, -780000],
    [-482310, -726590, -589120, -674832, -811245, -455678],
    [-432567, -688921, -517389, -759234, -601876, -485112]
  ],
  expensesData: [
    [-450000, -250000, -200000, -120000, -230000, -270000],
    [-243567, -156789, -398234, -120456, -321890, -465678],
    [-235678, -142345, -398765, -287456, -173890, -451234]
  ]
};

interface bookings {
  fullfilledData: number[][];
  cencelledData: number[][];
}
export const bookingsData: bookings = {
  fullfilledData: [
    [3500, 2500, 2600, 3400, 2300, 3200, 2800, 2800],
    [2736, 3874, 4192, 1948, 3567, 4821, 2315, 3986],
    [2789, 3895, 2147, 4658, 1723, 3210, 4386, 1974]
  ],
  cencelledData: [
    [-1500, -2700, -1100, -1400, -1600, -1400, -1100, -2700],
    [-3874, -2631, -4422, -1765, -3198, -4910, -2087, -4675],
    [-2789, -3895, -2147, -4658, -1723, -3210, -4386, -1974]
  ]
};

export type visitorData = {
  country: {
    name: string;
    flag: string; // path
  };
  users: {
    number: string;
    percantage: string;
  };
  status: {
    type?: BadgeBg;
    label: string;
  };
};

export const visitorData: visitorData[] = [
  {
    country: {
      name: 'India',
      flag: india
    },
    users: {
      number: '92,896',
      percantage: '41.6%'
    },
    status: {
      type: 'info',
      label: '15.21%'
    }
  },
  {
    country: {
      name: 'China',
      flag: china
    },
    users: {
      number: '50,496',
      percantage: '32.8%'
    },
    status: {
      type: 'warning',
      label: '05.21%'
    }
  },
  {
    country: {
      name: 'USA',
      flag: usa
    },
    users: {
      number: '45,679',
      percantage: '24.3%'
    },
    status: {
      type: 'primary',
      label: '22.12%'
    }
  }
];

interface routes {
  flightNo: number;
  airLine: string;
  logo: string;
  from: string;
  to: string;
}

export const routes: routes[] = [
  {
    flightNo: 1,
    airLine: 'EK204 (AK98)',
    logo: phoenixFirelines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 2,
    airLine: 'EK204 (AK98)',
    logo: phoenixFirelines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 3,
    airLine: 'EK204 (AK98)',
    logo: qatarAirways,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 4,
    airLine: 'EK204 (AK98)',
    logo: japanAirlines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 5,
    airLine: 'EK204 (AK98)',
    logo: japanAirlines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 5,
    airLine: 'EK204 (AK98)',
    logo: japanAirlines,
    from: 'RIG',
    to: 'LAX'
  },
  {
    flightNo: 5,
    airLine: 'EK204 (AK98)',
    logo: japanAirlines,
    from: 'RIG',
    to: 'LAX'
  }
];

export interface profitInterface {
  title: string;
  bgColor: string;
  profit: string;
  percent: string;
  icon: string;
  color: string;
}

export const profitData: profitInterface[] = [
  {
    title: 'Flight',
    bgColor: 'primary-light',
    profit: '162,791,400',
    percent: '15.50',
    icon: 'trending-up',
    color: 'primary'
  },
  {
    title: 'Flight (Package)',
    bgColor: 'info-light',
    profit: '135,659,500',
    percent: '11.09',
    icon: 'trending-down',
    color: 'danger'
  },
  {
    title: 'Hotel',
    bgColor: 'warning-light',
    profit: '271,319,000',
    percent: '29.98',
    icon: 'trending-up',
    color: 'success'
  },
  {
    title: 'Hotel (Package)',
    bgColor: 'success-light',
    profit: '162,791,400',
    percent: '03.90',
    icon: 'trending-up',
    color: 'warning'
  }
];

export interface FlightInterface {
  flightNo: string;
  vendor: {
    image: string;
    name: string;
  };
  route: {
    from: {
      flag: string;
      airport: string;
    };
    to: {
      flag: string;
      airport: string;
    };
  };
  destination: {
    currentPosition: string;
    target: string;
    percent: number;
  };
  weather: {
    temperature: number;
    weather: string;
    icon: IconDefinition;
    color: string;
  };
  time: {
    time: string;
    date: string;
  };
  status: {
    label: string;
    type: string;
  };
}

export const flightsData: FlightInterface[] = [
  {
    flightNo: '#24349',
    vendor: {
      image: phoenixFirelines,
      name: 'Phoenix Firelines'
    },
    route: {
      from: {
        flag: usa,
        airport: 'LAX'
      },
      to: {
        flag: canada,
        airport: 'YVR'
      }
    },
    destination: {
      currentPosition: '180 km, 00h:15m ago',
      target: '955 km, in 01h:25m',
      percent: 25
    },
    weather: {
      temperature: 15,
      weather: 'Stormy',
      icon: faCloudBolt,
      color: 'text-body-tertiary'
    },
    time: {
      time: '08:26 PM',
      date: 'Sunday, Nov 06, 2022'
    },
    status: {
      label: 'Delayed',
      type: 'warning'
    }
  },
  {
    flightNo: '#23421',
    vendor: {
      image: qatarAirways,
      name: 'Qatar Airways'
    },
    route: {
      from: {
        flag: denmark,
        airport: 'EBJ'
      },
      to: {
        flag: southKorea,
        airport: 'CDG'
      }
    },
    destination: {
      currentPosition: '600 km, 02h:15m ago',
      target: '1,200 km, in 02h:25m',
      percent: 60
    },
    weather: {
      temperature: 28,
      weather: 'Sunny',
      icon: faSun,
      color: 'text-warning'
    },
    time: {
      time: '07:23 PM',
      date: 'Monday, Nov 05, 2022'
    },
    status: {
      label: 'On Time',
      type: 'primary'
    }
  },
  {
    flightNo: '#23132',
    vendor: {
      image: japanAirlines,
      name: 'Japan Airlines'
    },
    route: {
      from: {
        flag: china,
        airport: 'GOT'
      },
      to: {
        flag: usa,
        airport: 'BCN'
      }
    },
    destination: {
      currentPosition: '500 km, 00h:56m ago',
      target: '3,455 km, in 03h:25m',
      percent: 25
    },
    weather: {
      temperature: 22,
      weather: 'Wind',
      icon: faWind,
      color: 'text-info'
    },
    time: {
      time: '07:23 PM',
      date: 'Monday, Nov 05, 2022'
    },
    status: {
      label: 'Departure',
      type: 'success'
    }
  },
  {
    flightNo: '#22267',
    vendor: {
      image: emirates,
      name: 'Emirate'
    },
    route: {
      from: {
        flag: qatar,
        airport: 'DIA'
      },
      to: {
        flag: norway,
        airport: 'OSL'
      }
    },
    destination: {
      currentPosition: '00 km, 00h:00m ago',
      target: '00 km, in 00h:00m',
      percent: 0
    },
    weather: {
      temperature: 5,
      weather: 'Heavy rain',
      icon: faCloudShowersHeavy,
      color: 'text-danger'
    },
    time: {
      time: '07:23 PM',
      date: 'Monday, Nov 05, 2022'
    },
    status: {
      label: 'Cancelled',
      type: 'danger'
    }
  },
  {
    flightNo: '#41242',
    vendor: {
      image: emirates,
      name: 'Emirate'
    },
    route: {
      from: {
        flag: qatar,
        airport: 'DIA'
      },
      to: {
        flag: norway,
        airport: 'OSL'
      }
    },
    destination: {
      currentPosition: '26512 km, .02h:56m ago',
      target: '3,455 km, in 03h:25m',
      percent: 75
    },
    weather: {
      temperature: 5,
      weather: 'Heavy rain',
      icon: faCloudShowersHeavy,
      color: 'text-danger'
    },
    time: {
      time: '07:23 PM',
      date: 'Monday, Nov 05, 2022'
    },
    status: {
      label: 'On Time',
      type: 'primary'
    }
  }
];

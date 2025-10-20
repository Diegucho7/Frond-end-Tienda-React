interface FlightStop {
  id: string;
  label: string;
  className: string;
}

interface ScheduleCheck {
  id: string;
  label: string;
}

interface FlightSchedule {
  id: number;
  title: string;
  name: string;
  className: string;
  scheduleChecks: ScheduleCheck[];
}

interface FlightAirport {
  id: string;
  label: string;
  airports: string[];
}

interface FlightAirline {
  id: string;
  label: string;
}

interface FlightCabin {
  id: string;
  label: string;
}

interface FlightAircraft {
  id: string;
  label: string;
}

export const flightStops: FlightStop[] = [
  {
    id: 'fligtStopsDirect',
    label: 'Direct',
    className: ''
  },
  {
    id: 'fligtStops1',
    label: '1 stop',
    className: ''
  },
  {
    id: 'fligtStops2',
    label: '2 stop',
    className: 'mb-0'
  }
];

export const flightSchedules: FlightSchedule[] = [
  {
    id: 1,
    title: 'Departure',
    name: 'flightDepartureTime',
    className: 'mb-4',
    scheduleChecks: [
      {
        id: 'departure8AMTo10AM',
        label: '8 AM - 10 AM'
      },
      {
        id: 'departure10AMTo12PM',
        label: '10 AM - 12 PM'
      },
      {
        id: 'departure12PMTo2PM',
        label: '12 PM - 2 PM'
      },
      {
        id: 'departure2PMTo4PM',
        label: '2 PM - 4 PM'
      },
      {
        id: 'departure4PMTo6PM',
        label: '4 PM - 6 PM'
      },
      {
        id: 'departure6PMTo8PM',
        label: '6 PM - 8 PM'
      }
    ]
  },
  {
    id: 2,
    title: 'Arrival',
    name: 'flightArrivalTime',
    className: '',
    scheduleChecks: [
      {
        id: 'arrival8AMTo10AM',
        label: '8 AM - 10 AM'
      },
      {
        id: 'arrival10AMTo12PM',
        label: '10 AM - 12 PM'
      },
      {
        id: 'arrival12PMTo2PM',
        label: '12 PM - 2 PM'
      },
      {
        id: 'arrival2PMTo4PM',
        label: '2 PM - 4 PM'
      },
      {
        id: 'arrival4PMTo6PM',
        label: '4 PM - 6 PM'
      },
      {
        id: 'arrival6PMTo8PM',
        label: '6 PM - 8 PM'
      }
    ]
  }
];

export const flightAirports: FlightAirport[] = [
  {
    id: 'dhakaAirports',
    label: 'Dhaka',
    airports: ['DAC : Hazrat Shahjalal International Airport']
  },
  {
    id: 'sylhetAirports',
    label: 'Sylhet',
    airports: [
      'ZYL : Osmani International Airport',
      'GNJ : Gajikalu Interdimensional Airport'
    ]
  }
];

export const flightAirlines: FlightAirline[] = [
  {
    id: 'novoair',
    label: 'NOVOAIR'
  },
  {
    id: 'biman',
    label: 'Biman Bangladesh Airlines'
  },
  {
    id: 'usBangla',
    label: 'US Bangla'
  },
  {
    id: 'airAstra',
    label: 'Air Astra'
  }
];

export const flightCabins: FlightCabin[] = [
  {
    id: 'economy',
    label: 'Economy'
  },
  {
    id: 'business',
    label: 'Business'
  }
];

export const flightAircraft: FlightAircraft[] = [
  {
    id: 'aircraft738',
    label: '738'
  },
  {
    id: 'aircraftAT7',
    label: 'AT-7'
  },
  {
    id: 'aircraftA320',
    label: 'A320'
  },
  {
    id: 'aircraft787',
    label: '787 Dreamliner'
  }
];

export type ForecastTableData = {
  contact: {
    name: string;
    profileLink: string;
  };
  appointment: number;
  qualified: number;
  closed_won: number;
  contact_sent: number;
};

export const contactSourceData = [
  { name: 'Organic', value: 80, color: 'primary' },
  { name: 'Paid Search', value: 65, color: 'success' },
  { name: 'Direct', value: 40, color: 'info' },
  { name: 'Social', value: 220, color: 'info-light' },
  { name: 'Referrals', value: 120, color: 'danger-lighter' },
  { name: 'Others', value: 35, color: 'warning-light' }
];

export const dealForecastTableData: ForecastTableData[] = [
  {
    contact: {
      name: 'Carrie Anne',
      profileLink: '#!'
    },
    appointment: 1000,
    qualified: 1256,
    closed_won: 1200,
    contact_sent: 1200
  },
  {
    contact: {
      name: 'Milind Mikuja',
      profileLink: '#!'
    },
    appointment: 558,
    qualified: 2531,
    closed_won: 2200,
    contact_sent: 2200
  },
  {
    contact: {
      name: 'Stanley Drinkwater',
      profileLink: '#!'
    },
    appointment: 1100,
    qualified: 100,
    closed_won: 100,
    contact_sent: 100
  },
  {
    contact: {
      name: 'Josef Stravinsky',
      profileLink: '#!'
    },
    appointment: 856,
    qualified: 326,
    closed_won: 265,
    contact_sent: 265
  },
  {
    contact: {
      name: 'Roy Anderson',
      profileLink: '#!'
    },
    appointment: 1200,
    qualified: 1452,
    closed_won: 865,
    contact_sent: 865
  },
  {
    contact: {
      name: 'Oscar Wilde',
      profileLink: '#!'
    },
    appointment: 1020,
    qualified: 950,
    closed_won: 1000,
    contact_sent: 800
  }
];

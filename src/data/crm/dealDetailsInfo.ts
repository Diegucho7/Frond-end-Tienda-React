export interface DealDetailsInfoType {
  id: number;
  title: string;
  value: string;
  icon: string;
  color: string;
}

export const dealDetailsInfoData: DealDetailsInfoType[][] = [
  [
    {
      id: 1,
      title: 'Probability (%)',
      value: '12.5',
      icon: 'bar-chart-2',
      color: 'success'
    },
    {
      id: 2,
      title: 'Revenue',
      value: '$1,500.00',
      icon: 'trending-up',
      color: 'info'
    }
  ],
  [
    {
      id: 3,
      title: 'Phone',
      value: '+11 123 456 789',
      icon: 'phone',
      color: 'primary'
    },
    {
      id: 4,
      title: 'Email',
      value: 'jacksonpol@email.com',
      icon: 'mail',
      color: 'warning'
    }
  ],
  [
    {
      id: 5,
      title: 'Contact Name',
      value: 'Jackson Pollock',
      icon: 'users',
      color: 'success'
    },
    {
      id: 6,
      title: 'Modified By',
      value: 'Ansolo Lazinatov',
      icon: 'edit',
      color: 'info'
    }
  ],
  [
    {
      id: 7,
      title: 'Create Date',
      value: 'Nov 30, 2022',
      icon: 'clock',
      color: 'info'
    },
    {
      id: 8,
      title: 'Closing Date',
      value: 'Dec 15, 2022',
      icon: 'edit',
      color: 'warning'
    }
  ]
];

export interface Stat {
  id: number;
  title: string;
  value: string;
  icon: string;
  color: string;
}

export const stats: Stat[] = [
  {
    id: 1,
    title: 'Deal Amount',
    value: '$12,000.00',
    icon: 'dollar-sign',
    color: 'success'
  },
  {
    id: 2,
    title: 'Deal Code',
    value: 'PHO1234',
    icon: 'code',
    color: 'info'
  },
  {
    id: 3,
    title: 'Deal Type',
    value: 'New Business',
    icon: 'layout',
    color: 'primary'
  }
];

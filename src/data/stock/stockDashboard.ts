type ChartType = 'default' | 'mixed' | 'inverted';

export interface StockDashboardOverviewItemProps {
  id: number;
  title: string;
  stockValue: number;
  isPositive: boolean;
  totalValue: number;
  className?: string;
  chartType: ChartType;
  echartsData: number[];
}

export interface StockDashboardTableDataType {
  symbol: string;
  name: string;
  price: number;
  change: number;
  className?: string;
}

export const dashboardOverViewItems: StockDashboardOverviewItemProps[] = [
  {
    id: 1,
    title: 'S&P 500',
    stockValue: 0.97,
    isPositive: true,
    totalValue: 5751.13,
    chartType: 'default',
    echartsData: [
      70, 50, 85, 45, 200, 193, 196, 210, 198, 210, 103, 120, 84, 95, 130, 123,
      214, 245, 287, 348, 356, 390
    ]
  },
  {
    id: 2,
    title: 'Dow 30',
    stockValue: 0.5,
    isPositive: false,
    totalValue: 42080.37,
    chartType: 'mixed',
    echartsData: [
      -100, 190, 200, -200, -190, 300, -110, 100, -100, 250, 200, 190, -80, 50,
      40, 200, -200, 200, 150, 160, 300, -100
    ]
  },
  {
    id: 3,
    title: 'Nasdaq',
    stockValue: 1.45,
    isPositive: true,
    totalValue: 42080.37,
    chartType: 'default',
    echartsData: [
      400, 450, 500, 490, 600, 550, 400, 350, 200, 250, 180, 350, 320, 330, 320,
      450, 480, 350, 345, 200, 320, 400
    ]
  },
  {
    id: 4,
    title: 'FTSE 100',
    stockValue: 1.36,
    isPositive: false,
    totalValue: 8190.61,
    chartType: 'inverted',
    echartsData: [
      -500, -300, -250, -280, -150, -250, -300, -180, -145, -250, -46, -250,
      -90, -80, -85, -150, -250, -180, -175, -50
    ]
  },
  {
    id: 5,
    title: 'Crude Oil',
    stockValue: 0.64,
    isPositive: false,
    totalValue: 6705.13,
    chartType: 'inverted',
    echartsData: [
      -600, -500, -450, -480, -450, -350, -400, -680, -145, -650, -546, -450,
      -590, -380, -585, -250, -550, -680, -375, -250
    ]
  },
  {
    id: 6,
    title: 'Russell',
    stockValue: 9.09,
    isPositive: true,
    totalValue: 2275.88,
    chartType: 'default',
    echartsData: [
      500, 450, 600, 690, 700, 550, 400, 350, 200, 250, 180, 350, 320, 330, 320,
      450, 480, 450, 445, 300, 420, 600
    ]
  },
  {
    id: 7,
    title: 'VIX',
    stockValue: 9.99,
    isPositive: false,
    totalValue: 24.28,
    chartType: 'inverted',
    echartsData: [
      -600, -500, -450, -480, -450, -350, -400, -680, -145, -650, -546, -450,
      -590, -380, -585, -250, -550, -680, -375, -250
    ]
  },
  {
    id: 8,
    title: 'DAX',
    stockValue: 1.56,
    isPositive: true,
    totalValue: 22676.41,
    chartType: 'default',
    echartsData: [
      500, 450, 600, 690, 700, 550, 400, 350, 200, 250, 180, 350, 320, 330, 320,
      450, 480, 450, 445, 300, 420, 600
    ]
  }
];

export const topGainersTableData: StockDashboardTableDataType[] = [
  {
    symbol: 'CHSN',
    name: 'Chanson International Holding',
    price: 14.81,
    change: 387.17
  },
  {
    symbol: 'BENF',
    name: 'Beneficient',
    price: 1.89,
    change: 58.82
  },
  {
    symbol: 'FORD',
    name: 'Forward Industries',
    price: 5.38,
    change: 52.41
  },
  {
    symbol: 'ATGL',
    name: 'Alpha Technology Group',
    price: 7.2,
    change: 36.11
  },
  {
    symbol: 'TIGR',
    name: 'UP Fintech Holding',
    price: 12.39,
    change: 34.82
  },
  {
    symbol: 'UXIN',
    name: 'Uxin Limited',
    price: 7.35,
    change: 33.88
  },
  {
    symbol: 'BANL',
    name: 'CBL International',
    price: 1.35,
    change: 29.81
  },
  {
    symbol: 'NVDA',
    name: 'Nvidia Corporation',
    price: 950.12,
    change: 28.45
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 205.32,
    change: 26.78
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 187.56,
    change: 25.43
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices',
    price: 152.74,
    change: 23.91
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 138.19,
    change: 22.34
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 402.78,
    change: 21.56
  },
  {
    symbol: 'NFLX',
    name: 'Netflix Inc.',
    price: 462.83,
    change: 20.67
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    price: 469.12,
    change: 19.85
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 145.23,
    change: 18.92
  },
  {
    symbol: 'BABA',
    name: 'Alibaba Group Holding',
    price: 85.14,
    change: 17.32
  },
  {
    symbol: 'DIS',
    name: 'Walt Disney Co.',
    price: 93.45,
    change: 16.78
  },
  {
    symbol: 'PYPL',
    name: 'PayPal Holdings',
    price: 75.64,
    change: 15.89
  },
  {
    symbol: 'NIO',
    name: 'Nio Inc.',
    price: 9.56,
    change: 14.92
  },
  {
    symbol: 'PFE',
    name: 'Pfizer Inc.',
    price: 39.84,
    change: 13.65
  }
];

export const topLosersTableData: StockDashboardTableDataType[] = [
  {
    symbol: 'DUO',
    name: 'Fangdd Network Group',
    price: 2.53,
    change: 32.89
  },
  {
    symbol: 'XIN',
    name: 'Xinyuan Real Estate',
    price: 4.17,
    change: 27.23
  },
  {
    symbol: 'UPXI',
    name: 'Upexi',
    price: 2.34,
    change: 26.88
  },
  {
    symbol: 'SPAI',
    name: 'Safe Pro Group',
    price: 1.93,
    change: 25.19
  },
  {
    symbol: 'SAVE',
    name: 'Spirit Airlines',
    price: 1.69,
    change: 24.55
  },
  {
    symbol: 'LASE',
    name: 'Laser Photonics',
    price: 7.06,
    change: 23.09
  },
  {
    symbol: 'IBO',
    name: 'Impact BioMedical',
    price: 1.27,
    change: 23.02
  },
  {
    symbol: 'SOUN',
    name: 'SoundHound AI Inc.',
    price: 3.12,
    change: 21.56
  },
  {
    symbol: 'FUBO',
    name: 'FuboTV Inc.',
    price: 2.19,
    change: 19.83
  },
  {
    symbol: 'NKLA',
    name: 'Nikola Corporation',
    price: 0.95,
    change: 18.92
  },
  {
    symbol: 'RIVN',
    name: 'Rivian Automotive',
    price: 10.78,
    change: 17.65
  },
  {
    symbol: 'PLUG',
    name: 'Plug Power Inc.',
    price: 3.89,
    change: 16.74
  },
  {
    symbol: 'CVNA',
    name: 'Carvana Co.',
    price: 49.65,
    change: 15.92
  },
  {
    symbol: 'LCID',
    name: 'Lucid Group',
    price: 3.56,
    change: 14.78
  },
  {
    symbol: 'AFRM',
    name: 'Affirm Holdings',
    price: 27.34,
    change: 14.23
  },
  {
    symbol: 'COIN',
    name: 'Coinbase Global',
    price: 116.47,
    change: 13.56
  },
  {
    symbol: 'PTON',
    name: 'Peloton Interactive',
    price: 6.85,
    change: 12.49
  },
  {
    symbol: 'ZM',
    name: 'Zoom Video Communications',
    price: 64.23,
    change: 11.92
  },
  {
    symbol: 'RIDE',
    name: 'Lordstown Motors',
    price: 1.24,
    change: 10.78
  },
  {
    symbol: 'BBBYQ',
    name: 'Bed Bath & Beyond',
    price: 0.09,
    change: 9.86
  },
  {
    symbol: 'TUP',
    name: 'Tupperware Brands',
    price: 1.97,
    change: 8.99
  }
];

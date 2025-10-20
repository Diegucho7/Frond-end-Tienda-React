import { BadgeBg } from 'components/base/Badge';

export type Range = '1d' | '5d' | '1m' | '3m' | '6m' | '1y' | 'all';

export interface PortfolioHoldingItem {
  id: number;
  title: string;
  amount: {
    price: number;
    prefix?: string;
    className?: string;
  };
  badge: {
    label: number;
    badgeBg: BadgeBg;
    prefix?: string;
  };
  className?: string;
}

export interface PortfolioLineChartDataItem {
  '1d': [string, number][];
  '5d': [string, number][];
  '1m': [string, number][];
  '3m': [string, number][];
  '6m': [string, number][];
  '1y': [string, number][];
  all: [string, number][];
}

interface TableRowData {
  amount: number;
  change: number;
  prefix?: string;
  className?: string;
}

export interface PortfolioTableDataRowItem {
  id: number;
  name: string;
  symbols: number;
  costBasis: number;
  marketValue: {
    price: number;
    suffix?: string;
  };
  dayChange: TableRowData | null;
  unrealizedGainLoss: TableRowData | null;
  realizedGainLoss: TableRowData | null;
}

type ChartType = 'default' | 'mixed' | 'inverted';

export interface PortfolioSidebarItem {
  id: number;
  companyAbbr: string;
  amount: number;
  profit: {
    amount: number;
    percentage: number;
    prefix: string;
    className?: string;
  };
  chartType: ChartType;
  chartData: number[];
}

export interface PortfolioItem {
  portfolioHoldingItems: PortfolioHoldingItem[];
  portfolioLineChartData: PortfolioLineChartDataItem;
  portfolioTableDataRow: PortfolioTableDataRowItem[];
  portfolioSidebarItems: PortfolioSidebarItem[];
}

export const portfolioItems: PortfolioItem = {
  portfolioHoldingItems: [
    {
      id: 1,
      title: 'Cash Holding',
      amount: {
        price: 1100
      },
      badge: {
        label: 1.71,
        badgeBg: 'success',
        prefix: '+'
      },
      className: 'border-end pe-4'
    },
    {
      id: 2,
      title: 'Day Change',
      amount: {
        price: 1300,
        prefix: '-',
        className: 'text-danger'
      },
      badge: {
        label: 1.71,
        badgeBg: 'danger',
        prefix: '+'
      },
      className: 'px-4 border-end'
    },
    {
      id: 3,
      title: 'Unrealized Gain/Loss',
      amount: {
        price: 5500,
        prefix: '-',
        className: 'text-danger'
      },
      badge: {
        label: 1.71,
        badgeBg: 'danger',
        prefix: '+'
      },
      className: 'border-end px-4'
    },
    {
      id: 4,
      title: 'Realized Gain/Loss',
      amount: {
        price: 3500,
        prefix: '+',
        className: 'text-success'
      },
      badge: {
        label: 1.71,
        badgeBg: 'success',
        prefix: '+'
      },
      className: 'px-4'
    }
  ],
  portfolioLineChartData: {
    '1d': [
      ['9 AM', 90],
      ['9:30 AM', 82],
      ['10 AM', 57],
      ['10:30 AM', 85],
      ['11 AM', 86],
      ['11:30 AM', 78],
      ['12 PM', 93],
      ['12:30 PM', 71],
      ['1 PM', 69],
      ['1:30 PM', 81],
      ['2 PM', 57],
      ['2:30 PM', 40],
      ['3 PM', 68],
      ['3:30 PM', 72],
      ['4 PM', 61]
    ],
    '5d': [
      ['2025-03-05', 45],
      ['2025-03-06', 38],
      ['2024-03-07', 54],
      ['2025-03-08', 48],
      ['2025-03-09', 55]
    ],
    '1m': [
      ['2025-02-08', 47],
      ['2025-02-09', 62],
      ['2025-02-10', 68],
      ['2025-02-11', 82],
      ['2025-02-12', 82],
      ['2025-02-13', 93],
      ['2025-02-14', 88],
      ['2025-02-15', 73],
      ['2025-02-16', 90],
      ['2025-02-17', 72],
      ['2025-02-18', 76],
      ['2025-02-19', 43],
      ['2025-02-20', 76],
      ['2025-02-21', 43],
      ['2025-02-22', 56],
      ['2025-02-23', 83],
      ['2025-02-24', 92],
      ['2025-02-25', 43],
      ['2025-02-26', 52],
      ['2025-02-27', 62],
      ['2025-02-28', 59],
      ['2025-03-01', 52],
      ['2025-03-02', 76],
      ['2025-03-03', 69],
      ['2025-03-04', 55],
      ['2025-03-05', 54],
      ['2025-03-06', 90],
      ['2025-03-07', 59],
      ['2025-03-08', 41],
      ['2025-03-09', 75]
    ],
    '3m': [
      ['2024-12-02', 45],
      ['2024-12-07', 38],
      ['2024-12-12', 54],
      ['2024-12-17', 48],
      ['2024-12-22', 55],
      ['2024-12-27', 56],

      ['2025-01-03', 59],
      ['2025-01-08', 54],
      ['2025-01-13', 54],
      ['2025-01-18', 58],
      ['2025-01-23', 60],
      ['2025-01-28', 58],

      ['2025-02-04', 58],
      ['2025-02-09', 64],
      ['2025-02-14', 65],
      ['2025-02-22', 58],
      ['2025-03-03', 67],
      ['2025-03-10', 72]
    ],
    '6m': [
      ['2024-10-01', 57],
      ['2024-11-01', 48],
      ['2024-12-01', 61],
      ['2025-01-01', 54],
      ['2025-02-01', 82],
      ['2025-03-01', 78]
    ],
    '1y': [
      ['2024-03-10', 45],
      ['2024-03-15', 38],
      ['2024-03-20', 54],
      ['2024-03-25', 48],
      ['2024-03-30', 55],
      ['2024-04-04', 56],

      ['2024-04-10', 59],
      ['2024-04-15', 54],
      ['2024-04-20', 54],
      ['2024-04-25', 58],
      ['2024-04-30', 60],
      ['2024-05-05', 58],

      ['2024-05-10', 58],
      ['2024-05-15', 64],
      ['2024-05-20', 65],
      ['2024-05-25', 58],
      ['2024-05-30', 67],
      ['2024-06-04', 72],

      ['2024-06-09', 68],
      ['2024-06-14', 65],
      ['2024-06-19', 72],
      ['2024-06-24', 66],
      ['2024-06-29', 71],
      ['2024-07-04', 72],

      ['2024-07-09', 80],
      ['2024-07-14', 69],
      ['2024-07-19', 67],
      ['2024-07-24', 73],
      ['2024-07-29', 92],
      ['2024-08-03', 89],

      ['2024-08-08', 82],
      ['2024-08-13', 95],
      ['2024-08-18', 91],
      ['2024-08-23', 89],
      ['2024-08-28', 73],
      ['2024-09-02', 80],

      ['2024-09-07', 86],
      ['2024-09-12', 65],
      ['2024-09-17', 74],
      ['2024-09-22', 83],
      ['2024-09-27', 91],
      ['2024-10-02', 74],

      ['2024-10-07', 72],
      ['2024-10-12', 85],
      ['2024-10-17', 71],
      ['2024-10-22', 78],
      ['2024-10-27', 70],
      ['2024-11-01', 88],

      ['2024-11-06', 85],
      ['2024-11-11', 70],
      ['2024-11-16', 86],
      ['2024-11-21', 94],
      ['2024-11-26', 90],
      ['2024-12-01', 74],

      ['2024-12-06', 76],
      ['2024-12-11', 90],
      ['2024-12-16', 82],
      ['2024-12-21', 83],
      ['2024-12-26', 85],
      ['2024-12-31', 80],

      ['2025-01-05', 81],
      ['2025-01-10', 91],
      ['2025-01-15', 90],
      ['2025-01-20', 93],
      ['2025-01-25', 94],
      ['2025-01-30', 95],

      ['2025-02-04', 90],
      ['2025-02-09', 90],
      ['2025-02-14', 86],
      ['2025-02-19', 95],
      ['2025-02-24', 91],
      ['2025-02-28', 90],

      ['2025-03-05', 94],
      ['2025-03-10', 90]
    ],
    all: [
      ['2015-01-01', 46],
      ['2015-02-01', 55],
      ['2015-03-01', 64],
      ['2015-04-01', 70],
      ['2015-05-01', 58],
      ['2015-06-01', 75],
      ['2015-07-01', 85],
      ['2015-08-01', 74],
      ['2015-09-01', 66],
      ['2015-10-01', 80],
      ['2015-11-01', 90],
      ['2015-12-01', 65],

      ['2016-01-01', 48],
      ['2016-02-01', 57],
      ['2016-03-01', 67],
      ['2016-04-01', 72],
      ['2016-05-01', 60],
      ['2016-06-01', 77],
      ['2016-07-01', 88],
      ['2016-08-01', 75],
      ['2016-09-01', 68],
      ['2016-10-01', 82],
      ['2016-11-01', 92],
      ['2016-12-01', 67],

      ['2017-01-01', 50],
      ['2017-02-01', 60],
      ['2017-03-01', 69],
      ['2017-04-01', 75],
      ['2017-05-01', 63],
      ['2017-06-01', 79],
      ['2017-07-01', 90],
      ['2017-08-01', 77],
      ['2017-09-01', 70],
      ['2017-10-01', 84],
      ['2017-11-01', 93],
      ['2017-12-01', 70],

      ['2018-01-01', 53],
      ['2018-02-01', 63],
      ['2018-03-01', 71],
      ['2018-04-01', 77],
      ['2018-05-01', 66],
      ['2018-06-01', 81],
      ['2018-07-01', 92],
      ['2018-08-01', 79],
      ['2018-09-01', 72],
      ['2018-10-01', 86],
      ['2018-11-01', 94],
      ['2018-12-01', 73],

      ['2019-01-01', 55],
      ['2019-02-01', 66],
      ['2019-03-01', 74],
      ['2019-04-01', 80],
      ['2019-05-01', 69],
      ['2019-06-01', 84],
      ['2019-07-01', 93],
      ['2019-08-01', 81],
      ['2019-09-01', 74],
      ['2019-10-01', 88],
      ['2019-11-01', 95],
      ['2019-12-01', 75],

      ['2020-01-01', 58],
      ['2020-02-01', 68],
      ['2020-03-01', 76],
      ['2020-04-01', 82],
      ['2020-05-01', 72],
      ['2020-06-01', 86],
      ['2020-07-01', 95],
      ['2020-08-01', 83],
      ['2020-09-01', 76],
      ['2020-10-01', 90],
      ['2020-11-01', 96],
      ['2020-12-01', 78],

      ['2021-01-01', 60],
      ['2021-02-01', 70],
      ['2021-03-01', 79],
      ['2021-04-01', 85],
      ['2021-05-01', 75],
      ['2021-06-01', 88],
      ['2021-07-01', 96],
      ['2021-08-01', 85],
      ['2021-09-01', 78],
      ['2021-10-01', 92],
      ['2021-11-01', 97],
      ['2021-12-01', 80],

      ['2022-01-01', 63],
      ['2022-02-01', 74],
      ['2022-03-01', 82],
      ['2022-04-01', 88],
      ['2022-05-01', 78],
      ['2022-06-01', 90],
      ['2022-07-01', 97],
      ['2022-08-01', 87],
      ['2022-09-01', 80],
      ['2022-10-01', 94],
      ['2022-11-01', 98],
      ['2022-12-01', 82],

      ['2023-01-01', 65],
      ['2023-02-01', 76],
      ['2023-03-01', 84],
      ['2023-04-01', 90],
      ['2023-05-01', 81],
      ['2023-06-01', 92],

      ['2024-01-01', 67],
      ['2024-02-01', 78],
      ['2024-03-01', 86],
      ['2024-04-01', 92],

      ['2025-01-01', 70],
      ['2025-02-01', 81],
      ['2025-03-01', 88],
      ['2025-04-01', 98]
    ]
  },
  portfolioTableDataRow: [
    {
      id: 1,
      name: 'My Watchlist',
      symbols: 11,
      costBasis: 26514.56,
      marketValue: {
        price: 3.46,
        suffix: 'T'
      },
      dayChange: {
        amount: 978.9,
        change: 0.74,
        prefix: '+',
        className: 'text-success'
      },
      unrealizedGainLoss: {
        amount: 2429.49,
        change: 0.74,
        prefix: '+',
        className: 'text-success'
      },
      realizedGainLoss: {
        amount: 321.42,
        change: 0.74,
        prefix: '–',
        className: 'text-danger'
      }
    },
    {
      id: 2,
      name: 'Phoenix Growth Fund',
      symbols: 14,
      costBasis: 95987.9,
      marketValue: {
        price: 2.02,
        suffix: 'T'
      },
      dayChange: {
        amount: 872.96,
        change: 0.74,
        prefix: '+',
        className: 'text-success'
      },
      unrealizedGainLoss: {
        amount: 60.95,
        change: 0.74,
        prefix: '–',
        className: 'text-danger'
      },
      realizedGainLoss: {
        amount: 23.42,
        change: 1.98,
        prefix: '–',
        className: 'text-danger'
      }
    },
    {
      id: 3,
      name: 'Titanium Edge',
      symbols: 8,
      costBasis: 30675.98,
      marketValue: {
        price: 1.98,
        suffix: 'T'
      },
      dayChange: {
        amount: 823.12,
        change: 0.74,
        prefix: '+',
        className: 'text-success'
      },
      unrealizedGainLoss: {
        amount: 639.12,
        change: 2.15,
        prefix: '+',
        className: 'text-success'
      },
      realizedGainLoss: {
        amount: 98.86,
        change: 2.74,
        prefix: '+',
        className: 'text-success'
      }
    },
    {
      id: 4,
      name: 'Apex Capital',
      symbols: 9,
      costBasis: 12789.98,
      marketValue: {
        price: 3.09,
        suffix: 'T'
      },
      dayChange: {
        amount: 129.21,
        change: 0.74,
        prefix: '+',
        className: 'text-success'
      },
      unrealizedGainLoss: {
        amount: 978.99,
        change: 0.54,
        prefix: '–',
        className: 'text-danger'
      },
      realizedGainLoss: {
        amount: 61.93,
        change: 2.74,
        prefix: '–',
        className: 'text-danger'
      }
    },
    {
      id: 5,
      name: 'Blue Horizon Fund',
      symbols: 11,
      costBasis: 2787.49,
      marketValue: {
        price: 5815.03
      },
      dayChange: {
        amount: 312.95,
        change: 0.74,
        prefix: '+',
        className: 'text-success'
      },
      unrealizedGainLoss: {
        amount: 125.42,
        change: 1.74,
        prefix: '+',
        className: 'text-success'
      },
      realizedGainLoss: {
        amount: 100.9,
        change: 5.74,
        prefix: '+',
        className: 'text-success'
      }
    },
    {
      id: 6,
      name: 'Navigator Fund',
      symbols: 17,
      costBasis: 5987.98,
      marketValue: {
        price: 589.95
      },
      dayChange: null,
      unrealizedGainLoss: null,
      realizedGainLoss: {
        amount: 72.42,
        change: 1.51,
        prefix: '+',
        className: 'text-success'
      }
    },
    {
      id: 7,
      name: 'Equity Elevation',
      symbols: 21,
      costBasis: 19845.37,
      marketValue: {
        price: 3.32,
        suffix: 'T'
      },
      dayChange: {
        amount: 120.31,
        change: 1.74,
        prefix: '–',
        className: 'text-danger'
      },
      unrealizedGainLoss: {
        amount: 2429.49,
        change: 0.51,
        prefix: '+',
        className: 'text-success'
      },
      realizedGainLoss: null
    }
  ],
  portfolioSidebarItems: [
    {
      id: 9,
      companyAbbr: 'AAPL',
      amount: 232.98,
      profit: {
        amount: 0.42,
        percentage: 0.35,
        prefix: '+',
        className: 'text-success'
      },
      chartType: 'default',
      chartData: [
        70, 50, 85, 45, 200, 193, 196, 210, 198, 210, 103, 120, 84, 95, 130,
        123, 214, 245, 287, 348, 356, 390
      ]
    },
    {
      id: 10,
      companyAbbr: 'Tsla',
      amount: 269.19,
      profit: {
        amount: 0.42,
        percentage: 0.35,
        prefix: '-',
        className: 'text-danger'
      },
      chartType: 'mixed',
      chartData: [
        -100, 190, 200, -200, -190, 300, -110, 100, -100, 250, 200, 190, -80,
        50, 40, 200, -200, 200, 150, 160, 300, -100
      ]
    },
    {
      id: 11,
      companyAbbr: 'Nvda',
      amount: 141.54,
      profit: {
        amount: 0.42,
        percentage: 0.35,
        prefix: '+',
        className: 'text-success'
      },
      chartType: 'default',
      chartData: [
        400, 450, 500, 490, 600, 550, 400, 350, 320, 330, 320, 450, 480, 350,
        345, 200, 320, 400
      ]
    },
    {
      id: 12,
      companyAbbr: 'amzn',
      amount: 187.83,
      profit: {
        amount: 2.42,
        percentage: 2.35,
        prefix: '-',
        className: 'text-danger'
      },
      chartType: 'inverted',
      chartData: [
        -500, -300, -250, -280, -150, -250, -300, -180, -145, -250, -46, -250,
        -90, -80, -85, -150, -250, -180, -175, -50
      ]
    },
    {
      id: 13,
      companyAbbr: 'msft',
      amount: 428.15,
      profit: {
        amount: 5.42,
        percentage: 1.21,
        prefix: '+',
        className: 'text-success'
      },
      chartType: 'default',
      chartData: [
        70, 50, 85, 45, 200, 193, 196, 210, 198, 210, 103, 120, 84, 95, 130,
        123, 214, 245, 287, 348, 356, 390
      ]
    },
    {
      id: 14,
      companyAbbr: 'goog',
      amount: 232.98,
      profit: {
        amount: 0.42,
        percentage: 0.54,
        prefix: '+',
        className: 'text-success'
      },
      chartType: 'default',
      chartData: [
        400, 450, 500, 490, 600, 550, 400, 350, 320, 330, 320, 450, 480, 350,
        345, 200, 320, 400
      ]
    },
    {
      id: 15,
      companyAbbr: 'adbe',
      amount: 166.99,
      profit: {
        amount: 1.11,
        percentage: 0.35,
        prefix: '+',
        className: 'text-success'
      },
      chartType: 'inverted',
      chartData: [
        -500, -300, -250, -280, -150, -250, -300, -180, -145, -250, -46, -250,
        -90, -80, -85, -150, -250, -180, -175, -50
      ]
    },
    {
      id: 16,
      companyAbbr: 'amd',
      amount: 156.23,
      profit: {
        amount: 0.42,
        percentage: 0.35,
        prefix: '-',
        className: 'text-danger'
      },
      chartType: 'mixed',
      chartData: [
        -120, 200, 230, -230, -190, 300, -110, 100, -100, 250, 200, 190, -80,
        80, 50, 200, -200, 220, 150, 140, 310, -150
      ]
    },
    {
      id: 17,
      companyAbbr: 'nflx',
      amount: 754.68,
      profit: {
        amount: 0.42,
        percentage: 0.35,
        prefix: '+',
        className: 'text-success'
      },
      chartType: 'default',
      chartData: [
        390, 356, 348, 287, 245, 214, 123, 130, 95, 84, 120, 103, 210, 198, 210,
        196, 193, 200, 45, 85, 70, 50
      ]
    },
    {
      id: 18,
      companyAbbr: 'ndqa',
      amount: 74.69,
      profit: {
        amount: 0.42,
        percentage: 0.35,
        prefix: '-',
        className: 'text-danger'
      },
      chartType: 'default',
      chartData: [
        500, 450, 600, 690, 700, 550, 400, 450, 480, 450, 445, 300, 420, 600
      ]
    }
  ]
};

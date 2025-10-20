import { BadgeBg } from 'components/base/Badge';

interface HoldingSummaryOverallSummaryItem {
  id: number;
  title: string;
  amount: {
    count: number;
    prefix?: string;
    className?: string;
  };
  badge: {
    label: number;
    prefix?: string;
    suffix?: string;
    badgeBg: BadgeBg;
  };
  className?: string;
}

export interface WatchlistReportChartDataItem {
  '1d': [string, number][];
  '5d': [string, number][];
  '1m': [string, number][];
  '3m': [string, number][];
  '6m': [string, number][];
  '1y': [string, number][];
  all: [string, number][];
}

export interface WatchlistDataItem {
  watchlistReportChartDataItem: WatchlistReportChartDataItem;
}

type ChartType = 'default' | 'mixed' | 'inverted';

export interface WatchlistSummaryTableRowItem {
  id: number;
  symbol: string;
  lastPrice: number;
  change: {
    amount: number;
    percentage: number;
    prefix?: string;
    className?: string;
  };
  priceAdds: number;
  volume: number;
  share: number | null;
  avgVolume: number;
  dayChart: {
    chartType: ChartType;
    chartData: number[];
  };
  marketCap: number;
}

export interface WatchlistCashTransactionRowItem {
  date: string;
  type: string;
  amount: number;
  currency: string;
  note: string;
}
export interface WatchlistItem {
  summaryTableDataRow: WatchlistSummaryTableRowItem[];
  cashTransactionTableDataRow: WatchlistCashTransactionRowItem[];
}
export const holdingSummaryOverallSummaryItems: HoldingSummaryOverallSummaryItem[] =
  [
    {
      id: 1,
      title: 'Total Holding',
      amount: { count: 1000, className: 'text-body' },
      badge: {
        label: 1.71,
        prefix: '+',
        suffix: '%',
        badgeBg: 'success'
      },
      className: 'pe-4 border-end'
    },
    {
      id: 2,
      title: 'Day Change',
      amount: {
        count: 5000,
        prefix: '-',
        className: 'text-danger'
      },
      badge: {
        label: 1.71,
        prefix: '+',
        suffix: '%',
        badgeBg: 'danger'
      },
      className: 'px-4 border-end'
    },
    {
      id: 3,
      title: 'Unrealized Gain/Loss',
      amount: {
        count: 3000,
        prefix: '+',
        className: 'text-success'
      },
      badge: {
        label: 1.71,
        prefix: '+',
        suffix: '%',
        badgeBg: 'success'
      },
      className: 'ps-4'
    }
  ];

export const watchlistDataItems: WatchlistDataItem = {
  watchlistReportChartDataItem: {
    '1d': [
      ['9 AM', 250],
      ['9:30 AM', 372],
      ['10 AM', 360],
      ['10:30 AM', 106],
      ['11 AM', 354],
      ['11:30 AM', 170],
      ['12 PM', 104],
      ['12:30 PM', 333],
      ['1 PM', 225],
      ['1:30 PM', 160],
      ['2 PM', 152],
      ['2:30 PM', 353],
      ['3 PM', 112],
      ['3:30 PM', 238],
      ['4 PM', 109]
    ],
    '5d': [
      ['2025-03-05', 150],
      ['2025-03-06', 99],
      ['2024-03-07', 143],
      ['2025-03-08', 245],
      ['2025-03-09', 116]
    ],
    '1m': [
      ['2025-02-08', 175],
      ['2025-02-09', 17],
      ['2025-02-10', 263],
      ['2025-02-11', 184],
      ['2025-02-12', 271],
      ['2025-02-13', 209],
      ['2025-02-14', 77],
      ['2025-02-15', 98],
      ['2025-02-16', 223],
      ['2025-02-17', 354],
      ['2025-02-18', 139],
      ['2025-02-19', 226],
      ['2025-02-20', 237],
      ['2025-02-21', 31],
      ['2025-02-22', 218],
      ['2025-02-23', 389],
      ['2025-02-24', 72],
      ['2025-02-25', 77],
      ['2025-02-26', 23],
      ['2025-02-27', 39],
      ['2025-02-28', 328],
      ['2025-03-01', 269],
      ['2025-03-02', 333],
      ['2025-03-03', 135],
      ['2025-03-04', 386],
      ['2025-03-05', 226],
      ['2025-03-06', 356],
      ['2025-03-07', 222],
      ['2025-03-08', 67],
      ['2025-03-09', 23]
    ],
    '3m': [
      ['2024-12-02', 187],
      ['2024-12-07', 325],
      ['2024-12-12', 92],
      ['2024-12-17', 268],
      ['2024-12-22', 154],
      ['2024-12-27', 379],

      ['2025-01-03', 205],
      ['2025-01-08', 98],
      ['2025-01-13', 134],
      ['2025-01-18', 245],
      ['2025-01-23', 287],
      ['2025-01-28', 160],

      ['2025-02-04', 312],
      ['2025-02-09', 64],
      ['2025-02-14', 291],
      ['2025-02-22', 179],
      ['2025-03-03', 250],
      ['2025-03-10', 370]
    ],
    '6m': [
      ['2024-10-01', 125],
      ['2024-11-01', 298],
      ['2024-12-01', 212],
      ['2025-01-01', 173],
      ['2025-02-01', 356],
      ['2025-03-01', 290]
    ],
    '1y': [
      ['2024-03-01', 170],
      ['2024-04-30', 220],
      ['2024-05-05', 220],
      ['2024-06-29', 235],
      ['2024-07-04', 80],
      ['2024-08-28', 35],
      ['2024-09-02', 160],
      ['2024-10-27', 160],
      ['2024-11-01', 80],
      ['2024-12-31', 270],
      ['2025-01-05', 190],
      ['2025-02-28', 110]
    ],
    all: [
      ['2001-01-01', 40],
      ['2002-01-01', 110],
      ['2003-01-01', 190],
      ['2004-01-01', 70],
      ['2005-01-01', 220],
      ['2006-01-01', 220],
      ['2007-01-01', 304],
      ['2008-01-01', 235],
      ['2009-01-01', 80],
      ['2010-01-01', 35],
      ['2011-01-01', 160],
      ['2012-01-01', 80],
      ['2013-01-01', 160],
      ['2014-01-01', 270],
      ['2015-01-01', 158],
      ['2016-01-01', 282],
      ['2017-01-01', 304],
      ['2018-01-01', 387],
      ['2019-01-01', 94],
      ['2020-01-01', 34],
      ['2021-01-01', 301],
      ['2022-01-01', 324],
      ['2023-01-01', 321],
      ['2024-01-01', 179],
      ['2025-01-01', 55]
    ]
  }
};

export const watchlistItems: WatchlistItem = {
  summaryTableDataRow: [
    {
      id: 1,
      symbol: 'AAPL',
      lastPrice: 230.76,
      change: {
        amount: 0.42,
        percentage: 0.35,
        prefix: '+',
        className: 'text-success'
      },
      priceAdds: 230.34,
      volume: 50658000,
      share: 2,
      avgVolume: 50658000,
      dayChart: {
        chartType: 'default',
        chartData: [
          70, 50, 85, 45, 200, 193, 196, 210, 198, 210, 103, 120, 84, 95, 130,
          123, 214, 245, 287, 348, 356, 390
        ]
      },
      marketCap: 3518000000000
    },
    {
      id: 2,
      symbol: 'AMZN',
      lastPrice: 184.71,
      change: {
        amount: 0.54,
        percentage: 0.12,
        prefix: '+',
        className: 'text-success'
      },
      priceAdds: 184.19,
      volume: 34160000,
      share: null,
      avgVolume: 34160000,
      dayChart: {
        chartType: 'mixed',
        chartData: [
          -100, 190, 200, -200, -190, 300, -110, 100, -100, 250, 200, 190, -80,
          50, 40, 200, -200, 200, 150, 160, 300, -100
        ]
      },
      marketCap: 1971000000000
    },
    {
      id: 3,
      symbol: 'TSLA',
      lastPrice: 213.65,
      change: {
        amount: 4.32,
        percentage: 1.98,
        prefix: '-',
        className: 'text-danger'
      },
      priceAdds: 217.97,
      volume: 74380000,
      share: null,
      avgVolume: 74380000,
      dayChart: {
        chartType: 'default',
        chartData: [
          400, 450, 500, 490, 600, 550, 400, 350, 320, 330, 320, 450, 480, 350,
          345, 200, 320, 400
        ]
      },
      marketCap: 864116000000
    },
    {
      id: 4,
      symbol: 'NVDA',
      lastPrice: 121.78,
      change: {
        amount: 0.12,
        percentage: 0.09,
        prefix: '+',
        className: 'text-success'
      },
      priceAdds: 120.82,
      volume: 278170000,
      share: null,
      avgVolume: 278170000,
      dayChart: {
        chartType: 'mixed',
        chartData: [
          -100, 190, 200, -200, -190, 300, -110, 100, -100, 250, 200, 190, -80,
          50, 40, 200, -200, 200, 150, 160, 300, -100
        ]
      },
      marketCap: 3472000000000
    },
    {
      id: 5,
      symbol: 'GOOG',
      lastPrice: 164.48,
      change: {
        amount: 2.34,
        percentage: 1.4,
        prefix: '-',
        className: 'text-danger'
      },
      priceAdds: 166.82,
      volume: 15570000,
      share: 4,
      avgVolume: 15570000,
      dayChart: {
        chartType: 'default',
        chartData: [
          70, 50, 85, 45, 200, 193, 196, 210, 198, 210, 103, 120, 84, 95, 130,
          123, 214, 245, 287, 348, 356, 390
        ]
      },
      marketCap: 2013000000000
    },
    {
      id: 6,
      symbol: 'INTC',
      lastPrice: 21.98,
      change: {
        amount: 0.42,
        percentage: 1.88,
        prefix: '-',
        className: 'text-danger'
      },
      priceAdds: 23.89,
      volume: 82860000,
      share: null,
      avgVolume: 82860000,
      dayChart: {
        chartType: 'mixed',
        chartData: [
          100, -190, 200, -210, -190, 300, -190, 100, -100, 250, 200, 190, -80,
          50, 40, 200, -200, 200, 150, 160, 300, -100
        ]
      },
      marketCap: 96980000000
    },
    {
      id: 7,
      symbol: 'GSPC',
      lastPrice: 184.71,
      change: {
        amount: 0.54,
        percentage: 0.12,
        prefix: '+',
        className: 'text-success'
      },
      priceAdds: 184.19,
      volume: 34160000,
      share: null,
      avgVolume: 34160000,
      dayChart: {
        chartType: 'mixed',
        chartData: [
          -100, 190, 200, -200, -190, 300, -110, 100, -100, 250, 200, 190, -80,
          50, 40, 200, -200, 200, 150, 160, 300, -100
        ]
      },
      marketCap: 1971000000000
    },
    {
      id: 8,
      symbol: 'IBRX',
      lastPrice: 213.65,
      change: {
        amount: 4.32,
        percentage: 1.98,
        prefix: '-',
        className: 'text-danger'
      },
      priceAdds: 217.97,
      volume: 74.38,
      share: null,
      avgVolume: 74.38,
      dayChart: {
        chartType: 'default',
        chartData: [
          400, 450, 500, 490, 600, 550, 400, 350, 320, 330, 320, 450, 480, 350,
          345, 200, 320, 400
        ]
      },
      marketCap: 864116000000
    },
    {
      id: 9,
      symbol: 'NIO',
      lastPrice: 121.78,
      change: {
        amount: 0.12,
        percentage: 0.09,
        prefix: '+',
        className: 'text-success'
      },
      priceAdds: 120.82,
      volume: 278100000,
      share: null,
      avgVolume: 278100000,
      dayChart: {
        chartType: 'inverted',
        chartData: [
          -500, -300, -250, -280, -150, -250, -300, -180, -145, -250, -46, -250,
          -90, -80, -85, -150, -250, -180, -175, -50
        ]
      },
      marketCap: 3472000000000
    },
    {
      id: 10,
      symbol: 'TLN',
      lastPrice: 164.48,
      change: {
        amount: 2.34,
        percentage: 1.4,
        prefix: '-',
        className: 'text-danger'
      },
      priceAdds: 166.82,
      volume: 15570000,
      share: null,
      avgVolume: 15570000,
      dayChart: {
        chartType: 'default',
        chartData: [
          70, 50, 85, 45, 200, 193, 196, 210, 198, 210, 103, 120, 84, 95, 130,
          123, 214, 245, 287, 348, 356, 390
        ]
      },
      marketCap: 2013000000000
    },
    {
      id: 11,
      symbol: 'ES=F',
      lastPrice: 21.98,
      change: {
        amount: 0.42,
        percentage: 1.88,
        prefix: '-',
        className: 'text-danger'
      },
      priceAdds: 23.89,
      volume: 82860000,
      share: null,
      avgVolume: 82860000,
      dayChart: {
        chartType: 'default',
        chartData: [
          0, 200, 150, 120, 155, 115, 125, 160, 150, 145, 140, 90, 20, 120, 110,
          80, 120, 40, 90, 210, 220
        ]
      },
      marketCap: 3518000000000
    }
  ],
  cashTransactionTableDataRow: [
    {
      date: '10 Nov, 2024',
      type: 'Withdrawal',
      amount: 230.34,
      currency: 'USD',
      note: 'Cash Withdrawal Completed'
    },
    {
      date: '01 Nov, 2024',
      type: 'Deposit',
      amount: 184.19,
      currency: 'USD',
      note: 'Funds Withdrawn Successfully'
    },
    {
      date: '23 Oct, 2024',
      type: 'Income',
      amount: 217.97,
      currency: 'USD',
      note: 'Withdrawal Confirmed'
    },
    {
      date: '13 Oct, 2024',
      type: 'Fee',
      amount: 120.82,
      currency: 'CAD',
      note: 'Cash Disbursed'
    },
    {
      date: '03 Oct, 2024',
      type: 'Withdrawal',
      amount: 166.82,
      currency: 'CAD',
      note: 'Withdrawal Request Fulfilled'
    },
    {
      date: '23 Sep, 2024',
      type: 'Deposit',
      amount: 23.89,
      currency: 'CAD',
      note: 'Withdrawal Processed'
    }
  ]
};

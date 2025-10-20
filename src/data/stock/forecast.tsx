import { JSX } from 'react';
import { BadgeBg } from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import RevenueThisYearChart from 'components/charts/e-charts/RevenueThisYearChart';
import RevenueNextYearChart from 'components/charts/e-charts/RevenueNextYearChart';
import EpsThisYearChart from 'components/charts/e-charts/EpsThisYearChart';
import EpsNextYearChart from 'components/charts/e-charts/EpsNextYearChart';

import Img1 from 'assets/img/team/3.webp';
import Img2 from 'assets/img/team/35.webp';
import Img3 from 'assets/img/team/57.webp';
import Img4 from 'assets/img/team/5.webp';
import Img5 from 'assets/img/team/34.webp';
import Img6 from 'assets/img/team/avatar.webp';
import Img7 from 'assets/img/team/8.webp';

export interface EconomicPredictionItem {
  id: number;
  title: string;
  currentAmount: number;
  fractionNumber?: number;
  postfix?: string;
  pastAmount: number;
  badge: {
    amount: number;
    badgeBg: BadgeBg;
    icon: JSX.Element;
  };
  chart: JSX.Element;
  className?: string;
}

export interface EconomicPredictionTableRowItem {
  id: number;
  endingYear: string;
  revenue: number;
  revenueGrowth: {
    growth: number;
    className?: string;
  };
  eps: number;
  epsGrowth: {
    growth: number;
    className?: string;
  };
  forwardPE?: number;
  noAnalysts?: number;
}

export interface MostRecentForecastTableRowItem {
  id: number;
  customer: {
    name: string;
    avatar: string;
    placeholder?: boolean;
  };
  rating: number;
  status: {
    title: string;
    badgeBg: BadgeBg;
  };
  action: string;
  priceTarget: number;
  upside: {
    label: number;
    badgeBg: BadgeBg;
    prefix?: string;
  };
  date: string;
}

export interface ForecastDataItem {
  economicPredictionItems: EconomicPredictionItem[];
  economicPredicationTableRow: EconomicPredictionTableRowItem[];
  mostRecentForecastTableRowItems: MostRecentForecastTableRowItem[];
}

export const forecastDataItems: ForecastDataItem = {
  economicPredictionItems: [
    {
      id: 1,
      title: 'Revenue This Year',
      currentAmount: 185.1,
      postfix: 'B',
      fractionNumber: 2,
      pastAmount: 171.84,
      badge: {
        amount: 7.71,
        badgeBg: 'success',
        icon: (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-success-darker ms-1"
          />
        )
      },
      chart: <RevenueThisYearChart />,
      className:
        'pb-4 border-bottom border-bottom-xxl-0 border-end-sm pe-sm-4  py-xxl-0'
    },
    {
      id: 2,
      title: 'Revenue Next Year',
      currentAmount: 200.21,
      postfix: 'B',
      fractionNumber: 3,
      pastAmount: 185.1,
      badge: {
        amount: 0.06,
        badgeBg: 'success',
        icon: (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-success-darker ms-1"
          />
        )
      },
      chart: <RevenueNextYearChart />,
      className:
        'border-bottom border-bottom-xxl-0 border-end-xxl px-sm-4 py-4 pe-xl-3 pe-xxl-4 pt-sm-0 pb-xxl-0'
    },
    {
      id: 3,
      title: 'EPS This Year',
      currentAmount: 10.39,
      fractionNumber: 2,
      pastAmount: 7.32,
      badge: {
        amount: 41.95,
        badgeBg: 'success',
        icon: (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-success-darker ms-1"
          />
        )
      },
      chart: <EpsThisYearChart />,
      className:
        'border-bottom border-bottom-sm-0 border-end-sm pe-sm-4 px-xxl-4 py-4 pb-sm-0 py-xxl-0'
    },
    {
      id: 4,
      title: 'EPS Next Year',
      currentAmount: 8.3,
      fractionNumber: 2,
      pastAmount: 10.39,
      badge: {
        amount: 6.9,
        badgeBg: 'danger',
        icon: (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-danger-darker ms-1"
          />
        )
      },
      chart: <EpsNextYearChart />,
      className: 'ps-sm-4 pt-4 pe-sm-4  pe-xl-3 pe-xxl-4 pt-xxl-0'
    }
  ],
  economicPredicationTableRow: [
    {
      id: 1,
      endingYear: 'Sep 28, 2019',
      revenue: 137.24,
      revenueGrowth: {
        growth: -2.04,
        className: 'text-danger-dark'
      },
      eps: 4.57,
      epsGrowth: {
        growth: -0.34,
        className: 'text-danger-dark'
      }
    },
    {
      id: 2,
      endingYear: 'Sep 26, 2020',
      revenue: 122.49,
      revenueGrowth: {
        growth: 5.51,
        className: 'text-success-dark'
      },
      eps: 4.33,
      epsGrowth: {
        growth: 10.44,
        className: 'text-success-dark'
      }
    },
    {
      id: 3,
      endingYear: 'Sep 25, 2021',
      revenue: 127,
      revenueGrowth: {
        growth: 33.26,
        className: 'text-success-dark'
      },
      eps: 6.7,
      epsGrowth: {
        growth: 71.04,
        className: 'text-success-dark'
      }
    },
    {
      id: 4,
      endingYear: 'Sep 24, 2022',
      revenue: 156.74,
      revenueGrowth: {
        growth: 7.79,
        className: 'text-success-dark'
      },
      eps: 6.13,
      epsGrowth: {
        growth: 8.91,
        className: 'text-success-dark'
      }
    },
    {
      id: 5,
      endingYear: 'Sep 30, 2023',
      revenue: 171.84,
      revenueGrowth: {
        growth: -2.8,
        className: 'text-danger-dark'
      },
      eps: 7.32,
      epsGrowth: {
        growth: 0.33,
        className: 'text-success-dark'
      }
    },
    {
      id: 6,
      endingYear: 'Sep 30, 2024',
      revenue: 185.1,
      revenueGrowth: {
        growth: 3.86,
        className: 'text-success-dark'
      },
      eps: 10.39,
      epsGrowth: {
        growth: 11.54,
        className: 'text-success-dark'
      }
    },
    {
      id: 7,
      endingYear: 'Sep 30, 2025',
      revenue: 185.2,
      revenueGrowth: {
        growth: 7.96,
        className: 'text-success-dark'
      },
      eps: 10.3,
      epsGrowth: {
        growth: 11.55,
        className: 'text-danger-dark'
      },
      forwardPE: 32.54,
      noAnalysts: 46
    }
  ],
  mostRecentForecastTableRowItems: [
    {
      id: 8,
      customer: {
        name: 'JSmith',
        avatar: Img1
      },
      rating: 3,
      status: {
        title: 'Hold',
        badgeBg: 'secondary'
      },
      action: 'Downgrades',
      priceTarget: 65,
      upside: {
        label: 17.36,
        badgeBg: 'secondary'
      },
      date: 'Nov 06, 2022'
    },
    {
      id: 9,
      customer: {
        name: 'Alex',
        avatar: Img2
      },
      rating: 4,
      status: {
        title: 'Buy',
        badgeBg: 'success'
      },
      action: 'Reiterates',
      priceTarget: 87,
      upside: {
        label: 5.25,
        badgeBg: 'secondary',
        prefix: '+'
      },
      date: 'Nov 06, 2022'
    },
    {
      id: 10,
      customer: {
        name: 'Amy',
        avatar: Img3
      },
      rating: 2,
      status: {
        title: 'Buy',
        badgeBg: 'success'
      },
      action: 'Maintains',
      priceTarget: 54,
      upside: {
        label: 54.73,
        badgeBg: 'secondary'
      },
      date: 'Nov 06, 2022'
    },
    {
      id: 11,
      customer: {
        name: 'Michael',
        avatar: Img4
      },
      rating: 5,
      status: {
        title: 'Sell',
        badgeBg: 'danger'
      },
      action: 'Maintains',
      priceTarget: 35,
      upside: {
        label: 8.51,
        badgeBg: 'secondary'
      },
      date: 'Nov 06, 2022'
    },
    {
      id: 12,
      customer: {
        name: 'Sophia',
        avatar: Img5
      },
      rating: 2,
      status: {
        title: 'Sell',
        badgeBg: 'danger'
      },
      action: 'Downgrades',
      priceTarget: 46,
      upside: {
        label: 22.09,
        badgeBg: 'secondary'
      },
      date: 'Nov 06, 2022'
    },
    {
      id: 13,
      customer: {
        name: 'Emma Brown',
        avatar: Img6,
        placeholder: true
      },
      rating: 2,
      status: {
        title: 'Buy',
        badgeBg: 'success'
      },
      action: 'Maintains',
      priceTarget: 60,
      upside: {
        label: 32.98,
        badgeBg: 'secondary',
        prefix: '+'
      },
      date: 'Nov 06, 2022'
    },
    {
      id: 14,
      customer: {
        name: 'Olivia',
        avatar: Img7
      },
      rating: 4,
      status: {
        title: 'Buy',
        badgeBg: 'success'
      },
      action: 'Reiterates',
      priceTarget: 58,
      upside: {
        label: 2.2,
        badgeBg: 'secondary',
        prefix: '+'
      },
      date: 'Nov 06, 2022'
    }
  ]
};

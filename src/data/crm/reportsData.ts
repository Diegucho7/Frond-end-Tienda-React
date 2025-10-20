import { BadgeBg } from 'components/base/Badge';
import team32 from 'assets/img/team/32.webp';
import team35 from 'assets/img/team/35.webp';
import team59 from 'assets/img/team/59.webp';
import team18 from 'assets/img/team/18.webp';

export interface SellerReport {
  reportStage: string;
  totalCount: number;
  status: {
    label: string;
    type: BadgeBg;
  };
}

export interface DealsReport {
  dealName: string;
  dealOwner: {
    avatar?: string;
    name: string;
    profileLink: string;
  };
  accountName: string;
  stage: {
    label: string;
    value: number;
  };
  amount: {
    value: number;
    trending: 'up' | 'down';
  };
}

export const sellersReportData: SellerReport[] = [
  {
    reportStage: 'Analysis',
    totalCount: 64,
    status: {
      label: '+15.21%',
      type: 'info'
    }
  },
  {
    reportStage: 'Statement',
    totalCount: 40,
    status: {
      label: '+05.21%',
      type: 'warning'
    }
  },
  {
    reportStage: 'Action',
    totalCount: 45,
    status: {
      label: '+22.12%',
      type: 'primary'
    }
  },
  {
    reportStage: 'Offering',
    totalCount: 62,
    status: {
      label: '-14.21%',
      type: 'danger'
    }
  },
  {
    reportStage: 'Interlocation',
    totalCount: 82,
    status: {
      label: '-14.21%',
      type: 'danger'
    }
  }
];

export const dealsReportData: DealsReport[] = [
  {
    dealName: 'Jo_Td01',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Analysis',
      value: 20
    },
    amount: {
      value: 140,
      trending: 'down'
    }
  },
  {
    dealName: 'Printing Dimensions',
    dealOwner: {
      avatar: team35,
      name: 'Alex Abadi',
      profileLink: '#!'
    },
    accountName: 'Black Box',
    stage: {
      label: 'Statement',
      value: 40
    },
    amount: {
      value: 214,
      trending: 'up'
    }
  },
  {
    dealName: 'MM_TD_120',
    dealOwner: {
      avatar: team32,
      name: 'Kylia Abbott',
      profileLink: '#!'
    },
    accountName: 'Hunter Leader',
    stage: {
      label: 'Action',
      value: 50
    },
    amount: {
      value: 412,
      trending: 'up'
    }
  },
  {
    dealName: 'Truhlar And Truhlar Attys',
    dealOwner: {
      avatar: team32,
      name: 'Kylia Abbott',
      profileLink: '#!'
    },
    accountName: 'Eagle Eye',
    stage: {
      label: 'Offering',
      value: 60
    },
    amount: {
      value: 110,
      trending: 'up'
    }
  },
  {
    dealName: 'Morlong Associates',
    dealOwner: {
      avatar: team59,
      name: 'Lyla Nicole',
      profileLink: '#!'
    },
    accountName: 'Black Box',
    stage: {
      label: 'Negotiation',
      value: 100
    },
    amount: {
      value: 325,
      trending: 'down'
    }
  },
  {
    dealName: 'Product Order',
    dealOwner: {
      avatar: team18,
      name: 'Hunter Leader',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Negotiation',
      value: 100
    },
    amount: {
      value: 198,
      trending: 'down'
    }
  },
  {
    dealName: 'Feltz Printing Service',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Offering',
      value: 80
    },
    amount: {
      value: 142,
      trending: 'up'
    }
  },
  {
    dealName: 'Flat Plate SP',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Eagle Eye',
    stage: {
      label: 'Offering',
      value: 80
    },
    amount: {
      value: 457,
      trending: 'up'
    }
  },
  {
    dealName: 'Evacuated Tube',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Hunter Leader',
    stage: {
      label: 'Action',
      value: 100
    },
    amount: {
      value: 120,
      trending: 'down'
    }
  },
  {
    dealName: 'Product Delivery',
    dealOwner: {
      avatar: team35,
      name: 'Alex Abadi',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Analysis',
      value: 100
    },
    amount: {
      value: 150,
      trending: 'down'
    }
  },
  {
    dealName: 'Product Order',
    dealOwner: {
      avatar: team18,
      name: 'Hunter Leader',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Negotiation',
      value: 100
    },
    amount: {
      value: 140,
      trending: 'down'
    }
  },
  {
    dealName: 'Feltz Printing Service',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Offering',
      value: 80
    },
    amount: {
      value: 122,
      trending: 'up'
    }
  },
  {
    dealName: 'Flat Plate SP',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Eagle Eye',
    stage: {
      label: 'Offering',
      value: 80
    },
    amount: {
      value: 321,
      trending: 'up'
    }
  },
  {
    dealName: 'Evacuated Tube',
    dealOwner: {
      name: 'Ally Aagaard',
      profileLink: '#!'
    },
    accountName: 'Hunter Leader',
    stage: {
      label: 'Action',
      value: 100
    },
    amount: {
      value: 104,
      trending: 'down'
    }
  },
  {
    dealName: 'Product Delivery',
    dealOwner: {
      avatar: team35,
      name: 'Alex Abadi',
      profileLink: '#!'
    },
    accountName: 'Themewagon',
    stage: {
      label: 'Analysis',
      value: 100
    },
    amount: {
      value: 124,
      trending: 'down'
    }
  }
];
export interface Report {
  id: number;
  title: string;
  subTitle: string;
  priority: {
    label: string;
    type: string;
  };
  reportsby: string;
  category: string;
  date: string;
}

export const reports: Report[] = [
  {
    id: 1,
    title: 'Purchasers and sellers',
    subTitle: 'Purchasing-Related Vendors',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reports by email',
    category: 'Sales Reports',
    date: 'Dec 30, 2022'
  },
  {
    id: 2,
    title: 'Useful Solutions',
    subTitle: 'Obtaining leads today',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reports by email',
    category: 'HR Reports',
    date: 'Dec 20, 2022'
  },
  {
    id: 3,
    title: 'Category Products',
    subTitle: 'Based on the percentage of recipients',
    priority: {
      label: 'Medium',
      type: 'success'
    },
    reportsby: 'Reports on Sales Orders',
    category: 'Marketing Reports',
    date: 'Dec 28, 2022'
  },
  {
    id: 4,
    title: 'Current Deals',
    subTitle: 'Sales for Today',
    priority: {
      label: 'Medium',
      type: 'success'
    },
    reportsby: 'Reviews of Products',
    category: 'Sales Reports',
    date: 'Dec 28, 2022'
  },
  {
    id: 5,
    title: 'Useful Solutions',
    subTitle: 'Obtaining leads today',
    priority: {
      label: 'Low',
      type: 'info'
    },
    reportsby: 'Reports by email',
    category: 'HR Reports',
    date: 'Dec 27, 2022'
  },
  {
    id: 6,
    title: 'Current Deals',
    subTitle: 'Sums up the many existing businesses.',
    priority: {
      label: 'Low',
      type: 'info'
    },
    reportsby: 'Reports by email',
    category: 'Service Reports',
    date: 'Dec 26, 2022'
  },
  {
    id: 7,
    title: 'Lost of Deals',
    subTitle: 'Emails sent by users to all records,',
    priority: {
      label: 'High',
      type: 'warning'
    },
    reportsby: 'Reports on Deals',
    category: 'Sales Reports',
    date: 'Dec 25, 2022'
  },
  {
    id: 8,
    title: 'Important Accounts',
    subTitle: 'Contracts closed by a salesman',
    priority: {
      label: 'Low',
      type: 'info'
    },
    reportsby: 'Reports on Deals',
    category: 'Marketing Reports',
    date: 'Dec 25, 2022'
  },
  {
    id: 9,
    title: 'Analytics for Email',
    subTitle: 'Based on Status Sales Orders',
    priority: {
      label: 'Medium',
      type: 'success'
    },
    reportsby: 'Reviews of Products',
    category: 'Sales Reports',
    date: 'Dec 24, 2022'
  },
  {
    id: 10,
    title: 'Types of Deals',
    subTitle: 'Products support will stop this month',
    priority: {
      label: 'Medium',
      type: 'success'
    },
    reportsby: 'Reports by email',
    category: 'Marketing Reports',
    date: 'Dec 23, 2022'
  },
  {
    id: 11,
    title: 'Category Products',
    subTitle: 'Based on the percentage of recipients',
    priority: {
      label: 'High',
      type: 'warning'
    },
    reportsby: 'Reports on Sales Orders',
    category: 'Marketing Reports',
    date: 'Dec 22, 2022'
  },
  {
    id: 12,
    title: 'Current Sales',
    subTitle: 'Sales for Today',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reviews of Products',
    category: 'Sales Reports',
    date: 'Dec 22, 2022'
  },
  {
    id: 13,
    title: 'Important Accounts',
    subTitle: 'Contracts closed by a salesman',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reports on Deals',
    category: 'Marketing Reports',
    date: 'Dec 21, 2022'
  },
  {
    id: 14,
    title: 'Useful Solutions',
    subTitle: 'Obtaining leads today',
    priority: {
      label: 'Urgent',
      type: 'danger'
    },
    reportsby: 'Reports by email',
    category: 'HR Reports',
    date: 'Dec 20, 2022'
  }
];

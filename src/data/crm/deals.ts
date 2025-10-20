export interface Deal {
  id: number;
  title: string;
  revenue: number;
  category: string;
  date: string;
  time: string;
  closingDate: string;
  closingTime: string;
  company: string;
  agent: string;
  openDetails?: boolean;
  status: {
    label: string;
    variant: string;
  };
  priority: {
    label: string;
    variant: string;
  };
  probability: {
    value: string;
    variant: string;
  };
}

export interface DealColumn {
  id: number;
  title: string;
  revenue: number;
  deals: Deal[];
}

export const dealColumnsData: DealColumn[] = [
  {
    id: 1,
    title: 'New',
    revenue: 37000,
    deals: [
      {
        id: 101,
        title: 'Jo_Td01',
        revenue: 14000,
        category: 'Financial',
        date: 'Dec 30, 2022',
        time: '2:15 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'Knitkake.inc',
        agent: 'Ally Aagaard',
        status: {
          label: 'new',
          variant: 'info'
        },
        priority: {
          label: 'Urgent',
          variant: 'danger'
        },
        probability: {
          value: '20',
          variant: 'info'
        }
      },
      {
        id: 102,
        title: 'Dimensions for Printing',
        revenue: 23000,
        category: 'Marketplace',
        date: 'Dec 29, 2022',
        time: '12:15 PM',
        closingDate: '25-12-2022',
        closingTime: '2:00 PM',
        company: 'Kibikaba Clothings',
        agent: 'Lonnie Kub',
        status: {
          label: 'New',
          variant: 'info'
        },
        priority: {
          label: 'Medium',
          variant: 'success'
        },
        probability: {
          value: '20',
          variant: 'info'
        }
      }
    ]
  },
  {
    id: 2,
    title: 'In Progress',
    revenue: 101300,
    deals: [
      {
        id: 201,
        title: 'True and True Attorneys',
        revenue: 33000,
        category: 'Financial',
        date: 'Dec 30, 2022',
        time: '06:15 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'PBR Holdings',
        agent: 'Aida Moen',
        status: {
          label: 'In Progress',
          variant: 'primary'
        },
        priority: {
          label: 'High',
          variant: 'warning'
        },
        probability: {
          value: '40',
          variant: 'primary'
        }
      },
      {
        id: 202,
        title: 'The Morlong Corporation',
        revenue: 45300,
        category: 'Marketplace',
        date: 'Dec 30, 2022',
        time: '08:20 PM',
        closingDate: '26-12-2022',
        closingTime: '12:10 PM',
        company: 'Giraffes Studio',
        agent: 'Niko Koss',
        status: {
          label: 'In Progress',
          variant: 'primary'
        },
        priority: {
          label: 'Low',
          variant: 'info'
        },
        probability: {
          value: '40',
          variant: 'primary'
        }
      },
      {
        id: 203,
        title: 'Product List',
        revenue: 23000,
        category: 'Marketplace',
        date: 'Dec 30, 2022',
        time: '3:25 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'Birds eye',
        agent: 'Alec Haag',
        status: {
          label: 'In Progress',
          variant: 'primary'
        },
        priority: {
          label: 'Urgent',
          variant: 'danger'
        },
        probability: {
          value: '40',
          variant: 'primary'
        }
      }
    ]
  },
  {
    id: 3,
    title: 'Pending',
    revenue: 23400,
    deals: [
      {
        id: 301,
        title: 'Printing Services by Feltz',
        revenue: 23400,
        category: 'Marketplace',
        date: 'Dec 30, 2022',
        time: '3:15 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'Ant Family',
        agent: 'Ally Aagaard',
        status: {
          label: 'Pending',
          variant: 'warning'
        },
        priority: {
          label: 'High',
          variant: 'warning'
        },
        probability: {
          value: '60',
          variant: 'warning'
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Canceled',
    revenue: 260,
    deals: [
      {
        id: 401,
        title: 'SP Flat Plate',
        revenue: 14000,
        category: 'Financial',
        date: 'Dec 31, 2022',
        time: '01:30 PM',
        closingDate: '29-12-2022',
        closingTime: '01:30 PM',
        company: 'Ant Family',
        agent: 'Ola Smith',
        status: {
          label: 'Canceled',
          variant: 'secondary'
        },
        priority: {
          label: 'Medium',
          variant: 'success'
        },
        probability: {
          value: '80',
          variant: '300'
        }
      },
      {
        id: 402,
        title: 'Ventilated Pipe',
        revenue: 14000,
        category: 'Marketplace',
        date: 'Dec 31, 2022',
        time: '2:15 PM',
        closingDate: '29-12-2022',
        closingTime: '02:15 PM',
        company: 'Giraffes Studio',
        agent: 'Leif Walsh',
        status: {
          label: 'Canceled',
          variant: 'secondary'
        },
        priority: {
          label: 'Low',
          variant: 'info'
        },
        probability: {
          value: '80',
          variant: '300'
        }
      }
    ]
  },
  {
    id: 5,
    title: 'Completed',
    revenue: 1650,
    deals: [
      {
        id: 501,
        title: 'Product Shipping',
        revenue: 15000,
        category: 'Financial',
        date: 'Dec 29, 2022',
        time: '03:12 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'Birds eye',
        agent: 'Brain Cole',
        status: {
          label: 'Completed',
          variant: 'success'
        },
        priority: {
          label: 'Urgent',
          variant: 'danger'
        },
        probability: {
          value: '100',
          variant: 'success'
        }
      },
      {
        id: 502,
        title: 'Product List',
        revenue: 3300,
        category: 'Financial',
        date: 'Dec 29, 2022',
        time: '06:15 PM',
        closingDate: '28-12-2022',
        closingTime: '12:20 PM',
        company: 'Ink Incorporated',
        agent: 'Reese Mann',
        status: {
          label: 'Completed',
          variant: 'success'
        },
        priority: {
          label: 'Low',
          variant: 'info'
        },
        probability: {
          value: '100',
          variant: 'success'
        }
      },
      {
        id: 503,
        title: 'Dimensions for Printing',
        revenue: 23400,
        category: 'Marketplace',
        date: 'Dec 29, 2022',
        time: '2:15 PM',
        closingDate: '28-12-2022',
        closingTime: '02:19 PM',
        company: 'Slim Apes',
        agent: 'Ally Aagaard',
        status: {
          label: 'Completed',
          variant: 'success'
        },
        priority: {
          label: 'Urgent',
          variant: 'danger'
        },
        probability: {
          value: '100',
          variant: 'success'
        }
      }
    ]
  }
];

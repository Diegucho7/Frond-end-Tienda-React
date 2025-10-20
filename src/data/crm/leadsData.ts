import { ToDoItem } from 'data/project-management/todoListData';

export interface LeadDeal {
  name: string;
  amount: number;
  stage: string;
  probability: number;
  closing_date: string;
  type: string;
}

export interface LeadEmail {
  mail: {
    subject: string;
    email: string;
  };
  sentBy: string;
  date: string;
  action: string;
  status: {
    label: string;
    type: string;
  };
  type: string;
}

export const leadTasks: ToDoItem[] = [
  {
    task: 'Platforms for data administration',
    date: '19 Nov, 2022',
    time: '11:56 PM'
  },
  {
    task: 'Make wiser business choices.',
    date: '05 Nov, 2022',
    time: '09:30 PM'
  },
  {
    task: 'Market and consumer insights',
    date: '02 Nov, 2022',
    time: '05:25 AM'
  },
  {
    task: 'Dashboards for business insights',
    date: '29 Oct, 2022',
    time: '08:21 PM'
  },
  {
    task: 'Analytics and consultancy for data',
    date: '21 Oct, 2022',
    time: '03:45 PM',
    completed: true
  },
  {
    task: 'Planning your locations Customer data platform',
    date: '14 Oct, 2022',
    time: '10:00 PM',
    completed: true
  },
  {
    task: 'Promotion of technology',
    date: '12 Oct, 2022',
    time: '02:00 AM',
    completed: true
  }
];

export const leadDealsTableData: LeadDeal[] = [
  {
    name: 'Mocking Bird',
    amount: 6800000,
    stage: 'won deal',
    probability: 67,
    closing_date: 'Dec 29, 2021',
    type: 'warm'
  },
  {
    name: 'Airbender',
    amount: 89090000,
    stage: 'new deal',
    probability: 34,
    closing_date: 'Mar 27, 2021',
    type: 'hot'
  },
  {
    name: 'Showmen',
    amount: 78650000,
    stage: 'canceled',
    probability: 89,
    closing_date: 'Jun 24, 2021',
    type: 'cold'
  },
  {
    name: 'Tarakihi',
    amount: 1200000,
    stage: 'in progress',
    probability: 90,
    closing_date: 'May 19, 2024',
    type: 'hot'
  },
  {
    name: 'Ponce d’leon',
    amount: 46000,
    stage: 'won deal',
    probability: 97,
    closing_date: 'Aug 19, 2024',
    type: 'cold'
  },
  {
    name: 'leon',
    amount: 66000,
    stage: 'in progress',
    probability: 88,
    closing_date: 'Aug 19, 2024',
    type: 'cold'
  }
];

export const dealEmailsTableData: LeadEmail[] = [
  {
    mail: {
      subject: 'Quary about purchased soccer socks',
      email: 'jackson@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 29, 2021 10:23 am',
    action: 'Call',
    status: {
      label: 'sent',
      type: 'success'
    },
    type: 'mails'
  },
  {
    mail: {
      subject: 'How to take the headache out of Order',
      email: 'ansolo45@mail.com'
    },
    sentBy: 'Ansolo Lazinatov',
    date: 'Dec 27, 2021 3:27 pm',
    action: 'Call',
    status: {
      label: 'delivered',
      type: 'info'
    },
    type: 'mails'
  },
  {
    mail: {
      subject: 'The Arnold Schwarzenegger of Order',
      email: 'ansolo45@mail.com'
    },
    sentBy: 'Ansolo Lazinatov',
    date: 'Dec 24, 2021 10:44 am',
    action: 'Call',
    status: {
      label: 'bounced',
      type: 'warning'
    },
    type: 'mails'
  },
  {
    mail: {
      subject: 'My order is not being taken',
      email: 'jackson@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 19, 2021 4:55 pm',
    action: 'Call',
    status: {
      label: 'spam',
      type: 'danger'
    },
    type: 'mails'
  },
  {
    mail: {
      subject: 'Shipment is missing',
      email: 'jackson@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 19, 2021 2:43 pm',
    action: 'Call',
    status: {
      label: 'sent',
      type: 'success'
    },
    type: 'mails'
  },
  {
    mail: {
      subject: 'How can I order something urgently?',
      email: 'ansolo45@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 19, 2021 2:43 pm',
    action: 'Call',
    status: {
      label: 'delivered',
      type: 'info'
    },
    type: 'drafts'
  },
  {
    mail: {
      subject: 'How the delicacy of the products will be handled?',
      email: 'ansolo45@mail.com'
    },
    sentBy: 'Ansolo Lazinatov',
    date: 'Dec 16, 2021 5:18 pm',
    action: 'Call',
    status: {
      label: 'bounced',
      type: 'warning'
    },
    type: 'scheduled'
  },
  {
    mail: {
      subject: 'Inquiry about soccer equipment',
      email: 'jackson@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 29, 2021 10:23 am',
    action: 'Call',
    status: {
      label: 'sent',
      type: 'success'
    },
    type: 'mails'
  },
  {
    mail: {
      subject: 'How to track my order',
      email: 'ansolo45@mail.com'
    },
    sentBy: 'Ansolo Lazinatov',
    date: 'Dec 27, 2021 3:27 pm',
    action: 'Call',
    status: {
      label: 'delivered',
      type: 'info'
    },
    type: 'scheduled'
  },
  {
    mail: {
      subject: 'Product return request',
      email: 'ansolo45@mail.com'
    },
    sentBy: 'Ansolo Lazinatov',
    date: 'Dec 24, 2021 10:44 am',
    action: 'Call',
    status: {
      label: 'bounced',
      type: 'warning'
    },
    type: 'drafts'
  },
  {
    mail: {
      subject: 'Issue with my order',
      email: 'jackson@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 19, 2021 4:55 pm',
    action: 'Call',
    status: {
      label: 'spam',
      type: 'danger'
    },
    type: 'scheduled'
  },
  {
    mail: {
      subject: 'Shipment delay notification',
      email: 'jackson@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 19, 2021 2:43 pm',
    action: 'Call',
    status: {
      label: 'sent',
      type: 'success'
    },
    type: 'scheduled'
  },
  {
    mail: {
      subject: 'Urgent order inquiry',
      email: 'ansolo45@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 19, 2021 2:43 pm',
    action: 'Call',
    status: {
      label: 'delivered',
      type: 'info'
    },
    type: 'drafts'
  },
  {
    mail: {
      subject: 'Product handling concerns',
      email: 'ansolo45@mail.com'
    },
    sentBy: 'Ansolo Lazinatov',
    date: 'Dec 16, 2021 5:18 pm',
    action: 'Call',
    status: {
      label: 'bounced',
      type: 'warning'
    },
    type: 'scheduled'
  },
  {
    mail: {
      subject: 'Important update on your order',
      email: 'jackson@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 15, 2021 8:12 am',
    action: 'Call',
    status: {
      label: 'sent',
      type: 'success'
    },
    type: 'drafts'
  },
  {
    mail: {
      subject: 'Confirmation of your order',
      email: 'jackson@mail.com'
    },
    sentBy: 'Jackson Pollock',
    date: 'Dec 12, 2021 11:30 am',
    action: 'Call',
    status: {
      label: 'delivered',
      type: 'info'
    },
    type: 'drafts'
  },
  {
    mail: {
      subject: 'Shipping address update',
      email: 'ansolo45@mail.com'
    },
    sentBy: 'Ansolo Lazinatov',
    date: 'Dec 10, 2021 2:55 pm',
    action: 'Call',
    status: {
      label: 'bounced',
      type: 'warning'
    },
    type: 'scheduled'
  }
];

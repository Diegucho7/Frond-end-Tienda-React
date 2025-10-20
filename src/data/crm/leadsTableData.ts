import team1 from 'assets/img/team/32.webp';
import team2 from 'assets/img/team/33.webp';
import team3 from 'assets/img/team/34.webp';
import team4 from 'assets/img/team/35.webp';
import team5 from 'assets/img/team/24.webp';
import team6 from 'assets/img/team/29.webp';
import team7 from 'assets/img/team/65.webp';
import team8 from 'assets/img/team/63.webp';
import team9 from 'assets/img/team/31.webp';
import team10 from 'assets/img/team/26.webp';
import team11 from 'assets/img/team/73.webp';
import team12 from 'assets/img/team/75.webp';
import { BadgeBg } from 'components/base/Badge';

export interface LeadDataType {
  id: number;
  customer: {
    avatar: string;
    name: string;
    designation: string;
    status: {
      label: string;
      type: BadgeBg;
    };
  };
  email: string;
  phone: string;
  contact: string;
  company: string;
  date: string;
}

export const leadsTableData: LeadDataType[] = [
  {
    id: 1,
    customer: {
      avatar: team1,
      name: 'Anthoney Michael',
      designation: 'VP Accounting',
      status: {
        label: 'new lead',
        type: 'info'
      }
    },
    email: 'anth125@gmail.com',
    phone: '+1-202-555-0126',
    contact: `Ally Aagaard`,
    company: `Google.inc`,
    date: `Jan 01, 12:56 PM`
  },
  {
    id: 2,
    customer: {
      avatar: team2,
      name: 'Jacob Russell',
      designation: 'Executive Manager',
      status: {
        label: 'Cancelled',
        type: 'secondary'
      }
    },
    email: 'jacob@yahoo.com',
    phone: '+1-202-555-0135',
    contact: `Alex Abadi`,
    company: `Google.inc`,
    date: `Dec 31, 11:51 PM`
  },
  {
    id: 3,
    customer: {
      avatar: team3,
      name: 'Diego Anthony',
      designation: 'CEO',
      status: {
        label: 'In progress',
        type: 'info'
      }
    },
    email: 'diego20@hotmail.com',
    phone: '+44 1632 960970',
    contact: `Lyla Nicole`,
    company: `Adobe Inc.`,
    date: `Dec 29, 02:11 AM`
  },
  {
    id: 4,
    customer: {
      avatar: team4,
      name: 'Austin James',
      designation: 'Creative Director',
      status: {
        label: 'Cold lead',
        type: 'warning'
      }
    },
    email: 'austin@sni.it',
    phone: '+44 1632 960970',
    contact: `Kylia Abbott`,
    company: `Facebook`,
    date: `Dec 28, 10:56 PM`
  },
  {
    id: 5,
    customer: {
      avatar: team5,
      name: 'Sarah Lynn',
      designation: 'Accountant',
      status: {
        label: 'won lead',
        type: 'success'
      }
    },
    email: 'sarah@technext.it',
    phone: '+1-202-555-0177',
    contact: `Bryce Abbott`,
    company: `Twitter`,
    date: `Dec 27, 11:43 PM`
  },
  {
    id: 6,
    customer: {
      avatar: team6,
      name: 'Reyna Denise',
      designation: 'Executive Manager',
      status: {
        label: 'new lead',
        type: 'info'
      }
    },
    email: 'reyna99@gmail.com',
    phone: '+44 1632 960958',
    contact: `Jase Adams`,
    company: `Twitter`,
    date: `Dec 25, 12:55 PM`
  },
  {
    id: 7,
    customer: {
      avatar: team7,
      name: 'Roy Anderson',
      designation: 'System Admin',
      status: {
        label: 'Canceled',
        type: 'secondary'
      }
    },
    email: 'andersonroy@netflix.chill',
    phone: '+1-613-555-0109',
    contact: `Jim Aldridge`,
    company: `Google.inc`,
    date: `Dec 24, 09:52 PM`
  },
  {
    id: 8,
    customer: {
      avatar: team8,
      name: 'Emily Beazley',
      designation: 'Marketing Executive',
      status: {
        label: 'New Lead',
        type: 'info'
      }
    },
    email: 'beazley1@gmail.com',
    phone: '+61 1900 654 321',
    contact: `Zackry Aldridge`,
    company: `Instagram`,
    date: `Dec 22, 08:45 PM`
  },
  {
    id: 9,
    customer: {
      avatar: team9,
      name: 'Layla Beckstrand',
      designation: 'Junior Executive',
      status: {
        label: 'cold lead',
        type: 'warning'
      }
    },
    email: 'layla@live.com',
    phone: '+36 55 116 068',
    contact: `Daniel Alexander`,
    company: `Linkedin`,
    date: `Dec 20, 06:32 PM`
  },
  {
    id: 10,
    customer: {
      avatar: team10,
      name: 'Olivia Bensinger',
      designation: 'Chief Tech Officer',
      status: {
        label: 'won lead',
        type: 'success'
      }
    },
    email: 'olivia1986@gmail.com',
    phone: '+44 1632 960248',
    contact: `Sam Alimentato`,
    company: `Google.inc`,
    date: `Dec 19, 10:44 PM`
  },

  {
    id: 11,
    customer: {
      avatar: team11,
      name: 'Emily Beazley',
      designation: 'Marketing Executive',
      status: {
        label: 'New Lead',
        type: 'info'
      }
    },
    email: 'beazley1@gmail.com',
    phone: '+61 1900 654 321',
    contact: `Zackry Aldridge`,
    company: `Instagram`,
    date: `Dec 22, 08:45 PM`
  },
  {
    id: 12,
    customer: {
      avatar: team12,
      name: 'Roy Anderson',
      designation: 'System Admin',
      status: {
        label: 'Canceled',
        type: 'secondary'
      }
    },
    email: 'andersonroy@netflix.chill',
    phone: '+1-613-555-0109',
    contact: `Jim Aldridge`,
    company: `Google.inc`,
    date: `Dec 24, 09:52 PM`
  }
];

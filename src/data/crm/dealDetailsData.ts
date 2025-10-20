import member1 from 'assets/img/team/9.webp';
import member2 from 'assets/img/team/25.webp';
import member3 from 'assets/img/team/32.webp';
import member4 from 'assets/img/team/35.webp';
import member5 from 'assets/img/team/11.webp';
import member6 from 'assets/img/team/26.webp';
import member7 from 'assets/img/team/33.webp';
import member8 from 'assets/img/team/30.webp';
import member9 from 'assets/img/team/12.webp';
import member10 from 'assets/img/team/28.webp';
import member11 from 'assets/img/team/22.webp';
import member12 from 'assets/img/team/13.webp';
import member13 from 'assets/img/team/24.webp';
import member14 from 'assets/img/team/62.webp';
import member15 from 'assets/img/team/34.webp';
import { BadgeBg, BadgeVariant } from 'components/base/Badge';
import { Status } from 'components/base/Avatar';
import {
  faClipboard,
  faEnvelope,
  faPaperclip,
  faPhoneAlt,
  faSquareCheck,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Activity {
  id: number;
  title: string;
  name: string;
  date: string;
  variant: string;
  icon: IconProp;
  description?: string;
}

export const dealActivities: Activity[] = [
  {
    id: 1,
    title: 'Assigned  as a director for Project  The Chewing Gum Attack',
    name: 'Jackson Pollock',
    date: '22 September, 2022, 4:33 PM',
    description:
      'Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution. ',
    variant: 'primary',
    icon: faClipboard
  },
  {
    id: 2,
    title: 'Onboarding Meeting',
    name: 'Jackson Pollock',
    date: '20 September, 2022, 5:31pm',
    variant: 'info',
    icon: faVideo
  },
  {
    id: 3,
    title: 'Designing the dungeon',
    name: 'Jackson Pollock',
    date: '19 September, 2022, 4:39pm ',
    description:
      'To get off the runway and paradigm shift, we should take  brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus.  ',
    variant: 'success',
    icon: faSquareCheck
  },
  {
    id: 4,
    title: 'Purchasing-Related Vendors',
    name: 'Ansolo Lazinatov',
    date: '22 September, 2022, 4:30pm',
    variant: 'warning',
    icon: faPhoneAlt
  },
  {
    id: 5,
    title: 'Quary about purchased soccer socks',
    name: 'Ansolo Lazinatov',
    date: '15 September, 2022, 3:33pm',
    description:
      'I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount.',
    variant: 'danger',
    icon: faEnvelope
  },
  {
    id: 6,
    title: 'Added image',
    name: 'Ansolo Lazinatov',
    date: '11 September, 2022, 12:15am ',
    variant: 'primary',
    icon: faPaperclip
  }
];

export interface Note {
  id: number;
  name: string;
  date: string;
  description: string;
}

export const dealNotes: Note[] = [
  {
    id: 1,
    name: 'Ansolo Lazinatov',
    date: 'clock 12 Nov, 2018',
    description: 'Gave us a nice feedback'
  },
  {
    id: 2,
    name: 'Ansolo Lazinatov',
    date: ' 30 Jan, 2019',
    description:
      'I also want to let you know that I am available to you as your real estate insider from now on. If you have any questions about the market, even if they sound silly, call or text anytime.'
  },
  {
    id: 3,
    name: 'Jackson Pollock',
    date: '19 September, 2022, 4:39pm ',
    description:
      'To get off the runway and paradigm shift, we should take  brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus.'
  },
  {
    id: 4,
    name: 'Ansolo Lazinatov',
    date: '22 September, 2022, 4:30pm',
    description:
      'Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution.'
  }
];

export interface Meeting {
  id: number;
  title: string;
  date: {
    from: string;
    to: string;
    duration: string;
  };
  badge: {
    variant: BadgeVariant;
    bg: BadgeBg;
    text: string;
  };
  assigness: string[];
  more: string;
  priority: {
    label: string;
    color: string;
  };
  name?: string;
}

export const meetingData: Meeting[] = [
  {
    id: 1,
    title: 'Onboarding Meeting',
    date: {
      from: '5:30 pm',
      to: '7:00pm',
      duration: ' - 1h 30min'
    },
    badge: {
      variant: 'phoenix',
      bg: 'primary',
      text: 'today'
    },
    assigness: [member1, member2, member3, member4, member5],
    more: '+1',
    priority: {
      label: 'Urgent',
      color: 'danger'
    }
  },
  {
    id: 2,
    title: 'Agile Mindset Meetup',
    date: {
      from: '4:30 pm',
      to: '6:00pm',
      duration: ' - 1h 30min'
    },
    badge: {
      variant: 'phoenix',
      bg: 'warning',
      text: 'tomorrow'
    },
    assigness: [member5, member6, member7, member8, member2],
    more: '+1',
    priority: {
      label: 'Medium',
      color: 'success'
    }
  },
  {
    id: 3,
    title: 'Meeting Fundamentals',
    date: {
      from: '6:00 pm',
      to: '7:20pm',
      duration: ' - 1h 20min'
    },
    badge: {
      variant: 'phoenix',
      bg: 'warning',
      text: 'tomorrow'
    },
    name: 'R',
    assigness: [member9, member10, member11, member5, member6],
    more: '+2',
    priority: {
      label: 'High',
      color: 'warning'
    }
  },
  {
    id: 4,
    title: 'Design System Meeting',
    date: {
      from: '7:30 pm',
      to: '8:45pm',
      duration: ' - 1h 45min'
    },
    badge: {
      variant: 'phoenix',
      bg: 'warning',
      text: 'tomorrow'
    },
    assigness: [
      member12,
      member13,
      member14,
      member15,
      member1,
      member2,
      member3,
      member4
    ],
    more: '+4',
    priority: {
      label: 'Low',
      color: 'info'
    }
  }
];

export interface Task {
  id: number;
  task: string;
  date: string;
  time: string;
  completed?: boolean;
}

export const taskList: Task[] = [
  {
    id: 1,
    task: 'Platforms for data administration',
    date: '19 Nov, 2022',
    time: '11:56 PM'
  },
  {
    id: 2,
    task: 'Make wiser business choices.',
    date: '05 Nov, 2022',
    time: '09:30 PM'
  },
  {
    id: 3,
    task: 'Market and consumer insights',
    date: '02 Nov, 2022',
    time: '05:25 AM'
  },
  {
    id: 4,
    task: 'Dashboards for business insights',
    date: '29 Oct, 2022',
    time: '08:21 PM'
  },
  {
    id: 5,
    task: 'Analytics and consultancy for data',
    date: '21 Oct, 2022',
    time: '03:45 PM',
    completed: true
  },
  {
    id: 6,
    task: 'Planning your locations Customer data platform',
    date: '14 Oct, 2022',
    time: '10:00 PM',
    completed: true
  },
  {
    id: 7,
    task: 'Promotion of technology',
    date: '12 Oct, 2022',
    time: '02:00 AM',
    completed: true
  }
];

export interface CallTableDataType {
  user: {
    avatar: string;
    name: string;
    status: Status;
  };
  description: string;
  date: string;
  creatBy: string;
  activity: string;
}

export const callTableData: CallTableDataType[] = [
  {
    user: {
      avatar: member4,
      name: 'Ansolo Lazinatov',
      status: 'online'
    },
    description: 'Purchasing-Related Vendors',
    date: 'Dec 29, 2021',
    creatBy: 'Ansolo Lazinarov',
    activity: 'Active'
  },
  {
    user: {
      avatar: member1,
      name: 'Jackson Pollock',
      status: 'offline'
    },
    description: 'Based on emails sent rate, the top 10 users',
    date: 'Mar 27, 2021',
    creatBy: 'Jackson Pollock',
    activity: '6 hours ago'
  },
  {
    user: {
      avatar: member4,
      name: 'Ansolo Lazinatov',
      status: 'online'
    },
    description: 'Based on the percentage of recipients',
    date: 'Jun 24, 2021',
    creatBy: 'Ansolo Lazinarov',
    activity: 'Active'
  },
  {
    user: {
      avatar: member1,
      name: 'Jackson Pollock',
      status: 'offline'
    },
    description: 'Obtaining leads today',
    date: 'May 19, 2024',
    creatBy: 'Jackson Pollock',
    activity: '6 hours ago'
  },
  {
    user: {
      avatar: member4,
      name: 'Ansolo Lazinatov',
      status: 'online'
    },
    description: 'Sums up the many phases of new and existing businesses.',
    date: 'Aug 19, 2024',
    creatBy: 'Ansolo Lazinarov',
    activity: 'Active'
  },
  {
    user: {
      avatar: member4,
      name: 'Ansolo Lazinatov',
      status: 'online'
    },
    description: 'Purchasing-Related Vendors',
    date: 'Aug 19, 2024',
    creatBy: 'Ansolo Lazinarov',
    activity: 'Active'
  }
];

import illustration34 from 'assets/img/spot-illustrations/34.png';
import illustration34_2 from 'assets/img/spot-illustrations/34_2.png';
import illustration35 from 'assets/img/spot-illustrations/35.png';
import illustration35_2 from 'assets/img/spot-illustrations/35_2.png';
import illustration36 from 'assets/img/spot-illustrations/36.png';
import illustration36_2 from 'assets/img/spot-illustrations/36_2.png';
import icon1 from 'assets/img/icons/lightning-speed.png';
import darkIcon1 from 'assets/img/icons/lightning-speed-dark.png';
import icon2 from 'assets/img/icons/best-statistics.png';
import darkIcon2 from 'assets/img/icons/best-statistics-dark.png';
import icon3 from 'assets/img/icons/all-night.png';
import darkIcon3 from 'assets/img/icons/all-night-dark.png';
import icon4 from 'assets/img/icons/editable-features.png';
import darkIcon4 from 'assets/img/icons/editable-features-dark.png';
import blog5 from 'assets/img/blog/blog-5.png';
import blog6 from 'assets/img/blog/blog-6.png';
import blog7 from 'assets/img/blog/blog-7.png';
import team70 from 'assets/img/team/70.webp';
import team15 from 'assets/img/team/15.webp';
import team71 from 'assets/img/team/71.webp';
import team72 from 'assets/img/team/72.webp';
import team73 from 'assets/img/team/73.webp';
import team74 from 'assets/img/team/74.webp';
import team75 from 'assets/img/team/75.webp';
import team76 from 'assets/img/team/76.webp';
import team20 from 'assets/img/team/20.webp';

export interface Feature {
  id: number;
  title: string;
  description: string;
  lightImg: string;
  darkImg: string;
}

export interface Stat {
  id: number;
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface Blog {
  id: number;
  image: string;
  views: number;
  like: number;
  comments: number;
  category: string;
  title: string;
}

export interface TeamMember {
  id: number;
  image: string;
  name: string;
  designation: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: 'Recieve the signals instantly',
    description:
      'Phoenix allows you to receive every signal instantly and fruitfully. No need for long waits.',
    lightImg: illustration34,
    darkImg: illustration34_2
  },
  {
    id: 2,
    title: 'Make everyday a joyride',
    description:
      'Phoenix helps you show reports and data in one place and make the journey a glee trip for everyone.',
    lightImg: illustration35,
    darkImg: illustration35_2
  },
  {
    id: 3,
    title: 'See Your Revenue Grow',
    description:
      'Grow with Phoenix. We help you with everything you might need, We make it easy and keep it simple.',
    lightImg: illustration36,
    darkImg: illustration36_2
  }
];

export const services: Feature[] = [
  {
    id: 1,
    title: 'Lightning Speed',
    description: 'Grow fast with Phoenix!',
    lightImg: icon1,
    darkImg: darkIcon1
  },
  {
    id: 2,
    title: 'Best Statistics',
    description: 'Get all reports at hand!',
    lightImg: icon2,
    darkImg: darkIcon2
  },
  {
    id: 3,
    title: 'All-night Protection',
    description: 'Security Assured: Ensure data Safety with Phoenix!',
    lightImg: icon3,
    darkImg: darkIcon3
  },
  {
    id: 4,
    title: 'Editable Features',
    description: 'Edits made easy and safe!',
    lightImg: icon4,
    darkImg: darkIcon4
  }
];

export const stats: Stat[] = [
  {
    id: 1,
    title: 'Revenue',
    value: 8976,
    prefix: '$'
  },
  {
    id: 2,
    title: 'User',
    value: 308,
    suffix: 'K'
  },
  {
    id: 3,
    title: 'Countries',
    value: 12
  },
  {
    id: 4,
    title: 'Stories',
    value: 125,
    suffix: '+'
  }
];

export const blogs: Blog[] = [
  {
    id: 1,
    image: blog5,
    views: 2563,
    like: 125,
    comments: 125,
    category: 'SEO',
    title: 'Top 10 ways to Ace SEO for your business'
  },
  {
    id: 2,
    image: blog6,
    views: 1256,
    like: 325,
    comments: 32,
    category: 'Marketing',
    title: 'Top 12 Marketing strategies you can take'
  },
  {
    id: 3,
    image: blog7,
    views: 142,
    like: 123,
    comments: 22,
    category: 'Marketing',
    title: 'The top 7 methods to improve as a marketer'
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    image: team70,
    name: 'Brett Bezos',
    designation: 'CEO'
  },
  {
    id: 2,
    image: team15,
    name: 'Lucas Murray',
    designation: 'General Manager'
  },
  {
    id: 3,
    image: team71,
    name: 'Casey Andrews',
    designation: 'IT Specialist'
  },
  {
    id: 4,
    image: team72,
    name: 'Poppy Russell',
    designation: 'Frontend Dev'
  },
  {
    id: 5,
    image: team73,
    name: 'Emma Knowles',
    designation: 'Backend Dev'
  },
  {
    id: 6,
    image: team74,
    name: 'Megan Holmes',
    designation: 'HR'
  },
  {
    id: 7,
    image: team75,
    name: 'Cameron Fletcher',
    designation: 'UX/UI Designer'
  },
  {
    id: 8,
    image: team20,
    name: 'Amber Norris',
    designation: 'Consultant'
  },
  {
    id: 9,
    image: team76,
    name: 'Scooby',
    designation: 'Dog'
  }
];

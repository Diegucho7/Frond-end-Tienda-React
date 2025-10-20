import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faClipboard,
  faEnvelope,
  faPaperclip,
  faRocket,
  faScrewdriverWrench,
  faSkullCrossbones,
  faStethoscope,
  faSwatchbook,
  faTruck,
  faTruckFast,
  faTruckRampBox,
  faUtensils,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

export interface TimelineData {
  oppositeContent: {
    date: string;
    time: string;
  };
  content: {
    title: string;
    subtitle: string;
  };
  separator: {
    icon: IconProp;
    dotClass: string;
    barClass?: string;
  };
}

export interface TimelineItem {
  id: number;
  time: string;
  icon: IconProp;
  iconColor: string;
  title: string;
  content?: string;
  tasker: string;
  file?: string;
}
export interface Timeline {
  id: number;
  date: string;
  items: TimelineItem[];
}

export const orderTrackingTimelineData: TimelineData[] = [
  {
    oppositeContent: {
      date: '23 August, 2023',
      time: '10:30 AM'
    },
    content: {
      title: 'Order is processing',
      subtitle: 'Your package is ready for the seller to prepare.'
    },
    separator: {
      icon: faCheck,
      dotClass: 'bg-success dark__bg-success',
      barClass: 'border-success'
    }
  },
  {
    oppositeContent: {
      date: '25 August, 2023',
      time: '11:30 AM'
    },
    content: {
      title: 'Picked Up',
      subtitle: 'Your package has been picked up from the seller.'
    },
    separator: {
      icon: faCheck,
      dotClass: 'bg-success dark__bg-success',
      barClass: 'border-warning'
    }
  },
  {
    oppositeContent: {
      date: '27 August, 2023',
      time: '6:30 AM'
    },
    content: {
      title: 'Ready to Ship',
      subtitle: 'Your package is now ready to be shipped.'
    },
    separator: {
      icon: faTruckRampBox,
      dotClass: 'bg-warning dark__bg-warning',
      barClass: 'border-dashed'
    }
  },
  {
    oppositeContent: {
      date: 'Estimated time',
      time: '29 August, 2023'
    },
    content: {
      title: 'Shipped',
      subtitle: 'Pending'
    },
    separator: {
      icon: faTruck,
      dotClass: 'bg-body-quaternary',
      barClass: 'border-dashed'
    }
  },
  {
    oppositeContent: {
      date: 'Estimated time',
      time: '30 August, 2023'
    },
    content: {
      title: 'Delivered',
      subtitle: 'Pending'
    },
    separator: {
      icon: faTruckFast,
      dotClass: 'bg-body-quaternary'
    }
  }
];

export const timelineData: Timeline[] = [
  {
    id: 1,
    date: 'Today',
    items: [
      {
        id: 11,
        time: '4:33pm',
        icon: faClipboard,
        iconColor: 'success',
        title: `Assigned to serve as the <br class='d-sm-none'> project's director`,
        content:
          'Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution.',
        tasker: 'John N. Ward'
      },
      {
        id: 12,
        time: '6:30pm',
        icon: faEnvelope,
        iconColor: 'danger',
        title: 'Quary about purchased <br class="d-sm-none"> soccer socks',
        content:
          'I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount.',
        tasker: 'Edward Hopper'
      },
      {
        id: 13,
        time: '9:33pm',
        icon: faVideo,
        iconColor: 'info',
        title: 'Onboarding Meeting',
        content: '',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 2,
    date: '15 October, 2022',
    items: [
      {
        id: 21,
        time: '1:30pm',
        icon: faSwatchbook,
        iconColor: 'primary',
        title: 'Designing the dungeon',
        content:
          'To get off the runway and paradigm shift, we should take  brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus. ',
        tasker: 'John N. Ward'
      },
      {
        id: 22,
        time: '8:32pm',
        icon: faSkullCrossbones,
        iconColor: 'danger',
        title: 'How to take the headache <br class="d-sm-none"> out of Order',
        content:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
        tasker: 'Edward Hopper'
      },
      {
        id: 23,
        time: '9:30pm',
        icon: faStethoscope,
        iconColor: 'primary',
        title: 'Mandatory routine checkup',
        content:
          'To get the bitter butter out and take the better butter into the bitter dough to make a bitter bread and broad donut, not the usual yellow butter, but the white butterless butter.',
        tasker: 'Eye before Thy Hospital'
      },
      {
        id: 24,
        time: '8:30pm',
        icon: faUtensils,
        iconColor: 'success',
        title: 'Making bad butter better',
        content:
          "Check how long a fish might live out of water and if you can check the pulse to see if it's alive or not though it's okay to eat fish cause they don't have any feelings.",
        tasker: 'Edward Hopper'
      },
      {
        id: 25,
        time: '10:33pm',
        icon: faRocket,
        iconColor: 'info',
        title: 'Launching Phoenix',
        content: '',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 3,
    date: '20 October, 2022',
    items: [
      {
        id: 31,
        time: '8:32pm',
        icon: faScrewdriverWrench,
        iconColor: 'warning',
        title: 'To take the ants out',
        content:
          'Many ants are crawling into my PC and now they live in there to get highly skilled in web development and programming language that will make them earn better than the humans so that they’ll be able to buy off all the sugar out of the market.',
        tasker: 'Edward Hopper'
      },
      {
        id: 32,
        time: '10:33pm',
        icon: faPaperclip,
        iconColor: 'info',
        title: 'Added file',
        tasker: 'John N. Ward',
        file: 'Readme.pdf'
      }
    ]
  }
];

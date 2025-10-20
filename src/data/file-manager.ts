import fileManager9 from 'assets/img/file-manager/9.png';
import fileManager11 from 'assets/img/file-manager/11.png';
import fileManager12 from 'assets/img/file-manager/12.png';
import fileManager13 from 'assets/img/file-manager/13.png';
import fileManager15 from 'assets/img/file-manager/15.png';
import fileManager16 from 'assets/img/file-manager/16.png';
import team2 from 'assets/img/team/2.webp';
import team3 from 'assets/img/team/3.webp';
import team4 from 'assets/img/team/4.webp';
import team9 from 'assets/img/team/9.webp';
import team10 from 'assets/img/team/10.webp';
import team11 from 'assets/img/team/11.webp';
import team12 from 'assets/img/team/12.webp';
import team13 from 'assets/img/team/13.webp';
import team23 from 'assets/img/team/23.webp';
import team25 from 'assets/img/team/25.webp';
import team32 from 'assets/img/team/32.webp';
import team7 from 'assets/img/team/7.webp';
import team21 from 'assets/img/team/21.webp';
import team26 from 'assets/img/team/26.webp';
import team28 from 'assets/img/team/28.webp';
import team27 from 'assets/img/team/27.webp';
import team35 from 'assets/img/team/35.webp';
import team57 from 'assets/img/team/57.webp';
import team71 from 'assets/img/team/71.webp';
import team70 from 'assets/img/team/70.webp';
import team1 from 'assets/img/team/1.webp';
import team5 from 'assets/img/team/5.webp';
import team6 from 'assets/img/team/6.webp';
import team16 from 'assets/img/team/16.webp';
import team18 from 'assets/img/team/18.webp';
import team19 from 'assets/img/team/19.webp';
import team22 from 'assets/img/team/22.webp';
import team24 from 'assets/img/team/24.webp';
import teamR from 'assets/img/team/r.webp';
import teamAvatar from 'assets/img/team/avatar.webp';
import thumb2 from 'assets/video/2.png';
import thumb3 from 'assets/video/3.png';
import team34 from 'assets/img/team/34.webp';
import fileManager1 from 'assets/img/file-manager/1.png';
import fileManager2 from 'assets/img/file-manager/2.png';
import fileManager6 from 'assets/img/file-manager/6.png';
import fileManager7 from 'assets/img/file-manager/7.png';
import generic67Pdf from 'assets/img/generic/67.pdf';
import video1 from 'assets/video/1.mp4';
import video2 from 'assets/video/2.mp4';
import video3 from 'assets/video/3.mp4';
import video4 from 'assets/video/4.mp4';
import videoThumb1 from 'assets/video/1.png';
import videoThumb2 from 'assets/video/2.png';
import videoThumb3 from 'assets/video/3.png';
import videoThumb4 from 'assets/video/4.png';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCloudArrowUp,
  faEdit,
  faShareNodes,
  faSwatchbook
} from '@fortawesome/free-solid-svg-icons';

interface Activity {
  time: string;
  icon: IconDefinition;
  iconColor: string;
  title: string;
  tasker: string;
  assignees?: { name: string; avatar: string }[];
  more?: string;
}

interface FileDetails {
  key: string;
  value: string;
  modifiedBy?: string;
}

interface Assignee {
  name: string;
  avatar: string;
}

export interface File {
  id: number;
  name: string;
  type: string;
  size?: string;
  img?: string;
  video?: string;
  thumb?: string;
  pdf?: string;
  itemCount?: string;
  modified: string;
  details: FileDetails[];
  admin: { name: string; avatar: string };
  assignees: Assignee[];
  fileLink: string;
  activities: Activity[];
  more?: string;
}

export const fileCollection: File[] = [
  {
    id: 1,
    name: 'Illustrations',
    type: 'folder',
    itemCount: '20 Items',
    modified: '2 hours ago',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '800 MB'
      },
      {
        key: 'Storage used',
        value: '800 MB'
      },
      {
        key: 'Files',
        value: '20 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '30 Jun, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Kristine Cadena',
      avatar: team2
    },
    assignees: [
      {
        name: 'Kristine Cadena',
        avatar: team2
      },
      {
        name: 'Adrian',
        avatar: team4
      },
      {
        name: 'Charles',
        avatar: team3
      },
      {
        name: 'Jennifer Schramm',
        avatar: teamAvatar
      },
      {
        name: 'Roy Anderson',
        avatar: teamR
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faShareNodes,
        iconColor: 'success',
        title: `You have shared this file.`,
        tasker: 'John N. Ward',
        assignees: [
          {
            name: 'Michael Jenkins',
            avatar: team9
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team25
          },
          {
            name: 'Jennifer Schramm',
            avatar: team32
          },
          {
            name: 'Kristine Cadena',
            avatar: teamAvatar
          }
        ],
        more: '+1'
      },
      {
        time: '12:30pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:33am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 2,
    name: 'Retro Ring.jpg',
    type: 'image',
    size: '980 KB',
    img: fileManager9,
    modified: '10 July, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Raymond Mims',
      avatar: team10
    },
    assignees: [
      {
        name: 'Raymond Mims',
        avatar: team10
      },
      {
        name: 'Jonathan',
        avatar: team11
      },
      {
        name: 'Jack',
        avatar: team12
      },
      {
        name: 'Jessica',
        avatar: team13
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 3,
    name: 'Brand Identity',
    type: 'folder',
    itemCount: '16 Items',
    modified: '2 hours ago',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '800 MB'
      },
      {
        key: 'Storage used',
        value: '800 MB'
      },
      {
        key: 'Files',
        value: '20 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '30 Jun, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Carl',
      avatar: team7
    },
    assignees: [
      {
        name: 'Carl',
        avatar: team7
      },
      {
        name: 'Robert Allan',
        avatar: team21
      },
      {
        name: 'Charles',
        avatar: team3
      },
      {
        name: 'Adrian',
        avatar: team4
      },
      {
        name: 'Sarah Gill',
        avatar: team28
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faShareNodes,
        iconColor: 'success',
        title: `You have shared this file.`,
        tasker: 'John N. Ward',
        assignees: [
          {
            name: 'Michael Jenkins',
            avatar: team9
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team25
          },
          {
            name: 'Jennifer Schramm',
            avatar: team32
          },
          {
            name: 'Kristine Cadena',
            avatar: teamAvatar
          }
        ],
        more: '+1'
      },
      {
        time: '12:30pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:33am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 4,
    name: 'World in Motion.mp4',
    type: 'video',
    video: video2,
    thumb: thumb2,
    size: '18 MB',
    modified: '15 July, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'William Grant',
      avatar: team1
    },
    assignees: [
      {
        name: 'William Grant',
        avatar: team1
      },
      {
        name: 'Kristine Cadena',
        avatar: team2
      },
      {
        name: 'Charles',
        avatar: team3
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 5,
    name: 'UI Design',
    type: 'folder',
    itemCount: '10 Items',
    modified: '20 September, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Luke Davies',
      avatar: team5
    },
    assignees: [
      {
        name: 'Luke Davies',
        avatar: team5
      },
      {
        name: 'Sophie Grant',
        avatar: team6
      },
      {
        name: 'Jack',
        avatar: team12
      },
      {
        name: 'William Ellison',
        avatar: team23
      },
      {
        name: 'Jennifer Schramm',
        avatar: teamAvatar
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 6,
    name: 'Classic Clicks.png',
    type: 'image',
    size: '564 KB',
    img: fileManager11,
    modified: '2 hours ago',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '800 MB'
      },
      {
        key: 'Storage used',
        value: '800 MB'
      },
      {
        key: 'Files',
        value: '20 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '30 Jun, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'William Grant',
      avatar: team1
    },
    assignees: [
      {
        name: 'William Grant',
        avatar: team1
      },
      {
        name: 'Kristine Cadena',
        avatar: team2
      },
      {
        name: 'Charles',
        avatar: team3
      },
      {
        name: 'Jennifer Schramm',
        avatar: teamAvatar
      }
    ],
    more: '+2',
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faShareNodes,
        iconColor: 'success',
        title: `You have shared this file.`,
        tasker: 'John N. Ward',
        assignees: [
          {
            name: 'Michael Jenkins',
            avatar: team9
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team25
          },
          {
            name: 'Jennifer Schramm',
            avatar: team32
          },
          {
            name: 'Kristine Cadena',
            avatar: teamAvatar
          }
        ],
        more: '+1'
      },
      {
        time: '12:30pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:33am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 7,
    name: 'Source Code',
    type: 'folder',
    itemCount: '21 Items',
    modified: '21 September, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Robert Allan',
      avatar: team21
    },
    assignees: [
      {
        name: 'Robert Allan',
        avatar: team21
      },
      {
        name: 'Molly William',
        avatar: team27
      },
      {
        name: 'Sarah Gill',
        avatar: team28
      },
      {
        name: 'Jennifer Schramm',
        avatar: teamAvatar
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 8,
    name: 'Code Backup',
    type: 'folder',
    itemCount: '19 Items',
    modified: '21 September, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Rose Berry',
      avatar: team18
    },
    assignees: [
      {
        name: 'Rose Berry',
        avatar: team18
      },
      {
        name: 'Tim Anderson',
        avatar: team22
      },
      {
        name: 'William Ellison',
        avatar: team23
      },
      {
        name: 'Jean Renoir',
        avatar: team34
      },
      {
        name: 'Stanly Drinkwater',
        avatar: team35
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 9,
    name: 'Trip List.xls',
    type: 'xls',
    size: '553 KB',
    modified: '2 hours ago',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '800 MB'
      },
      {
        key: 'Storage used',
        value: '800 MB'
      },
      {
        key: 'Files',
        value: '20 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '30 Jun, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Warren',
      avatar: team24
    },
    assignees: [
      {
        name: 'Warren',
        avatar: team24
      },
      {
        name: 'William Ellison',
        avatar: team23
      },
      {
        name: 'Charles',
        avatar: team3
      },
      {
        name: 'Jennifer Schramm',
        avatar: teamAvatar
      }
    ],
    more: '+3',
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faShareNodes,
        iconColor: 'success',
        title: `You have shared this file.`,
        tasker: 'John N. Ward',
        assignees: [
          {
            name: 'Michael Jenkins',
            avatar: team9
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team25
          },
          {
            name: 'Jennifer Schramm',
            avatar: team32
          },
          {
            name: 'Kristine Cadena',
            avatar: teamAvatar
          }
        ],
        more: '+1'
      },
      {
        time: '12:30pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:33am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 10,
    name: 'Archive.zip',
    type: 'zip',
    size: '12 MB',
    modified: '10 July, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Nicola Allan',
      avatar: team16
    },
    assignees: [
      {
        name: 'Nicola Allan',
        avatar: team16
      },
      {
        name: 'Ansolo Lazinatov',
        avatar: team19
      },
      {
        name: 'Charles',
        avatar: team3
      },
      {
        name: 'Jennifer Schramm',
        avatar: teamAvatar
      }
    ],
    more: '+8',
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 11,
    name: 'Worldly Wonders.jpg',
    type: 'image',
    size: '990 KB',
    img: fileManager12,
    modified: '10 September, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Carry Anna',
      avatar: team1
    },
    assignees: [
      {
        name: 'William Grant',
        avatar: team1
      },
      {
        name: 'Kristine Cadena',
        avatar: team2
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 12,
    name: 'Phoenix Logs.csv',
    type: 'csv',
    size: '546 KB',
    modified: '2 hours ago',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '800 MB'
      },
      {
        key: 'Storage used',
        value: '800 MB'
      },
      {
        key: 'Files',
        value: '20 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '30 Jun, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'William Grant',
      avatar: team1
    },
    assignees: [
      {
        name: 'William Grant',
        avatar: team1
      },
      {
        name: 'Kristine Cadena',
        avatar: team2
      },
      {
        name: 'Charles',
        avatar: team3
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faShareNodes,
        iconColor: 'success',
        title: `You have shared this file.`,
        tasker: 'John N. Ward',
        assignees: [
          {
            name: 'Michael Jenkins',
            avatar: team9
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team25
          },
          {
            name: 'Jennifer Schramm',
            avatar: team32
          },
          {
            name: 'Kristine Cadena',
            avatar: teamAvatar
          }
        ],
        more: '+1'
      },
      {
        time: '12:30pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:33am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 13,
    name: 'Notes.xlx',
    type: 'xlx',
    size: '698 KB',
    modified: '2 hours ago',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '800 MB'
      },
      {
        key: 'Storage used',
        value: '800 MB'
      },
      {
        key: 'Files',
        value: '20 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '30 Jun, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Kristine Cadena',
      avatar: team70
    },
    assignees: [
      {
        name: 'Michael Jenkins',
        avatar: team9
      },
      {
        name: 'Ansolo Lazinatov',
        avatar: team25
      },
      {
        name: 'Jennifer Schramm',
        avatar: team32
      },
      {
        name: 'Kristine Cadena',
        avatar: teamAvatar
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faShareNodes,
        iconColor: 'success',
        title: `You have shared this file.`,
        tasker: 'John N. Ward',
        assignees: [
          {
            name: 'Michael Jenkins',
            avatar: team9
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team25
          },
          {
            name: 'Jennifer Schramm',
            avatar: team32
          },
          {
            name: 'Kristine Cadena',
            avatar: teamAvatar
          }
        ],
        more: '+1'
      },
      {
        time: '12:30pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:33am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 14,
    name: 'Moving Escapes.mp4',
    type: 'video',
    size: '12 MB',
    video: video3,
    thumb: thumb3,
    modified: '4 hours ago',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '800 MB'
      },
      {
        key: 'Storage used',
        value: '800 MB'
      },
      {
        key: 'Files',
        value: '20 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '30 Jun, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Kristine Cadena',
      avatar: team70
    },
    assignees: [
      {
        name: 'Michael Jenkins',
        avatar: team9
      },
      {
        name: 'Ansolo Lazinatov',
        avatar: team25
      },
      {
        name: 'Jennifer Schramm',
        avatar: team32
      },
      {
        name: 'Kristine Cadena',
        avatar: teamAvatar
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faShareNodes,
        iconColor: 'success',
        title: `You have shared this file.`,
        tasker: 'John N. Ward',
        assignees: [
          {
            name: 'Michael Jenkins',
            avatar: team9
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team25
          },
          {
            name: 'Jennifer Schramm',
            avatar: team32
          },
          {
            name: 'Kristine Cadena',
            avatar: teamAvatar
          }
        ],
        more: '+1'
      },
      {
        time: '12:30pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:33am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 15,
    name: 'API Documentation.pdf',
    type: 'pdf',
    size: '4 MB',
    modified: '10 July, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Carry Anna',
      avatar: team71
    },
    assignees: [
      {
        name: 'Michael Jenkins',
        avatar: team10
      },
      {
        name: 'Ansolo Lazinatov',
        avatar: team26
      },
      {
        name: 'Jennifer Schramm',
        avatar: team21
      },
      {
        name: 'Kristine Cadena',
        avatar: team12
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 16,
    name: 'Vintage Car.jpg',
    type: 'image',
    size: '980 KB',
    img: fileManager13,
    modified: '15 July, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Carry Anna',
      avatar: team71
    },
    assignees: [
      {
        name: 'Michael Jenkins',
        avatar: team10
      },
      {
        name: 'Ansolo Lazinatov',
        avatar: team26
      },
      {
        name: 'Jennifer Schramm',
        avatar: team21
      },
      {
        name: 'Kristine Cadena',
        avatar: team12
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 17,
    name: 'Sleek Rides.png',
    type: 'image',
    size: '980 KB',
    img: fileManager15,
    modified: '16 July, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Carry Anna',
      avatar: team71
    },
    assignees: [
      {
        name: 'Michael Jenkins',
        avatar: team10
      },
      {
        name: 'Ansolo Lazinatov',
        avatar: team26
      },
      {
        name: 'Jennifer Schramm',
        avatar: team21
      },
      {
        name: 'Kristine Cadena',
        avatar: team12
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 18,
    name: 'Notes.txt',
    type: 'zip',
    size: '29 MB',
    modified: '17 July, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Carry Anna',
      avatar: team71
    },
    assignees: [
      {
        name: 'Michael Jenkins',
        avatar: team10
      },
      {
        name: 'Ansolo Lazinatov',
        avatar: team26
      },
      {
        name: 'Jennifer Schramm',
        avatar: team21
      },
      {
        name: 'Kristine Cadena',
        avatar: team12
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 19,
    name: 'Mountain Majesty.jpg',
    type: 'image',
    size: '2 MB',
    img: fileManager16,
    modified: '17 July, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Carry Anna',
      avatar: team71
    },
    assignees: [
      {
        name: 'Michael Jenkins',
        avatar: team10
      },
      {
        name: 'Ansolo Lazinatov',
        avatar: team26
      },
      {
        name: 'Jennifer Schramm',
        avatar: team21
      },
      {
        name: 'Kristine Cadena',
        avatar: team12
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      }
    ]
  },
  {
    id: 20,
    name: 'Job Confirmation.doc',
    type: 'doc',
    size: '129 KB',
    modified: '17 July, 2023',
    details: [
      {
        key: 'File type',
        value: 'Folder'
      },
      {
        key: 'File size',
        value: '520 MB'
      },
      {
        key: 'Storage used',
        value: '520 MB'
      },
      {
        key: 'Files',
        value: '16 items'
      },
      {
        key: 'File location',
        value: 'App Documentation'
      },
      {
        key: 'Last opened',
        value: '05 Jul, 2023'
      },
      {
        key: 'Last modified',
        value: '10 July, 2023',
        modifiedBy: 'John Doe'
      },
      {
        key: 'Created date',
        value: '12 Feb, 2023'
      }
    ],
    admin: {
      name: 'Carry Anna',
      avatar: team71
    },
    assignees: [
      {
        name: 'Michael Jenkins',
        avatar: team10
      },
      {
        name: 'Ansolo Lazinatov',
        avatar: team26
      },
      {
        name: 'Jennifer Schramm',
        avatar: team21
      },
      {
        name: 'Kristine Cadena',
        avatar: team12
      }
    ],
    fileLink: 'http://sample.info/?insect=fireman&porter=attraction# cave',
    activities: [
      {
        time: '4:33pm',
        icon: faSwatchbook,
        iconColor: 'success',
        title: `Designing the dungeon`,
        tasker: 'Igor Borvibson',
        assignees: [
          {
            name: 'Roy Anderson',
            avatar: team11
          },
          {
            name: 'Ansolo Lazinatov',
            avatar: team35
          },
          {
            name: 'Jennifer Schramm',
            avatar: team23
          },
          {
            name: 'Kristine Cadena',
            avatar: team57
          }
        ],
        more: '+2'
      },
      {
        time: '03:00pm',
        icon: faEdit,
        iconColor: 'danger',
        title: 'You have edited this file.',
        tasker: 'John N. Ward'
      },
      {
        time: '9:00am',
        icon: faCloudArrowUp,
        iconColor: 'info',
        title: 'You have uploaded this file.',
        tasker: 'John N. Ward'
      }
    ]
  }
];

export interface RecentFiles {
  name: string;
  type: 'image' | 'pdf' | 'video';
  size: string;
  createdAt: string;
  actionType: string;
  img?: string;
  pdf?: string;
  video?: string;
  fileNo: number;
  thumb?: string;
}

export const recentFiles: RecentFiles[] = [
  {
    name: 'Verification Letter.pdf',
    type: 'pdf',
    size: '8.8 mb',
    createdAt: '5 min ago',
    actionType: 'Edited',
    img: fileManager1,
    pdf: generic67Pdf,
    fileNo: 1
  },
  {
    name: 'Travel Tales.mp4',
    type: 'video',
    video: video2,
    thumb: videoThumb2,
    size: '65 mb',
    createdAt: '6 min ago',
    actionType: 'Upload',
    fileNo: 2
  },
  {
    name: 'Mountain During.jpg',
    type: 'image',
    size: '5.8 mb',
    createdAt: '6 min ago',
    actionType: 'Upload',
    img: fileManager2,
    fileNo: 3
  },
  {
    name: 'Cinematic Adventures.mp4',
    type: 'video',
    size: '54 mb',
    createdAt: '8 min ago',
    actionType: 'Upload',
    video: video3,
    thumb: videoThumb3,
    fileNo: 4
  },
  {
    name: 'Travel Tales.mp4',
    type: 'video',
    size: '65 mb',
    createdAt: '6 min ago',
    actionType: 'Upload',
    video: video1,
    thumb: videoThumb1,
    fileNo: 5
  },
  {
    name: 'Hot air balloons.png',
    type: 'image',
    size: '5.8 mb',
    createdAt: '6 min ago',
    actionType: 'Upload',
    img: fileManager6,
    fileNo: 6
  },
  {
    name: 'Aurora Borealis.jpg',
    type: 'image',
    size: '10 mb',
    createdAt: '5 min ago',
    actionType: 'Edited',
    img: fileManager7,
    fileNo: 7
  },
  {
    name: 'Cinematic Adventures.mp4',
    type: 'video',
    size: '54 mb',
    createdAt: '8 min ago',
    actionType: 'Upload',
    video: video4,
    thumb: videoThumb4,
    fileNo: 8
  }
];

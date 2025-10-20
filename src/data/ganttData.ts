import team1 from 'assets/img/team/1.webp';
import team2 from 'assets/img/team/2.webp';
import team3 from 'assets/img/team/3.webp';
import team4 from 'assets/img/team/4.webp';
import team9 from 'assets/img/team/9.webp';
import { Task } from 'dhtmlx-gantt';
interface Data {
  tasks: Task[];
  links: {
    id: number;
    source: number;
    target: number;
    type: string;
  }[];
}

export const ganttData: Data = {
  tasks: [
    {
      id: 11,
      text: 'Travel agency landing page design',
      progress: 0.6,
      open: true,
      priority: 'Urgent',
      assignee: [
        {
          name: 'Igor Borvibson',
          img: team1
        },
        {
          name: 'Emma Watson',
          img: team4
        },
        {
          name: 'Barbara Lucas',
          img: team3
        },
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Jerry Seinfield',
          img: team9
        }
      ]
    },
    {
      id: 12,
      text: 'Research',
      start_date: new Date(2023, 3, 3),
      duration: 55,
      parent: 11,
      progress: 1,
      open: true,
      priority: 'High',
      assignee: [
        {
          name: 'Igor Borvibson',
          img: team1
        },
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Barbara Lucas',
          img: team3
        }
      ]
    },
    {
      id: 13,
      text: 'Planning',
      parent: 11,
      progress: 0.6,
      open: true,
      priority: 'Medium',
      assignee: [
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Emma Watson',
          img: team4
        },
        {
          name: 'Barbara Lucas',
          img: team3
        }
      ]
    },
    {
      id: 14,
      text: 'Design',
      start_date: new Date(2023, 3, 25),
      duration: 40,
      parent: 11,
      progress: 0.8,
      open: true,
      priority: 'High',
      assignee: [
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Emma Watson',
          img: team4
        },
        {
          name: 'Barbara Lucas',
          img: team3
        }
      ]
    },
    {
      id: 15,
      text: 'Development',
      start_date: new Date(2023, 4, 10),
      duration: 40,
      parent: 11,
      progress: 0.8,
      open: true,
      priority: 'High',
      assignee: [
        {
          name: 'Igor Borvibson',
          img: team1
        }
      ]
    },
    {
      id: 16,
      text: 'Testing',
      start_date: new Date(2023, 5, 5),
      duration: 23,
      type: 'milestone',
      parent: 11,
      progress: 0,
      open: true,
      priority: 'High',
      assignee: [
        {
          name: 'Emma Watson',
          img: team4
        },
        {
          name: 'Barbara Lucas',
          img: team3
        },
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Jerry Seinfield',
          img: team9
        }
      ]
    },
    {
      id: 17,
      text: 'Deployment',
      start_date: new Date(2023, 3, 3),
      duration: 52,
      parent: 13,
      progress: 1,
      open: true,
      priority: 'Low',
      assignee: [
        {
          name: 'Igor Borvibson',
          img: team1
        },
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Barbara Lucas',
          img: team3
        },
        {
          name: 'Emma Watson',
          img: team4
        }
      ]
    },
    {
      id: 24,
      text: 'Design finance app for phoenix',
      progress: 0.5,
      open: true,
      priority: 'High',
      assignee: [
        {
          name: 'Igor Borvibson',
          img: team1
        },
        {
          name: 'Emma Watson',
          img: team4
        },
        {
          name: 'Barbara Lucas',
          img: team3
        },
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Jerry Seinfield',
          img: team9
        }
      ]
    },
    {
      id: 25,
      text: 'Update figma file for phoenix',
      start_date: new Date(2023, 3, 4),
      duration: 55,
      progress: 0,
      open: true,
      priority: 'High',
      assignee: [
        {
          name: 'Igor Borvibson',
          img: team1
        },
        {
          name: 'Emma Watson',
          img: team4
        },
        {
          name: 'Barbara Lucas',
          img: team3
        },
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Jerry Seinfield',
          img: team9
        }
      ]
    },
    {
      id: 26,
      text: 'Falcon figma file update',
      start_date: new Date(2023, 3, 10),
      duration: 47,
      progress: 0,
      open: true,
      priority: 'High',
      assignee: [
        {
          name: 'Jerry Seinfield',
          img: team9
        },
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Igor Borvibson',
          img: team1
        }
      ]
    },
    {
      id: 27,
      text: 'Gantt chart design',
      start_date: new Date(2023, 3, 15),
      duration: 45,
      progress: 0,
      open: true,
      priority: 'Medium',
      assignee: [
        {
          name: 'Barbara Lucas',
          img: team3
        },
        {
          name: 'Emma Watson',
          img: team4
        },
        {
          name: 'Igor Borvibson',
          img: team1
        },
        {
          name: 'Lina Burton',
          img: team2
        }
      ]
    },
    {
      id: 28,
      text: 'Design for new dashboard aurora',
      start_date: new Date(2023, 5, 25),
      duration: 112,
      progress: 0,
      open: true,
      priority: 'High',
      assignee: [
        {
          name: 'Jerry Seinfield',
          img: team9
        },
        {
          name: 'Igor Borvibson',
          img: team1
        }
      ]
    },
    {
      id: 29,
      text: 'Research for new module',
      start_date: new Date(2023, 3, 28),
      duration: 57,
      progress: 0,
      open: true,
      priority: 'Low',
      assignee: [
        {
          name: 'Barbara Lucas',
          img: team3
        },
        {
          name: 'Igor Borvibson',
          img: team1
        },
        {
          name: 'Lina Burton',
          img: team2
        }
      ]
    },
    {
      id: 30,
      text: 'Research',
      start_date: new Date(2023, 3, 4),
      duration: 60,
      progress: 0,
      open: true,
      priority: 'Low',
      parent: 24,
      assignee: [
        {
          name: 'Barbara Lucas',
          img: team3
        },
        {
          name: 'Lina Burton',
          img: team2
        }
      ]
    },
    {
      id: 31,
      text: 'Development',
      start_date: new Date(2023, 3, 16),
      duration: 68,
      progress: 0,
      parent: 24,
      open: true,
      priority: 'Low',
      assignee: [
        {
          name: 'Lina Burton',
          img: team2
        },
        {
          name: 'Emma Watson',
          img: team4
        },
        {
          name: 'Igor Borvibson',
          img: team1
        },
        {
          name: 'Barbara Lucas',
          img: team3
        }
      ]
    },
    {
      id: 33,
      text: 'Deployment',
      start_date: new Date(2023, 4, 27),
      duration: 32,
      progress: 0,
      parent: 24,
      open: true,
      priority: 'Low',
      assignee: [
        {
          name: 'Barbara Lucas',
          img: team3
        },
        {
          name: 'Lina Burton',
          img: team2
        }
      ]
    }
  ],
  links: [
    { id: 10, source: 11, target: 12, type: '1' },
    { id: 11, source: 11, target: 13, type: '1' },
    { id: 12, source: 11, target: 14, type: '1' },
    { id: 13, source: 11, target: 15, type: '1' },
    { id: 14, source: 23, target: 16, type: '0' },
    { id: 15, source: 13, target: 17, type: '1' },
    { id: 16, source: 17, target: 18, type: '0' },
    { id: 17, source: 18, target: 19, type: '0' },
    { id: 18, source: 19, target: 20, type: '0' },
    { id: 19, source: 15, target: 21, type: '2' },
    { id: 20, source: 15, target: 22, type: '2' },
    { id: 21, source: 15, target: 23, type: '0' },
    { id: 29, source: 24, target: 30, type: '1' },
    { id: 30, source: 24, target: 31, type: '1' },
    { id: 33, source: 24, target: 31, type: '1' }
  ]
};

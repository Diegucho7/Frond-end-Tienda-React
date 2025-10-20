import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faBoxArchive,
  faCalendarDays,
  faCopy,
  faPaperclip,
  faShareNodes,
  faSquareCheck,
  faTag,
  faTrash,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

type ActionItem = {
  icon: IconProp;
  label: string;
};

export const addToCardItems: ActionItem[] = [
  {
    icon: faUserPlus,
    label: 'Assignee'
  },
  {
    icon: faTag,
    label: 'Labels'
  },
  {
    icon: faPaperclip,
    label: 'Attachments'
  },
  {
    icon: faSquareCheck,
    label: 'Checklist'
  },
  {
    icon: faCalendarDays,
    label: 'Dates'
  }
];

export const actionItems: ActionItem[] = [
  {
    icon: faArrowRight,
    label: 'Move'
  },
  {
    icon: faCopy,
    label: 'Copy'
  },
  {
    icon: faTrash,
    label: 'Remove'
  },
  {
    icon: faBoxArchive,
    label: 'Archive'
  },
  {
    icon: faShareNodes,
    label: 'Share'
  }
];

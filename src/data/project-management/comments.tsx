import { JSX } from 'react';
import bg42 from 'assets/img/generic/42.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

type User = {
  name: string;
  url: string;
};

export interface Comment {
  id: number;
  text: string;
  user: User;
  attachment?: string;
  date: string;
  details?: string | JSX.Element;
  own?: boolean;
}

export const comments: Comment[] = [
  {
    id: 1,
    text: 'uploaded a file',
    user: {
      name: 'Anthony Van Dyck',
      url: '#!'
    },
    attachment: bg42,
    date: 'Oct 3 at 4:38 pm',
    details: (
      <p className="text-body-highlight fw-semibold fs-9 mb-0">Fruit blast</p>
    )
  },
  {
    id: 2,
    text: 'added a subtask',
    user: {
      name: 'Kazimir Malevich',
      url: '#!'
    },
    date: 'Oct 4 at 12:16 pm'
  },
  {
    id: 3,
    text: 'created this task',
    user: {
      name: 'Kazimir Malevich',
      url: '#!'
    },
    own: true,
    date: 'Oct 4 at 12:18 pm'
  },
  {
    id: 4,
    text: 'changed status from ',
    user: {
      name: 'Henri Rousseau',
      url: '#!'
    },
    date: 'Oct 5 at 9:59 am',
    details: (
      <div className="d-flex text-body-secondary fs-9">
        <p className="mb-0 fw-semibold text-body-highlight">
          <FontAwesomeIcon
            icon={faCircle}
            className="text-primary"
            transform="shrink-8"
          />
          Doing
        </p>
        <span className="mx-2">to</span>
        <p className="mb-0 fw-semibold text-body-highlight">
          <FontAwesomeIcon
            icon={faCircle}
            className="text-primary"
            transform="shrink-8"
          />
          Review
        </p>
      </div>
    )
  },
  {
    id: 5,
    text: 'commented',
    user: {
      name: 'Peter Paul Rubens',
      url: '#!'
    },
    date: 'Oct 5 at 11:09 pm',
    details: (
      <p className="text-body fs-9 mb-0">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form
      </p>
    )
  }
];

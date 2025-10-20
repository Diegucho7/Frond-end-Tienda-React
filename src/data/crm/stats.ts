import {
  Icon,
  UilEnvelope,
  UilEnvelopeBlock,
  UilEnvelopeCheck,
  UilEnvelopeOpen,
  UilEnvelopeUpload,
  UilEnvelopes
} from '@iconscout/react-unicons';

export interface StatType {
  id: number;
  icon: Icon;
  iconColor: string;
  emailCount: string;
  title: string;
}
export const stats: StatType[] = [
  {
    id: 1,
    icon: UilEnvelope,
    iconColor: 'primary',
    emailCount: '28,00',
    title: 'Total Emails'
  },
  {
    id: 2,
    icon: UilEnvelopeUpload,
    iconColor: 'info',
    emailCount: '1,866',
    title: 'Emails Sent'
  },
  {
    id: 3,
    icon: UilEnvelopes,
    iconColor: 'primary',
    emailCount: '1,366',
    title: 'Emails Delivered'
  },
  {
    id: 4,
    icon: UilEnvelopeOpen,
    iconColor: 'info',
    emailCount: '1,200',
    title: 'Emails Opened'
  },
  {
    id: 5,
    icon: UilEnvelopeCheck,
    iconColor: 'success',
    emailCount: '900',
    title: 'Emails Clicked'
  },
  {
    id: 6,
    icon: UilEnvelopeBlock,
    iconColor: 'danger',
    emailCount: '500',
    title: 'Emails Bounce'
  }
];

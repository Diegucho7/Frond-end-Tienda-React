import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faBan,
  faBellSlash,
  faCalendarDays,
  faDice,
  faFlag,
  faGear,
  faHandHoldingHeart,
  faLocationDot,
  faPhotoFilm,
  faTags,
  faUserGear,
  faUserGroup,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export interface DropdownData {
  label: string;
  icon: IconProp;
}

export const dropdownData: DropdownData[] = [
  {
    label: 'Followers',
    icon: faUserGroup
  },
  {
    label: 'Communities',
    icon: faUsers
  },
  {
    label: 'Media Files',
    icon: faPhotoFilm
  },
  {
    label: 'Events',
    icon: faCalendarDays
  },
  {
    label: 'Games',
    icon: faDice
  },
  {
    label: 'Settings',
    icon: faUserGear
  },
  {
    label: 'Mute Conversation',
    icon: faBellSlash
  },
  {
    label: 'Manage Settings',
    icon: faGear
  },
  {
    label: 'Get help',
    icon: faHandHoldingHeart
  },
  {
    label: 'Report Account',
    icon: faFlag
  },
  {
    label: 'Block Account',
    icon: faBan
  }
];

export const mutualData: DropdownData[] = [
  {
    label: '432 Common Followers',
    icon: faUserGroup
  },
  {
    label: '21 Communities',
    icon: faUsers
  },
  {
    label: '12 Tagged Images',
    icon: faTags
  },
  {
    label: '3 Common Events',
    icon: faCalendarDays
  },
  {
    label: '45 Common Check-ins',
    icon: faLocationDot
  }
];

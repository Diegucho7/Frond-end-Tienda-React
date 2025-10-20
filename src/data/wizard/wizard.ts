import {
  faCheck,
  faFile,
  faFileAlt,
  faGrip,
  faImages,
  faLocationDot,
  faLock,
  faMugSaucer,
  faShieldHalved,
  faUsd,
  faUser,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

export interface WizardNav {
  icon: IconDefinition;
  label: string;
}

export const wizardNav: WizardNav[] = [
  {
    icon: faLock,
    label: 'Account'
  },
  {
    icon: faUser,
    label: 'Personal'
  },
  {
    icon: faFileAlt,
    label: 'Billing'
  },
  {
    icon: faCheck,
    label: 'Done'
  }
];

export const addPropertyWizardNav: WizardNav[] = [
  {
    icon: faFile,
    label: 'Info'
  },
  {
    icon: faLocationDot,
    label: 'Location'
  },
  {
    icon: faMugSaucer,
    label: 'Amenities'
  },
  {
    icon: faImages,
    label: 'Photos'
  },
  {
    icon: faUsd,
    label: 'Finance'
  },
  {
    icon: faShieldHalved,
    label: 'Policies'
  },
  {
    icon: faCheck,
    label: 'Done'
  }
];
export const addRoomWizardNav: WizardNav[] = [
  {
    icon: faFile,
    label: 'Details'
  },
  {
    icon: faUsd,
    label: 'Pricing'
  },
  {
    icon: faGrip,
    label: 'Amenities'
  },
  {
    icon: faImages,
    label: 'Photos'
  },
  {
    icon: faCheck,
    label: 'Done'
  }
];

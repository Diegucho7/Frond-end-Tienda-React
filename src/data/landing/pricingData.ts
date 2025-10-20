import pie from 'assets/img/icons/illustrations/pie.png';
import bolt from 'assets/img/icons/illustrations/bolt.png';
import edit from 'assets/img/icons/illustrations/edit.png';
import shield from 'assets/img/icons/illustrations/shield.png';
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';

export type Feature = {
  label: string;
  newBadge?: boolean;
  supported: boolean;
};

export type Pricing = {
  id: number;
  icon: string;
  category: string;
  popular?: boolean;
  price: number;
  features: string[];
};

export interface PricingAlternate {
  id: number;
  category: string;
  price: number;
  features: string[];
}

export const pricingFeatures = [
  {
    id: 'timeline',
    label: 'Timeline',
    icon: faCheck
  },
  {
    id: 'adv_search',
    label: 'Advanced Search',
    icon: faCheck
  },
  {
    id: 'custom_fields',
    label: 'Custom fields',
    new: true,
    icon: faCheck
  },
  {
    id: 'task_dependencies',
    label: 'Task dependencies',
    icon: faStar
  },
  {
    id: 'private_teams_projects',
    label: 'Private teams & projects',
    icon: faStar
  }
];

export const pricingItems: Pricing[] = [
  {
    id: 1,
    icon: pie,
    category: 'Starter',
    price: 6,
    features: ['timeline', 'adv_search']
  },
  {
    id: 2,
    icon: bolt,
    category: 'Team',
    popular: true,
    price: 12,
    features: ['timeline', 'adv_search', 'custom_fields']
  },
  {
    id: 3,
    icon: edit,
    category: 'Business',
    price: 23,
    features: ['timeline', 'adv_search', 'custom_fields', 'task_dependencies']
  },
  {
    id: 4,
    icon: shield,
    category: 'Enterprise',
    price: 40,
    features: [
      'timeline',
      'adv_search',
      'custom_fields',
      'task_dependencies',
      'private_teams_projects'
    ]
  }
];

export const pricingFeaturesAlternate = [
  {
    id: 'timeline',
    label: 'Timeline',
    icon: faCheck
  },
  {
    id: 'adv_search',
    label: 'Advanced Search',
    icon: faCheck
  },
  {
    id: 'custom_fields',
    label: 'Custom fields',
    new: true,
    icon: faCheck
  },
  {
    id: 'task_dependencies',
    label: 'Task dependencies',
    icon: faCheck
  },
  {
    id: 'private_teams_projects',
    label: 'Private teams & projects',
    icon: faCheck
  }
];

export const pricingItemsAlternate: PricingAlternate[] = [
  {
    id: 1,
    category: 'Starter',
    price: 15,
    features: ['timeline']
  },
  {
    id: 2,
    category: 'Business',
    price: 23,
    features: ['timeline', 'adv_search', 'custom_fields']
  },
  {
    id: 3,
    category: 'Enterprise',
    price: 40,
    features: [
      'timeline',
      'adv_search',
      'custom_fields',
      'task_dependencies',
      'private_teams_projects'
    ]
  }
];

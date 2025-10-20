import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faMoneyBill,
  faPlane,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router';

interface WizardItem {
  name: string;
  icon: IconProp;
  url: string;
}

interface FlightBookingWizardProps {
  activeItem: string;
}

const wizardItems: WizardItem[] = [
  {
    name: 'Flight',
    icon: faPlane,
    url: '/apps/travel-agency/flight/homepage'
  },
  {
    name: 'Booking',
    icon: faUser,
    url: '/apps/travel-agency/flight/booking'
  },
  {
    name: 'Payment',
    icon: faMoneyBill,
    url: '/apps/travel-agency/flight/payment'
  }
];

const FlightBookingWizard = ({ activeItem }: FlightBookingWizardProps) => {
  const doneItems = wizardItems.filter(
    item =>
      wizardItems.indexOf(item) <
      wizardItems.findIndex(i => i.name === activeItem)
  );

  return (
    <div
      className="theme-wizard flight-booking-wizard"
      style={{ width: '18.125rem' }}
    >
      <Nav className="justify-content-between nav-wizard nav-wizard-success">
        {wizardItems.map((item, index) => {
          const isDone = doneItems.some(i => i.name === item.name);
          const isActive = activeItem === item.name;
          const stepClass = isDone ? 'done complete' : isActive ? 'active' : '';

          return (
            <Nav.Item key={index}>
              <Nav.Link
                as={Link}
                to={item.url}
                className={`fw-semibold ${stepClass}`}
              >
                <div className="d-inline-block text-center">
                  <span className="nav-item-circle-parent">
                    <span className="d-block nav-item-circle">
                      <FontAwesomeIcon icon={isDone ? faCheck : item.icon} />
                    </span>
                  </span>
                  <span className="d-md-block mt-1 fs-9">{item.name}</span>
                </div>
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </div>
  );
};

export default FlightBookingWizard;

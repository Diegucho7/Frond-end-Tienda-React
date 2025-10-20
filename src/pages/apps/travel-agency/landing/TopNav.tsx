import {
  faArrowRightToBracket,
  faEllipsisH,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router';

const TopNav = () => {
  interface navItems {
    title: string;
    link: string;
    icon?: IconDefinition;
    transform?: string;
  }
  const navItems: navItems[] = [
    {
      title: 'Homepage',
      link: '#!'
    },
    {
      title: 'Booking',
      link: '#!'
    },
    {
      title: 'Payment',
      link: '#!'
    }
  ];

  return (
    <div className="bg-primary-subtle py-2">
      <div className="container-medium d-flex align-items-center justify-content-between">
        <Button href="#!" variant="link" className="text-body p-0">
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            className="me-2"
            transform="down-1"
          />
          Agent Login
        </Button>
        <Dropdown>
          <Dropdown.Toggle
            size="sm"
            variant=""
            className="p-0 d-md-none fs-8 dropdown-caret-none"
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ zIndex: 9999 }}>
            <Dropdown.Item href="">Become a Host</Dropdown.Item>
            <Dropdown.Item href="">Blog</Dropdown.Item>
            <Dropdown.Item href="">Career</Dropdown.Item>
            <Dropdown.Item href="">Support</Dropdown.Item>
            <Dropdown.Item href="">+01 123 581321</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ul className="d-none d-md-flex gap-5 list-unstyled mb-0">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="lh-1 text-body-tertiary fw-semibold fs-9"
              >
                {item.icon && (
                  <FontAwesomeIcon
                    icon={item.icon}
                    transform={item.transform || undefined}
                    className="me-2"
                  />
                )}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;

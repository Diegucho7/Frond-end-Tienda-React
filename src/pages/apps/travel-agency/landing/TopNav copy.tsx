import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faArrowRightToBracket,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
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
      title: 'Become a Host',
      link: '#!'
    },
    {
      title: 'Blog',
      link: '#!'
    },
    {
      title: 'Career',
      link: '#!'
    },

    {
      title: 'Support',
      link: 'mailto:example@gmail.com',
      icon: faEnvelope,
      transform: 'down-1'
    },
    {
      title: '+01 123 581321',
      link: 'tel:+01123581321',
      icon: faWhatsapp
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
          {/* <Button size="sm" className="p-0 d-md-none fs-8"></Button> */}
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

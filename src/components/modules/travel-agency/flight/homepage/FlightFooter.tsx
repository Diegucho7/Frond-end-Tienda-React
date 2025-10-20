import React from 'react';
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Row
} from 'react-bootstrap';
import bd45 from 'assets/img/bg/45.png';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface SocialLink {
  icon: IconDefinition;
  path: string;
}

const socialsLinks: SocialLink[] = [
  {
    icon: faFacebook,
    path: '#!'
  },
  {
    icon: faTwitter,
    path: '#!'
  },
  {
    icon: faInstagram,
    path: '#!'
  },
  {
    icon: faYoutube,
    path: '#!'
  }
];
interface FooterNav {
  title: string;
  link: string;
}

const footerNavs: FooterNav[] = [
  {
    title: 'About',
    link: '#!'
  },
  {
    title: 'Policy',
    link: '#!'
  },
  {
    title: 'Terms & Condition',
    link: '#!'
  }
];

const FlightFooter = () => {
  return (
    <footer className="mb-6">
      <Container fluid="small-md" className="px-0 px-md-3">
        <div className="position-relative overflow-hidden rounded-md-2">
          <div
            className="bg-holder overlay bg-opacity-75"
            style={{
              backgroundImage: `url(${bd45})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <Row className="g-lg-0 gy-3 position-relative justify-content-center py-9 px-3 px-sm-6 px-xl-15">
            <Col xs={11} sm={8} lg={5}>
              <InputGroup className="gap-2">
                <div className="form-icon-container flex-1">
                  <FormControl
                    type="email"
                    placeholder="Your email address"
                    className="form-control form-icon-input"
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="form-icon"
                    transform="up-2"
                  />
                </div>
                <Button variant="primary" className="rounded">
                  Sign up
                </Button>
              </InputGroup>
            </Col>
            <Col lg={7} data-bs-theme="light">
              <div className="d-flex flex-column flex-lg-row gap-lg-6 gap-2 align-items-center justify-content-lg-end justify-content-center">
                <Nav as="ul">
                  {footerNavs.map((item, idx) => (
                    <Nav.Item as="li" key={idx}>
                      <Nav.Link className="link-light" href={item.link}>
                        {item.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <div>
                  {socialsLinks.map((social, idx) => (
                    <Link
                      key={idx}
                      to={social.path}
                      className={classNames('link-light', {
                        'pe-1 me-2 ': idx !== socialsLinks.length - 1
                      })}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default FlightFooter;

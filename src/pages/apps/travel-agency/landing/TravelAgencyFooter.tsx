import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router';
import Logo from 'components/common/Logo';
import classNames from 'classnames';
import Footer from 'components/footers/Footer';

interface TravelAgencyFooterProps {
  className?: string;
}

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

const TravelAgencyFooter = ({ className }: TravelAgencyFooterProps) => {
  return (
    <Container fluid="medium">
      <Row
        className={classNames(
          'flex-center justify-content-md-between align-items-md-center mb-3 gy-2',
          className
        )}
      >
        <Col xs="auto">
          <Navbar.Brand as={Link} to={'/'} className="flex-1 flex-grow-0">
            <Logo />
          </Navbar.Brand>
        </Col>
        <Col xs="auto">
          <ul className="d-flex flex-center flex-wrap gap-x-5 gap-y-1 list-unstyled mb-0">
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
        </Col>
      </Row>
      <Footer className="px-0" />
    </Container>
  );
};

export default TravelAgencyFooter;

import {
  faCalendarPlus,
  faHeart,
  faTicket,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Dispatch, SetStateAction } from 'react';
import { Card, Col, Offcanvas, Row } from 'react-bootstrap';
import OffcanvasImage from 'assets/img/stock/offcanvas-image.jpeg';
import { UilClock, UilMapMarker } from '@iconscout/react-unicons';
import UpcomingCollapsibleContainer from './UpcomingCollapseContainer';
import { Link } from 'react-router';
import Avatar from 'components/base/Avatar';
import Img from 'assets/img/team/30.webp';

interface EventOffcanvasProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const EventOffcanvas = ({ open, setOpen }: EventOffcanvasProps) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Offcanvas
      show={open}
      onHide={handleClose}
      className="bg-body-emphasis stock-events-offcanvas"
      placement="end"
      fixed
    >
      <Offcanvas.Header className="gap-4 p-4 align-items-start">
        <h3 className="mb-0">Stock Market Essentials: Company Fundamentals</h3>
        <Button variant="phoenix-secondary" size="sm" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-4 border-top scrollbar">
        <img src={OffcanvasImage} alt="" className="img-fluid rounded-2 mb-4" />
        <Row className="g-2 mb-4">
          <Col xs={5}>
            <Button variant="primary" className="w-100">
              <FontAwesomeIcon icon={faTicket} className="me-2" />
              Get Tickets
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="phoenix-primary">
              <FontAwesomeIcon icon={faCalendarPlus} className="me-2" />
              Add to Calendar
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="phoenix-primary">
              <FontAwesomeIcon icon={faHeart} className="me-2" />
              3677
            </Button>
          </Col>
        </Row>
        <Card className="mb-4">
          <Card.Body>
            <Row className="g-3">
              <Col lg={6}>
                <div className="d-flex gap-2 align-items-center mb-2">
                  <div className="bg-info-subtle px-2 py-1 rounded">
                    <UilMapMarker
                      fill='currentColor'
                      size={20}
                      className="text-info"
                      style={{ width: 20, height: 29.797 }}
                    />
                  </div>
                  <h5>Location</h5>
                </div>
                <p className="fs-9 mb-0 text-body-secondary">
                  Shannon Mekalan Vancouver, British Columbia, Canada
                </p>
              </Col>
              <Col lg={6}>
                <div className="d-flex gap-2 align-items-center mb-2">
                  <div className="bg-primary-subtle px-2 py-1 rounded">
                    <UilClock
                      fill='currentColor'
                      size={20}
                      className="text-primary"
                      style={{ width: 20, height: 29.797 }}
                    />
                  </div>
                  <h5>Date &amp; Time</h5>
                </div>
                <p className="fs-9 mb-0 text-body-secondary">
                  28th June - 2nd July 2022,
                  <br />
                  10 am - 4 pm EDT
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <UpcomingCollapsibleContainer
          collapseTitle="About This event"
          id="aboutEvent"
        >
          <p className="mb-0">
            Company fundamentals are vital for navigating the stock market
            effectively. They encompass key financial statements—balance sheets,
            income statements, and cash flow statements—that reveal a company's
            revenue, expenses, assets, and liabilities. Investors often examine
            metrics like earnings per share (EPS)...
            <Link to="#!">read more</Link>
          </p>
        </UpcomingCollapsibleContainer>
        <UpcomingCollapsibleContainer
          collapseTitle="Speaker"
          id="speaker"
          className="mt-4"
        >
          <>
            <div className="d-flex align-items-center gap-2">
              <Avatar
                src={Img}
                size="xl"
                rounded="circle"
                className="avatar-bordered"
              />
              <div>
                <h4>Richard Dawkins</h4>
                <p className="text-body-tertiary fs-9">
                  Senior Strategist, Phoenix
                </p>
              </div>
            </div>
            <p className="mb-0">
              Richard Dawkins serves as a Senior Strategist at Phoenix, bringing
              over a decade of expertise in strategic planning and market
              analysis. He excels in identifying emerging trends and developing
              actionable strategies that propel growth and innovation. With a
              background in Economics and an MBA, Richard is recognized for his
              collaborative leadership style, fostering cross-departmental
              teamwork...
              <Link to="#!">read more</Link>
            </p>
          </>
        </UpcomingCollapsibleContainer>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default EventOffcanvas;

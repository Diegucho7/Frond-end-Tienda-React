import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Container, Row, Col } from 'react-bootstrap';
import FlightBookingWizard from '../payment/FlightBookingWizard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import FlightInfo from 'components/modules/travel-agency/flight/booking/FlightInfo';
import FlightDetails from 'components/modules/travel-agency/flight/booking/FlightDetails';
import CouponCard from 'components/cards/CuponCard';
import PaymentSummary from 'components/modules/travel-agency/flight/booking/PaymentSummary';
import TravelerDetails from 'components/modules/travel-agency/flight/booking/TravelerDetails';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { flightNavItems } from 'data/travel-agency/resizableNav';
import FlightBottomBar from './BottomBar';

const FlightBooking = () => {
  return (
    <>
      <ResizableNavbar navItems={flightNavItems} />
      <Container fluid="small" className="pt-6 pb-6 pb-9">
        <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
        <h2 className="mb-5">Booking</h2>
        <Row className="g-3 align-items-sm-center justify-content-between mb-5">
          <Col sm>
            <FlightBookingWizard activeItem="Booking" />
          </Col>
          <Col sm className="text-sm-end">
            <div>
              <p className="mb-2 text-info">Book before time runs out</p>
              <h3 className="mb-0 text-info fw-bold d-flex gap-2 align-items-center justify-content-sm-end">
                <FontAwesomeIcon icon={faClock} className="fs-8" />
                <span>29</span>
                <span className="fs-9 fw-normal">min</span>
                <span>50</span>
                <span className="fs-9 fw-normal">sec</span>
              </h3>
            </div>
          </Col>
        </Row>
        <FlightInfo />
        <FlightDetails />
        <Row className="justify-content-between">
          <Col lg={8}>
            <TravelerDetails />
            <PaymentSummary />
          </Col>
          <Col lg={4}>
            <CouponCard />
          </Col>
        </Row>
      </Container>
      <FlightBottomBar />
    </>
  );
};

export default FlightBooking;

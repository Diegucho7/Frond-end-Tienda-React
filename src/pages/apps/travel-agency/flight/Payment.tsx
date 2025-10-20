import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Card, Col, Container, Row } from 'react-bootstrap';
import FlightBookingWizard from '../payment/FlightBookingWizard';
import CountdownDisplay from '../payment/CountdownDisplay';
import FlightPaymentInfo from './PaymentInfo';
import PaymentMethodForm from 'components/forms/PaymentMethodForm';
import FlightBottomBar from './BottomBar';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { flightNavItems } from 'data/travel-agency/resizableNav';

const FlightPayment = () => {
  return (
    <>
      <ResizableNavbar navItems={flightNavItems} />
      <Container fluid="small" className="pt-6 pb-9">
        <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
        <h2 className="mb-5">Payment</h2>
        <Row className="g-3 align-items-sm-center justify-content-between mb-5">
          <Col sm>
            <FlightBookingWizard activeItem="Payment" />
          </Col>
          <Col sm className="text-sm-end">
            <CountdownDisplay />
          </Col>
        </Row>
        <hr className="mt-5 mb-6" />
        <Row className="g-0 gap-6">
          <Col lg>
            <FlightPaymentInfo />
          </Col>
          <Col lg>
            <Card>
              <Card.Body>
                <PaymentMethodForm marginTop="short" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr className="mt-6 mb-9 d-none d-lg-block" />
      </Container>
      <FlightBottomBar />
    </>
  );
};

export default FlightPayment;

import TripSummaryCard from 'components/cards/TripSummaryCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { defaultBreadcrumbItems } from 'data/commonData';
import { tripNavItems } from 'data/travel-agency/resizableNav';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { selectedTrip } from 'data/travel-agency/customer/trip';
import Button from 'components/base/Button';
import TripCheckoutForm from 'components/forms/TripCheckoutForm';

const TripCheckout = () => {
  return (
    <>
      <ResizableNavbar navItems={tripNavItems} />
      <section className="py-5 pb-md-7 pb-lg-9">
        <Container fluid="medium">
          <Form onSubmit={e => e.preventDefault()}>
            <Row className="gy-5 gx-lg-0 justify-content-between">
              <Col lg={6}>
                <PageBreadcrumb
                  items={defaultBreadcrumbItems}
                  className="mb-3"
                />
                <h2 className="mb-5">Check out</h2>
                <TripCheckoutForm />
              </Col>
              <Col lg={5} xl={4}>
                <div className="sticky-lg-top z-0" style={{ top: '10rem' }}>
                  <TripSummaryCard selectedTrip={selectedTrip} />
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 mt-3"
                  >
                    Book now
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default TripCheckout;

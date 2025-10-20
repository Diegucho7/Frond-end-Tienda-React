import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Container, Row, Col, Form } from 'react-bootstrap';
import HotelDetailsSummaryCard from 'components/cards/HotelDetailsSummaryCard';
import PaymentMethodForm from 'components/forms/PaymentMethodForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/base/Button';
import { Link } from 'react-router';
import TravelFooter from 'components/footers/TravelFooter';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

const HotelPayment = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-6 pb-9">
        <Container fluid="medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
          <h2 className="mb-5">Payment</h2>
          <Row className="justify-content-between">
            <Col lg={7} xl={6}>
              <Form onSubmit={e => e.preventDefault()}>
                <Link to="/apps/travel-agency/hotel/customer/checkout">
                  <Button
                    variant="phoenix-primary"
                    startIcon={
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="me-2"
                        transform="shrink-3"
                      />
                    }
                  >
                    Go back
                  </Button>
                </Link>
                <hr className="mt-5 mb-7" />
                <h3 className="mb-5">Enter your address</h3>
                <Row className="g-3 mb-5">
                  <Col sm={3}>
                    <label
                      htmlFor="country"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Country
                    </label>
                    <Form.Select id="country">
                      <option value="1">India</option>
                      <option value="2">USA</option>
                      <option value="3">UAE</option>
                    </Form.Select>
                  </Col>
                  <Col sm={5} lg={4}>
                    <label
                      htmlFor="phone-number"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Phone number
                    </label>
                    <Form.Control
                      type="number"
                      id="phone-number"
                      placeholder="Enter phone number"
                      className="input-spin-none"
                    />
                  </Col>
                </Row>
                <Row className="g-3">
                  <Col sm={8} lg={7}>
                    <label
                      htmlFor="email"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Email address
                    </label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      id="email"
                    />
                  </Col>
                </Row>
                <PaymentMethodForm />
                <hr className="mt-6 mb-5" />
                <Link to="/apps/travel-agency/hotel/customer/checkout">
                  <Button
                    variant="phoenix-primary"
                    className="me-3"
                    startIcon={
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="me-2"
                        transform="shrink-3"
                      />
                    }
                  >
                    Go back
                  </Button>
                </Link>
                <Button variant="primary" className="px-sm-15">
                  Confirm booking
                </Button>
              </Form>
            </Col>
            <Col lg={5} xl={4}>
              <HotelDetailsSummaryCard
                showHotelInfo={true}
                className="mt-5 mt-lg-0"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <TravelFooter />
    </>
  );
};

export default HotelPayment;

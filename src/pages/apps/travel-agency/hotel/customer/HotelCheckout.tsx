import React from 'react';
import { Link } from 'react-router';
import TravelFooter from 'components/footers/TravelFooter';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Container, Row, Col, Form } from 'react-bootstrap';
import HotelDetailsSummaryCard from 'components/cards/HotelDetailsSummaryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import ResizableNavbar from 'components/navbars/travel-agency/ResizableNavbar';
import { hotelNavItems } from 'data/travel-agency/resizableNav';

const HotelCheckout = () => {
  return (
    <>
      <ResizableNavbar navItems={hotelNavItems} />
      <section className="pt-6 pb-9">
        <Container fluid="medium">
          <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
          <h2 className="mb-5">Check out</h2>
          <Row className="justify-content-between">
            <Col lg={7} xl={6}>
              <Form id="checkoutForm1" onSubmit={e => e.preventDefault()}>
                <hr className="mt-0 mb-7" />
                <h3 className="fw-bold mb-5">Enter your details</h3>
                <h5 className="mb-3">Are you travelling for work?</h5>
                <Form.Check
                  id="tripTypeRadio"
                  className="form-check-inline me-4"
                >
                  <Form.Check.Input
                    type="radio"
                    name="tripTypeRadio"
                    value="no"
                    defaultChecked
                  />
                  <Form.Check.Label htmlFor="tripTypeRadio">
                    No
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check id="tripTypeRadio" className="form-check-inline">
                  <Form.Check.Input
                    type="radio"
                    name="tripTypeRadio"
                    value="yes"
                  />
                  <Form.Check.Label htmlFor="tripTypeRadio">
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Row className="g-3 mb-5 mt-1">
                  <Col sm={6}>
                    <label
                      htmlFor="first-name"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      First name
                    </label>
                    <Form.Control
                      type="text"
                      id="first-name"
                      placeholder="First name"
                    />
                  </Col>
                  <Col sm={6}>
                    <label
                      htmlFor="last-name"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Last name
                    </label>
                    <Form.Control
                      type="text"
                      id="last-name"
                      placeholder="Last name"
                    />
                  </Col>
                </Row>
                <Row className="g-3">
                  <Col sm={6}>
                    <label
                      htmlFor="email-address"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Email address
                    </label>
                    <Form.Control
                      type="email"
                      id="email-address"
                      placeholder="Email address"
                    />
                  </Col>
                  <Col sm={6}>
                    <label
                      htmlFor="confirm-email-address"
                      className="fw-bold text-body-highlight mb-1"
                    >
                      Confirm email address
                    </label>
                    <Form.Control
                      type="text"
                      id="confirm-email-address"
                      placeholder="Confirm email address "
                    />
                  </Col>
                </Row>
                <h5 className="mb-3 mt-7">Who are you booking for?</h5>
                <Form.Check
                  id="bookingPersonRadio"
                  className="form-check-inline me-4"
                >
                  <Form.Check.Input
                    type="radio"
                    name="bookingPersonRadio"
                    id="me"
                    value="no"
                    defaultChecked
                  />
                  <Form.Check.Label htmlFor="me">
                    I am the main guest
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  id="bookingPersonRadio"
                  className="form-check-inline"
                >
                  <Form.Check.Input
                    type="radio"
                    name="bookingPersonRadio"
                    value="yes"
                    id="else"
                  />
                  <Form.Check.Label htmlFor="else">
                    I am booking for somebody else
                  </Form.Check.Label>
                </Form.Check>
                <h5 className="mb-3 mt-6">Add to your stay</h5>
                <Form.Check className="mb-4">
                  <Form.Check.Input type="checkbox" id="airportShuttle" />
                  <Form.Check.Label
                    htmlFor="airportShuttle"
                    className="fw-normal fs-8 text-body"
                  >
                    I am interested in requesting an airport shuttle
                    <span className="d-block fs-9 text-body-tertiary">
                      We'll tell your accommodation what you're interested in so
                      they can provide details and costs.
                    </span>
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check>
                  <Form.Check.Input type="checkbox" id="rentingCar" />
                  <Form.Check.Label
                    htmlFor="rentingCar"
                    className="fw-normal fs-8 text-body"
                  >
                    I'm interested in renting a car
                    <span className="d-block fs-9 text-body-tertiary">
                      Make the most of your trip and check the car rental
                      options in your booking confirmation.
                    </span>
                  </Form.Check.Label>
                </Form.Check>
                <h5 className="mb-3 mt-6">Your arrival time</h5>
                <Row className="gx-2">
                  <Col xs={6} sm={3}>
                    <Form.Select role="select-box">
                      <option value="1">12:00</option>
                      <option value="2">03:00</option>
                      <option value="3">06:00</option>
                      <option value="4">09:00</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6} sm={3}>
                    <Form.Select role="select-box">
                      <option value="am">AM</option>
                      <option value="pm">PM</option>
                    </Form.Select>
                  </Col>
                </Row>
                <h5 className="mb-3 mt-7">Review house rules</h5>
                <p>
                  Your host would like you to agree to the following house
                  rules:
                </p>
                <p className="mb-2">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-body-quaternary fs-10 me-2"
                    transform="up-2"
                  />
                  No smoking
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-body-quaternary fs-10 me-2"
                    transform="up-2"
                  />
                  Pets are not allowed
                </p>
                <p className="text-info mb-7">
                  By continuing to the next step, you are agreeing to these
                  house rules.
                </p>
                <h5 className="mb-3">Special requests</h5>
                <p className="fs-9 text-body-tertiary mb-4">
                  Special requests cannot be guaranteed, but the property will
                  do its best to meet your needs. You can always make a special
                  request after your booking is complete!
                </p>
                <Form.Control
                  as="textarea"
                  name="requestText"
                  rows={5}
                  id="requestText"
                  placeholder="Type your request"
                />
                <hr className="mt-7 mb-5" />
                <Link to="/apps/travel-agency/hotel/customer/payment">
                  <Button
                    variant="primary"
                    endIcon={
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="ms-2"
                        transform="shrink-3"
                      />
                    }
                  >
                    Final details
                  </Button>
                </Link>
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

export default HotelCheckout;

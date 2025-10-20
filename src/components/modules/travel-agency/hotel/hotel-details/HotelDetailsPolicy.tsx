import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaby,
  faClock,
  faCreditCard,
  faPaw
} from '@fortawesome/free-solid-svg-icons';
import masterCard from 'assets/img/logos/mastercard.png';
import americanExpress from 'assets/img/logos/american_express.png';
import visa from 'assets/img/logos/visa.png';

const HotelDetailsPolicy = () => {
  return (
    <>
      <h3 className="mb-5">Policy</h3>
      <Card className="bg-body-highlight mb-3">
        <Card.Body>
          <Row className="g-3">
            <Col sm={3}>
              <h5 className="mb-0">
                <FontAwesomeIcon
                  icon={faClock}
                  className="fs-9 me-1"
                  transform="up-1"
                />
                Check in
              </h5>
            </Col>
            <Col sm={9}>
              <div className="position-relative">
                <ProgressBar
                  className="position-relative align-middle overflow-visible"
                  style={{ height: 8 }}
                >
                  <ProgressBar
                    now={50}
                    isChild={true}
                    className="ms-auto overflow-visible rounded"
                  />
                </ProgressBar>
                <span
                  className="text-body translate-middle-x position-absolute fs-10"
                  style={{
                    left: '50%',
                    marginTop: '0.8rem'
                  }}
                >
                  12 am
                </span>
              </div>
              <div className="d-flex flex-between-center w-100">
                <span className="text-body fs-10 mt-1">6 am</span>
                <span className="text-body fs-10 mt-1">6 pm</span>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* <Card className="bg-body-highlight mb-3">
        <Card.Body>
          <Row className="g-3">
            <Col sm={3}>
              <h5 className="mb-0">
                <FontAwesomeIcon
                  icon={faClock}
                  className="fs-9 me-1"
                  transform="up-1"
                />
                Check out
              </h5>
            </Col>
            <Col sm={9}>
              <ProgressBar
                className="position-relative align-middle overflow-visible"
                style={{ height: 8 }}
              >
                <ProgressBar
                  now={50}
                  className="overflow-visible rounded"
                  isChild={true}
                />
                <span
                  className="text-body translate-middle-x position-absolute fs-10"
                  style={{
                    left: '50%',
                    marginTop: '0.8rem'
                  }}
                >
                  12 am
                </span>
              </ProgressBar>
              <div className="d-flex flex-between-center w-100">
                <span className="text-body fs-10 mt-1">6 am</span>
                <span className="text-body fs-10 mt-1">6 pm</span>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card> */}
      <Card className="bg-body-highlight mb-3">
        <Card.Body>
          <Row className="g-3">
            <Col xs={5} sm={3}>
              <h5 className="mb-0">
                <FontAwesomeIcon
                  icon={faBaby}
                  className="fs-9 me-1"
                  transform="up-1"
                />
                Baby policy
              </h5>
            </Col>
            <Col sm={9}>
              <h5 className="mb-2 text-success">Allowed</h5>
              <p className="mb-0 text-body">
                Children under the age of five can stay in the same room as
                their parents and receive complimentary breakfast. Children from
                5 to 10 years old will be charged $1,500 for extra bed and
                breakfast. Extra Breakfast Charge: $400 NET per night (for
                adults). Extra Breakfast Charge $200 NET Per Night (Above 5 to
                11 Years)
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="bg-body-highlight mb-3">
        <Card.Body>
          <Row className="g-3 align-items-center">
            <Col xs={5} sm={3}>
              <h5 className="mb-0">
                <FontAwesomeIcon
                  icon={faPaw}
                  className="fs-9 me-1"
                  transform="up-1"
                />
                Pet policy
              </h5>
            </Col>
            <Col xs={7} sm={9}>
              <h5 className="mb-0 text-warning">Not Allowed</h5>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="bg-body-highlight">
        <Card.Body>
          <Row className="g-3 align-items-center">
            <Col xs={5} sm={3}>
              <h5 className="mb-0">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="fs-9 me-1"
                  transform="up-1"
                />
                Payment
              </h5>
            </Col>
            <Col xs={7} sm={9}>
              <img src={masterCard} alt="" className="me-3" />
              <img src={americanExpress} alt="" className="me-3" />
              <img src={visa} alt="" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default HotelDetailsPolicy;

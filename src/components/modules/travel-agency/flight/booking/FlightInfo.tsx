import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCouch } from '@fortawesome/free-solid-svg-icons';
import { Card, Row, Col } from 'react-bootstrap';
import longArrowDown from 'assets/img/icons/long-arrow-down.svg';
import qatarAirlineLogo from 'assets/img/brand/qatar-airline.png';

interface FlightDetailsProps {
  time: string;
  date: string;
  airportCode: string;
  airportName: string;
}

const FlightDetails = ({
  time,
  date,
  airportCode,
  airportName
}: FlightDetailsProps) => (
  <Row className="align-items-center">
    <Col md={3} className="text-md-end mb-2 mb-md-0">
      <h2>{time}</h2>
      <p className="mb-0 text-nowrap">{date}</p>
    </Col>
    <Col md="auto" className="d-none d-md-block text-center">
      <FontAwesomeIcon icon={faCircle} className="text-body-quaternary fs-11" />
    </Col>
    <Col md="auto">
      <h5>
        {airportCode} - {airportName}
        <span className="text-body-tertiary fw-normal">
          {' '}
          ({airportName} Intl. Airport)
        </span>
      </h5>
    </Col>
  </Row>
);

const FlightInfo = () => {
  return (
    <Card className="bg-body-highlight mb-6">
      <Card.Body className="p-4 p-lg-6">
        <Row className="g-0 justify-content-between">
          <Col lg={8} className="mb-5 mb-lg-0">
            <Row className="gy-4">
              <Col xs={12}>
                <FlightDetails
                  time="13:45"
                  date="23 January, 2023"
                  airportCode="DAC"
                  airportName="Dhaka"
                />
              </Col>

              <Col xs={12}>
                <Row className="align-items-center">
                  <Col xs="auto" md={3} className="text-md-end">
                    <p className="mb-0 text-body-quaternary">0h 45m</p>
                  </Col>
                  <Col xs="auto" className="text-md-center">
                    <img src={longArrowDown} alt="" />
                  </Col>
                  <Col xs="auto">
                    <p className="mb-0 text-body-quaternary">Qatar Airways</p>
                  </Col>
                </Row>
              </Col>

              <Col xs={12}>
                <FlightDetails
                  time="14:15"
                  date="23 January, 2023"
                  airportCode="CXB"
                  airportName="Cox’s Bazar"
                />
              </Col>
            </Row>
          </Col>

          {/* Right Panel for Airline Info */}
          <Col
            lg={4}
            className="ps-lg-6 pt-5 pt-lg-0 border-top border-top-lg-0 border-start-lg border-translucent"
          >
            <Row className="g-lg-3 g-md-0 g-3 flex-between-center">
              <Col md="auto" lg={12} className="text-nowrap">
                <img
                  src={qatarAirlineLogo}
                  alt=""
                  width={32}
                  className="rounded-2"
                />
                <h5 className="text-nowrap fw-normal d-inline-block ms-2 mb-0">
                  Qatar Airways
                </h5>
              </Col>
              <Col xs="auto" lg={12}>
                <h5 className="text-nowrap">Flight number</h5>
                <p className="mb-0">VQ 935</p>
              </Col>
              <Col xs="auto" lg={12}>
                <h5 className="text-nowrap">Flight model</h5>
                <p className="mb-0">ATR735</p>
              </Col>
              <Col xs="auto" lg={12}>
                <h5 className="mb-0 text-nowrap">
                  <FontAwesomeIcon icon={faCouch} className="me-2" />
                  Economy
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FlightInfo;

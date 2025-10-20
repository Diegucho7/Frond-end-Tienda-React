import DealForecasrProgressBar from 'components/progress-bars/DealForecasrProgressBar';
import DealForecastTable from 'components/tables/DealForecastTable';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const DealForecast = () => {
  return (
    <>
      <Row className="align-items-start justify-content-between mb-4 g-3">
        <Col xs="auto">
          <h3>
            Deal Forecast
            <span className="fw-semibold">- $90,303</span>
          </h3>
          <p className="text-body-tertiary mb-1">Show what you offer here</p>
        </Col>
        <Col xs={12} sm={4}>
          <Form.Select size="sm" id="select-ad-forcast-month">
            <option>Mar 1 - 31, 2022</option>
            <option>April 1 - 30, 2022</option>
            <option>May 1 - 31, 2022</option>
          </Form.Select>
        </Col>
      </Row>
      <DealForecasrProgressBar />
      <h4 className="mt-4 mb-3">Deal Forecast by Owner </h4>
      <DealForecastTable />
    </>
  );
};

export default DealForecast;

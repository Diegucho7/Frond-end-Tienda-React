import React, { useState } from 'react';
import { Card, Form, Fade } from 'react-bootstrap';
import FlightSearchForm from './FlightSearchForm';
import FlightPreviewForm from './FlightPreviewForm';
import FlightEditForm from './FlightEditForm';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface FlightTypeCheckboxProps {
  name: string;
  id: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}
const FlightTypeCheckbox = ({
  name,
  id,
  value,
  label,
  defaultChecked
}: FlightTypeCheckboxProps) => {
  return (
    <Form.Check type="radio" id={id} inline>
      <Form.Check.Input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked || false}
      />
      <Form.Check.Label className="fs-8 text-body">{label}</Form.Check.Label>
    </Form.Check>
  );
};

const FlightSearch = () => {
  const [detailsVisible, setDetailsVisible] = useState(true);

  const [formData, setFormData] = useState({
    flightFareType: true,
    priceRange: [100, 186],
    flightClass: 'economy',
    departTime: '12:00 - 18:00',
    returnTime: '12:00 - 18:00'
  });

  return (
    <Form>
      <Card className="position-relative mb-6">
        <Card.Body>
          <div className="mb-4">
            <FlightTypeCheckbox
              name="flightType"
              id="oneWay"
              value="oneway"
              label="One way"
            />
            <FlightTypeCheckbox
              name="flightType"
              id="returnTrip"
              value="returnTrip"
              label="Return"
              defaultChecked
            />
            <FlightTypeCheckbox
              name="flightType"
              id="multiCities"
              value="multiPleCities"
              label="Multiple cities"
            />
          </div>
          <FlightSearchForm />
          <div className="bg-body-highlight p-3 p-sm-4 rounded-2">
            <Fade in={detailsVisible} timeout={5000}>
              <div
                id="flight-preview-form"
                style={{ display: detailsVisible ? 'block' : 'none' }}
              >
                <FlightPreviewForm formData={formData} />
              </div>
            </Fade>
            <Fade in={!detailsVisible} timeout={5000}>
              <div
                id="flight-edit-form"
                style={{ display: !detailsVisible ? 'block' : 'none' }}
              >
                <FlightEditForm formData={formData} setFormData={setFormData} />
              </div>
            </Fade>
          </div>
          <div className="d-flex flex-wrap gap-3 justify-content-between mt-4">
            <Button
              variant="link"
              to="#!"
              className={classNames(
                'd-flex align-items-center fs-8 fw-semibold text-normal px-0 pt-0 collapse-indicator',
                {
                  collapsed: !detailsVisible
                }
              )}
              onClick={() => setDetailsVisible(!detailsVisible)}
              aria-controls="flight-preview-form"
            >
              {detailsVisible ? 'Edit' : 'Save'} details
              <FontAwesomeIcon
                icon={faAngleDown}
                className="ms-1 toggle-icon"
              />
            </Button>

            <Button
              variant="primary"
              className="btn-lg flex-1"
              style={{ maxWidth: '15rem' }}
            >
              Search
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default FlightSearch;

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import PhoenixReactRange from 'components/forms/PhoenixReactRange';
import ReactSelect from 'components/base/ReactSelect';

import {
  flightAirlines,
  flightCabins,
  flightStops
} from 'data/travel-agency/customer/flight';
import classNames from 'classnames';

export const FilterFormFlightStops = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Stops"
      titleClass="fs-8"
      containerSize="sm"
      id="flightStops"
    >
      <div className="p-3 pb-0">
        {flightStops.map(stop => (
          <Form.Check key={stop.id} className={classNames(stop.className)}>
            <Form.Check.Input id={stop.id} />
            <Form.Check.Label htmlFor={stop.id} className="fs-8 text-body">
              {stop.label}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFormFlightAirlines = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Airlines"
      titleClass="fs-8"
      containerSize="sm"
      id="flightAirlines"
    >
      <div className="p-3 pb-0">
        {flightAirlines.map(airline => (
          <Form.Check key={airline.id}>
            <Form.Check.Input id={airline.id} />
            <Form.Check.Label htmlFor={airline.id} className="fs-8 text-body">
              {airline.label}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFormFlightCabin = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Cabin"
      titleClass="fs-8"
      containerSize="sm"
      id="flightCabin"
    >
      <div className="p-3 pb-0">
        {flightCabins.map(cabin => (
          <Form.Check key={cabin.id}>
            <Form.Check.Input id={cabin.id} />
            <Form.Check.Label htmlFor={cabin.id} className="fs-8 text-body">
              {cabin.label}
            </Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFormFlightDuration = () => {
  const [values, setValues] = useState([48]);
  return (
    <CollapsibleContainer
      collapseTitle="Flight Duration"
      titleClass="fs-8"
      containerSize="sm"
      id="flightDuration"
    >
      <div className="p-3 pb-0">
        <div className="d-flex flex-between-center mb-2">
          <h6 className="mb-0 text-body-highlight fw-semibold">0h 45m</h6>
          <h6 className="mb-0 text-body-highlight fw-semibold">0h 55m</h6>
        </div>
        <PhoenixReactRange
          step={1}
          min={45}
          max={55}
          trackHeight="6px"
          classNames="phoenix-react-range-medium mt-3"
          variant="primary-lighter"
          values={values}
          onChange={val => setValues(val)}
          tipFormatter={values => `${values}m`}
        />
      </div>
    </CollapsibleContainer>
  );
};

export const FilterFormFlightPriceCalculator = () => {
  return (
    <CollapsibleContainer
      collapseTitle="Price Calculator"
      titleClass="fs-8"
      containerSize="sm"
      id="flightPriceCalculator"
    >
      <div className="p-3 pb-0">
        <ReactSelect
          placeholder="Select Method"
          isMulti
          options={[
            { value: 'mastercarddebit', label: 'Mastercard debit' },
            { value: 'mastercardcredit', label: 'Mastercard credit' },
            { value: 'visadebit', label: 'Visa debit' },
            { value: 'visacredit', label: 'Visa credit' },
            { value: 'americanexpress', label: 'American Express' },
            { value: 'paypal', label: 'Paypal' }
          ]}
        />
      </div>
    </CollapsibleContainer>
  );
};

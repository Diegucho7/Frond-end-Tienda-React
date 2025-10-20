import PhoenixReactRange from 'components/forms/PhoenixReactRange';
import React, { Dispatch, SetStateAction } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

// type Event = HTMLInputElement | HTMLSelectElement

interface FormDataProps {
  flightFareType: boolean;
  priceRange: number[];
  flightClass: string;
  departTime: string;
  returnTime: string;
}

interface FlightEditFormProps {
  formData: FormDataProps;
  setFormData: Dispatch<SetStateAction<FormDataProps>>;
}

const FlightEditForm = ({ formData, setFormData }: FlightEditFormProps) => {
  const onchangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const priceRangeChangeHandler = (val: number[]) => {
    setFormData(prev => ({ ...prev, priceRange: val }));
  };

  return (
    <Row className="g-3">
      <Col md={4} lg xl={2}>
        <h5 className="text-body-emphasis mb-2">Fare Type</h5>
        <Form.Check type="checkbox" id="flightFareType" className="mb-0">
          <Form.Check.Input
            type="checkbox"
            name="flightFareType"
            checked={formData.flightFareType}
            onChange={onchangeHandler}
            className="mt-0"
          />
          <Form.Check.Label className="d-block lh-sm fs-8 text-body fw-normal mb-0">
            Refundable ticket
          </Form.Check.Label>
        </Form.Check>
      </Col>
      <Col md={4} lg xl={2}>
        <h5 className="text-body-emphasis mb-3">Price Range</h5>
        <PhoenixReactRange
          values={formData.priceRange}
          variant="primary-lighter"
          min={100}
          max={200}
          trackHeight={'4px'}
          classNames={'phoenix-react-range-slim px-2 pt-1 mb-3'}
          onChange={val => priceRangeChangeHandler(val)}
        />
        <div className="d-flex flex-between-center">
          <div>
            <small className="d-none d-lg-block text-body-tertiary">Min</small>
            <h6 className="mb-0 text-body-highlight fw-semibold"> $100</h6>
          </div>
          <div className="text-end">
            <small className="d-none d-lg-block text-body-tertiary">Max</small>
            <h6 className="mb-0 text-body-highlight fw-semibold">$200</h6>
          </div>
        </div>
      </Col>
      <Col md={4} lg xl={2}>
        <h5 className="text-body-emphasis mb-2">Class</h5>
        <Form.Select
          id="flightClass"
          name="flightClass"
          onChange={onchangeHandler}
        >
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="Firstclass">First class</option>
        </Form.Select>
      </Col>
      <Col md={6} lg xl={2} className="ms-lg-auto">
        <h5 className="text-body-emphasis mb-2">Onward depart time</h5>
        <Form.Select
          id="departTime"
          name="departTime"
          onChange={onchangeHandler}
        >
          <option value="12:00 - 18:00">12:00 - 18:00</option>
          <option value="18:00 - 24:00">18:00 - 24:00</option>
          <option value="06:00 - 12:00">06:00 - 12:00</option>
        </Form.Select>
      </Col>
      <Col md={6} lg xl={2}>
        <h5 className="text-body-emphasis mb-2">Return depart time</h5>
        <Form.Select
          id="returnTime"
          name="returnTime"
          onChange={onchangeHandler}
        >
          <option value="12:00 - 18:00">12:00 - 18:00</option>
          <option value="18:00 - 24:00">18:00 - 24:00</option>
          <option value="06:00 - 12:00">06:00 - 12:00</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default FlightEditForm;

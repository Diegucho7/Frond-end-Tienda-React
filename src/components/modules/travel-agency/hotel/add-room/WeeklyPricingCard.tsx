import React from 'react';
import DatePicker from 'components/base/DatePicker';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
const WeeklyPricingCard = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;
  const days: string[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thirsday',
    'friday',
    'saturday'
  ];

  return (
    <Card className="bg-body-highlight">
      <Card.Body>
        <Row className="gx-2 justify-content-between">
          <Col xs sm="auto">
            <Form.Group controlId="roomCategory">
              <Form.Label className="form-label-header mb-1 fs-9">
                Date
              </Form.Label>
              <DatePicker
                options={{
                  mode: 'range',
                  minDate: 'today',
                  dateFormat: 'Y-m-d'
                }}
                placeholder="Select date"
              />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group controlId="weeklyPricingUsd">
              <Form.Label className="form-label-header mb-1 fs-9">
                Currency
              </Form.Label>
              <Form.Select onChange={onChange}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="BDT">BDT</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <hr className="mb-2" />
        <Row className="g-2">
          {days.map((item, index) => (
            <Col xs={4} sm key={index}>
              <Form.Group controlId="weeklyPricingUsd">
                <Form.Label className="form-label-header mb-1 fs-9">
                  {item}
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input-spin-none"
                  onChange={onChange}
                  defaultValue={100}
                />
              </Form.Group>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WeeklyPricingCard;

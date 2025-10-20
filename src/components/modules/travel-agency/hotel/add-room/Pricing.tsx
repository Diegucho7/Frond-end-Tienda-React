import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { useState } from 'react';
import { Col, FloatingLabel, Form, Row, Tab } from 'react-bootstrap';
import WeeklyPricingCard from './WeeklyPricingCard';
import ExtraBed from './ExtraBed';
import Breakfast from './Breakfast';

const Pricing = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;
  const [selectedTab, setSelectedTab] = useState('allDayPricing');

  return (
    <>
      <h3 className="mb-6">Pricing</h3>
      <h4 className="mb-2">Base price per night</h4>
      <p className="mb-5 text-body-tertiary">
        Get a great value stay with us, starting at our base price per night.
      </p>
      <Tab.Container activeKey={selectedTab}>
        <Form.Group className="mb-2">
          <Form.Check
            type="radio"
            label="Across all days"
            id="allDayPricing"
            value="allDayPricing"
            name="isAllDayPricing"
            inline
            checked={selectedTab === 'allDayPricing'}
            onChange={e => setSelectedTab(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            id="weeklyPricing"
            value="weeklyPricing"
            label="By day of week"
            name="isAllDayPricing"
            checked={selectedTab === 'weeklyPricing'}
            onChange={e => setSelectedTab(e.target.value)}
          />
        </Form.Group>
        <Tab.Content>
          <Tab.Pane eventKey="allDayPricing">
            <Row className="gx-2 w-sm-60">
              <Col xs={8}>
                <FloatingLabel controlId="roomPrice" label="Room Price">
                  <Form.Control
                    type="number"
                    placeholder=""
                    name="roomPrice"
                    onChange={onChange}
                    className="input-spin-none"
                  />
                </FloatingLabel>
              </Col>
              <Col xs={4}>
                <FloatingLabel controlId="currency" label="Currency">
                  <Form.Select name="currency" onChange={onChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="BDT">BDT</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="weeklyPricing">
            <WeeklyPricingCard />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <>
        <h5 className="mb-2 mt-5 lh-1 text-body-highlight fw-bold">
          How many people are included in the base rate?
        </h5>
        <FloatingLabel
          controlId="peopleSelect"
          label="Select"
          className="w-sm-60"
        >
          <Form.Select name="peopleInBaseRate" onChange={onChange}>
            <option value="1">05 People</option>
            <option value="2">10 People</option>
            <option value="3">15 People</option>
          </Form.Select>
        </FloatingLabel>
      </>
      <ExtraBed />
      <Breakfast />
    </>
  );
};

export default Pricing;

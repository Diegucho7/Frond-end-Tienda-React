import { useWizardFormContext } from 'providers/WizardFormProvider';
import React from 'react';
import { Accordion, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import {
  AddPropertyWizardFormData,
  generalAmenities
} from 'data/travel-agency/addProperty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/base/Button';
import PriceTierForm from '../common/PriceTierForm';

const GeneralAmenitiesForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;

  return (
    <>
      <div>
        <h3 className="mb-6">General amenities</h3>
        <Row className="g-3">
          <Col sm="auto" className="flex-sm-fill">
            <div className="form-icon-container">
              <FloatingLabel
                controlId="GeneralAmenitiesSearch"
                label="Search amenities"
              >
                <Form.Control
                  name="GeneralAmenitiesSearch"
                  type="text"
                  onChange={onChange}
                  placeholder="Search amenities"
                />
              </FloatingLabel>
              <FontAwesomeIcon
                icon={faSearch}
                transform="down-2"
                className="position-absolute text-body-quaternary fs-9 end-0 top-0 mt-3 me-3"
              />
            </div>
          </Col>
          <Col sm="auto">
            <Button variant="phoenix-primary" className="w-100 h-100 fs-8">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add amenity
            </Button>
          </Col>
        </Row>
      </div>

      <Accordion
        id="generalAmenitiesAccordion"
        className="accordion-button-arrow-icon mt-2"
      >
        {generalAmenities.map((item, index) => (
          <Accordion.Item
            key={index}
            eventKey={item.eventKey}
            className="px-0 py-3"
          >
            <Accordion.Button className="py-0">
              <span className="circle-icon-item me-3">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="flex-1 text-body-highlight">{item.title}</span>
            </Accordion.Button>
            <Accordion.Body className="ms-md-9">
              {item.innerItems.map((item, index) => (
                <PriceTierForm
                  key={index}
                  id={item.id}
                  name={item.name}
                  className={item.className}
                  methods={methods}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default GeneralAmenitiesForm;

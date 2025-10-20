import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';

const BasicInformationForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { formData, onChange } = methods;
  const [isPropertyChain, setIsPropertyChain] = useState(false);
  const [isChannelManagement, setIsChannelManagement] = useState(true);

  return (
    <>
      <h3 className="mb-6">Basic information</h3>
      <h4 className="mb-4">Property Information</h4>
      <FloatingLabel controlId="propertyName" label="Property Name">
        <Form.Control
          type="text"
          name="propertyName"
          defaultValue={formData?.propertyName}
          onChange={onChange}
        />
      </FloatingLabel>
      <h5 className="text-end text-body-quaternary fw-semibold mt-2">
        <span className="text-primary">15 </span>/ 60{' '}
      </h5>
      <FloatingLabel
        controlId="propertyDescription"
        className="my-3"
        label="Description"
      >
        <textarea
          className="form-control"
          onChange={onChange}
          placeholder="Description"
          name="propertyInfo"
          style={{ height: '162px' }}
        />
        <h5 className="text-end text-body-quaternary fw-semibold mt-2">
          <span className="text-primary">0 </span>/ 360{' '}
        </h5>
      </FloatingLabel>

      <Row className="g-3">
        <Col md={8} lg={12} xl={8}>
          <FloatingLabel
            controlId="propertyType"
            onChange={onChange}
            label="Property Type"
          >
            <Form.Select name="propertyType">
              <option value="1">Hotel</option>
              <option value="2">Flight</option>
              <option value="3">Trip</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md={4} lg={12} xl={4}>
          <div className="form-icon-container">
            <Form.Floating>
              <Form.Select
                className="form-icon-input"
                name="propertyRating"
                onChange={onChange}
              >
                <option value="5">5 Star</option>
                <option value="4">4 Star</option>
                <option value="3">3 Star</option>
                <option value="2">2 Star</option>
                <option value="1">1 Star</option>
              </Form.Select>
              <label
                htmlFor="propertyRating"
                className="form-icon-label text-body-tertiary"
              >
                Rating
              </label>
            </Form.Floating>
            <FontAwesomeIcon
              icon={faStar}
              className="fs-10 form-icon text-warning"
            />
          </div>
        </Col>
      </Row>
      <h4 className="mt-6 mb-3">Contact Information</h4>
      <Row className="g-3">
        <Col md={6}>
          <FloatingLabel controlId="contactEmail" label="Email Address">
            <Form.Control
              type="email"
              name="contactEmail"
              placeholder=""
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="contactNumber" label="Phone Number">
            <Form.Control
              type="number"
              name="contactNumber"
              placeholder="Phone Number"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <h4 className="mt-6 mb-3">Is it part of a hotel / property chain?</h4>
      <Row className="align-items-center g-3">
        <Col sm="auto">
          <Form.Check
            inline
            defaultChecked
            label="No"
            name="isPropertyChain"
            type="radio"
            id="propertyChainNo"
            className="me-4 me-sm-7 mb-0"
            onChange={() => setIsPropertyChain(false)}
          />
          <Form.Check
            inline
            label="Yes"
            name="isPropertyChain"
            type="radio"
            id="propertyChainYes"
            className="me-0 mb-0"
            onChange={() => setIsPropertyChain(true)}
            value="yes"
          />
        </Col>
        <Col sm="auto" className="flex-1">
          <FloatingLabel
            controlId="propertyChain"
            label="Name of Company, Group or Chain"
          >
            <Form.Control
              type="text"
              name="propertyChain"
              defaultValue="With help text"
              disabled={!isPropertyChain}
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <h4 className="mt-6 mb-3">Do you use a Channel Management Systems?</h4>
      <Row className="align-items-center g-3">
        <Col sm="auto">
          <Form.Check
            inline
            label="No"
            name="isChannelManagement"
            type="radio"
            id="channelManagementNo"
            className="me-4 me-sm-7 mb-0"
            onChange={() => setIsChannelManagement(false)}
            value="No"
          />
          <Form.Check
            inline
            defaultChecked
            label="Yes"
            name="isChannelManagement"
            type="radio"
            id="channelManagementYes"
            className="me-0 mb-0"
            onChange={() => setIsChannelManagement(true)}
            value="Yes"
          />
        </Col>
        <Col sm="auto" className="flex-1">
          <FloatingLabel
            controlId="channelManagement"
            label="CMS provider name"
          >
            <Form.Control
              type="text"
              name="channelManagement"
              placeholder="CMS provider name"
              onChange={onChange}
              disabled={!isChannelManagement}
            />

            <FontAwesomeIcon
              icon={faSearch}
              className="position-absolute text-body-quaternary fs-9 end-0 top-0 mt-3 me-3"
              transform="down-2"
            />
          </FloatingLabel>
        </Col>
      </Row>
    </>
  );
};

export default BasicInformationForm;

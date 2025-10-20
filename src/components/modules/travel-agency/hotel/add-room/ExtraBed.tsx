import { useWizardFormContext } from 'providers/WizardFormProvider';
import React, { useState } from 'react';
import {
  Col,
  Collapse,
  FloatingLabel,
  Form,
  FormControl,
  InputGroup,
  Row
} from 'react-bootstrap';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AddRoomWizardFormData } from 'data/travel-agency/addRoom';

const ExtraBed = () => {
  const methods = useWizardFormContext<AddRoomWizardFormData>();
  const { onChange } = methods;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(2);

  const handleCount = (type: string) => {
    type === 'increase' && setValue(value + 1);
    type === 'decrease' && value >= 1 && setValue(value - 1);
  };

  const extraBedOptions = [
    '02-06 year olds',
    '07-12 year olds',
    '12-16 year olds',
    'For adults'
  ];

  return (
    <>
      <div className="d-flex align-items-center gap-2 mt-7">
        <h4>Extra bed option</h4>
        <Form.Check
          inline
          name="extraBedSwitch"
          type="switch"
          id="extraBedSwitch"
          onChange={onChange}
          onClick={() => setOpen(!open)}
          aria-controls="extraBedSwitch"
          defaultChecked={open}
        />
      </div>
      <p className="fs-9 text-body-tertiary mb-0">Can you provide extra bed</p>
      <Collapse in={open}>
        <div>
          <div className="mt-4">
            <Row className="gx-3">
              <Col xs={6} sm={4} xxl={5}>
                <Form.Group controlId="numberOfBed">
                  <Form.Label className="form-label-header mb-1">
                    Number of bed
                  </Form.Label>
                  <InputGroup className="gap-2">
                    <Button
                      className="border rounded px-3 bg-body-emphasis bg-body-hover lh-1"
                      onClick={() => handleCount('decrease')}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>

                    <FormControl
                      type="number"
                      value={value}
                      onChange={onChange}
                      className="input-spin-none rounded text-center"
                    />
                    <Button
                      className="border rounded px-3 bg-body-emphasis bg-body-hover lh-1"
                      onClick={() => handleCount('increase')}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col xs={6} sm={4} xxl={5}>
                <Form.Group controlId="roomCategory">
                  <Form.Label className="form-label-header mb-1">
                    Bed type
                  </Form.Label>
                  <Form.Select name="bedType" onChange={onChange}>
                    <option>Twin bed</option>
                    <option>King bed</option>
                    <option>Queen bed</option>
                    <option>Single bed</option>
                    <option>Double bed</option>
                    <option>Twin bed</option>
                    <option>Quad bed</option>
                    <option>Executive Suite</option>
                    <option>Bunk bed</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </div>
          <h5 className="mt-4 mb-3">
            Check the box(es) if you can accommodate the following guests in
            extra beds.
          </h5>

          {extraBedOptions.map((item, index) => (
            <div key={index} className="row gx-2 gy-0 align-items-center mb-3">
              <Col xs={12} sm="auto" style={{ minWidth: 120 }}>
                <Form.Check
                  type="checkbox"
                  id={`ageRange${index}`}
                  label={item}
                  name={`ageRange${index}`}
                />
              </Col>
              <Col xs="auto">
                <FloatingLabel
                  controlId={`roomPrice${index}`}
                  label="Room Price"
                >
                  <Form.Control type="text" placeholder="Room Price" />
                </FloatingLabel>
              </Col>
              <Col xs="auto">
                <FloatingLabel
                  controlId={`roomPriceCurrency${index}`}
                  label="Currency"
                  style={{ minWidth: '8rem' }}
                >
                  <Form.Select>
                    <option value="1">USD</option>
                    <option value="2">EUR</option>
                    <option value="3">BDT</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default ExtraBed;

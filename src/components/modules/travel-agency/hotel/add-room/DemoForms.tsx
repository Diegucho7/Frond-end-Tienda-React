import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'components/base/DatePicker';
import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const demoForms = () => {
  return (
    <>
      <>
        {/* title with floating lavel , select option */}
        <h5 className="mb-2 mt-5 lh-1 text-body-highlight fw-bold">
          How many people are included in the base rate?
        </h5>
        <FloatingLabel controlId="peopleSelect" label="Select">
          <Form.Select>
            <option value="1">05 People</option>
            <option value="2">10 People</option>
            <option value="3">15 People</option>
          </Form.Select>
        </FloatingLabel>
      </>
      <>
        {/* title and select option */}
        <Form.Group controlId="roomCategory">
          <Form.Label className="form-label-header mb-1">
            Room category
          </Form.Label>
          <Form.Select>
            <option>King</option>
            <option value="1">Bridal suite</option>
            <option value="2">Single room</option>
          </Form.Select>
        </Form.Group>
      </>
      <>
        {/* datepickr with custoom icon in end position */}
        <DatePicker
          render={(_, ref) => {
            return (
              <FloatingLabel
                controlId="financeInvoiceEmail"
                label="Select The Range"
                className="mb-4"
              >
                <Form.Control
                  type="text"
                  placeholder="start date"
                  ref={ref}
                  id="startDatepicker"
                  className="ps-3"
                />

                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="position-absolute top-0 end-0 mt-3 me-3"
                />
              </FloatingLabel>
            );
          }}
          hideIcon={true}
          options={{
            mode: 'range',
            minDate: 'today',
            dateFormat: 'Y-m-d'
          }}
        />
      </>
    </>
  );
};

export default demoForms;

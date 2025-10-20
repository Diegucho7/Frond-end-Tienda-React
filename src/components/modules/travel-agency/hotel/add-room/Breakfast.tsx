import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { useState } from 'react';
import { Form, Collapse, FloatingLabel } from 'react-bootstrap';

const Breakfast = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <h4 className="mb-2 mt-7">Breakfast</h4>
      <p className="mb-4 text-body-tertiary">
        Do you own multiple hotels, or are you part of a property management
        company or group?
      </p>
      <Form.Group className="mb-2">
        <Form.Check
          type="radio"
          label="Yes, it's included in the price"
          id="breakfastIncluded"
          value="breakfastIncluded"
          name="breakfastRadio"
          inline
          onClick={() => setOpen(true)}
          defaultChecked
        />
        <Form.Check
          inline
          type="radio"
          id="breakfastNotIncluded"
          value="breakfastNotIncluded"
          label="No"
          name="breakfastRadio"
          onClick={() => setOpen(false)}
        />
      </Form.Group>
      <Collapse in={open} className="w-sm-60">
        <div>
          <h5 className="text-body-highlight my-4">
            What type of food is available for breakfast for guests?
          </h5>
          <FloatingLabel controlId="breakfastType1" label="option 1">
            <Form.Select>
              <option value="1">Continental breakfast</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel
            controlId="breakfastType2"
            className="my-2"
            label="option 2"
          >
            <Form.Select>
              <option value="1">American breakfast</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="breakfastType3" label="option 3">
            <Form.Select>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Form.Select>
          </FloatingLabel>
          <div className="text-center mt-4">
            <Button variant="link">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add more
            </Button>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default Breakfast;

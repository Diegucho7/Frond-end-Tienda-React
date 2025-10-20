import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { Col, FloatingLabel, Form, Row, Dropdown } from 'react-bootstrap';
import { DropdownItem } from '../../hotel/HotelActions';

const FlightSearchForm = () => {
  return (
    <Row className="g-3 mb-4">
      <Col lg>
        <Row className="flex-center g-2">
          <Col sm>
            <FloatingLabel
              controlId="fromLocation"
              label="From"
              className="flex-1"
            >
              <Form.Control
                type="text"
                name="fromLocation"
                placeholder="Dhaka (DAC)"
              />
            </FloatingLabel>
          </Col>
          <Col xs="auto">
            <Button variant="phoenix-secondary" className="circle-btn">
              <FontAwesomeIcon icon={faArrowsRotate} />
            </Button>
          </Col>
          <Col sm>
            <FloatingLabel controlId="toLocation" label="To" className="flex-1">
              <Form.Control
                type="text"
                name="toLocation"
                placeholder="Sylhet (ZYL)"
              />
            </FloatingLabel>
          </Col>
        </Row>
      </Col>

      <Col lg>
        <Row className="flex-center g-2">
          <Col sm={6}>
            <DatePicker
              render={(_, ref) => {
                return (
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      name="journeyDate"
                      placeholder="dd/mm/yyyy"
                      ref={ref}
                      id="journeyDate"
                      className="ps-3"
                    />
                    <label htmlFor="journeyDate">Journey Date</label>
                  </Form.Floating>
                );
              }}
              hideIcon={true}
              options={{
                disableMobile: true,
                defaultDate: 'today',
                dateFormat: 'j M, Y'
              }}
            />
          </Col>
          <Col sm={6}>
            <DatePicker
              render={(_, ref) => {
                return (
                  <Form.Floating>
                    <Form.Control
                      type="text"
                      name="returnDate"
                      placeholder="dd/mm/yyyy"
                      ref={ref}
                      id="returnDate"
                      className="ps-3"
                    />
                    <label htmlFor="returnDate">Return Date</label>
                  </Form.Floating>
                );
              }}
              hideIcon={true}
              options={{
                disableMobile: true,
                defaultDate: 'today',
                dateFormat: 'j M, Y'
              }}
            />
          </Col>
        </Row>
      </Col>
      <Col lg="auto">
        <Dropdown autoClose="outside">
          <Dropdown.Toggle variant="" className="p-0 dropdown-caret-none w-100">
            <FloatingLabel
              controlId="travelerCount"
              label="Traveler"
              className="flex-1"
              style={{ minWidth: '13rem' }}
            >
              <Form.Control
                type="text"
                name="travelerCount"
                defaultValue="1 Traveler"
                readOnly
              />
            </FloatingLabel>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="p-4"
            align="start"
            style={{ maxWidth: 320 }}
          >
            <DropdownItem title="Adults" className="pb-3 pt-0 border-bottom" />
            <DropdownItem title="Infants" className="py-3 border-bottom" />
            <DropdownItem title="Children" className="py-3" />
            <Button variant="primary" className="w-100">
              Complete
            </Button>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default FlightSearchForm;

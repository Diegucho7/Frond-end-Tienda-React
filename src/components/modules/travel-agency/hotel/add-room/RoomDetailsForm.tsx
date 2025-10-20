import { useWizardFormContext } from 'providers/WizardFormProvider';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import ConterForm from './ConterForm';
import { AddRoomWizardFormData } from 'data/travel-agency/addRoom';

const CounterFormGroup = ({ id, label }: { id: string; label: string }) => (
  <Form.Group controlId={id}>
    <Form.Label className="form-label-header mb-1">{label}</Form.Label>
    <ConterForm name={id} />
  </Form.Group>
);

const RoomDetailsForm = () => {
  const methods = useWizardFormContext<AddRoomWizardFormData>();
  const { onChange } = methods;

  return (
    <>
      <h3 className="mb-6">Room Details</h3>
      <h4 className="mb-2">Share your room details</h4>
      <p className="mb-4 text-body-tertiary">
        Enjoy a comfortable stay in our well-appointed rooms with a variety of
        options to choose from.
      </p>
      <Row className="g-3 g-sm-4 mb-6">
        <Col sm={6} md={7}>
          <Form.Group controlId="roomCategory">
            <Form.Label className="form-label-header mb-1">
              Room category
            </Form.Label>
            <Form.Select name="roomCategory" onChange={onChange}>
              <option value="king">King</option>
              <option value="bridalSuite">Bridal suite</option>
              <option value="singleRoom">Single room</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col sm={6} md={5}>
          <Form.Group controlId="roomName">
            <Form.Label className="form-label-header mb-1">
              Room name (Optional)
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={onChange}
              name="roomName"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="gx-3 gx-sm-4 gy-3 mb-6">
        <Col xs={6} sm={4}>
          <Form.Group controlId="bedType">
            <Form.Label className="form-label-header mb-1">Bed type</Form.Label>
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
        <Col xs={6} sm={4}>
          <CounterFormGroup id="adult" label="Adult" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="children" label="Children allowed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="bed" label="Number of bed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="bathroom" label="Bathroom" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="balcony" label="Balcony" />
        </Col>
      </Row>
      <Row className="gx-3 gx-sm-4 gy-3 mb-6">
        <Col xs={6}>
          <CounterFormGroup id="roomOfThisType" label="Room of this type" />
        </Col>
        <Col xs={6}>
          <Form.Group controlId="roomSize">
            <Form.Label className="form-label-header mb-1">
              Room size (OPT)
            </Form.Label>
            <InputGroup>
              <FormControl
                type="number"
                placeholder="Size"
                className="input-spin-none"
                onChange={onChange}
              />
              <Form.Select
                onChange={onChange}
                style={{ minWidth: 100, flex: 'unset' }}
              >
                <option value="meter">Sq.m</option>
                <option value="feet">Sq.ft</option>
                <option value="inch">Sq.in</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <h4 className="mt-7 mb-2">Sleeping arrangements</h4>
      <p className="mb-4 text-body-tertiary">
        Sleep well in our comfortable rooms with modern amenities.
      </p>
      <Row className="gx-3 gx-sm-4 gy-3">
        <Col xs={6} sm={4}>
          <CounterFormGroup id="singleBed" label="Single bed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="doubleBed" label="Double bed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="queenBed" label="Queen bed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="kingBed" label="King bed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="sofaBed" label="Sofa bed" />
        </Col>
        <Col xs={6} sm={4}>
          <CounterFormGroup id="extraBed" label="Extra bed" />
        </Col>
      </Row>
    </>
  );
};

export default RoomDetailsForm;

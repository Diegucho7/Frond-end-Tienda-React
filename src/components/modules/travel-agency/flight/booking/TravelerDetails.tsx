import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Card, Form, Row, Col } from 'react-bootstrap';
import Dropzone from 'components/base/Dropzone';
import imageIcon from 'assets/img/icons/image-icon.png';

const FileUploader = ({ title }: { title: string }) => {
  return (
    <Dropzone
      size="sm"
      accept={{
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }}
    >
      <div className="text-body-tertiary text-opacity-85 px-2 py-4">
        <h6 className="mb-1 text-body-quaternary">Upload or drag</h6>
        <h6 className="mb-3 text-body-secondary">{title}</h6>
        <img className="mt-3 me-2" src={imageIcon} width={42} alt="" />
      </div>
    </Dropzone>
  );
};

const TravelerInfo = ({ id }: { id: string }) => {
  return (
    <Card className="bg-body mb-4">
      <Card.Header className="bg-body-highlight">
        <div className="d-flex flex-between-center">
          <h5 className="mb-0 text-nowrap">
            <FontAwesomeIcon icon={faUser} className="fs-9 me-2 text-primary" />
            Person {id}
          </h5>
          <Form.Check className="mb-0" id={`saveTravelerInfo${id}`}>
            <Form.Check.Input type="checkbox" />
            <Form.Check.Label className="fs-8 fw-normal text-body-emphasis">
              Save traveler info
            </Form.Check.Label>
          </Form.Check>
        </div>
      </Card.Header>
      <Card.Body>
        <h6 className="mb-0 fw-semibold fs-9 text-body-tertiary">
          Personal info
        </h6>
        <hr className="my-2" />
        <Row className="g-3 mb-6">
          <Col md={6}>
            <Form.Group controlId={`firstName-${id}`}>
              <Form.Label className="form-label-header mb-2">
                First name
              </Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId={`lastName-${id}`}>
              <Form.Label className="form-label-header mb-2">
                Last name
              </Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
          </Col>
        </Row>

        <h6 className="mb-0 fw-semibold fs-9 text-body-tertiary">
          Contact info
        </h6>
        <hr className="my-2" />
        <Row className="g-3 mb-6">
          <Col md={6}>
            <Form.Group controlId={`email-${id}`}>
              <Form.Label className="form-label-header mb-2">Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId={`phone-${id}`}>
              <Form.Label className="form-label-header mb-2">Phone</Form.Label>
              <Form.Control type="tel" placeholder="XXX-XXX-XXXX" />
            </Form.Group>
          </Col>
        </Row>

        <h6 className="mb-0 fw-semibold fs-9 text-body-tertiary">
          Passport info
        </h6>
        <hr className="my-2" />
        <Row className="g-3 mb-3">
          <Col md={6}>
            <Form.Group controlId={`passportNum-${id}`}>
              <Form.Label className="form-label-header mb-2">
                Passport Number
              </Form.Label>
              <Form.Control type="text" placeholder="Passport number" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId={`passportExpiry-${id}`}>
              <Form.Label className="form-label-header mb-2">
                Passport expiry date
              </Form.Label>
              <Form.Control type="text" placeholder="Select date" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-3">
          <Col md={6}>
            <FileUploader title="The photo of the front page of your passport" />
          </Col>
          <Col md={6}>
            <FileUploader title="The photo of the back page of your passport" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const TravelerDetails = () => {
  return (
    <div className="mb-4">
      <div className="mb-4">
        <h3>Traveler Details</h3>
        <small>
          <FontAwesomeIcon icon={faInfoCircle} className="me-2 text-info" />
          As mentioned in your passport or government-approved IDs
        </small>
      </div>

      <TravelerInfo id="1" />
      <TravelerInfo id="2" />
    </div>
  );
};

export default TravelerDetails;

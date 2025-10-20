import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlane,
  faEdit,
  faUser,
  faSuitcaseRolling,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import qatarAirlineLogo from 'assets/img/brand/qatar-airline.png';

const FlightInfo = () => {
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <FontAwesomeIcon icon={faPlane} className="text-primary me-2" />
          <h4 className="mb-0 d-inline-block text-body-highlight">
            Flight info
          </h4>
        </div>
        <Button variant="link" className="p-0">
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit
        </Button>
      </div>

      <div className="mb-4 d-flex align-items-center">
        <img
          src={qatarAirlineLogo}
          alt=""
          style={{ height: '3.5rem' }}
          className="img-fluid rounded-3"
        />
        <h5 className="text-nowrap fw-normal d-inline-block ms-2 mb-0">
          Qatar Airways
        </h5>
      </div>

      <p className="text-body-emphasis">
        Travelling from <strong>Dhaka</strong> to <strong>Cox’s Bazar</strong>
      </p>

      <div className="d-flex gap-2 flex-wrap">
        <p className="mb-0 text-body-emphasis text-nowrap">
          Tuesday, 29 January
          <FontAwesomeIcon
            icon={faCircle}
            className="text-body-tertiary fs-11 mx-2"
            transform="shrink-6"
          />
          5:00 pm
        </p>
        <p className="mb-0 text-body-emphasis text-nowrap">
          <span className="text-body-tertiary me-2">-</span>
          Tuesday, 29 January
          <FontAwesomeIcon
            icon={faCircle}
            className="text-body-tertiary fs-11 mx-2"
            transform="shrink-6"
          />
          5:30 pm
        </p>
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <FontAwesomeIcon icon={faUser} className="text-primary me-2" />
          <h4 className="mb-0 d-inline-block text-body-highlight">
            Personal info
          </h4>
        </div>
        <Button variant="link" className="p-0">
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit
        </Button>
      </div>

      <div className="bg-body-highlight rounded-2 p-4">
        <Row className="g-0 gy-5 flex-column flex-sm-row">
          <Col className="pe-4">
            <h5 className="mb-3">Passenger 1</h5>
            <p className="mb-2">John James Johansen</p>
            <p className="mb-0">
              Adult
              <FontAwesomeIcon
                icon={faCircle}
                className="text-body-tertiary fs-11 mx-2"
                transform="shrink-5"
              />
              Male
            </p>
          </Col>
          <Col className="border-start-sm border-top-sm-0 border-top border-translucent ps-sm-4 pt-4 pt-sm-0">
            <h5 className="mb-3">Passenger 2</h5>
            <p className="mb-2">John James Johansen</p>
            <p className="mb-0">
              Adult
              <FontAwesomeIcon
                icon={faCircle}
                className="text-body-tertiary fs-11 mx-2"
                transform="shrink-5"
              />
              Male
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const BaggageInfo = () => {
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>
          <FontAwesomeIcon
            icon={faSuitcaseRolling}
            className="text-primary me-2"
          />
          <h4 className="mb-0 d-inline-block text-body-highlight">
            Included baggage
          </h4>
        </div>
        <Button variant="link" className="p-0">
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit
        </Button>
      </div>

      <div className="d-flex gap-3 mb-4">
        <FontAwesomeIcon
          icon={faCircle}
          className="text-body-quaternary fs-11 mx-2"
          transform="down-8"
        />
        <div>
          <h5 className="mb-2">1 personal item</h5>
          <p className="mb-0 text-body-tertiary">
            Must go under the seat in front of you
          </p>
        </div>
      </div>

      <div className="d-flex gap-3 mb-4">
        <FontAwesomeIcon
          icon={faCircle}
          className="text-body-quaternary fs-11 mx-2"
          transform="down-8"
        />
        <div>
          <h5 className="mb-2">1 carry-on bag</h5>
          <p className="mb-0 text-body-tertiary">Max weight 8 kg</p>
        </div>
      </div>

      <div className="d-flex gap-3">
        <FontAwesomeIcon
          icon={faCircle}
          className="text-body-quaternary fs-11 mx-2"
          transform="down-8"
        />
        <div>
          <h5 className="mb-2">1 checked bag</h5>
          <p className="mb-0 text-body-tertiary">Max weight 25 kg</p>
        </div>
      </div>
    </div>
  );
};

const FlightPaymentInfo = () => {
  return (
    <div>
      <FlightInfo />
      <hr className="my-5" />
      <PersonalInfo />
      <hr className="my-5" />
      <BaggageInfo />
    </div>
  );
};

export default FlightPaymentInfo;

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DealDetailsCallTable from 'components/tables/DealDetailsCallTable';
import { Col, Form, Row } from 'react-bootstrap';

const DealDetailsCall = () => {
  return (
    <>
      <Row className="align-items-center gx-4 gy-3 flex-wrap mb-3">
        <Col sm="auto" className="flex-1">
          <h2 className="mb-0">Call</h2>
        </Col>
        <Col sm="auto">
          <div className="d-sm-flex align-items-center gap-4">
            <div className="d-flex gap-3 gap-sm-4">
              <Form.Check
                type="radio"
                label="All Call"
                name="callType"
                id="all-call"
                defaultChecked
                className="mb-sm-0"
              />
              <Form.Check
                type="radio"
                label="Incoming Call"
                name="callType"
                id="incoming-call"
                className="mb-sm-0"
              />
              <Form.Check
                type="radio"
                label="OutgoingCall"
                name="callType"
                id="outgoing-call"
                className="mb-sm-0"
              />
            </div>
            <Button
              variant="primary"
              startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
            >
              Add Call
            </Button>
          </div>
        </Col>
      </Row>
      <DealDetailsCallTable />
    </>
  );
};

export default DealDetailsCall;

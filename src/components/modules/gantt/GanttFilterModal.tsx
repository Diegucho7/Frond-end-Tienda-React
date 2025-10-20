import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'components/base/DatePicker';

const GanttFilterModal = ({
  show,
  setShow
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      id="ganttTaskFilterModal"
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      aria-labelledby="ganttFilterModalLabel"
    >
      <Modal.Header className="p-4 pb-3 align-items-start">
        <h3 id="ganttFilterModalLabel" className="mb-2 text-body-highlight">
          Filter
        </h3>
        <button onClick={handleClose} className="btn p-0 ms-auto">
          <FontAwesomeIcon icon={faTimes} className="btn-close" />
        </button>
      </Modal.Header>

      <Modal.Body className="px-4">
        <Row className="g-3">
          <Col md={6}>
            <Form.Group controlId="filterStartDate">
              <Form.Label className="form-label-header mb-2">
                Start Date
              </Form.Label>
              <DatePicker
                id="filterStartDate"
                options={{
                  defaultDate: new Date(2022, 2, 2)
                }}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="completedOn">
              <Form.Label className="form-label-header text-body-highlight mb-2">
                Completed on
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Last 7 Days</option>
                <option value="1">Last 30 Days</option>
                <option value="2">Last 90 Days</option>
                <option value="3">Last 6 Months</option>
                <option value="4">Last 12 Months</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="completionStatus">
              <Form.Label className="form-label-header text-body-highlight mb-2">
                Completion Status
              </Form.Label>
              <Form.Select>
                <option>Not Started</option>
                <option value="1">In Progress</option>
                <option value="2">Completed</option>
                <option value="3">Overdue</option>
                <option value="4">Cancelled</option>
                <option value="5">On Hold</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="filterPriority">
              <Form.Label className="form-label-header text-body-highlight mb-2">
                Priority
              </Form.Label>
              <Form.Select>
                <option>Urgent</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="lastModifiedON">
              <Form.Label className="form-label-header text-body-highlight mb-2">
                Last modified on
              </Form.Label>
              <Form.Select>
                <option>Last 7 Days</option>
                <option value="1">Last 30 Days</option>
                <option value="2">Last 90 Days</option>
                <option value="3">Last 6 Months</option>
                <option value="4">Last 12 Months</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="filterTaskType">
              <Form.Label className="form-label-header text-body-highlight mb-2">
                Task type
              </Form.Label>
              <Form.Select>
                <option>Administrative</option>
                <option value="1">Development</option>
                <option value="2">Design</option>
                <option value="3">Testing</option>
                <option value="4">Deployment</option>
                <option value="5">Research</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer className="px-4 pb-3 border-0">
        <Button
          id="ganttResetFilterBtn"
          variant="subtle-primary"
          size="sm"
          className="px-4"
        >
          <FontAwesomeIcon icon={faSync} className="me-2" />
          Reset
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="px-8"
          onClick={handleClose}
        >
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GanttFilterModal;

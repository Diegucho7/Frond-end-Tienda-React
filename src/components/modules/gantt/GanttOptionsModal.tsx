import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'components/base/DatePicker';
import classNames from 'classnames';

const GanttOptionsModal = ({
  show,
  setShow
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClose = () => {
    setShow(false);
  };

  const dependencies = [
    {
      title: 'Keep the buffer intact.',
      description: 'Preserve the intervals of time between related tasks.'
    },
    {
      title: 'Use the buffer.',
      description:
        'Unless there is a problem, use the amount of time that is required between dependent tasks.'
    },
    {
      title: 'None',
      description:
        'In the event of a conflict, disregard the interval between dependent tasks.'
    }
  ];

  return (
    <Modal
      id="ganttOptionsModal"
      size="lg"
      show={show}
      onHide={handleClose}
      dialogClassName="modal-39w"
      centered
      aria-labelledby="OptionsModal"
    >
      <Modal.Header className="p-4 pb-3 align-items-start">
        <h4 className="text-body-highlight mb-0" id="OptionsModal">
          Options
        </h4>
        <button onClick={() => setShow(false)} className="btn p-0 ms-auto">
          <FontAwesomeIcon icon={faTimes} className="btn-close" />
        </button>
      </Modal.Header>

      <Modal.Body className="p-4">
        <Form id="ganttOptionsForm">
          <Row className="g-3">
            <Col xs={12}>
              <div className="d-flex align-items-center justify-content-between">
                <Form.Label
                  htmlFor="taskOptionSelect"
                  className="form-label-header"
                >
                  Color task by
                </Form.Label>
                <Button variant="link" className="pe-0">
                  Add new
                </Button>
              </div>
              <Form.Select id="taskOptionSelect" aria-label="Color task by">
                <option>Section</option>
                <option value="1">Phoenix</option>
                <option value="2">Falcon</option>
                <option value="3">Sparrow</option>
              </Form.Select>
            </Col>

            <Col xs={12}>
              <Form.Group controlId="optionsDate">
                <Form.Label className="form-label-header text-body-highlight mb-2">
                  Baseline
                </Form.Label>
                <div className="position-relative">
                  <DatePicker
                    id="optionsDate"
                    options={{ dateFormat: 'd/m/Y' }}
                    className="form-control ps-6"
                    placeholder="dd/mm/yy"
                  />
                </div>
              </Form.Group>
            </Col>

            <Col xs={12}>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <h4 className="mb-0">Show baseline</h4>
                <div className="d-flex align-items-center">
                  <Form.Check type="radio" className="me-3 form-check">
                    <Form.Check.Input
                      id="hideBaseline"
                      name="showBaseline"
                      type="radio"
                      defaultChecked
                      className=""
                    />
                    <label htmlFor="hideBaseLine">No</label>
                  </Form.Check>

                  <Form.Check type="radio" className="form-check">
                    <Form.Check.Input
                      id="showBaseline"
                      name="showBaseline"
                      type="radio"
                      className=""
                    />
                    <label htmlFor="showBaseline">Yes</label>
                  </Form.Check>
                </div>
              </div>
            </Col>

            <Col xs={12}>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div>
                  <h4>Auto-schedule tasks</h4>
                  <p className="mb-0 fs-9">
                    Assign date to new tasks automatically
                  </p>
                </div>
                <Form.Check
                  type="switch"
                  id="isAutoScheduleTask"
                  className="mb-0 fs-6 form-check"
                />
              </div>
            </Col>

            <Col xs={12} className="mt-0">
              <hr />
              <div className="card">
                <div className="card-body p-3">
                  <Form.Check
                    type="switch"
                    id="manageDependencies"
                    className="form-check mb-3"
                    label="Manage dependencies"
                  />
                  <div className="bg-primary-subtle rounded-3 p-4">
                    {dependencies.map((item, index) => (
                      <div
                        key={index}
                        className={classNames({
                          'mb-0': dependencies.length - 1 === index,
                          'mb-4': dependencies.length - 1 !== index
                        })}
                      >
                        <div className="d-flex align-items-center">
                          <Form.Check type="checkbox" className="mb-0 me-2" />
                          <h5 className="mb-0">{item.title}</h5>
                        </div>
                        <p
                          className={`fs-9 fw-semibold text-body ms-4 ${
                            index === dependencies.length - 1 ? 'mb-0' : 'mb-4'
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} className="mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4>Weekend awareness</h4>
                  <p className="mb-0 fs-9">
                    Task dates will take the weekend into consideration and try
                    to avoid it.
                  </p>
                </div>
                <Form.Check
                  type="switch"
                  id="weekendCheck"
                  className="mb-0 fs-6"
                  label=""
                />
              </div>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer className="p-4">
        <Button
          id="optionModal"
          variant="subtle-danger"
          type="button"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button variant="phoenix-primary" type="button" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GanttOptionsModal;

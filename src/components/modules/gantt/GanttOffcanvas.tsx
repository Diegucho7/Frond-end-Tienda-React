import {
  faCheck,
  faClock,
  faLink,
  faListCheck,
  faPaperclip,
  faPlus,
  faThumbsUp,
  faXmark,
  faPencil,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import Dropzone from 'components/base/Dropzone';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { members } from 'data/users';
import { gantt, Task } from 'dhtmlx-gantt';
import { useEffect, useState } from 'react';
import { Form, Offcanvas, Row, Col, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
// declare type DateOption = Date | string | number;

const Subtasks = () => (
  <>
    <h5 className="mb-3 mt-4">Subtasks</h5>

    {[
      { id: '1', label: 'Study Dragons' },
      { id: '2', label: 'Procrastinate a bit' },
      { id: '3', label: 'Staring at the notebook for 5 mins', isLast: true }
    ].map(({ id, label, isLast }) => (
      <div
        key={id}
        className={`d-flex flex-between-center hover-actions-trigger py-3 border-top ${
          isLast ? ' border-bottom mb-3' : ''
        }`}
      >
        <Form.Check
          id={`subtask${id}`}
          className="mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto"
        >
          <Form.Check.Input
            type="checkbox"
            className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3"
          />
          <Form.Check.Label className="mb-0 fs-8">{label}</Form.Check.Label>
        </Form.Check>

        <div className="hover-actions end-0">
          <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button className="btn btn-sm text-body-tertiary px-0">
            <FontAwesomeIcon icon={faXmark} className="fs-8" />
          </button>
        </div>
      </div>
    ))}

    <Button variant="link" href="#!" className="fw-bold fs-9 p-0">
      <FontAwesomeIcon icon={faPlus} className="me-1" />
      Add subtask
    </Button>
  </>
);

const GanttOffcanvas = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState<Task>();
  const [taskTitle, setTaskTitle] = useState('title');
  const [taskStart, setTaskStart] = useState<Date | undefined>(
    new Date(2024, 4, 20)
  );
  const [taskEnd, setTaskEnd] = useState<Date | undefined>(
    new Date(2024, 4, 20)
  );
  const [taskDuration, setTaskDuration] = useState<number | undefined>(2);
  const handleClose = () => setShow(false);
  const handleCloseModal = () => setShowModal(false);

  const handleTaskUpdate = () => {
    if (task) {
      task.text = taskTitle;
      task.start_date = taskStart;
      task.duration = taskDuration;

      const endDate = new Date(taskStart || '');
      endDate.setDate(endDate.getDate() + Number(taskDuration));

      task.end_date = endDate;
      gantt.updateTask(task.id, task);
      setShow(false);
    }
  };
  const handleTaskDelete = () => {
    if (task) {
      gantt.deleteTask(task.id);
    }
    setShowModal(false);
  };

  useEffect(() => {
    const taskDoubleClickHandler = () => {
      gantt.attachEvent('onTaskDblClick', id => {
        const task = gantt?.getTask(id);
        if (task) {
          setTask(task);
        }
        setTaskTitle(task.text);
        setTaskStart(task.start_date);
        setTaskEnd(task.end_date);
        setTaskDuration(task.duration);
        setShow(true);
        return false; // Prevent default lightbox
      });
    };
    taskDoubleClickHandler();
  }, []);

  return (
    <>
      <Offcanvas
        className="gantt-offcanvas"
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header className="border-bottom">
          <div className="d-flex justify-content-between w-100">
            <Button variant="phoenix-success" className="me-1 mb-1">
              <FontAwesomeIcon
                icon={faCheck}
                className="me-2"
                transform="shrink-3"
              />
              Mark Complete
            </Button>

            <div className="d-flex gap-2">
              <Button variant="phoenix-secondary" className="btn-square px-2">
                <FontAwesomeIcon icon={faThumbsUp} />
              </Button>
              <Button variant="phoenix-secondary" className="btn-square px-2">
                <FontAwesomeIcon icon={faPaperclip} />
              </Button>
              <Button variant="phoenix-secondary" className="btn-square px-2">
                <FontAwesomeIcon icon={faListCheck} />
              </Button>
              <Button variant="phoenix-secondary" className="btn-square px-2">
                <FontAwesomeIcon icon={faLink} />
              </Button>
              <Button
                onClick={() => setShow(false)}
                variant="phoenix-secondary"
                className="btn-square px-2"
              >
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}
                placeholder="Task title"
                className="fs-8"
              />
            </Form.Group>
            <div className="mb-3">
              <h5 className="mb-3">Assignee</h5>
              <div className="d-flex">
                {members.slice(0, 5).map(member => (
                  <AvatarDropdown
                    key={member.id}
                    user={member}
                    size="m"
                    dropdownClass="d-inline-block border-0"
                    className="me-2 rounded-pill border border-light-subtle"
                  />
                ))}
                <Link
                  to="#!"
                  className="text-decoration-none text-body-secondary"
                >
                  <div className="circle-btn bg-body-secondary mx-auto">
                    <FontAwesomeIcon icon={faPlus} transform="shrink-2" />
                  </div>
                </Link>
              </div>
            </div>
            <Row className="mt-3 gy-3">
              <Col xs={6} sm={4}>
                <Form.Group controlId="editTaskStartDate">
                  <Form.Label className="form-label-header mb-2">
                    Start Date
                  </Form.Label>
                  <DatePicker
                    id="editTaskStartDate"
                    onChange={date => {
                      setTaskStart(Array.isArray(date) ? date[0] : date);
                    }}
                    options={{
                      defaultDate: taskStart
                    }}
                  />
                </Form.Group>
              </Col>

              <Col xs={6} sm={4}>
                <Form.Group controlId="EditTaskEndDate">
                  <Form.Label className="form-label-header mb-2">
                    End Date
                  </Form.Label>
                  <DatePicker
                    id="EditTaskEndDate"
                    disabled
                    onChange={date => {
                      setTaskEnd(Array.isArray(date) ? date[0] : date);
                    }}
                    options={{
                      defaultDate: taskEnd
                    }}
                  />
                </Form.Group>
              </Col>

              <Col xs={6} sm={4}>
                <Form.Group controlId="createTaskDuration">
                  <Form.Label className="form-label-header mb-2">
                    Duration{' '}
                    <span className="text-body-quaternary fw-normal">
                      (Days)
                    </span>
                  </Form.Label>
                  <div className="form-icon-container">
                    <Form.Control
                      type="number"
                      placeholder="Days"
                      className="form-icon-input ps-6"
                      value={taskDuration}
                      onChange={e => setTaskDuration(parseInt(e.target.value))}
                    />
                    <FontAwesomeIcon
                      icon={faClock}
                      className="fs-9 form-icon text-body"
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col xs={6} sm={4}>
                <Form.Group controlId="selectProject">
                  <Form.Label className="form-label-header mb-2">
                    Select Project
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option defaultValue="selected">Our new projects</option>
                    <option value="1">Phoenix</option>
                    <option value="2">Falcon</option>
                    <option value="3">Sparrow</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={6} sm={4}>
                <Form.Group controlId="selectPriority">
                  <Form.Label className="form-label-header mb-2">
                    Priority
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option defaultValue="selected">Urgent</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xs={6} sm={4}>
                <Form.Group controlId="selectStatus">
                  <Form.Label className="form-label-header mb-2">
                    Status
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option defaultValue="selected">On track</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Card className="mt-4">
              <Card.Body className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">Dependency</h4>
                  <Button variant="link" className="pe-0">
                    Add new
                  </Button>
                </div>

                <div className="bg-body p-3 mt-3 rounded">
                  {/* First Dependency Row */}
                  <Row className="gy-3">
                    <Col sm={8}>
                      <Form.Group controlId="Dependency1">
                        <h5 className="mb-3">Dependency type</h5>
                        <div className="d-sm-flex gap-3">
                          <Form.Select aria-label="Dependency type 1">
                            <option defaultValue="selected">Blocked by</option>
                            <option value="1">Blocking</option>
                            <option value="2">Paused</option>
                          </Form.Select>
                          <Form.Select
                            aria-label="Dependency type 2"
                            className="mt-2 mt-sm-0"
                          >
                            <option defaultValue="selected">
                              Start to start
                            </option>
                            <option value="1">Finish to Finish</option>
                            <option value="2">Start to Finish</option>
                            <option value="3">Finish to Start</option>
                          </Form.Select>
                        </div>
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group controlId="selectTask1">
                        <h5 className="mb-3">Select task</h5>
                        <Form.Select aria-label="Select task">
                          <option defaultValue="selected">Select Task</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <hr className="my-4" />

                  {/* Second Dependency Row */}
                  <Row className="gy-3">
                    <Col sm={8}>
                      <Form.Group controlId="dependency3">
                        <h5 className="mb-3">Dependency type</h5>
                        <div className="d-sm-flex gap-3">
                          <Form.Select aria-label="Dependency type 3">
                            <option defaultValue="selected">Blocking</option>
                            <option value="1">Blocked by</option>
                            <option value="2">Paused</option>
                          </Form.Select>
                          <Form.Select
                            aria-label="Dependency type 4"
                            className="mt-2 mt-sm-0"
                          >
                            <option defaultValue="selected">
                              Start to start
                            </option>
                            <option value="1">Finish to Finish</option>
                            <option value="2">Start to Finish</option>
                            <option value="3">Finish to Start</option>
                          </Form.Select>
                        </div>
                      </Form.Group>
                    </Col>

                    <Col sm={4}>
                      <Form.Group controlId="selectTask6">
                        <h5 className="mb-3">Select task</h5>
                        <Form.Select aria-label="Select task">
                          <option defaultValue="selected">Select task</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
            <Form.Group controlId="EditTaskNotes" className="mt-4 mb-3">
              <Form.Label className="form-label-header fw-bold text-body-highlight mb-2">
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                defaultValue="Complete the project documentation by outlining key processes, roles, and responsibilities to ensure smooth and efficient workflow execution."
              />
            </Form.Group>
            <Subtasks />
            <Dropzone
              accept={{
                'image/*': ['.png', '.gif', '.jpeg', '.jpg']
              }}
              previewWidth={140}
              multiple
              size="sm"
              className="d-block border-0 ps-0 pb-2"
            >
              <div
                className="dz-message text-body-tertiary text-opacity-85 d-flex justify-content-center align-items-center"
                data-dz-message
                style={{ height: '140px', width: '140px' }}
              >
                <FontAwesomeIcon icon={faPlus} className="fs-4" />
              </div>
            </Dropzone>
            <div className="d-flex border-top pt-4 gap-3 mt-4">
              <Button
                type="button"
                id="ganttDeleteTask"
                className="ms-auto"
                variant="phoenix-danger"
                onClick={() => {
                  setShow(false);
                  setTimeout(() => {
                    setShowModal(true);
                  }, 350);
                }}
              >
                Delete Task
              </Button>
              <Button
                type="button"
                id="ganttUpdateTask"
                variant="phoenix-primary"
                onClick={handleTaskUpdate}
              >
                Save Task
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        aria-labelledby="deleteTaskModal"
      >
        <Modal.Header className="p-4 pb-3 align-items-start">
          <h3 className="mb-2 text-body-highlight">Delete Task</h3>
          <button
            onClick={() => setShowModal(false)}
            className="btn p-1 ms-auto"
          >
            <FontAwesomeIcon icon={faTimes} className="btn-close" />
          </button>
        </Modal.Header>

        <Modal.Body className="px-4">
          <p>
            Are you sure you want to delete this task permanently? Once deleted,
            it cannot be recovered or undone.
          </p>
        </Modal.Body>

        <Modal.Footer className="px-4 pb-3">
          <Button
            id="ganttConfirmDeleteTask"
            variant="subtle-danger"
            onClick={handleTaskDelete}
          >
            Delete task
          </Button>
          <Button variant="phoenix-secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GanttOffcanvas;

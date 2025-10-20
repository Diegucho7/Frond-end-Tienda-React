import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { gantt } from 'dhtmlx-gantt';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';

const GanttAddTaskModal = ({
  show,
  setShow
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const defaultStartDate = new Date(2024, 4, 20); // May 20, 2024

  const [taskName, setTaskName] = useState('New Task');
  const [taskStart, setTaskStart] = useState<Date>(defaultStartDate);
  const [parentTask, setParentTask] = useState<string | null>(null);
  const [taskDuration, setTaskDuration] = useState(2);

  const resetForm = () => {
    setTaskName('New Task');
    setTaskStart(defaultStartDate);
    setTaskDuration(2);
    setParentTask(null);
  };

  const handleCreateTask = () => {
    if (
      taskName &&
      taskStart instanceof Date &&
      !isNaN(taskStart.getTime()) &&
      !isNaN(taskDuration)
    ) {
      const taskEnd = gantt.calculateEndDate({
        start_date: taskStart,
        duration: taskDuration
      });

      const newTask = {
        text: taskName,
        start_date: taskStart,
        end_date: taskEnd,
        duration: taskDuration,
        parent: parentTask
      };

      gantt.addTask(newTask);
      setShow(false);
      resetForm();
    } else {
      console.warn('Invalid task input', { taskStart, taskDuration });
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll('[data-gantt-add-subtask]').forEach(item => {
        item.addEventListener('click', () => {
          const parentId = item.getAttribute('id');
          setParentTask(parentId);

          gantt.createTask({
            text: '',
            duration: 3,
            parent: parentId
          });
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = gantt.attachEvent('onTaskCreated', task => {
      setShow(true);
      if (task.text) setTaskName(task.text);
      if (
        task.start_date instanceof Date &&
        !isNaN(task.start_date.getTime())
      ) {
        setTaskStart(task.start_date);
      } else {
        setTaskStart(defaultStartDate);
      }
      return false;
    });

    return () => gantt.detachEvent(id);
  }, []);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      centered
      aria-labelledby="addTaskModalLabel"
      backdrop={true}
    >
      <Modal.Header className="p-4 pb-3 align-items-start border-0 bg-body-highlight">
        <h3 className="mb-0 text-body-highlight">Create New Task</h3>
        <button onClick={() => setShow(false)} className="btn p-1 ms-auto">
          <FontAwesomeIcon icon={faTimes} className="fs-10 btn-close" />
        </button>
      </Modal.Header>

      <Modal.Body className="px-4 bg-body-highlight">
        <Form id="addTaskForm">
          <Form.Group controlId="createTaskName" className="mb-4">
            <Form.Label className="form-label-header mb-2">
              Task Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task name"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
            />
          </Form.Group>

          <Row className="g-3">
            <Col xs={7} sm={8}>
              <Form.Group controlId="createTaskStartDate">
                <Form.Label className="form-label-header mb-2">
                  Start Date
                </Form.Label>
                <DatePicker
                  id="createTaskStartDate"
                  onChange={date => {
                    if (
                      Array.isArray(date) &&
                      date[0] instanceof Date &&
                      !isNaN(date[0].getTime())
                    ) {
                      setTaskStart(date[0]);
                    } else {
                      setTaskStart(defaultStartDate);
                    }
                  }}
                  options={{
                    defaultDate: taskStart
                  }}
                />
              </Form.Group>
            </Col>

            <Col xs={5} sm={4}>
              <Form.Group controlId="createTaskDuration" className="">
                <Form.Label className="form-label-header mb-2">
                  Time Duration
                </Form.Label>
                <div className="form-icon-container">
                  <Form.Control
                    type="number"
                    placeholder="Days"
                    className="form-icon-input"
                    value={taskDuration}
                    onChange={e => {
                      const val = parseInt(e.target.value);
                      setTaskDuration(!isNaN(val) ? val : 0);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faClock}
                    className="fs-9 form-icon text-body-tertiary"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer className="border-0 px-4 pb-3 bg-body-highlight">
        <Button variant="phoenix-secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button onClick={handleCreateTask} variant="primary">
          Create New Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GanttAddTaskModal;

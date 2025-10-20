import { Row, Col, Button, FormCheck, FormSelect } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFilter, faGear } from '@fortawesome/free-solid-svg-icons';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { gantt, Task } from 'dhtmlx-gantt';
import GanttFilterModal from './GanttFilterModal';
import GanttOptionsModal from './GanttOptionsModal';
import SearchBox from 'components/common/SearchBox';
import GanttAddTaskModal from './GanttAddTaskModal';

const GanttChartActions = ({
  setCurrentView
}: {
  setCurrentView: Dispatch<SetStateAction<string>>;
}) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const [filterValue, setFilterValue] = useState<string>('');

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value || '');
  };
  const filterLogic = (task: Task, match = false): boolean => {
    gantt.eachTask(child => {
      if (filterLogic(child)) {
        match = true;
      }
    }, task.id);

    // Check if current task text matches filter
    if (
      filterValue &&
      task.text?.toLowerCase().includes(filterValue.toLowerCase())
    ) {
      match = true;
    }
    return match;
  };

  useEffect(() => {
    const eventId = gantt.attachEvent('onBeforeTaskDisplay', (id, task) => {
      if (!filterValue) {
        return true;
      }
      return filterLogic(task);
    });

    gantt.render();
    return () => {
      gantt.detachEvent(eventId);
    };
  }, [filterValue]);

  return (
    <>
      <div className="gantt-header p-4 px-lg-6 py-sm-3">
        <Row className="gx-0 gy-3 justify-content-between">
          <Col md="auto" className="d-flex align-items-center">
            <h3 className="mb-0">Gantt Chart</h3>
            <Button
              className="btn-sm ms-auto ms-md-3"
              variant="primary"
              onClick={() => setShowAddTask(true)}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span className="ms-2 d-md-none d-xl-inline">Add Task</span>
            </Button>
          </Col>

          <Col md="auto">
            <Row className="align-items-center gy-3 gx-0">
              <Col sm="auto">
                <SearchBox
                  placeholder="Search..."
                  className="gantt-search-box"
                  inputClassName='form-control-sm'
                  onChange={handleSearchInputChange}
                />
              </Col>

              <Col className="d-flex align-items-center ms-sm-auto" xs="auto">
                <div
                  className="border-start d-none d-md-inline ms-md-3"
                  style={{ height: '20px', width: '2px' }}
                />
                <FormCheck
                  type="switch"
                  id="ganttZoomToFit"
                  className="mb-0 ms-sm-3"
                >
                  <FormCheck.Input
                    onChange={e => {
                      const view = e.target.checked ? 'months' : 'days';
                      setCurrentView(view);
                    }}
                    defaultChecked
                  />
                  <FormCheck.Label className="text-nowrap">
                    Auto Fit
                  </FormCheck.Label>
                </FormCheck>

                <FormSelect
                  size="sm"
                  className="ms-3"
                  defaultValue="months"
                  onChange={e => setCurrentView(e.target.value)}
                >
                  <option value="days">Day</option>
                  <option value="weeks">Weekly</option>
                  <option value="months">Monthly</option>
                  <option value="years">Year</option>
                </FormSelect>
              </Col>

              <Col
                className="d-flex align-items-center ms-auto ms-sm-3"
                xs="auto"
              >
                <div
                  className="border-start d-none d-sm-inline me-3"
                  style={{ height: '20px', width: '2px' }}
                />
                <Button
                  variant="link"
                  size="sm"
                  className="text-body px-0 text-nowrap ms-n1"
                  onClick={() => setShowFilter(true)}
                >
                  <FontAwesomeIcon icon={faFilter} className="fs-9" />
                  <span className="d-none d-xl-inline ms-2">Filter</span>
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="text-body px-0 text-nowrap ms-3"
                  onClick={() => setShowOptions(true)}
                >
                  <FontAwesomeIcon icon={faGear} className="fs-9" />
                  <span className="d-none d-xl-inline ms-2">Options</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <GanttAddTaskModal show={showAddTask} setShow={setShowAddTask} />
      <GanttFilterModal show={showFilter} setShow={setShowFilter} />
      <GanttOptionsModal show={showOptions} setShow={setShowOptions} />
    </>
  );
};

export default GanttChartActions;

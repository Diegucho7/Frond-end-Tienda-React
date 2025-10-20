import { faPlus, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import dayjs from 'dayjs';
import { useCalendarContext } from 'providers/CalendarProvider';
import { Col, Row } from 'react-bootstrap';
import { SET_CALENDAR_STATE } from 'reducers/CalendarReducer';

const CalendarTop = () => {
  const { calendarDispatch } = useCalendarContext();

  return (
    <Row className="g-0 mb-4 align-items-center">
      <Col xs={5} md={6}>
        <h4 className="mb-0 text-body-emphasis fw-bold fs-md-6">
          <span className="calendar-day d-block d-md-inline mb-1">
            {dayjs().format('dddd')}
          </span>
          <span className="px-3 fw-thin text-body-quaternary d-none d-md-inline">
            |
          </span>
          <span className="d-inline-block">
            {' '}
            {dayjs().format('D MMM, YYYY')}
          </span>
        </h4>
      </Col>
      <Col xs={7} md={6} className="d-flex justify-content-end">
        <Button
          variant="link"
          className="text-body px-0 me-2 me-md-4"
          startIcon={<FontAwesomeIcon icon={faSync} className="fs-10 me-2" />}
        >
          <span className="d-none d-md-inline">Sync Now</span>
        </Button>
        <Button
          onClick={() => {
            calendarDispatch({
              type: SET_CALENDAR_STATE,
              payload: { openNewEventModal: true }
            });
          }}
          variant="primary"
          size="sm"
          startIcon={<FontAwesomeIcon icon={faPlus} className="fs-10 me-2" />}
        >
          Add new task
        </Button>
      </Col>
    </Row>
  );
};

export default CalendarTop;

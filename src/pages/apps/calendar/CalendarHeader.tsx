import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { CalendarView, useCalendarContext } from 'providers/CalendarProvider';
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import { SET_CALENDAR_STATE } from 'reducers/CalendarReducer';

const CalendarHeader = () => {
  const { calendarApi, title, view, calendarDispatch } = useCalendarContext();

  const handleCalendarView = (viewType: CalendarView) => {
    if (calendarApi) {
      calendarApi.changeView(viewType);
      calendarDispatch({
        type: SET_CALENDAR_STATE,
        payload: {
          view: viewType,
          title: calendarApi.view.title
        }
      });
    }
  };

  const handleCalendarUpdate = (actionType: string) => {
    if (calendarApi) {
      actionType === 'next'
        ? calendarApi.next()
        : actionType === 'prev'
        ? calendarApi.prev()
        : calendarApi.today();
      calendarDispatch({
        type: SET_CALENDAR_STATE,
        payload: {
          title: calendarApi.view.title
        }
      });
    }
  };

  return (
    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 border-y border-translucent">
      <Row className="py-3 gy-3 gx-0 justify-content-between">
        <Col xs={6} md="auto" className="order-1 d-flex align-items-center">
          <Button
            onClick={() => handleCalendarUpdate('today')}
            variant="phoenix-primary"
            size="sm"
            className="px-4"
          >
            Today
          </Button>
        </Col>
        <Col
          xs={12}
          md="auto"
          className="order-md-1 d-flex align-items-center justify-content-center"
        >
          <Button
            onClick={() => handleCalendarUpdate('prev')}
            className="icon-item icon-item-sm shadow-none text-body-emphasis p-0"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          {calendarApi && (
            <h3 className="px-3 text-body-emphasis fw-semibold mb-0">
              {title || calendarApi.view.title}
            </h3>
          )}
          <Button
            onClick={() => handleCalendarUpdate('next')}
            className="icon-item icon-item-sm shadow-none text-body-emphasis p-0"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </Col>
        <Col xs={6} md="auto" className="order-1 d-flex justify-content-end">
          <ButtonGroup size="sm">
            <Button
              onClick={() => handleCalendarView('dayGridMonth')}
              variant="phoenix-secondary"
              className={classNames({
                active: view === 'dayGridMonth'
              })}
            >
              Month
            </Button>
            <Button
              onClick={() => handleCalendarView('timeGridWeek')}
              variant="phoenix-secondary"
              className={classNames({
                active: view === 'timeGridWeek'
              })}
            >
              Week
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CalendarHeader;

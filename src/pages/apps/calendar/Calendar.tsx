import { EventClickArg } from '@fullcalendar/core';
import CalendarAddNewEventModal from 'components/modals/CalendarAddNewEventModal';
import CalendarProvider, {
  useCalendarContext
} from 'providers/CalendarProvider';
import CalendarTop from './CalendarTop';
import CalendarHeader from './CalendarHeader';
import CalendarEventModal from 'components/modals/CalendarEventModal';
import { HANDLE_SELECT, SET_CALENDAR_STATE } from 'reducers/CalendarReducer';
import FullCalendar from 'components/base/FullCalendar';
import events from 'data/calendarEvents';

const index = () => {
  return (
    <CalendarProvider>
      <Calendar />
    </CalendarProvider>
  );
};

const Calendar = () => {
  const { calendarDispatch } = useCalendarContext();

  const handleEventClick = (info: EventClickArg) => {
    if (info.event.url) {
      window.open(info.event.url);
      info.jsEvent.preventDefault();
    } else {
      calendarDispatch({
        type: SET_CALENDAR_STATE,
        payload: {
          selectedEvent: info.event
        }
      });
    }
  };

  return (
    <div>
      <CalendarTop />
      <CalendarHeader />
      <div className="mt-6 mb-9">
        <FullCalendar
          height={800}
          select={info => {
            calendarDispatch({
              type: HANDLE_SELECT,
              payload: info
            });
          }}
          events={events}
          eventClick={handleEventClick}
        />
      </div>
      <CalendarEventModal />
      <CalendarAddNewEventModal />
    </div>
  );
};

export default index;

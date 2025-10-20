import FullCalendar from 'components/base/FullCalendar';
import CalendarProvider from 'providers/CalendarProvider';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import { Link } from 'react-router';

const exampleCode = `
import FullCalendar from 'components/base/FullCalendar';
import CalendarProvider from 'providers/CalendarProvider';

function Calendar() {
  return (
    <CalendarProvider>
      <FullCalendar
        height={800}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        buttonText={{
          month: 'Month',
          week: 'Week',
          day: 'Day',
          today: 'Today'
        }}
      />
    </CalendarProvider>
  );
};`;

const CalendarExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Calendar"
        description={`${
          import.meta.env.VITE_TITLE
        }-React uses FullCalendar for calendar component. FullCalendar seamlessly integrates with the React JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar’s standard API.`}
        link={{
          text: 'FullCalendar Documentation',
          url: 'https://fullcalendar.io/docs/react'
        }}
      />

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Calendar Example">
          <p className="mb-0">
            Basic example of FullCalendar with default options in Phoenix. You
            can also pass any{' '}
            <a
              href="https://fullcalendar.io/docs#toc"
              target="_blank"
              rel="noopener noreferrer"
            >
              FullCalendar props
            </a>{' '}
            to the FullCalendar component.{' '}
            <Link to="/apps/calendar" target="_blank">
              See advanced implementation of fullCalendar
            </Link>
          </p>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body
          code={exampleCode}
          scope={{ FullCalendar, CalendarProvider }}
        />
      </PhoenixDocCard>
    </div>
  );
};

export default CalendarExample;

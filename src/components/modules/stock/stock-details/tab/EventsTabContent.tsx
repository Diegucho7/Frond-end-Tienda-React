import SearchBox from 'components/common/SearchBox';
import { EventLists } from 'data/stock/stockDetails';
import { Col, Pagination, Row } from 'react-bootstrap';
import UpcomingEventCard from 'components/cards/UpcomingEventCard';
import EventsLaterThisWeekCard from 'components/cards/EventsLaterThisWeekCard';
import DatePicker from 'components/base/DatePicker';
import PreviousEventItem from './PreviousEventItem';
import StockDetailsPagination from 'components/common/StockDetailsPagination';

const EventsTabContent = ({ eventLists }: { eventLists: EventLists }) => {
  return (
    <>
      <Row className="g-3 g-md-5 flex-between-center mb-3">
        <Col xs="auto">
          <h4 className="fw-bolder">Upcoming Events</h4>
          <p className="mb-0 text-body-tertiary">
            Brief summary of all projects
          </p>
        </Col>
        <Col xs={12} sm="auto">
          <SearchBox placeholder="Search events" className="w-100" />
        </Col>
      </Row>
      <div>
        {eventLists.upcomingEvents.map(event => (
          <UpcomingEventCard key={event.id} upcomingEventItem={event} />
        ))}
      </div>
      <h4 className="mb-3">Later This Week</h4>
      <Row className="g-4 mb-4">
        {eventLists.eventsLaterThisWeek.map(event => (
          <Col xxl={6} key={event.id}>
            <EventsLaterThisWeekCard eventsLaterThisWeek={event} />
          </Col>
        ))}
      </Row>
      <Row className="g-3 g-lg-5 flex-between-center mb-3">
        <Col xs={6}>
          <h4 className="mb-0">Previous Events</h4>
        </Col>
        <Col xs={6} className="d-flex flex-end-center">
          <DatePicker
            placeholder="dd/mm/yyyy"
            className="form-control-sm pe-5"
            style={{ maxWidth: 180 }}
          />
        </Col>
      </Row>
      <Row className="g-4 gx-xxl-8 mb-3">
        {eventLists.previousEvents.map(event => (
          <Col xs={12} sm={6} key={event.id}>
            <PreviousEventItem previousEvent={event} />
          </Col>
        ))}
      </Row>
      <StockDetailsPagination currentPage={1} pageSize={8} totalItem={32}>
        {[1, 2, 3, 4].map((item, index) => (
          <Pagination.Item key={index} active={index === 0}>
            {item}
          </Pagination.Item>
        ))}
      </StockDetailsPagination>
    </>
  );
};

export default EventsTabContent;

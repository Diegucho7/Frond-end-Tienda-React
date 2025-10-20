import { useMemo, useState } from 'react';
import { EventsLaterThisWeek } from 'data/stock/stockDetails';
import { Card, Dropdown } from 'react-bootstrap';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FeatherIcon from 'feather-icons-react';
import Avatar from 'components/base/Avatar';
import { Link } from 'react-router';
import { numberFormat } from 'helpers/utils';
import EventOffcanvas from 'components/modules/stock/stock-details/tab/EventOffcanvas';
import { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

dayjs.extend(customParseFormat);

const EventsLaterThisWeekCard = ({
  eventsLaterThisWeek
}: {
  eventsLaterThisWeek: EventsLaterThisWeek;
}) => {
  const [open, setOpen] = useState(false);
  const startDate = useMemo(() => {
    return dayjs(eventsLaterThisWeek.schedule.startDate, 'DD/MM/YYYY');
  }, [eventsLaterThisWeek]);
  const endDate = useMemo(() => {
    return (
      eventsLaterThisWeek.schedule.endDate &&
      dayjs(eventsLaterThisWeek.schedule.endDate, 'DD/MM/YYYY')
    );
  }, [eventsLaterThisWeek]);

  return (
    <>
      <Card>
        <Card.Body className="position-relative">
          <div className="d-sm-flex gap-3">
            <div className="custom-calendar-container">
              <div className="position-relative custom-calender border rounded d-flex flex-column flex-center mb-3 mb-sm-0">
                <h5 className="fw-bolder lh-sm text-body-tertiary">
                  {startDate.format('DD')}
                  {endDate && `-${endDate.format('DD')}`}
                </h5>
                <p className="mb-0 fs-10 text-body-tertiary fw-semibold">
                  {startDate.format('MMM')}, {startDate.format('YYYY')}
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="mb-2 cursor-pointer" onClick={() => setOpen(true)}>
                {eventsLaterThisWeek.title}
              </h5>
              <div className="d-sm-flex mb-3 align-items-center">
                <h6 className="text-body-tertiary fw-semibold mb-2 mb-sm-0 border-end-sm pe-sm-3 me-sm-3 text-nowrap">
                  <FeatherIcon
                    icon="clock"
                    className="me-2"
                    style={{ width: 16, height: 16 }}
                  />
                  <span>
                    {eventsLaterThisWeek.schedule.startTime} -{' '}
                    {eventsLaterThisWeek.schedule.endTime}{' '}
                    {eventsLaterThisWeek.schedule.displayTimeZone}
                  </span>
                </h6>
                <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                  <FeatherIcon
                    icon="map-pin"
                    className="me-2"
                    style={{ width: 16, height: 16 }}
                  />
                  <span>{eventsLaterThisWeek.location}</span>
                </h6>
              </div>
              <div className="d-flex align-items-center gap-1">
                <Avatar.Group size="s" className="align-items-center">
                  {eventsLaterThisWeek.interestedToGoing.map(people => (
                    <Avatar src={people.image} key={people.id} size="s" />
                  ))}{' '}
                </Avatar.Group>
                <Link
                  to="#!"
                  className="fs-10 ms-1 fw-semibold text-body-quaternary"
                >
                  +
                  {eventsLaterThisWeek.totalUserCount -
                    eventsLaterThisWeek.interestedToGoing.length}{' '}
                  people going
                </Link>
                <ul className="ps-3 mb-0 text-body-quaternary fs-10">
                  <li>
                    {numberFormat(eventsLaterThisWeek.interested, 'compact', {
                      compactDisplay: 'short'
                    }).toLowerCase()}{' '}
                    people interested
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="position-absolute top-0 end-0 mt-4 me-4">
            <RevealDropdownTrigger>
              <Dropdown>
                <Dropdown.Toggle variant="" size="sm" className="p-0">
                  <FontAwesomeIcon icon={faEllipsisH} />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="py-2">
                  <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                  <Dropdown.Item eventKey="2" className="text-danger">
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">Download</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Report abuse</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </RevealDropdownTrigger>
          </div>
        </Card.Body>
      </Card>
      <EventOffcanvas open={open} setOpen={setOpen} />
    </>
  );
};

export default EventsLaterThisWeekCard;

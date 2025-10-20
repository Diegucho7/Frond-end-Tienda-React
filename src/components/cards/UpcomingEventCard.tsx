import { useMemo, useState } from 'react';
import Badge from 'components/base/Badge';
import { UpcomingEventsItem } from 'data/stock/stockDetails';
import { Card, Col, Row } from 'react-bootstrap';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FeatherIcon from 'feather-icons-react';
import Avatar from 'components/base/Avatar';
import { Link } from 'react-router';
import { numberFormat } from 'helpers/utils';
import Button from 'components/base/Button';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import EventOffcanvas from 'components/modules/stock/stock-details/tab/EventOffcanvas';

dayjs.extend(customParseFormat);

const UpcomingEventCard = ({
  upcomingEventItem
}: {
  upcomingEventItem: UpcomingEventsItem;
}) => {
  const [open, setOpen] = useState(false);
  const startDate = useMemo(() => {
    return dayjs(upcomingEventItem.scheduled.startDate, 'DD/MM/YYYY');
  }, [upcomingEventItem]);
  const endDate = useMemo(() => {
    return (
      upcomingEventItem.scheduled.endDate &&
      dayjs(upcomingEventItem.scheduled.endDate, 'DD/MM/YYYY')
    );
  }, [upcomingEventItem]);

  return (
    <>
      <Card className="mb-4">
        <Card.Body>
          <Row className="g-0">
            <Col xs={12} sm={3} className="me-sm-4 custom-calendar-container">
              <div className="position-relative custom-calender border rounded d-flex flex-column flex-center mb-4 mb-sm-0 px-0">
                <h5 className="fw-bolder lh-sm text-body-tertiary">
                  {startDate.format('D')}{' '}
                  {endDate && `- ${endDate.format('D')}`}
                </h5>
                <p className="mb-0 fs-10 text-body-tertiary fw-semibold">
                  {startDate.format('MMM')}, {startDate.format('YYYY')}
                </p>
              </div>
            </Col>
            <Col xs={12} sm={9} className="flex-1">
              <Row className="g-4">
                <Col xs={12} xxl={9}>
                  <div className="d-xxl-flex align-items-center gap-2 mb-2">
                    <h5
                      className="mb-2 mb-xxl-0 cursor-pointer"
                      onClick={() => setOpen(true)}
                    >
                      {upcomingEventItem.title}
                    </h5>
                    <Badge
                      variant="phoenix"
                      bg={
                        upcomingEventItem.status === 'interested'
                          ? 'info'
                          : 'warning'
                      }
                      className="fs-10"
                    >
                      {upcomingEventItem.status}
                    </Badge>
                  </div>
                  <div className="d-sm-flex mb-3 align-items-center">
                    <h6 className="text-body-tertiary fw-semibold mb-2 mb-sm-0 border-end-sm pe-sm-3 me-sm-3 text-nowrap">
                      <FeatherIcon
                        icon="clock"
                        className="me-2"
                        style={{ width: 16, height: 16 }}
                      />
                      <span>
                        {upcomingEventItem.scheduled.startTime} -{' '}
                        {upcomingEventItem.scheduled.endTime}{' '}
                        {upcomingEventItem.scheduled.displayTimeZone}
                      </span>
                    </h6>
                    <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                      <FeatherIcon
                        icon="map-pin"
                        className="me-2"
                        style={{ width: 16, height: 16 }}
                      />
                      <span>{upcomingEventItem.location}</span>
                    </h6>
                  </div>
                  <p className="fs-9 text-body-tertiary">
                    {upcomingEventItem.description}
                  </p>
                  <div className="d-flex align-items-center gap-1">
                    <Avatar.Group size="s" className="align-items-center">
                      {upcomingEventItem.interestedToGoing.map(people => (
                        <Avatar src={people.image} key={people.id} size="s" />
                      ))}
                      <Link
                        to="#!"
                        className="fs-10 ms-1 fw-semibold text-body-quaternary"
                      >
                        +
                        {upcomingEventItem.totalUserCount -
                          upcomingEventItem.interestedToGoing.length}{' '}
                        people going
                      </Link>
                    </Avatar.Group>
                    <ul className="ps-3 mb-0 text-body-quaternary fs-10">
                      <li>
                        {numberFormat(upcomingEventItem.interested, 'compact', {
                          compactDisplay: 'short'
                        }).toLowerCase()}{' '}
                        people interested
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xxl={3}>
                  <Button
                    className={classNames('me-2 me-xxl-0 mb-xxl-2 w-xxl-100', {
                      'btn-primary': upcomingEventItem.status === 'interested',
                      'btn-phoenix-primary':
                        upcomingEventItem.status === 'featured'
                    })}
                  >
                    <FontAwesomeIcon
                      icon={
                        upcomingEventItem.status === 'interested'
                          ? faCircleCheck
                          : faBookmark
                      }
                      className="me-2"
                    />
                    Interested
                  </Button>
                  <Button variant="phoenix-primary" className="w-xxl-100">
                    <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                    Going
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <EventOffcanvas open={open} setOpen={setOpen} />
    </>
  );
};

export default UpcomingEventCard;

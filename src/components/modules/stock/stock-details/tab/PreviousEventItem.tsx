import { useMemo } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import { PreviousEvent } from 'data/stock/stockDetails';
import { Dropdown } from 'react-bootstrap';
import { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

dayjs.extend(customParseFormat);

const PreviousEventItem = ({
  previousEvent
}: {
  previousEvent: PreviousEvent;
}) => {
  const startDate = useMemo(() => {
    return dayjs(previousEvent.schedule.startDate, 'DD/MM/YYYY');
  }, [previousEvent]);

  const endDate = useMemo(() => {
    return (
      previousEvent.schedule.endDate &&
      dayjs(previousEvent.schedule.endDate, 'DD/MM/YYYY')
    );
  }, [previousEvent]);

  return (
    <div className={classNames('border-dashed py-4', previousEvent.className)}>
      <h6 className="text-body-quaternary fs-10">
        {startDate.format('DD')}, {startDate.format('MMM')}{' '}
        {startDate.format('YY')} - {endDate && endDate.format('DD')},{' '}
        {endDate && endDate.format('MMM')} {endDate && endDate.format('YY')}
      </h6>
      <div className="d-flex flex-between-center gap-3 mb-2">
        <h5 className="mb-0 line-clamp-1">{previousEvent.title}</h5>
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
      <p className="fs-10 text-body-quaternary mb-3">
        {previousEvent.interestedToGoing} people going
      </p>
      <div className="d-xxl-flex mb-3 align-items-center">
        <h6 className="text-body-tertiary fw-semibold mb-2 mb-xxl-0 border-end-xxl border-end-solid-xxl pe-xxl-3 me-xxl-3 text-nowrap">
          <FeatherIcon
            icon="clock"
            className="me-2"
            style={{ width: 16, height: 16 }}
          />
          <span>
            {previousEvent.schedule.startTime} -{' '}
            {previousEvent.schedule.endTime}{' '}
            {previousEvent.schedule.displayTimeZone}
          </span>
        </h6>
        <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
          <FeatherIcon
            icon="map-pin"
            className="me-2"
            style={{ width: 16, height: 16 }}
          />
          <span>{previousEvent.location}</span>
        </h6>
      </div>
    </div>
  );
};

export default PreviousEventItem;

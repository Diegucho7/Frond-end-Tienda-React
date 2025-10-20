import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import MeetingCard from 'components/cards/MeetingCard';
import SearchBox from 'components/common/SearchBox';
import { Meeting } from 'data/crm/dealDetailsData';
import { Col, Row } from 'react-bootstrap';

const DealDetailsMeeting = ({ meetings }: { meetings: Meeting[] }) => {
  return (
    <>
      <h2 className="mb-4">Meeting</h2>
      <Row className="align-items-center g-2 flex-wrap mb-3">
        <Col sm="auto">
          <SearchBox placeholder="Search meeting" className="mb-2 mb-sm-0" />
        </Col>
        <Col xs="auto" className="flex-md-grow-1">
          <div className="d-flex">
            <p className="mb-0 fs-9 text-body-tertiary fw-bold">
              <FontAwesomeIcon
                icon={faFilter}
                className="me-1 fw-extra-bold fs-10"
              />
              23 tasks
            </p>
            <Button
              variant="link"
              className="p-0 ms-3 fs-9 text-primary fw-bold"
              startIcon={<FontAwesomeIcon icon={faSort} className="fs-10" />}
            >
              Sorting
            </Button>
          </div>
        </Col>
        <Col xs="auto">
          <Button
            variant="primary"
            startIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Add Meeting
          </Button>
        </Col>
      </Row>
      <Row className="g-3">
        {meetings.map(meeting => (
          <Col xxl={6} key={meeting.id}>
            <MeetingCard meeting={meeting} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DealDetailsMeeting;

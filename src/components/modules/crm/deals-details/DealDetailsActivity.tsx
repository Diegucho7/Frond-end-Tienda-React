import Button from 'components/base/Button';
import SearchBox from 'components/common/SearchBox';
import DealDetailsTimeline from 'components/timelines/DealDetailsTimeline';
import { Activity } from 'data/crm/dealDetailsData';
import { Col, Row } from 'react-bootstrap';

const DealDetailsActivity = ({ activities }: { activities: Activity[] }) => {
  return (
    <>
      <h2 className="mb-4">Activity</h2>
      <Row className="align-items-center g-3 justify-content-between">
        <Col sm="auto">
          <SearchBox placeholder="Search Activity" />
        </Col>
        <Col xs="auto">
          <Button variant="phoenix-primary" className="px-6">
            Add Activity
          </Button>
        </Col>
      </Row>
      <DealDetailsTimeline activities={activities} />
    </>
  );
};

export default DealDetailsActivity;

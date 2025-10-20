import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import IssuesDiscoveredChart from 'components/charts/e-charts/IssuesDiscoveredChart';
import { Col, Row } from 'react-bootstrap';

const issueStats = [
  { type: 'Product design', value: 78, bg: 'info-light' },
  { type: 'Development', value: 63, bg: 'warning-light' },
  { type: 'QA & Testing', value: 56, bg: 'danger-light' },
  { type: 'Customer queries', value: 36, bg: 'success-light' },
  { type: 'R & D', value: 24, bg: 'primary' }
];

const IssuesDiscovered = () => {
  return (
    <Row className="g-3 mb-3">
      <Col xs={12} md={6}>
        <h3 className="text-body-emphasis text-nowrap">Issues Discovered</h3>
        <p className="text-body-tertiary mb-md-7">
          Newly found and yet to be solved
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 fw-bold">Issue type </p>
          <p className="mb-0 fs-9">
            Total count <span className="fw-bold">257</span>
          </p>
        </div>
        <hr className="bg-body-secondary mb-2 mt-2" />

        {issueStats.map(issue => (
          <div className="d-flex align-items-center mb-1" key={issue.type}>
            <span
              className={`d-inline-block bg-${issue.bg} bullet-item me-2`}
            />
            <p className="mb-0 fw-semibold text-body lh-sm flex-1">
              {issue.type}
            </p>
            <h5 className="mb-0 text-body">{issue.value}</h5>
          </div>
        ))}
        <Button variant="outline-primary" className="mt-5">
          See Details
          <FontAwesomeIcon icon={faAngleRight} className="ms-2 fs-10" />
        </Button>
      </Col>
      <Col xs={12} md={6}>
        <div className="position-relative mb-sm-4 mb-xl-0">
          <IssuesDiscoveredChart />
        </div>
      </Col>
    </Row>
  );
};

export default IssuesDiscovered;

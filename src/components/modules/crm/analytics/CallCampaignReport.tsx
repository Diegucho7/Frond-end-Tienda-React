import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnalyticsCallCampaignChart from 'components/charts/e-charts/AnalyticsCallCampaignChart';
import { Col, Row } from 'react-bootstrap';

const CallCampaignReport = () => {
  return (
    <>
      <Row className="justify-content-between mb-4">
        <Col xs={12}>
          <h3>Call Campaign Reports</h3>
          <p className="text-body-tertiary">All call campaigns succeeded.</p>
        </Col>
        <Col xs={12}>
          <div className="d-flex">
            <FontAwesomeIcon icon={faCircle} className="text-primary me-2" />
            <h6 className="mb-0 me-3 lh-base">Campaign</h6>
          </div>
        </Col>
      </Row>
      <AnalyticsCallCampaignChart style={{ height: '290px', width: '100%' }} />
    </>
  );
};

export default CallCampaignReport;

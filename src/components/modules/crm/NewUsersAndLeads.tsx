import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Badge from 'components/base/Badge';
import BasicLineChart from 'components/charts/e-charts/BasicLineChart';
import { getPastDates } from 'helpers/utils';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const NewUsersAndLeads = () => {
  return (
    <>
      <div className="mb-3">
        <h3>New Users &amp; Leads</h3>
        <p className="text-body-tertiary mb-0">
          Payment received across all channels
        </p>
      </div>
      <Row className="g-6">
        <Col md={6} className="mb-2 mb-sm-0">
          <div className="d-flex gap-2 align-items-center">
            <FeatherIcon icon="users" className="text-info" />{' '}
            <h4 className="text-body-tertiary mb-0">
              New Users : <span className="text-body-emphasis">42</span>
            </h4>
            <Badge
              bg="success"
              variant="phoenix"
              iconPosition="end"
              className="fs-10"
            >
              +24.5%
              <FontAwesomeIcon
                icon={faCaretUp}
                className="d-inline-block lh-1 ms-1"
                transform="down-2"
              />
            </Badge>
          </div>
          <div className="pb-0 pt-4">
            <BasicLineChart
              data={[
                220, 220, 150, 150, 150, 250, 250, 400, 400, 400, 300, 300
              ]}
              dates={getPastDates(12)}
              style={{ height: 110, width: '100%' }}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="d-flex gap-2 align-items-center">
            <FeatherIcon icon="zap" className="text-primary" />{' '}
            <h4 className="text-body-tertiary mb-0">
              New Leads : <span className="text-body-emphasis">45</span>
            </h4>
            <Badge
              bg="success"
              variant="phoenix"
              iconPosition="end"
              className="fs-10"
            >
              +30.5%
              <FontAwesomeIcon
                icon={faCaretUp}
                className="d-inline-block lh-1 ms-1"
                transform="down-2"
              />
            </Badge>
          </div>
          <div className="pb-0 pt-4">
            <BasicLineChart
              data={[100, 100, 260, 250, 270, 160, 190, 180, 260, 200, 220]}
              dates={getPastDates(11)}
              style={{ height: 110, width: '100%' }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default NewUsersAndLeads;

import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import MarketingCampaignChart from 'components/charts/e-charts/MarketingCampaignChart';
import { Col, Form, Row } from 'react-bootstrap';

const MarketingCampaign = () => {
  return (
    <>
      <Row className="align-itms-center mb-5 mb-sm-2 mb-md-4">
        <Col sm={8} md={12} lg={8} xl={12} xxl={8} className="mb-xl-2 mb-xxl-0">
          <h3>Marketing Campaign Report</h3>
          <p className="text-body-tertiary mb-lg-0">
            According to the sales data.
          </p>
        </Col>
        <Col sm={4} md={12} lg={4} xl={12} xxl={4}>
          <Form.Select>
            <option value="ally-aagaard">Ally Aagaard</option>
            <option value="alec-haag">Alec Haag</option>
            <option value="aagaard">Aagaard</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="g-3 align-items-center">
        <Col sm={8} md={12} lg={8} xl={12} xxl={8}>
          <MarketingCampaignChart style={{ height: '320px', width: '100%' }} />
        </Col>
        <Col
          sm={4}
          md={12}
          lg={4}
          xl={12}
          xxl={4}
          className="d-flex justify-content-end-xxl mt-0"
        >
          <div className="d-flex flex-1 justify-content-center d-sm-block d-md-flex d-lg-block d-xl-flex d-xxl-block">
            <div className="mb-4 me-6 me-sm-0 me-md-6 me-lg-0 me-xl-6 me-xxl-0">
              <div className="d-flex align-items-center mb-2">
                <h4 className="mb-0">15,000</h4>
                <Badge variant="phoenix" bg="primary" className="ms-2">
                  +30.63%
                </Badge>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-warning-light me-2"
                />
                <h6 className="mb-0">Online Campaign</h6>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center mb-2">
                <h4 className="mb-0">5,000</h4>
                <Badge variant="phoenix" bg="danger" className="ms-2">
                  +13.52%
                </Badge>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-primary-light me-2"
                />
                <h6 className="mb-0">Offline Campaign</h6>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MarketingCampaign;

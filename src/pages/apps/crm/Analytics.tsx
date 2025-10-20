import DatePicker from 'components/base/DatePicker';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import CallCampaignReport from 'components/modules/crm/analytics/CallCampaignReport';
import EmailCampaign from 'components/modules/crm/analytics/EmailCampaign';
import MarketingCampaign from 'components/modules/crm/analytics/MarketingCampaign';
import SalesTrends from 'components/modules/crm/analytics/SalesTrends';
import AnalyticsStats from 'components/stats/AnalyticsStats';
import { defaultBreadcrumbItems } from 'data/commonData';
import { stats } from 'data/crm/stats';
import { Col, Row } from 'react-bootstrap';

const Analytics = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-6">
        <Row className="align-items-center justify-content-between g-3 mb-6">
          <Col md="auto">
            <h2 className="mb-0">Analytics</h2>
          </Col>
          <Col md="auto">
            <DatePicker defaultValue="Mar 1, 2022" />
          </Col>
        </Row>
        <div className="px-3 mb-6">
          <AnalyticsStats stats={stats} />
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 pb-3 border-y">
          <Row className="gx-6">
            <Col
              md={6}
              lg={12}
              xl={6}
              className="mb-5 mb-md-3 mb-lg-5 mb-xl-2 mb-xxl-3"
            >
              <EmailCampaign />
            </Col>
            <Col md={6} lg={12} xl={6} className="mb-1 mb-sm-0">
              <MarketingCampaign />
            </Col>
          </Row>
        </div>
        <Row className="pt-6 gy-7 gx-6">
          <Col md={6}>
            <SalesTrends />
          </Col>
          <Col md={6}>
            <CallCampaignReport />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Analytics;

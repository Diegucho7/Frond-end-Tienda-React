import { faCalendar, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import CrmStatCard from 'components/cards/CrmStatCard';
import ContactsCreatedChart from 'components/charts/e-charts/ContactsCreatedChart';
import LeadSources from 'components/list-items/LeadSources';
import AdClicks from 'components/modules/crm/AdClicks';
import ContactsBySource from 'components/modules/crm/ContactsBySource';
import DealForecast from 'components/modules/crm/DealForecast';
import LeadConversion from 'components/modules/crm/LeadConversion';
import NewUsersAndLeads from 'components/modules/crm/NewUsersAndLeads';
import RevenueTarget from 'components/modules/crm/RevenueTarget';
import { Col, Row } from 'react-bootstrap';

const Crm = () => {
  return (
    <>
      <Row className="mb-4 gy-3 justify-content-between">
        <Col xxl={6}>
          <h2 className="mb-2 text-body-emphasis">CRM Dashboard</h2>
          <h5 className="text-body-tertiary fw-semibold mb-4">
            Check your business growth in one place
          </h5>
          <Row className="g-3 mb-3">
            <Col sm={6} md={4} xl={3} xxl={4}>
              <CrmStatCard
                icon={faPhoneAlt}
                color="primary"
                label="Outgoing call"
                value={3}
                title="Leads Today"
                badgeLabel="+24.5%"
                badgeBg="success"
                footerText="Than yesterday"
              />
            </Col>
            <Col sm={6} md={4} xl={3} xxl={4}>
              <CrmStatCard
                icon={faCalendar}
                color="info"
                label="Outgoing meeting"
                value={12}
                title="This Week"
                badgeLabel="+20.5%"
                badgeBg="warning"
                footerText="Than last week"
              />
            </Col>
            <Col md={4} xl={6} xxl={4}>
              <div className="border-bottom">
                <h5 className="pb-4 border-bottom">Top 5 Lead Sources</h5>
                <LeadSources />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xxl={6} className="mb-6">
          <h3>Contacts Created</h3>
          <p className="text-body-tertiary mb-1">
            Payment received across all channels
          </p>
          <ContactsCreatedChart style={{ height: 270, width: '100%' }} />
        </Col>
        <Col xs={12} xxl={6} className="mb-3 mb-sm-0">
          <ContactsBySource />
        </Col>
        <Col xs={12} xxl={6} className="mb-8">
          <NewUsersAndLeads />
        </Col>
        <Col xs={12} xxl={6}>
          <AdClicks />
        </Col>
        <Col xs={12} xxl={6} className="mb-6 gy-0 gy-xxl-3">
          <DealForecast />
        </Col>
      </Row>
      <div className="mx-lg-n4">
        <Row className="g-3 mb-9 mt-n7">
          <Col xs={12} xl={5}>
            <LeadConversion />
          </Col>
          <Col xs={12} xl={7}>
            <RevenueTarget />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Crm;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import AboutLeadCard from 'components/cards/AboutLeadCard';
import LeadAddressCard from 'components/cards/LeadAddressCard';
import LeadProfileCard from 'components/cards/LeadProfileCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import LeadDeals from 'components/modules/crm/LeadDeals';
import LeadEmails from 'components/modules/crm/LeadEmails';
import Tasks from 'components/modules/crm/Tasks';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Dropdown, Row } from 'react-bootstrap';
import LeadAttachments from 'components/modules/crm/LeadAttachments';
import LeadDetailsNavbar from 'components/modules/crm/LeadDetailsNavbar';
import { useState } from 'react';
import LeadDetailsOffcanvas from 'components/modules/crm/LeadDetailsOffcanvas';
import {
  faBars,
  faEllipsis,
  faEnvelope,
  faThumbtack
} from '@fortawesome/free-solid-svg-icons';
import ScrollSpy from 'components/base/ScrollSpy';

const LeadDetails = () => {
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="pb-9">
        <Row className="align-items-center justify-content-between g-3 mb-3">
          <Col xs={12} md="auto">
            <h2 className="mb-0">Lead details</h2>
          </Col>
          <Col xs={12} md="auto">
            <div className="d-flex gap-2">
              <div className="flex-1 d-md-none">
                <Button
                  variant="phoenix-secondary"
                  className="px-3 text-body-tertiary"
                  onClick={() => setOpenOffcanvas(true)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </Button>
              </div>
              <Button
                variant="primary"
                startIcon={
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                }
              >
                Send an email
              </Button>
              <Button variant="phoenix-secondary" className="px-3 px-sm-5">
                <FontAwesomeIcon icon={faThumbtack} className="me-0 me-sm-2" />
                <span className="d-none d-sm-inline">Shortlist</span>
              </Button>
              <Dropdown>
                <Dropdown.Toggle
                  variant="phoenix-secondary"
                  className="dropdown-caret-none px-3"
                >
                  <FontAwesomeIcon icon={faEllipsis} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#!">View Profile</Dropdown.Item>
                  <Dropdown.Item href="#!">Report</Dropdown.Item>
                  <Dropdown.Item href="#!">Manage notifications</Dropdown.Item>
                  <Dropdown.Item href="#!" className="text-danger">
                    Delete Lead
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>

        <Row className="g-0 g-md-4 g-xl-6">
          <Col md={5} xl={4} className="d-none d-md-block">
            <div className="sticky-leads-sidebar">
              <div className="lead-details-offcanvas bg-body scrollbar">
                <div className="d-flex justify-content-between align-items-center mb-2 d-md-none">
                  <h3 className="mb-0">Lead Details</h3>
                </div>
                <LeadProfileCard className="mb-3" />
                <AboutLeadCard className="mb-3" />
                <LeadAddressCard />
              </div>
            </div>
          </Col>
          <Col md={7} xl={8}>
            <div className="lead-details-container">
              <ScrollSpy>
                <LeadDetailsNavbar />

                <ScrollSpy.Content
                  id="tasks"
                  className="lead-details-scrollspy mb-8"
                >
                  <Tasks />
                </ScrollSpy.Content>

                <ScrollSpy.Content
                  id="deals"
                  className="lead-details-scrollspy mb-8"
                >
                  <LeadDeals />
                </ScrollSpy.Content>

                <ScrollSpy.Content
                  id="emails"
                  className="lead-details-scrollspy mb-8"
                >
                  <LeadEmails />
                </ScrollSpy.Content>

                <ScrollSpy.Content
                  id="attachments"
                  className="lead-details-scrollspy"
                >
                  <LeadAttachments />
                </ScrollSpy.Content>
              </ScrollSpy>
            </div>
          </Col>
        </Row>
      </div>
      <LeadDetailsOffcanvas open={openOffcanvas} setOpen={setOpenOffcanvas} />
    </div>
  );
};

export default LeadDetails;

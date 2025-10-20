import {
  faAdd,
  faMattressPillow,
  faPrint
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Row } from 'react-bootstrap';
import PortfolioMainContent from 'components/modules/stock/portfolio/PortfolioMainContent';
import PortfolioSidebarContent from 'components/modules/stock/portfolio/PortfolioSidebarContent';
import { portfolioItems } from 'data/stock/portfolio';
import { useState } from 'react';
import PortfolioOffcanvas from 'components/modules/stock/portfolio/PortfolioOffcanvas';

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
      <Row className="g-3 g-lg-5 mb-3 flex-between-center">
        <Col xs="auto">
          <h2 className="mb-0">My Portfolio</h2>
        </Col>
        <Col xs="auto">
          <Button variant="phoenix-secondary" className="me-2">
            Create new Portfolio{' '}
            <FontAwesomeIcon icon={faAdd} className="ms-2" />
          </Button>
          <Button variant="phoenix-secondary" size="sm" className="px-md-4">
            <FontAwesomeIcon icon={faPrint} />
            <span className="d-none d-md-inline ms-2"> Print</span>
          </Button>
          <Button
            variant="phoenix-secondary"
            size="sm"
            className=" d-xl-none ms-2"
            onClick={() => setOpen(true)}
          >
            <FontAwesomeIcon icon={faMattressPillow} />
          </Button>
        </Col>
      </Row>
      <Row className="g-3 g-lg-5 pb-5 pb-md-7 pb-xl-9">
        <Col xl={7} className="flex-1">
          <PortfolioMainContent />
        </Col>
        <Col xl={5} className="portfolio-sidebar-container">
          <div className="stock-offcanvas-xl d-none d-xl-block">
            <PortfolioSidebarContent
              sidebarItems={portfolioItems.portfolioSidebarItems}
            />
          </div>
        </Col>
      </Row>
      <PortfolioOffcanvas
        open={open}
        setOpen={setOpen}
        sidebarItems={portfolioItems.portfolioSidebarItems}
      />
    </>
  );
};

export default Portfolio;

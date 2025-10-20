import { useState } from 'react';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import StockDetailsMainContent from 'components/modules/stock/stock-details/StockDetailsMainContent';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Row, Col } from 'react-bootstrap';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import { currencyFormat, numberFormat } from 'helpers/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';
import StockDetailsSideBarContent from 'components/modules/stock/stock-details/StockDetailsSideBarContent';
import StockDetailsSidebarOffcanvas from 'components/modules/stock/stock-details/StockDetailsSidebarOffcanvas';

const StockDetails = () => {
  const [openOffcanvas, setOpenOffcanvas] = useState(false);
  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
      <h2 className="mb-4 text-body-emphasis">Stock Details</h2>
      <Row className="pb-9 gx-4">
        <Col xl={7} className="pe-lg-2 flex-1">
          <h4>Apple Inc. (AAPL)</h4>
          <h6 className="fw-semibold mb-4">
            NASDAQ: AAPL · Real-Time Price · USD
          </h6>
          <StockDetailsMainContent />
          <Row className="g-0 gap-3 flex-between-center mx-n4 mx-lg-n6 mt-4 px-4 py-3 px-lg-6 bg-body-secondary border-y position-sticky bottom-0 z-3 d-xl-none stock-details-footer">
            <Col xs="auto">
              <div className="d-flex align-items-center gap-2">
                <h3 className="mb-0 text-body">
                  {currencyFormat(226.51, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </h3>
                <Badge variant="phoenix" bg="success">
                  +
                  {numberFormat(0.62, 'standard', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}{' '}
                  (
                  {numberFormat(0.27, 'standard', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                  %)
                </Badge>
              </div>
            </Col>
            <Col xs={12} sm="auto">
              <div className="d-flex flex-wrap gap-2">
                <Button
                  variant="primary"
                  className="flex-1 h-100"
                  onClick={() => setOpenOffcanvas(true)}
                >
                  Buy Share
                </Button>
                <Button variant="phoenix-secondary">
                  <FontAwesomeIcon icon={faClock} />
                </Button>
                <Button variant="phoenix-secondary">
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl={5} className="top-stock-card-container d-none d-xl-block">
          <div className="stock-details-sidebar stock-offcanvas-xl">
            <StockDetailsSideBarContent />
          </div>
        </Col>
      </Row>

      <StockDetailsSidebarOffcanvas
        open={openOffcanvas}
        setOpen={setOpenOffcanvas}
      />
    </>
  );
};

export default StockDetails;

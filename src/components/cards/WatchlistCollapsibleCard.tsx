import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { ButtonGroup, Card, Col, Collapse, Row, Table } from 'react-bootstrap';
import {
  holdingSummaryOverallSummaryItems,
  watchlistDataItems
} from 'data/stock/watchlist';
import classNames from 'classnames';
import { currencyFormat, numberFormat } from 'helpers/utils';
import Badge from 'components/base/Badge';
import { useState } from 'react';
import { Range } from 'data/stock/portfolio';
import WatchlistReportChart from 'components/charts/e-charts/WatchlistReportChart';

interface WatchlistCollapsibleCardProps {
  className?: string;
}

const WatchlistCollapsibleCard = ({
  className
}: WatchlistCollapsibleCardProps) => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState<Range>('1y');
  return (
    <Card className={className}>
      <Card.Body>
        <div className="d-flex flex-wrap flex-between-center gap-3 gap-xxl-5">
          <Button
            variant=""
            className={classNames(
              'collapse-indicator d-flex align-items-center  gap-2 p-0',
              {
                collapsed: open
              }
            )}
            onClick={() => setOpen(!open)}
            aria-controls="holdingSummary"
          >
            <FontAwesomeIcon icon={faChevronDown} className="toggle-icon" />
            <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
              Holdings Summary
            </h4>
          </Button>
          {!open && (
            <div className="scrollbar">
              <Row className="g-0 flex-nowrap py-1">
                {holdingSummaryOverallSummaryItems.map(item => (
                  <Col xs="auto" key={item.id} className={item.className}>
                    <div className="d-flex align-items-center gap-2">
                      <h6 className="fw-normal text-body-tertiary mb-0">
                        {item.title}
                      </h6>
                      <h5 className={classNames('mb-0', item.amount.className)}>
                        {item.amount.prefix && item.amount.prefix}
                        {currencyFormat(item.amount.count, {
                          minimumFractionDigits: 2
                        })}
                      </h5>
                      <Badge
                        variant="phoenix"
                        bg={item.badge.badgeBg}
                        className="fs-10"
                      >
                        {item.badge.prefix}
                        {numberFormat(item.badge.label, 'standard', {
                          minimumFractionDigits: 2
                        })}
                        {item.badge.suffix}
                      </Badge>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
        <Collapse in={open}>
          <div id="holdingSummary">
            <Row className="g-0 mt-3">
              <Col
                xs={12}
                xl={4}
                xxl={3}
                className="pe-xl-5 border-end-xl overflow-hidden"
              >
                <h3 className="mb-3">Summary</h3>
                <Table className="mb-2">
                  <tbody>
                    <tr>
                      <td className="align-middle p-0 pb-2 border-bottom-0">
                        <p className="mb-0">Market Value</p>
                      </td>
                      <td className="align-middle text-end p-0 pb-2 border-bottom-0">
                        <h5 className="fw-semibold mb-0">
                          {currencyFormat(688.43, { minimumFractionDigits: 2 })}
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle p-0 pb-2 border-bottom-0">
                        <p className="mb-0">Day Change</p>
                      </td>
                      <td className="align-middle text-end p-0 pb-2 border-bottom-0">
                        <h5 className="mb-0 fw-semibold">
                          +{currencyFormat(0, { minimumFractionDigits: 2 })}{' '}
                          (0.00%)
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle p-0 pb-2 border-bottom-0">
                        <p className="mb-0">Unrealized G/L</p>
                      </td>
                      <td className="align-middle text-end p-0 pb-2 border-bottom-0">
                        <h5 className="mb-0 fw-semibold text-danger">
                          +{currencyFormat(0, { minimumFractionDigits: 2 })}{' '}
                          (0.00%)
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle p-0 pb-3 border-bottom-0">
                        <p className="mb-0">Realized Value</p>
                      </td>
                      <td className="align-middle text-end p-0 pb-3 border-bottom-0">
                        <h5 className="mb-0 fw-semibold">
                          {currencyFormat(0, { minimumFractionDigits: 2 })}
                        </h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle p-0 pt-3 border-bottom-0 border-top border-dashed">
                        <h4 className="mb-0">Total:</h4>
                      </td>
                      <td className="align-middle text-end p-0 pt-3 border-bottom-0 border-top border-dashed">
                        <h4 className="mb-0">
                          {currencyFormat(688.43, { minimumFractionDigits: 2 })}
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col xl={8} xxl={9} className="ps-xl-5 mt-5 mt-xl-0">
                <Row className="g-3 g-xxl-5 flex-between-center mb-3">
                  <Col xs={12} xxl="auto">
                    <h4>Chart Report</h4>
                    <p className="mb-0">
                      No. of bookings fulfilled &amp; cancelled
                    </p>
                  </Col>
                  <Col xs={12} xxl="auto">
                    <div className="scrollbar">
                      <ButtonGroup size="sm" className="stock-btn-group">
                        {['1D', '5D', '1M', '3M', '6M', '1Y', 'All'].map(
                          (label, index) => (
                            <Button
                              key={index}
                              variant="phoenix-secondary"
                              active={active === label.toLowerCase()}
                              onClick={() =>
                                setActive(label.toLowerCase() as Range)
                              }
                            >
                              {label}
                            </Button>
                          )
                        )}
                      </ButtonGroup>
                    </div>
                  </Col>
                </Row>
                <WatchlistReportChart
                  data={watchlistDataItems.watchlistReportChartDataItem}
                  range={active}
                />
              </Col>
            </Row>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default WatchlistCollapsibleCard;

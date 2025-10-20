import { Card, Col, Row, Table } from 'react-bootstrap';
import { PortfolioSidebarItem } from 'data/stock/portfolio';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import SearchBox from 'components/common/SearchBox';
import { currencyFormat } from 'helpers/utils';
import classNames from 'classnames';
import StockOverviewInvertedChart from 'components/charts/e-charts/StockOverviewInvertedChart';
import StockOverviewChart from 'components/charts/e-charts/StockOverviewChart';
import StockOverviewMixedChart from 'components/charts/e-charts/StockOverviewMixedChart';
import { Dispatch, SetStateAction } from 'react';

interface PortfolioSidebarContentProps {
  sidebarItems: PortfolioSidebarItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const PortfolioSidebarContent = ({
  sidebarItems,
  setOpen
}: PortfolioSidebarContentProps) => {
  return (
    <Card className="border-0 border-xl">
      <Card.Body>
        <Row className="flex-between-center mb-4">
          <Col xs="auto" xl={12}>
            <h4 className="mb-0 text-body-highlight text-xl-center">
              Quote Lookup
            </h4>
          </Col>
          <Col xs="auto" className="d-xl-none">
            <Button
              variant="link"
              size="sm"
              className="fs-8 p-0 text-body-secondary"
              onClick={() => setOpen && setOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </Col>
        </Row>
        <SearchBox placeholder="Search symbol" className="w-100 mb-3" />
        <div className="table-responsive scrollbar overflow-x-hidden">
          <Table className="mb-0">
            <tbody className="border-top">
              {sidebarItems.map(item => (
                <tr key={item.id}>
                  <td
                    className="align-middle white-space-nowrap"
                    style={{ minWidth: 112 }}
                  >
                    <p className="mb-0 fw-semibold text-uppercase">
                      {item.companyAbbr}
                    </p>
                  </td>
                  <td
                    className="align-middle white-space-nowrap"
                    style={{ minWidth: 112 }}
                  >
                    <h5 className="text-body">
                      {currencyFormat(item.amount, {
                        minimumFractionDigits: 2
                      })}
                    </h5>
                    <p
                      className={classNames('fs-9 mb-0', item.profit.className)}
                    >
                      <span className="me-1 fw-bold">
                        {item.profit.prefix}
                        {currencyFormat(item.profit.amount, {
                          minimumFractionDigits: 2
                        })}
                      </span>
                      <span>
                        {item.profit.prefix}
                        {item.profit.percentage}%
                      </span>
                    </p>
                  </td>
                  <td
                    className="align-middle white-space-nowrap d-flex align-items-center justify-content-end justify-content-xl-start"
                    style={{ minWidth: 112 }}
                  >
                    {item.chartType === 'inverted' && (
                      <StockOverviewInvertedChart
                        data={item.chartData}
                        style={{ width: 80, height: 44 }}
                      />
                    )}
                    {item.chartType === 'mixed' && (
                      <StockOverviewMixedChart
                        data={item.chartData}
                        style={{ width: 80, height: 44 }}
                      />
                    )}
                    {item.chartType === 'default' && (
                      <StockOverviewChart
                        data={item.chartData}
                        style={{ width: 80, height: 44 }}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PortfolioSidebarContent;

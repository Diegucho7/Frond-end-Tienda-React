import classNames from 'classnames';
import { ForecastDataItem } from 'data/stock/forecast';
import { Col, Row, Form, Card } from 'react-bootstrap';
import { currencyFormat, numberFormat } from 'helpers/utils';
import Badge from 'components/base/Badge';
import ForecastEconomicPredictionTable from 'components/tables/ForecastEconomicPredictionTable';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import ForecastRevenueChart from 'components/charts/e-charts/ForecastRevenueChart';
import GrowthInRevenueChart from 'components/charts/e-charts/GrowthInRevenueChart';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import MostRecentForecastTable from 'components/tables/MostRecentForecastTable';

interface ForecastTabContentProps {
  forecastDataItems: ForecastDataItem;
}

const ForecastTabContent = ({ forecastDataItems }: ForecastTabContentProps) => {
  return (
    <>
      <Row className="g-3 g-lg-5 mb-4 flex-between-center">
        <Col xs="auto">
          <h4>Economic Prediction</h4>
          <p className="text-body-tertiary mb-0">
            Brief summary of all projects
          </p>
        </Col>
        <Col xs="auto">
          <div className="d-flex align-items-center gap-2">
            <Form.Select size="sm">
              <option value="annual">Annual</option>
              <option value="half-annual">Half Annual</option>
              <option value="quarterly">Quarterly</option>
            </Form.Select>
            <Form.Select size="sm">
              <option value="export">Export</option>
              <option value="view">View</option>
              <option value="remove">Remove</option>
            </Form.Select>
          </div>
        </Col>
      </Row>
      <Card className="mb-3">
        <Card.Body>
          <Row className="g-0">
            {forecastDataItems.economicPredictionItems.map(item => (
              <Col
                sm={6}
                xxl={3}
                key={item.id}
                className={classNames(item.className)}
              >
                <h5 className="text-body-highlight mb-3">{item.title}</h5>
                <Row className="flex-between-center">
                  <Col xs={9} className="pe-xl-0 order-xxl-1">
                    <h4 className="mb-2">
                      {currencyFormat(item.currentAmount, {
                        minimumFractionDigits: item.fractionNumber,
                        maximumFractionDigits: item.fractionNumber
                      })}
                      {item.postfix && item.postfix}
                    </h4>
                    <div className="d-flex align-items-center gap-2">
                      <h6 className="text-body-tertiary fw-semibold mb-0 text-nowrap">
                        From{' '}
                        {numberFormat(item.pastAmount, 'standard', {
                          minimumFractionDigits: 2
                        })}
                        {item.postfix && item.postfix}
                      </h6>
                      <Badge
                        variant="phoenix"
                        bg={item.badge.badgeBg}
                        className="fs-10"
                      >
                        {item.badge.amount}%{item.badge.icon}
                      </Badge>
                    </div>
                  </Col>
                  <Col
                    xs={3}
                    xxl={12}
                    className="mb-xxl-3 ps-0 ps-xxl-3 d-flex justify-content-end justify-content-xxl-start"
                  >
                    {item.chart}
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      <div className="mb-5">
        <ForecastEconomicPredictionTable
          data={forecastDataItems.economicPredicationTableRow}
        />
      </div>
      <Row className="g-3 g-lg-5 mb-5">
        <Col xxl={6}>
          <Row className="g-3 g-lg-5 flex-between-center">
            <Col xs="auto">
              <h4>Forecast of Revenue</h4>
              <p className="mb-0">Understanding Dividend Income Basics</p>
            </Col>
            <Col xs="auto">
              <RevealDropdown btnClassName="btn-phoenix-secondary">
                <ActionDropdownItems />
              </RevealDropdown>
            </Col>
          </Row>
          <ForecastRevenueChart />
        </Col>
        <Col xxl={6}>
          <Row className="g-3 g-lg-5 flex-between-center">
            <Col xs="auto">
              <h4>Growth in Revenue</h4>
              <p className="mb-0">No. of bookings fulfilled &amp; cancelled</p>
            </Col>
            <Col xs="auto">
              <RevealDropdown btnClassName="btn-phoenix-secondary">
                <ActionDropdownItems />
              </RevealDropdown>
            </Col>
          </Row>
          <GrowthInRevenueChart />
        </Col>
      </Row>
      <Row className="g-3 g-lg-5 flex-between-center mb-5">
        <Col xs="auto">
          <h4>Most Recent Forecast</h4>
          <p className="mb-0">Brief summary of all projects</p>
        </Col>
        <Col xs="auto">
          <div className="d-flex align-items-center gap-2">
            <Form.Select size="sm">
              <option value="annual">Annual</option>
              <option value="half-annual">Half Annual</option>
              <option value="quarterly">Quarterly</option>
            </Form.Select>
            <Button
              variant="phoenix-primary"
              className="d-flex align-items-center gap-2 px-3"
            >
              <FontAwesomeIcon icon={faFilter} transform="up-1" />
              <span className="d-none d-sm-inline">Filter</span>
            </Button>
          </div>
        </Col>
      </Row>
      <MostRecentForecastTable
        data={forecastDataItems.mostRecentForecastTableRowItems}
      />
    </>
  );
};

export default ForecastTabContent;

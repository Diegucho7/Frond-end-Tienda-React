import { ButtonGroup, Col, Nav, Row, Tab } from 'react-bootstrap';
import type { TopStockItem } from 'data/stock/dashboardTopStocks';
import { currencyFormat } from 'helpers/utils';
import Badge from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faClock,
  faEye,
  faUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import Button from 'components/base/Button';
import TopStockOptionChainTabContent from './TopStockOptionChainTabContent';
import TopStockLineChart from 'components/charts/chartjs/TopStockLineChart';

interface TopStockMainContentProps {
  topStockItem: TopStockItem;
}

const TopStockMainContent = ({ topStockItem }: TopStockMainContentProps) => {
  return (
    <>
      <Row className="g-3 mb-5 justify-content-between">
        <Col xs="auto">
          <h4 className="text-body-tertiary mb-2 lh-sm">{topStockItem.abbr}</h4>
          <h3 className="text-body-highlight d-flex gap-2 flex-between-center lh-sm mb-0">
            {currencyFormat(topStockItem.amount, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
            <Badge
              variant="phoenix"
              bg={topStockItem.growth ? 'success' : 'danger'}
              className="fs-10 d-flex align-items-center"
            >
              {topStockItem.percent}%
              <FontAwesomeIcon
                icon={topStockItem.growth ? faChevronUp : faChevronDown}
                className="ms-1"
              />
            </Badge>
          </h3>
        </Col>
        <Col xs="auto">
          <div className="d-flex align-items-center gap-2">
            <Link
              to={'/apps/stock/stock-details'}
              className="btn btn-sm btn-phoenix-primary"
            >
              View full stock details
              <FontAwesomeIcon icon={faUpRightFromSquare} className="ms-2" />
            </Link>
            <Button variant="phoenix-secondary" size="sm">
              <FontAwesomeIcon icon={faClock} />
            </Button>
            <Button variant="phoenix-secondary" size="sm">
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </div>
        </Col>
      </Row>
      <Tab.Container defaultActiveKey="chart">
        <Nav variant="underline" className="mb-4 gap-0 optionChainTableHeader">
          <Nav.Item>
            <Nav.Link eventKey="chart" className="pt-0 pe-2">
              Chart
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="optionChain" className="px-3 pt-0">
              Option Chain
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-1">
            <Nav.Link className="h-100" disabled></Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="chart" unmountOnExit>
            <div className="scrollbar mb-4">
              <ButtonGroup
                size="sm"
                className="stock-btn-group text-nowrap"
                role="group"
                aria-label="top-stock-chart-filter"
              >
                <Button
                  variant="phoenix-secondary"
                  className="fw-bolder active"
                  type="button"
                >
                  1 D
                  <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
                    ay
                  </span>
                </Button>
                <Button variant="phoenix-secondary" className="fw-bolder">
                  5 D
                  <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
                    ays
                  </span>
                </Button>
                <Button variant="phoenix-secondary" className="fw-bolder">
                  3 M
                  <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
                    onths
                  </span>
                </Button>
                <Button variant="phoenix-secondary" className="fw-bolder">
                  6 M
                  <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
                    onths
                  </span>
                </Button>
                <Button variant="phoenix-secondary" className="fw-bolder">
                  1 Y
                  <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
                    ear
                  </span>
                </Button>
                <Button variant="phoenix-secondary" className="fw-bolder">
                  5 Y
                  <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
                    ears
                  </span>
                </Button>
                <Button variant="phoenix-secondary" className="fw-bolder">
                  Max
                </Button>
              </ButtonGroup>
            </div>
            <div className="top-stock-chart">
              <TopStockLineChart
                id={`line-chart-${topStockItem.id}`}
                chartData={topStockItem.chartData}
                growth={topStockItem.growth}
              />
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="optionChain" unmountOnExit>
            <TopStockOptionChainTabContent topStockItem={topStockItem} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};

export default TopStockMainContent;

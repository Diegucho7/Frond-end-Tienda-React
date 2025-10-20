import StockPortfolioCard from 'components/cards/StockPortfolioCard';
import StockPortfolioTable from 'components/tables/StockPortfolioTable';
import { portfolioItems } from 'data/stock/portfolio';
import { Row, Col } from 'react-bootstrap';

const PortfolioMainContent = () => {
  return (
    <>
      <StockPortfolioCard
        portfolioHoldingItems={portfolioItems.portfolioHoldingItems}
        chartData={portfolioItems.portfolioLineChartData}
      />
      <Row className="g-4">
        <Col xs={12}>
          <h4>My Portfolio</h4>
          <p className="text-body-tertiary mb-0">
            Brief summary of all projects
          </p>
        </Col>
        <Col xs={12}>
          <StockPortfolioTable data={portfolioItems.portfolioTableDataRow} />
        </Col>
      </Row>
    </>
  );
};

export default PortfolioMainContent;

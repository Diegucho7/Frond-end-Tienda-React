import { Row, Col } from 'react-bootstrap';
import StockDashboardTopListTable from 'components/tables/StockDashboardTopListTable';
import {
  topGainersTableData,
  topLosersTableData
} from 'data/stock/stockDashboard';

const StockDashboardTopList = () => {
  return (
    <Row className="gy-5 gx-xl-7 gx-xxl-10">
      <Col xl={6}>
        <h2 className="mb-4">Top Gainers</h2>
        <StockDashboardTopListTable
          data={topGainersTableData}
          tableType="gainers"
        />
      </Col>
      <Col xl={6}>
        <h2 className="mb-4">Top Losers</h2>
        <StockDashboardTopListTable
          data={topLosersTableData}
          tableType="losers"
        />
      </Col>
    </Row>
  );
};

export default StockDashboardTopList;

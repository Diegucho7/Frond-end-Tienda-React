import StockDashboardTopList from 'components/modules/stock/StockDashboardTopList';
import StockOverViewSlider from 'components/modules/stock/StockOverviewSlider';
import TopStocks from 'components/modules/stock/TopStocks';
import { dashboardOverViewItems } from 'data/stock/stockDashboard';

const Stock = () => {
  return (
    <>
      <h2 className="mb-4 text-body-emphasis">Stock Dashboard</h2>
      <StockOverViewSlider overviewItems={dashboardOverViewItems} />
      <div className="mx-n4 mx-lg-n6 mt-4 px-4 px-lg-6 py-5 border-top">
        <TopStocks />
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis py-5 border-y mb-7 mb-md-8 mb-lg-9">
        <StockDashboardTopList />
      </div>
    </>
  );
};

export default Stock;

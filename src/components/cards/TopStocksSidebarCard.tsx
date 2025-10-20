import { Card } from 'react-bootstrap';
import type { TopStockItem } from 'data/stock/dashboardTopStocks';
import { currencyFormat } from 'helpers/utils';
import classNames from 'classnames';

interface TopStocksSidebarProps {
  topStocksItem: TopStockItem;
}

const TopStocksSidebarCard = ({ topStocksItem }: TopStocksSidebarProps) => {
  return (
    <Card.Body className="p-0 cursor-pointer">
      <div className="d-flex gap-3 gap-xl-2 gap-xxl-3 align-items-center">
        {topStocksItem.darkImage ? (
          <>
            <img
              src={topStocksItem.image}
              alt={topStocksItem.title}
              className="d-dark-none img-fluid"
            />
            <img
              src={topStocksItem.darkImage}
              alt={topStocksItem.title}
              className="d-light-none img-fluid"
            />
          </>
        ) : (
          <img
            src={topStocksItem.image}
            alt={topStocksItem.title}
            className="img-fluid"
          />
        )}
        <div className="d-flex gap-3 flex-between-center flex-1">
          <div>
            <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-nowrap">
              {topStocksItem.title}
            </h6>
            <h4 className="mb-0">
              {currencyFormat(topStocksItem.amount, {
                maximumFractionDigits: 2
              })}
            </h4>
          </div>
          <div className="text-end">
            <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-uppercase">
              {topStocksItem.abbr}
            </h6>
            <h6
              className={classNames('fw-semibold lh-sm', {
                'text-success': topStocksItem.growth,
                'text-danger': !topStocksItem.growth
              })}
            >
              {topStocksItem.growth ? '+' : '-'}
              {topStocksItem.profit}({topStocksItem.percent}%)
            </h6>
          </div>
        </div>
      </div>
    </Card.Body>
  );
};

export default TopStocksSidebarCard;

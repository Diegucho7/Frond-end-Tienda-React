import Swiper from 'components/base/Swiper';
import { SwiperSlide } from 'swiper/react';
import type { StockDashboardOverviewItemProps } from 'data/stock/stockDashboard';
import Badge from 'components/base/Badge';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { currencyFormat } from 'helpers/utils';
import StockOverviewChart from 'components/charts/e-charts/StockOverviewChart';
import StockOverviewInvertedChart from 'components/charts/e-charts/StockOverviewInvertedChart';
import StockOverviewMixedChart from 'components/charts/e-charts/StockOverviewMixedChart';

interface StockOverViewSliderProps {
  overviewItems: StockDashboardOverviewItemProps[];
}

const StockOverViewSlider = ({ overviewItems }: StockOverViewSliderProps) => {
  return (
    <Swiper
      wrapperClass="swiper-continuous-autoplay"
      loop={true}
      spaceBetween={24}
      centeredSlides={true}
      slidesPerView="auto"
      speed={6500}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false
      }}
      grabCursor={true}
      navigation={false}
    >
      {overviewItems.map(item => (
        <SwiperSlide key={item.id} className="stock-overview-card">
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center gap-2 gap-lg-3">
                <div className="flex-1">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <h5 className="mb-0 text-body-tertiary text-nowrap">
                      {item.title}
                    </h5>
                    <Badge
                      variant="phoenix"
                      bg={item.isPositive ? 'success' : 'danger'}
                      className="fs-10"
                    >
                      {item.isPositive ? '+' : '-'}
                      {item.stockValue}%
                      <FontAwesomeIcon
                        icon={item.isPositive ? faChevronUp : faChevronDown}
                        className="ms-1"
                      ></FontAwesomeIcon>
                    </Badge>
                  </div>
                  <h4 className="mb-0">
                    {currencyFormat(item.totalValue, {
                      minimumFractionDigits: 2
                    })}
                  </h4>
                </div>
                {item.chartType === 'inverted' && (
                  <StockOverviewInvertedChart
                    data={item.echartsData}
                    className="overview-echart"
                  />
                )}
                {item.chartType === 'mixed' && (
                  <StockOverviewMixedChart
                    data={item.echartsData}
                    className="overview-echart"
                  />
                )}
                {item.chartType === 'default' && (
                  <StockOverviewChart
                    data={item.echartsData}
                    className="overview-echart"
                  />
                )}
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StockOverViewSlider;

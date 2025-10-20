import { useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { optionChainHeader } from 'data/stock/optionChainTableData';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import OptionChainTable from 'components/tables/OptionChainTable';
import type { TopStockItem } from 'data/stock/dashboardTopStocks';

interface TopStockOptionChainTabContentProps {
  topStockItem: TopStockItem;
}

const TopStockOptionChainTabContent = ({
  topStockItem
}: TopStockOptionChainTabContentProps) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Nav
        variant="underline"
        className="optionChainTableHeader swiper-theme-container gap-0"
      >
        <div className="swiper-nav">
          <button className="swiper-button-next" ref={navigationNextRef}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button className="swiper-button-prev" ref={navigationPrevRef}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <Swiper
          loop={true}
          slidesPerView={5}
          breakpoints={{
            0: {
              slidesPerView: 1.5
            },
            560: {
              slidesPerView: 2.5
            },
            768: {
              slidesPerView: 3.5
            },
            1200: {
              slidesPerView: 3
            },
            1560: {
              slidesPerView: 4
            },
            1800: {
              slidesPerView: 5
            }
          }}
          grabCursor={true}
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={swiper => {
            if (swiper.params.navigation) {
              const navigation = swiper.params.navigation as NavigationOptions;
              navigation.prevEl = navigationPrevRef.current;
              navigation.nextEl = navigationNextRef.current;
            }
          }}
          className="theme-slider"
        >
          {optionChainHeader.map(item => (
            <SwiperSlide key={item.id} className="nav-item">
              <button
                className={classNames(
                  item.className,
                  'nav-link w-100 text-nowrap text-center rounded-0'
                )}
              >
                <span className="fs-8">{item.date} </span>
                <span className="text-body-tertiary fs-9 fw-semibold">
                  ({item.daysCount} Days)
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Nav>
      <OptionChainTable data={topStockItem.tableData} />
    </>
  );
};

export default TopStockOptionChainTabContent;

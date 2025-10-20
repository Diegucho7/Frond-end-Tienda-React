import { useRef } from 'react';
import { Nav } from 'react-bootstrap';
import {
  StockDetailsOptionChainTableHeader,
  stockDetailOptionChainTableData
} from 'data/stock/optionChainTableData';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import {
  faChevronLeft,
  faChevronRight,
  faUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import StockDetailsOptionChainTable from 'components/tables/StockDetailsOptionChainTable';
import { Link } from 'react-router';
import Button from 'components/base/Button';

const StockDetailsOptionChain = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Nav className="swiper-theme-container tabDetailsOptionChainTab">
        <div className="swiper-nav">
          <button
            className="swiper-button-next nav-icon"
            ref={navigationNextRef}
          >
            <FontAwesomeIcon icon={faChevronRight} transform="up-1 shrink-2" />
          </button>
          <button
            className="swiper-button-prev nav-icon"
            ref={navigationPrevRef}
          >
            <FontAwesomeIcon icon={faChevronLeft} transform="up-1 shrink-2" />
          </button>
        </div>
        <Swiper
          loop={true}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 2.8
            },
            1400: {
              slidesPerView: 3
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
          {StockDetailsOptionChainTableHeader.map(item => (
            <SwiperSlide key={item.id} className="nav-item">
              <button
                className={classNames(
                  item.className,
                  'nav-link w-100 fs-9 lh-sm text-center'
                )}
              >
                {item.date}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Nav>
      <StockDetailsOptionChainTable data={stockDetailOptionChainTableData} />
      <Link to="#!">
        <Button variant="phoenix-primary" size="sm" className="w-100">
          View full stock details
          <FontAwesomeIcon icon={faUpRightFromSquare} className="ms-2" />
        </Button>
      </Link>
    </>
  );
};

export default StockDetailsOptionChain;

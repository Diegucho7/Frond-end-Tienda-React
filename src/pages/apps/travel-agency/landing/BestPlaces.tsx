import React from 'react';
import bgLeft28 from 'assets/img/bg/bg-left-28.png';
import bgRight28 from 'assets/img/bg/bg-right-28.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faHotel,
  faTreeCity
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Link } from 'react-router';

import { Container } from 'react-bootstrap';
import { placesData } from 'data/travel-agency/landing';

const BestPlaces = () => {
  SwiperCore.use([Autoplay]);

  return (
    <section className="pb-10 pt-0">
      <div
        className="bg-holder d-none d-md-block"
        style={{
          backgroundImage: `url(${bgLeft28})`,
          backgroundPosition: 'left 27%',
          backgroundSize: '7%'
        }}
      />
      <div
        className="bg-holder d-none d-md-block"
        style={{
          backgroundImage: `url(${bgRight28})`,
          backgroundPosition: 'right -25px',
          backgroundSize: '16%'
        }}
      />
      <div className="container-medium text-center mb-11 position-relative">
        <h3 className="mb-2 text-body-emphasis">Travel more, spend less</h3>
        <p className="text-body-tertiary mb-0">
          Working with Phoenix means you’ll have all the plans and the perfect
          price list to help you plan.
        </p>
      </div>

      {/* swiper  */}
      <Container fluid className="px-sm-0">
        <div className="swiper-theme-container swiper-slide-nav-top">
          <div className="swiper-nav">
            <div className="swiper-button-next">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-primary"
                transform="shrink-3"
              />
            </div>
            <div className="swiper-button-prev">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-primary"
                transform="shrink-3"
              />
            </div>
          </div>
          <Swiper
            loop
            centeredSlides
            autoplay
            centeredSlidesBounds
            spaceBetween={16}
            slidesPerView={1}
            speed={1500}
            breakpoints={{
              576: {
                slidesPerView: 'auto'
              }
            }}
            wrapperClass="swiper-wrapper"
            className="theme-slider"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            modules={[Navigation]}
          >
            {placesData.map((data, index) => (
              <SwiperSlide className="w-sm-auto" key={index}>
                <Link
                  to="#!"
                  className="position-relative rounded-3 overflow-hidden d-block"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="w-100 w-sm-auto object-fit-cover"
                    height={220}
                  />
                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <FontAwesomeIcon
                          icon={faHotel}
                          className="text-secondary-lighter"
                        />
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
                          {data.hotels} Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <FontAwesomeIcon
                          icon={faTreeCity}
                          className="text-secondary-lighter"
                        />
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
                          {data.packages} Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <img src={data.flag} alt="" />
                      <h4 className="mb-0 text-white">{data.country}</h4>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default BestPlaces;

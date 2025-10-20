import FeatherIcon from 'feather-icons-react';
import bgLeft31 from 'assets/img/bg/bg-left-31.png';
import bgRight31 from 'assets/img/bg/bg-right-31.png';
import gallery48 from 'assets/img/gallery/48.png';
import gallery49 from 'assets/img/gallery/49.png';
import gallery50 from 'assets/img/gallery/50.png';
import gallery64 from 'assets/img/gallery/64.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import Rating from 'components/base/Rating';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

SwiperCore.use([Autoplay]);
interface posts {
  title: string;
  date: string;
  rating: number;
  img: string;
}
const posts: posts[] = [
  {
    title: "Beautiful Frence, Let's Travelling!",
    date: 'Monday, Nov 07, 2022',
    rating: 4.8,
    img: gallery48
  },
  {
    title: 'Man Standing on Watching Mountain',
    date: 'Monday, Nov 06, 2022',
    rating: 4.5,
    img: gallery49
  },
  {
    title: "Beautiful Bali Indonesia, Let's Travelling!",
    date: 'Monday, Nov 05, 2022',
    rating: 4.2,
    img: gallery50
  },
  {
    title: 'Chasing sunsets, making memories worldwide.',
    date: 'Monday, Nov 04, 2022',
    rating: 4.5,
    img: gallery64
  }
];
const LatestPosts = () => {
  return (
    <section className="pb-7 pt-0 overflow-x-hidden">
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgLeft31})`,
          backgroundPosition: 'left',
          backgroundSize: '22%',
          zIndex: '1'
        }}
      />
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgRight31})`,
          backgroundPosition: 'right bottom',
          backgroundSize: '15%',
          zIndex: '1'
        }}
      />
      <div className="bg-latest-posts" />
      <div className="container-medium text-center position-relative z-2">
        <h3 className="mb-2 text-body-emphasis">
          Our Latest Posts For Travellers
        </h3>
        <p className="mb-0 text-body-tertiary mb-13">
          Find the best travel memories from our past tours and get a clear idea
          of what we do.
        </p>
      </div>
      <div className="swiper-theme-container swiper-zooming-slider">
        <div className="swiper-container ">
          <Swiper
            loop
            centeredSlides
            autoplay
            centeredSlidesBounds
            spaceBetween={32}
            slidesPerView={1.3}
            speed={2000}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            modules={[Navigation]}
            breakpoints={{
              540: {
                slidesPerView: 1.5
              },
              768: {
                slidesPerView: 1.8
              },
              1200: {
                slidesPerView: 2
              },
              1530: {
                slidesPerView: 2.8
              }
            }}
            wrapperClass="swiper-wrapper"
            className="theme-slider swiper-container overflow-visible"
          >
            {posts.map((data, index) => (
              <SwiperSlide className="rounded-3 overflow-hidden" key={index}>
                <div className="position-relative w-100 h-100">
                  <img
                    src={data.img}
                    className="w-100 h-100 object-fit-cover"
                    alt=""
                  />
                  <div className="backdrop-faded p-4 p-md-6">
                    <div className="d-flex align-items-center mb-2">
                      <FeatherIcon
                        icon="calendar"
                        className="text-secondary-lighter me-2"
                        style={{ width: 16 }}
                      />
                      <h6 className="mb-0 fw-semibold text-secondary-lighter pe-3 me-3 border-end">
                        {data.date}
                      </h6>
                      <Rating
                        iconClass="text-warning fs-9 me-2"
                        initialValue={1}
                        iconsCount={1}
                        allowFraction={false}
                      />
                      <h6 className="mb-0 text-secondary-lighter fw-semibold">
                        {data.rating}
                      </h6>
                    </div>
                    <Link to="#!" className="text-white fw-bold fs-7">
                      {data.title}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
      </div>
      <div className="text-center mt-12 position-relative z-2">
        <Button variant="link" className="p-0 fs-8">
          View all
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ms-2"
            transform="shrink-2"
          />
        </Button>
      </div>
    </section>
  );
};

export default LatestPosts;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type {
  HotelInfo,
  Rating,
  ReviewField
} from 'data/travel-agency/customer/hotelCompare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from 'components/base/Button';
import Badge from 'components/base/Badge';
import { Form } from 'react-bootstrap';
import { numberFormat } from 'helpers/utils';
import classNames from 'classnames';
import HotelCompareRatingRow from 'components/tables/HotelCompareRatingRow';

interface CompareHotelDetailsProps {
  hotelInfo: HotelInfo[];
  reviewFields: ReviewField[];
}

const CompareHotelDetails = ({
  hotelInfo,
  reviewFields
}: CompareHotelDetailsProps) => {
  return (
    <table className="table table-layout-fixed table-compare mb-0">
      <thead>
        <tr>
          <th className="p-0 border-0" style={{ width: 225 }}></th>
          <th className="p-0 border-0"></th>
          <th className="p-0 border-0"></th>
          <th className="p-0 border-0"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4} className="ps-4 pt-4 pb-3 fw-bold border-0">
            Hotel picture
          </td>
        </tr>
        <tr>
          <td className="border-0 bg-body-highlight py-0"></td>
          {hotelInfo.map((item, index) => (
            <td
              className={classNames('border-0 py-0', {
                'ps-3 pe-0': index !== hotelInfo.length - 1,
                'ps-3': index === hotelInfo.length - 1
              })}
              key={index}
              style={{
                minWidth: 250
              }}
            >
              <div className="position-relative swiper-theme-container overflow-hidden rounded-2">
                <Swiper
                  slidesPerView={1}
                  loop
                  autoplay
                  pagination={{
                    clickable: true
                  }}
                  modules={[Autoplay, Pagination]}
                  className="theme-slider"
                >
                  {item.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={image} alt="" className="w-100 h-100" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Badge
                  variant="phoenix"
                  bg="warning"
                  className="fs-10 position-absolute top-0 start-0 ms-3 mt-3 z-1"
                >
                  <FontAwesomeIcon icon={faStar} className="me-1" />
                  {numberFormat(item.overallRating, 'standard', {
                    minimumFractionDigits: 1
                  })}
                </Badge>
                <Button className="btn-wish position-absolute top-0 end-0 me-3 mt-3 z-1">
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </div>
              <div className="position-relative">
                <Form.Control
                  type="text"
                  defaultValue={item.name}
                  placeholder="Enter hotel name"
                  className="form-control-lg mt-2 pe-5"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="fs-9 text-body-quaternary position-absolute top-0 end-0 me-3 mt-3"
                  transform="down-2"
                />
              </div>
            </td>
          ))}
        </tr>
        <tr>
          <td colSpan={4} className="pt-4 pb-3 ps-4 fw-bold">
            Hotel Review
          </td>
        </tr>
        {reviewFields.map(review => (
          <HotelCompareRatingRow
            key={review.id}
            title={review.title}
            ratingValues={hotelInfo.map(
              hotel => hotel.ratings[review.field as keyof Rating]
            )}
          />
        ))}
        <tr>
          <td colSpan={4} className="ps-4 pt-4 pb-3 fw-bold">
            Facilities at a Glance
          </td>
        </tr>
        <tr>
          <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
            <h6 className="text-body fw-bolder text-uppercase mb-0">
              Hotel facilities
            </h6>
          </td>
          {hotelInfo.map((item, index) => (
            <td
              className={classNames('border-translucent px-3', {
                'border-end-lg': index === hotelInfo.length - 1,
                'border-end': index !== hotelInfo.length - 1
              })}
              key={item.id}
            >
              <ul className="mb-0 list-unstyled">
                {item.facilities.map((facility, idx) => (
                  <li className="text-body-highlight fs-9" key={idx}>
                    <span>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-success me-2"
                      />
                    </span>
                    {facility}
                  </li>
                ))}
              </ul>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default CompareHotelDetails;

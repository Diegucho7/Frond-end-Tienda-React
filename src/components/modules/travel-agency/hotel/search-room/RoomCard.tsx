import {
  faBaby,
  faBath,
  faBed,
  faBorderAll,
  faCalendar,
  faPersonShelter,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import Swiper from 'components/base/Swiper';
import React, { useState } from 'react';
import { Card, Row, Col, Collapse } from 'react-bootstrap';
import { Link } from 'react-router';
import { SwiperSlide } from 'swiper/react';
import { roomSearchInterface } from 'data/travel-agency/customer/hotel';

const RoomCard = ({
  data,
  isLastItem
}: {
  data: roomSearchInterface;
  isLastItem: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className={isLastItem ? '' : 'mb-3'}>
      <Card.Body>
        <Row className="gx-4 justify-content-between">
          <Col xs="auto" className="mb-4">
            <div className="d-flex gap-3">
              <Link to="#!">
                <img
                  src={data.img}
                  alt=""
                  width={108}
                  className="rounded-1 border border-translucent"
                />
              </Link>
              <div>
                <Link
                  to="#!"
                  className="fs-8 fw-bolder text-body-emphasis text-nowrap"
                >
                  {data.name}
                </Link>
                <h6 className="fw-semibold text-body text-nowrap mt-1 mb-2">
                  <FontAwesomeIcon icon={faBorderAll} className="me-2" />
                  {data.category}
                </h6>
                <div className="d-flex align-items-baseline gap-1 mb-3">
                  <h6 className="mb-0 fw-semibold">Available:</h6>
                  <h4 className="text-warning-dark fw-bolder mb-0">
                    {data.available}
                    <span className="fs-9 text-body-tertiary fw-bold">
                      / {data.total}
                    </span>
                  </h4>
                </div>
                <h4 className="fw-bolder mb-0">${data.price}</h4>
              </div>
            </div>
          </Col>
          <Col
            xs={{ order: 1 }}
            xxl={{ order: 0, span: 'auto' }}
            className="d-flex gap-5 gap-md-6 mb-4"
          >
            <div>
              <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                <span className="d-none d-sm-inline-block">No. of</span> Beds
              </h6>
              <div className="d-flex align-items-center gap-3">
                <div className="d-sm-flex align-items-center gap-2">
                  <div
                    style={{ height: 24, width: 24 }}
                    className="d-flex align-items-center justify-content-center bg-primary-subtle rounded mb-2 mb-sm-0"
                  >
                    <FontAwesomeIcon
                      icon={faPersonShelter}
                      className="text-primary-darker"
                    />
                  </div>
                  <h5 className="text-body fw-semibold mb-0">
                    {data.bedRooms}
                  </h5>
                </div>
                <div className="d-sm-flex align-items-center gap-2">
                  <div
                    style={{ height: 24, width: 24 }}
                    className="d-flex align-items-center justify-content-center bg-success-subtle rounded mb-2 mb-sm-0"
                  >
                    <FontAwesomeIcon
                      icon={faBed}
                      className="text-success-darker"
                    />
                  </div>
                  <h5 className="text-body fw-semibold mb-0">{data.beds}</h5>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                <span className="d-none d-sm-inline-block">No. of </span> guests
              </h6>
              <div className="d-flex align-items-center gap-3">
                <div className="d-sm-flex align-items-center gap-2">
                  <div
                    style={{ height: 24, width: 24 }}
                    className="d-flex align-items-center justify-content-center bg-warning-subtle rounded mb-2 mb-sm-0"
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-warning-darker"
                    />
                  </div>
                  <h5 className="text-body fw-semibold mb-0">{data.guest}</h5>
                </div>
                <div className="d-sm-flex align-items-center gap-2">
                  <div
                    style={{ height: 24, width: 24 }}
                    className="d-flex align-items-center justify-content-center bg-info-subtle rounded mb-2 mb-sm-0"
                  >
                    <FontAwesomeIcon
                      icon={faBaby}
                      className="text-info-darker"
                    />
                  </div>
                  <h5 className="text-body fw-semibold mb-0">{data.child}</h5>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                Bathroom
              </h6>
              <div className="d-sm-flex align-items-center gap-2">
                <div
                  style={{ height: 24, width: 24 }}
                  className="d-flex align-items-center justify-content-center bg-danger-subtle rounded mb-2 mb-sm-0"
                >
                  <FontAwesomeIcon
                    icon={faBath}
                    className="text-danger-darker"
                  />
                </div>
                <h5 className="text-body fw-semibold mb-0">{data.guest}</h5>
              </div>
            </div>
          </Col>
          <Col sm="auto" className="mb-4">
            <Button
              variant="phoenix-info"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls={`collapseRoomAvailableOnDates`}
              className="me-2 px-3 d-xxl-block mb-xxl-2"
              style={{ minWidth: 130 }}
            >
              <FontAwesomeIcon icon={faCalendar} className="me-2" />
              {!open ? 'Show Dates' : 'Hide Dates'}
            </Button>
            <Link to="#!">
              <Button
                variant="primary"
                className="px-5 px-md-7 px-xxl-5 flex-1"
                style={{ minWidth: 130 }}
              >
                Book now
              </Button>
            </Link>
          </Col>
          <Col xs={12}>
            <Collapse in={open}>
              <div id={`collapseRoomAvailableOnDates`}>
                <div className="px-4 py-3 border border-translucent rounded mb-4 bg-body-highlight">
                  <Swiper
                    spaceBetween={24}
                    slidesPerView="auto"
                    grabCursor={true}
                    breakpoints={{
                      768: {
                        spaceBetween: 32
                      },
                      1540: {
                        spaceBetween: 48
                      }
                    }}
                  >
                    {data.availableOnDates.map((item, dateIndex) => (
                      <SwiperSlide className="w-auto" key={dateIndex}>
                        <div
                          className={classNames(
                            'text-center pe-4 pe-md-5 pe-xl-7',
                            {
                              'border-end':
                                dateIndex !== data.availableOnDates.length - 1
                            }
                          )}
                        >
                          <h6 className="mb-3 fw-bolder text-body">
                            {item.date}
                          </h6>
                          <h6 className="mb-2 text-body-highlight fw-semibold">
                            ${item.price}
                          </h6>
                          {item.units ? (
                            <h6
                              className={`${
                                parseInt(item.units) > 5
                                  ? 'text-success'
                                  : 'text-warning'
                              }`}
                            >
                              {item.units} units
                            </h6>
                          ) : (
                            <h6 className="text-danger">N/A</h6>
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </Collapse>
          </Col>
        </Row>
        <div className="p-3 border border-translucent rounded">
          {data.amenities.slice(0, 13).map((item, index) => (
            <Link key={index} to="#!">
              <Badge
                className="text-body-highlight py-1 fs-10 me-2 border-0"
                variant="phoenix"
                bg="primary"
              >
                {item}
              </Badge>
            </Link>
          ))}
          {data.amenities.slice(13).length > 1 && (
            <Link to="#!" className="fw-bold pe-0 fs-9 text-nowrap">
              + {data.amenities.slice(13).length} more
            </Link>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;

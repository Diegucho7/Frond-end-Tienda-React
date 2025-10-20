import {
  faCalendarAlt,
  faChevronRight,
  faFilter,
  faRotate,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import RoomCard from 'components/modules/travel-agency/hotel/search-room/RoomCard';
import RoomFilterOffcanvas from 'components/modules/travel-agency/hotel/search-room/RoomFilterOffcanvas';
import RoomFilterOffcanvasContent from 'components/modules/travel-agency/hotel/search-room/RoomFilterOffcanvasContent';
import { defaultBreadcrumbItems } from 'data/commonData';
import { useState } from 'react';
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router';
import { roomsSearchData } from 'data/travel-agency/customer/hotel';

const SearchRoom = () => {
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  return (
    <>
      <PageBreadcrumb items={defaultBreadcrumbItems} className="mb-3" />
      <div className="mb-9">
        <Row className="align-items-end mb-5 gy-3">
          <Col style={{ maxWidth: 290 }}>
            <h2>Rooms</h2>
          </Col>
          <Col xl>
            <Row className="gx-2 gx-xl-3 gy-3">
              <Col
                xs={{ order: 1 }}
                sm={{ span: 'auto', order: 0 }}
                className="me-sm-2 d-xl-none"
              >
                <Button
                  variant="phoenix-secondary"
                  size="lg"
                  className="text-body-tertiary w-100"
                  onClick={() => setOpenOffcanvas(true)}
                >
                  <FontAwesomeIcon icon={faFilter} className="me-2" />
                  Filter
                </Button>
              </Col>
              <Col xs sm={5} xxl={3}>
                <DatePicker
                  render={(_, ref) => {
                    return (
                      <FloatingLabel
                        label="Select Time Range"
                        className="w-auto"
                      >
                        <Form.Control
                          type="text"
                          placeholder="start date"
                          ref={ref}
                          id="startDatepicker"
                          className="ps-3"
                        />

                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          className="position-absolute top-0 end-0 mt-3 me-3"
                        />
                      </FloatingLabel>
                    );
                  }}
                  hideIcon={true}
                  options={{
                    mode: 'range',
                    minDate: 'today',
                    dateFormat: 'Y-m-d'
                  }}
                />
              </Col>
              <Col xs sm="auto" className="flex-grow-0">
                <Button
                  variant="phoenix-primary"
                  size="lg"
                  className="px-xxl-6 text-nowrap"
                >
                  <span className="d-none d-xl-inline-block">Update</span>
                  <FontAwesomeIcon icon={faSearch} className="fs-9 ms-xl-2" />
                </Button>
              </Col>
              <Col xs sm="auto" className="ms-auto flex-grow-0">
                <Button
                  variant="phoenix-secondary"
                  size="lg"
                  className="ms-auto text-nowrap"
                >
                  <span className="d-none d-xl-inline-block">Refresh</span>
                  <FontAwesomeIcon icon={faRotate} className="fs-9 ms-xl-2" />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* header section end */}

        <Row className="gx-6">
          {/* offcanvas start */}
          <Col xl="auto" className="d-none d-xl-block">
            <div className="phoenix-room-filter-offcanvas bg-body scrollbar">
              <RoomFilterOffcanvasContent />
            </div>
          </Col>
          {/* offcanvas end */}
          <Col className="w-xl-25">
            {roomsSearchData.map((item, index) => (
              <RoomCard
                key={index}
                data={item}
                isLastItem={roomsSearchData.length - 1 === index}
              />
            ))}
            <div className="border p-3 rounded-3 mt-5 d-flex flex-end-center gap-3 gap-sm-6 flex-wrap">
              <h2 className="text-body mb-0">
                <span className="fs-9 text-body-tertiary fw-bold me-2">
                  Total :
                </span>
                04
              </h2>
              <Link to="#!">
                <Button variant="primary" className="px-sm-7">
                  Confirm Booking
                  <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <RoomFilterOffcanvas open={openOffcanvas} setOpen={setOpenOffcanvas} />
      </div>
    </>
  );
};

export default SearchRoom;

import classNames from 'classnames';
import bg42 from 'assets/img/bg/42.png';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faMapMarkerAlt,
  faSearch,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'components/base/DatePicker';
import Button from 'components/base/Button';
import InputGroupCounter from 'components/common/InputGroupCounter';

export const DropdownItem = ({
  title,
  className
}: {
  title: string;
  className?: string;
}) => {
  return (
    <Dropdown.Item
      as="div"
      className={`d-flex align-items-center px-0 hover-bg-none g-0 border-translucent ${className}`}
    >
      <h5 className="mb-0 text-body" style={{ minWidth: 100 }}>
        {title}
      </h5>
      <div style={{ minWidth: 160 }}>
        <InputGroupCounter id={title} inputGap="gap-2" />
      </div>
    </Dropdown.Item>
  );
};

const HotelActions = ({ background }: { background: boolean }) => {
  return (
    <div
      className={classNames('container-medium-md px-0', {
        'px-md-3': background === true
      })}
    >
      <div
        className={classNames({
          'px-3 py-8 position-relative': background === true
        })}
      >
        {background && (
          <div
            className="bg-holder overlay rounded-md-2"
            style={{
              backgroundImage: `url(${bg42})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
        )}
        <Row
          className={classNames(
            'gx-0 gy-3 gy-md-0 align-items-center mx-auto p-3 bg-body-emphasis rounded-5 rounded-md-pill position-relative border',
            {
              'w-lg-75': background === true
            }
          )}
        >
          <Col xs={12} md>
            <div className="form-icon-container border-bottom border-bottom-md-0 border-translucent pb-3 pb-md-0">
              <Form.Control
                id="PickPlace"
                type="text"
                placeholder="Pick a place"
                className="form-icon-input border-0 py-0 shadow-none fs-8"
              />
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="form-icon text-body-tertiary top-0"
                transform="down-2"
              />
            </div>
          </Col>
          <Col xs={6} md>
            <div className="form-icon-container flatpickr-input-container">
              <DatePicker
                render={(_, ref) => {
                  return (
                    <>
                      <Form.Control
                        type="text"
                        placeholder="Pick a date"
                        ref={ref}
                        id="pickDate"
                        className="form-icon-input border-y-0 border-start-0 border-start-md py-0 shadow-none border-translucent fs-8 rounded-0"
                      />
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="form-icon text-body-tertiary top-0"
                        transform="down-2"
                      />
                    </>
                  );
                }}
                hideIcon={true}
                options={{
                  mode: 'range',
                  minDate: 'today',
                  dateFormat: 'Y-m-d'
                }}
              />
            </div>
          </Col>
          <Col xs={6} md>
            <Dropdown autoClose="outside">
              <Dropdown.Toggle
                variant="link"
                className="btn px-3 fs-8 fw-semibold text-body-tertiary text-decoration-none dropdown-caret-none"
              >
                <FontAwesomeIcon icon={faUser} className="me-2" />1 adult
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="p-4"
                align="start"
                style={{ maxWidth: 320 }}
              >
                <DropdownItem
                  title="Adults"
                  className="pb-3 pt-0 border-bottom"
                />
                <DropdownItem title="Infants" className="py-3 border-bottom" />
                <DropdownItem title="Children" className="pt-3 pb-0" />
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs={12} md="auto">
            <Button
              variant="phoenix-primary"
              className="rounded-pill w-100 btn-lg"
            >
              <FontAwesomeIcon icon={faSearch} className="me-2" />
              Search
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HotelActions;

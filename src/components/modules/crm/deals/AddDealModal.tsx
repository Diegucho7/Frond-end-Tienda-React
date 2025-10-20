import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import { Col, Form, Modal, Row } from 'react-bootstrap';

interface AddDealModalProps {
  show: boolean;
  handleClose: () => void;
}

const AddDealModal = ({ show, handleClose }: AddDealModalProps) => {
  return (
    <Modal
      size="xl"
      show={show}
      centered
      backdrop="static"
      onHide={handleClose}
      contentClassName="bg-body-highlight p-6 border border-translucent"
    >
      <Modal.Header className="border-0 p-0 mb-2">
        <h3 className="mb-0">Deal Informations</h3>
        <Button
          variant="phoenix-secondary"
          className="ms-auto"
          onClick={handleClose}
          size="sm"
        >
          <FontAwesomeIcon icon={faTimes} className="text-danger" />
        </Button>
      </Modal.Header>
      <Modal.Body className="px-0 mb-6">
        <Row className="g-4">
          <Col lg={6} className="d-flex flex-column gap-4">
            <Form.Group>
              <Form.Label className="form-label-header mb-2">
                Deal Owner
              </Form.Label>
              <Form.Select>
                <option>Select</option>
                <option>Ally Aagaard</option>
                <option>Aida Moen</option>
                <option>Niko Koss</option>
                <option>Alec Haag</option>
                <option>Lonnie Kub</option>
                <option>Ola Smith</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label-header mb-2">
                Deal Name
              </Form.Label>
              <Form.Control type="text" placeholder="Enter deal name" />
            </Form.Group>

            <Row className="g-3">
              <Form.Group as={Col} lg={12} xl={6}>
                <Form.Label className="form-label-header mb-2">
                  Deal Amount
                </Form.Label>
                <Row className="g-2">
                  <Col xs={7}>
                    <Form.Control
                      type="number"
                      placeholder="$ Enter amount"
                      className="flex-1"
                    />
                  </Col>
                  <Col xs={5}>
                    <Form.Select as="select" className="form-select">
                      <option value="USD">USD</option>
                      <option value="GBP">GBP</option>
                      <option value="EUR">EUR</option>
                      <option value="JPY">JPY</option>
                      <option value="CAD">CAD</option>
                      <option value="AUD">AUD</option>
                      <option value="CNY">CNY</option>
                      <option value="CHF">CHF</option>
                      <option value="ZAR">ZAR</option>
                      <option value="BRL">BRL</option>
                      <option value="RUB">RUB</option>
                      <option value="INR">INR</option>
                      <option value="MXN">MXN</option>
                      <option value="NZD">NZD</option>
                      <option value="SGD">SGD</option>
                      <option value="HKD">HKD</option>
                      <option value="KRW">KRW</option>
                      <option value="SEK">SEK</option>
                      <option value="NOK">NOK</option>
                      <option value="TRY">TRY</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group as={Col} lg={12} xl={6}>
                <Form.Label className="form-label-header mb-2">
                  Deal Code
                </Form.Label>
                <Form.Control type="text" placeholder="Enter deals code" />
              </Form.Group>
            </Row>

            <Form.Group>
              <div className="mb-2">
                <Form.Label className="form-label-header mb-0">
                  Deal Type
                </Form.Label>
                <Button
                  variant="link"
                  className="p-0 ms-3"
                  startIcon={<FontAwesomeIcon icon={faPlus} className="" />}
                >
                  Add new
                </Button>
              </div>
              <Form.Select className="form-select">
                <option value="Select">Select</option>
                <option value="Buy One Get One Free">
                  Buy One Get One Free
                </option>
                <option value="Clearance sale">Clearance sale</option>
                <option value="Bundle deals">Bundle deals</option>
                <option value="Free shipping">Free shipping</option>
                <option value="Loyalty programs">Loyalty programs</option>
                <option value="Limited-time offers">Limited-time offers</option>
                <option value="Refer-a-friend discounts">
                  Refer-a-friend discounts
                </option>
                <option value="Seasonal sales">Seasonal sales</option>
                <option value="Membership discounts">
                  Membership discounts
                </option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <div className="mb-2">
                <Form.Label className="form-label-header mb-0">
                  Category
                </Form.Label>
                <Button
                  variant="link"
                  className="p-0 ms-3"
                  startIcon={<FontAwesomeIcon icon={faPlus} className="" />}
                >
                  Add new
                </Button>
              </div>
              <Form.Select className="form-select">
                <option>Select</option>
                <option>Financial</option>
                <option>Marketplace</option>
                <option>Travel</option>
                <option>E-commerce</option>
                <option>Cloud Computing</option>
              </Form.Select>
            </Form.Group>

            <Row className="g-3">
              <Form.Group as={Col} lg={12} xl={6}>
                <Form.Label className="form-label-header mb-2">
                  Probability (%)
                </Form.Label>
                <Form.Control type="text" placeholder="Enter value" />
              </Form.Group>
              <Form.Group as={Col} lg={12} xl={6}>
                <Form.Label className="form-label-header mb-2">
                  Expected Revenue
                </Form.Label>
                <Row className="g-2">
                  <Col xs={7}>
                    <Form.Control
                      type="number"
                      placeholder="$ Enter amount"
                      className="flex-1"
                    />
                  </Col>
                  <Col xs={5}>
                    <Form.Select as="select" className="form-select">
                      <option value="USD">USD</option>
                      <option value="GBP">GBP</option>
                      <option value="EUR">EUR</option>
                      <option value="JPY">JPY</option>
                      <option value="CAD">CAD</option>
                      <option value="AUD">AUD</option>
                      <option value="CNY">CNY</option>
                      <option value="CHF">CHF</option>
                      <option value="ZAR">ZAR</option>
                      <option value="BRL">BRL</option>
                      <option value="RUB">RUB</option>
                      <option value="INR">INR</option>
                      <option value="MXN">MXN</option>
                      <option value="NZD">NZD</option>
                      <option value="SGD">SGD</option>
                      <option value="HKD">HKD</option>
                      <option value="KRW">KRW</option>
                      <option value="SEK">SEK</option>
                      <option value="NOK">NOK</option>
                      <option value="TRY">TRY</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
            </Row>

            <Row className="g-3">
              <Form.Group as={Col} xs={6}>
                <Form.Label className="form-label-header mb-2">
                  Stage
                </Form.Label>
                <Form.Select className="form-select">
                  <option>Select</option>
                  <option>New</option>
                  <option>In Progress</option>
                  <option>Pending</option>
                  <option>Canceled</option>
                  <option>Completed</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} xs={6}>
                <Form.Label className="form-label-header mb-2">
                  Priority
                </Form.Label>
                <Form.Select>
                  <option>Urgent</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Col>

          <Col lg={6} className="d-flex flex-column gap-4">
            <Form.Group>
              <Form.Label className="form-label-header mb-2">
                Contact Name
              </Form.Label>
              <Form.Control type="text" placeholder="Enter contact name" />
            </Form.Group>

            <Row className="g-3">
              <Form.Group as={Col} lg={12} xl={6}>
                <Form.Label className="form-label-header mb-2">
                  Phone Number
                </Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>

              <Form.Group as={Col} lg={12} xl={6}>
                <Form.Label className="form-label-header mb-2">
                  Email Address
                </Form.Label>
                <Form.Control type="text" placeholder="Enter email address" />
              </Form.Group>
            </Row>

            <Form.Group>
              <div className="mb-2">
                <Form.Label className="form-label-header mb-0">
                  Lead Source
                </Form.Label>
                <Button
                  variant="link"
                  className="p-0 ms-3"
                  startIcon={<FontAwesomeIcon icon={faPlus} className="" />}
                >
                  Add new
                </Button>
              </div>
              <Form.Select className="form-select">
                <option>Select</option>
                <option>Referrals</option>
                <option>Former Clients</option>
                <option>Competitors</option>
                <option>Business &amp; sales</option>
                <option>Google resources</option>
                <option>Linkedin</option>
                <option>Marketing</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <div className="mb-2">
                <Form.Label className="form-label-header mb-0">
                  Campaign Source
                </Form.Label>
                <Button
                  variant="link"
                  className="p-0 ms-3"
                  startIcon={<FontAwesomeIcon icon={faPlus} className="" />}
                >
                  Add new
                </Button>
              </div>
              <Form.Select className="form-select">
                <option>Select</option>
                <option>Online Campaign</option>
                <option>Offline Campaign</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label-header mb-2">
                Time Zone
              </Form.Label>
              <Form.Select className="form-select">
                <option>GMT-12:00 Etc/GMT-12</option>
                <option>GMT-11:00 Etc/GMT-11</option>
                <option>GMT-11:00 Pacific/Midway</option>
                <option>GMT-10:00 America/Adak</option>
                <option>GMT-09:00 America/Anchorage</option>
                <option>GMT-09:00 Pacific/Gambier</option>
                <option>GMT-08:00 America/Dawson_Creek</option>
                <option>GMT-08:00 America/Ensenada</option>
                <option>GMT-08:00 America/Los_Angeles</option>
                <option>GMT-07:00 America/Chihuahua</option>
                <option>GMT-07:00 America/Denver</option>
                <option>GMT-06:00 America/Belize</option>
                <option>GMT-06:00 America/Cancun</option>
                <option>GMT-06:00 America/Chicago</option>
                <option>GMT-06:00 Chile/EasterIsland</option>
                <option>GMT-05:00 America/Bogota</option>
                <option>GMT-05:00 America/Havana</option>
                <option>GMT-05:00 America/New_York</option>
                <option>GMT-04:30 America/Caracas</option>
                <option>GMT-04:00 America/Campo_Grande</option>
                <option>GMT-04:00 America/Glace_Bay</option>
                <option>GMT-04:00 America/Goose_Bay</option>
                <option>GMT-04:00 America/Santiago</option>
                <option>GMT-04:00 America/La_Paz</option>
                <option>GMT-03:00 America/Argentina/Buenos_Aires</option>
                <option>GMT-03:00 America/Montevideo</option>
                <option>GMT-03:00 America/Araguaina</option>
                <option>GMT-03:00 America/Godthab</option>
                <option>GMT-03:00 America/Miquelon</option>
                <option>GMT-03:00 America/Sao_Paulo</option>
                <option>GMT-03:30 America/St_Johns</option>
                <option>GMT-02:00 America/Noronha</option>
                <option>GMT-01:00 Atlantic/Cape_Verde</option>
                <option>GMT Europe/Belfast</option>
                <option>GMT Africa/Abidjan</option>
                <option>GMT Europe/Dublin</option>
                <option>GMT Europe/Lisbon</option>
                <option>GMT Europe/London</option>
                <option>UTC UTC</option>
                <option>GMT+01:00 Africa/Algiers</option>
                <option>GMT+01:00 Africa/Windhoek</option>
                <option>GMT+01:00 Atlantic/Azores</option>
                <option>GMT+01:00 Atlantic/Stanley</option>
                <option>GMT+01:00 Europe/Amsterdam</option>
                <option>GMT+01:00 Europe/Belgrade</option>
                <option>GMT+01:00 Europe/Brussels</option>
                <option>GMT+02:00 Africa/Cairo</option>
                <option>GMT+02:00 Africa/Blantyre</option>
                <option>GMT+02:00 Asia/Beirut</option>
                <option>GMT+02:00 Asia/Damascus</option>
                <option>GMT+02:00 Asia/Gaza</option>
                <option>GMT+02:00 Asia/Jerusalem</option>
                <option>GMT+03:00 Africa/Addis_Ababa</option>
                <option>GMT+03:00 Asia/Riyadh89</option>
                <option>GMT+03:00 Europe/Minsk</option>
                <option>GMT+03:30 Asia/Tehran</option>
                <option>GMT+04:00 Asia/Dubai</option>
                <option>GMT+04:00 Asia/Yerevan</option>
                <option>GMT+04:00 Europe/Moscow</option>
                <option>GMT+04:30 Asia/Kabul</option>
                <option>GMT+05:00 Asia/Tashkent</option>
                <option>GMT+05:30 Asia/Kolkata</option>
                <option>GMT+05:45 Asia/Katmandu</option>
                <option>GMT+06:00 Asia/Dhaka</option>
                <option>GMT+06:00 Asia/Yekaterinburg</option>
                <option>GMT+06:30 Asia/Rangoon</option>
                <option>GMT+07:00 Asia/Bangkok</option>
                <option>GMT+07:00 Asia/Novosibirsk</option>
                <option>GMT+08:00 Etc/GMT+8</option>
                <option>GMT+08:00 Asia/Hong_Kong</option>
                <option>GMT+08:00 Asia/Krasnoyarsk</option>
                <option>GMT+08:00 Australia/Perth</option>
                <option>GMT+08:45 Australia/Eucla</option>
                <option>GMT+09:00 Asia/Irkutsk</option>
                <option>GMT+09:00 Asia/Seoul</option>
                <option>GMT+09:00 Asia/Tokyo</option>
                <option>GMT+09:30 Australia/Adelaide</option>
                <option>GMT+09:30 Australia/Darwin</option>
                <option>GMT+09:30 Pacific/Marquesas</option>
                <option>GMT+10:00 Etc/GMT+10</option>
                <option>GMT+10:00 Australia/Brisbane</option>
                <option>GMT+10:00 Australia/Hobart</option>
                <option>GMT+10:00 Asia/Yakutsk</option>
                <option>GMT+10:30 Australia/Lord_Howe</option>
                <option>GMT+11:00 Asia/Vladivostok</option>
                <option>GMT+11:30 Pacific/Norfolk</option>
                <option>GMT+12:00 Etc/GMT+12</option>
                <option>GMT+12:00 Asia/Anadyr</option>
                <option>GMT+12:00 Asia/Magadan</option>
                <option>GMT+12:00 Pacific/Auckland</option>
                <option>GMT+12:45 Pacific/Chatham</option>
                <option>GMT+13:00 Pacific/Tongatapu</option>
                <option>GMT+14:00 Pacific/Kiritimati</option>
              </Form.Select>
            </Form.Group>

            <Row className="g-3">
              <Form.Group as={Col} xs={6}>
                <Form.Label className="form-label-header mb-2">
                  Create Date
                </Form.Label>
                <DatePicker placeholder="Select Date" hideIcon />
              </Form.Group>
              <Form.Group as={Col} xs={6}>
                <Form.Label className="form-label-header mb-2">
                  Start Time
                </Form.Label>
                <DatePicker
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'H:i'
                  }}
                  placeholder="Select Time"
                  hideIcon={true}
                />
              </Form.Group>
            </Row>

            <Row className="g-3">
              <Form.Group as={Col} xs={6}>
                <Form.Label className="form-label-header mb-2">
                  Closing Date
                </Form.Label>
                <DatePicker placeholder="Select Date" hideIcon />
              </Form.Group>
              <Form.Group as={Col} xs={6}>
                <Form.Label className="form-label-header mb-2">
                  Closing Time
                </Form.Label>
                <DatePicker
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: 'H:i'
                  }}
                  placeholder="Select Time"
                  hideIcon={true}
                />
              </Form.Group>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="border-0 p-0">
        <Button
          variant="link"
          className="text-danger px-3 my-0"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button variant="primary" className="my-0">
          Create Deal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDealModal;

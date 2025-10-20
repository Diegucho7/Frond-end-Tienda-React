import Button from 'components/base/Button';
import { Card, Col, Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import bg38 from 'assets/img/bg/bg-38.png';
import illustrations37 from 'assets/img/spot-illustrations/37.png';
import illustrations37dark from 'assets/img/spot-illustrations/37_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import bgLeft from 'assets/img/bg/bg-left-24.png';
import bgRight from 'assets/img/bg/bg-right-24.png';

const Cta = () => {
  return (
    <section className="dark__bg-gray-1000 pb-10 overflow-hidden">
      <div className="container-small px-lg-7 px-xxl-3">
        <div
          className="position-absolute w-100 h-100 start-0 end-0 opacity-50"
          style={{
            bottom: '-350px',
            transform: 'skewY(-8deg)',
            background:
              'linear-gradient(102.27deg, #38ABFF 4.69%, #3874FF 106.27%)'
          }}
        />
        <div
          className="bg-holder"
          style={{
            backgroundImage: `url(${bgLeft})`,
            backgroundSize: 'auto',
            backgroundPosition: 'left center'
          }}
        />
        <div
          className="bg-holder"
          style={{
            backgroundImage: `url(${bgRight})`,
            backgroundSize: 'auto',
            backgroundPosition: 'right center'
          }}
        />
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <Card className="py-md-9 px-md-13 border-0 z-1 shadow-lg">
              <div
                className="bg-holder"
                style={{
                  backgroundImage: `url(${bg38})`,
                  backgroundPosition: 'center',
                  backgroundSize: '100%'
                }}
              />

              <Card.Body className="position-relative">
                <img
                  className="img-fluid mb-5 d-dark-none"
                  src={illustrations37}
                  width={260}
                  alt="..."
                />
                <img
                  className="img-fluid mb-5 d-light-none"
                  src={illustrations37dark}
                  width={260}
                  alt="..."
                />
                <div className="d-flex align-items-center fw-bold justify-content-center mb-3">
                  <p className="mb-0">2008 Premium Icons</p>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-primary"
                    transform="shrink-12"
                  />
                  <p className="mb-0">Included FREE with it</p>
                </div>
                <h1 className="fs-6 fs-sm-4 fs-lg-2 fw-bolder lh-sm mb-3">
                  Join
                  <span className="gradient-text-primary mx-2">Phoenix</span>
                  Today
                </h1>
                <Form className="d-flex gap-3 justify-content-center mb-3 px-xxl-15">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    id="ctaEmail1"
                  />
                  <Button variant="primary" type="submit">
                    Subscribe
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Cta;

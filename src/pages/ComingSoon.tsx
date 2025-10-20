import { Col, Form, Row } from 'react-bootstrap';
import Lottie from 'lottie-react';
import comingSoonLight from 'assets/img/animated-icons/coming-soon-light.json';
import comingSoonDark from 'assets/img/animated-icons/coming-soon-dark.json';
import comingSoonText from 'assets/img/spot-illustrations/40.png';
import comingSoonTextDark from 'assets/img/spot-illustrations/dark_40.png';
import { useAppContext } from 'providers/AppProvider';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ComingSoon = () => {
  const {
    config: { theme }
  } = useAppContext();

  return (
    <Row className="flex-center content-min-h pb-9">
      <Col xs={12} xxl={10}>
        <Row className="align-items-xl-center g-2">
          <Col xs={12} xl={6} className="order-xl-1">
            <div className="d-flex flex-center">
              <Lottie
                animationData={
                  theme === 'light' ? comingSoonLight : comingSoonDark
                }
                loop={true}
                className="w-xl-100 animation"
              />
            </div>
          </Col>
          <Col xs={12} xl={6}>
            <div className="d-flex justify-content-center mt-xl-15">
              <div className="text-container text-center text-xl-start">
                <img
                  src={comingSoonText}
                  alt=""
                  className="mb-5 w-75 w-lg-50 w-xl-75 w-xxl-100 d-dark-none"
                  style={{ maxWidth: 415 }}
                />
                <img
                  src={comingSoonTextDark}
                  alt=""
                  className="mb-5 w-75 w-lg-50 w-xl-75 w-xxl-100 d-light-none"
                  style={{ maxWidth: 415 }}
                />

                <h2 className="text-body-secondary fs-xl-6 mb-3">
                  Get notified when we launch
                </h2>
                <p className="mb-6 w-xxl-75">
                  <b>Something in the way!</b> Subscribe to our newsletter to be
                  the first to know about upcoming features and discounts.
                </p>
                <Row className="g-3 w-md-75 w-xl-100 w-xxl-75 mx-auto mx-xl-0">
                  <Col className="ps-0">
                    <Form.Control />
                  </Col>
                  <Col xs="auto" className="pe-0">
                    <Button
                      variant="primary"
                      endIcon={
                        <FontAwesomeIcon icon={faEnvelope} className="fs-10" />
                      }
                    >
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ComingSoon;

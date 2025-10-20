import { Feature, services } from 'data/landing/alternate-landing-data';
import Lottie from 'lottie-react';
import { useAppContext } from 'providers/AppProvider';
import { Col, Row } from 'react-bootstrap';
import earthLight from 'assets/img/animated-icons/rotating-earth.json';
import earthDark from 'assets/img/animated-icons/rotating-earth-dark.json';
import earthPlane from 'assets/img/spot-illustrations/earth-plane.png';
import earthPlaneDark from 'assets/img/spot-illustrations/earth-plane-dark.png';

const ServiceItem = ({ service }: { service: Feature }) => {
  return (
    <div className="text-center text-lg-start">
      <img src={service.lightImg} alt="" className="mb-4 d-dark-none" />
      <img src={service.darkImg} alt="" className="mb-4 d-light-none" />
      <h4 className="mb-2">{service.title}</h4>
      <p>{service.description}</p>
    </div>
  );
};

const OneStopSolution = () => {
  const {
    config: { theme }
  } = useAppContext();
  return (
    <section className="overflow-hidden rotating-earth-container pb-5 pb-md-0 pt-12">
      <div className="container-small px-lg-7 px-xxl-3">
        <Row>
          <Col lg={6} className="text-center text-lg-start">
            <h5 className="text-info mb-3">One-stop solution</h5>
            <h2 className="mb-2 lh-base">Used by millions of users</h2>
            <h1 className="fs-4 fs-sm-2 mb-3 text-gradient-info fw-black">
              WORLDWIDE
            </h1>
            <p className="mb-10">
              Keep it simple with Phoenix and help your organization grow with
              the abundance you look for.
            </p>
            <Row className="gy-6">
              {services.map(service => (
                <Col key={service.id} sm={6}>
                  <ServiceItem service={service} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg="auto">
            <div className="position-relative position-lg-absolute rotating-earth">
              <Lottie
                animationData={theme === 'light' ? earthLight : earthDark}
                className="lottie"
              />
              <img
                src={earthPlane}
                alt=""
                className="position-absolute d-dark-none"
              />
              <img
                src={earthPlaneDark}
                alt=""
                className="position-absolute d-light-none"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OneStopSolution;

import { Col, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import bg1 from 'assets/img/bg/bg-36.png';
import bg2 from 'assets/img/bg/bg-34.png';
import bg3 from 'assets/img/bg/bg-35.png';
import bg4 from 'assets/img/bg/bg-39.png';

const HeroHeader = () => {
  return (
    <section id="home" className="pb-8 overflow-hidden">
      <div className="hero-header-container-alternate position-relative">
        <div className="container-small px-lg-7 px-xxl-3">
          <Row className="align-items-center">
            <Col
              lg={6}
              className="pt-8 pb-6 position-relative z-5 text-center text-lg-start"
            >
              <h1 className="fs-3 fs-md-2 fs-xl-1 fw-black mb-4">
                <span className="text-gradient-info me-3">Elegance</span> for{' '}
                <br />
                your web app
              </h1>
              <p className="mb-5 pe-xl-10">
                Standard, modern and Elegant solution for your next web app so
                you don’t have to look further. Sign up or check the demo below.
              </p>
              <Button
                as={Link}
                to="#!"
                variant="primary"
                size="lg"
                className="rounded-pill me-3"
              >
                Sign up
              </Button>
              <Button
                as={Link}
                to="#!"
                variant="link"
                endIcon={
                  <FontAwesomeIcon icon={faAngleRight} className="ms-2 fs-9" />
                }
                className="me-2 fs-8 p-0"
              >
                Check Demo
              </Button>
            </Col>
            <Col lg="auto" className="d-none d-lg-block">
              <div className="hero-image-container position-absolute h-100 end-0 d-flex align-items-center">
                <div className="position-relative">
                  <div className="position-absolute end-0 hero-image-container-overlay" />
                  <img
                    src={bg1}
                    alt=""
                    className="position-absolute end-0 hero-image-container-bg"
                  />
                  <img
                    src={bg2}
                    alt=""
                    className="w-100 d-dark-none rounded-2 hero-image-shadow"
                  />
                  <img
                    src={bg3}
                    alt=""
                    className="w-100 d-light-none rounded-2 hero-image-shadow"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container-small px-md-8 mb-8 d-lg-none">
          <div className="position-relative">
            <div className="position-absolute end-0 hero-image-container-overlay" />
            <img
              src={bg4}
              alt=""
              className="position-absolute top-50 hero-image-container-bg"
            />
            <img
              src={bg2}
              alt=""
              className="img-fluid ms-auto d-dark-none rounded-2 hero-image-shadow"
            />
            <img
              src={bg3}
              alt=""
              className="img-fluid ms-auto d-light-none rounded-2 hero-image-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;

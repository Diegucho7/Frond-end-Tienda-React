import bgLeft33 from 'assets/img/bg/bg-left-33.png';
import bgRight33 from 'assets/img/bg/bg-right-33.png';
import iPhone from 'assets/img/spot-illustrations/i-phone.png';
import iPhoneDark from 'assets/img/spot-illustrations/i-phone-dark.png';
import spotIllustration41 from 'assets/img/spot-illustrations/41.png';
import spotIllustrationDark41 from 'assets/img/spot-illustrations/dark_41.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import playStore from 'assets/img/generic/play-store.png';
import appStore from 'assets/img/generic/app-store.png';

const GetApp = () => {
  return (
    <section className="pb-10 pt-9">
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgLeft33})`,
          backgroundPosition: '-8% 38px',
          backgroundSize: 'auto'
        }}
      />
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgRight33})`,
          backgroundPosition: 'right',
          backgroundSize: '18%'
        }}
      />
      <div className="bg-get-app" />
      <div className="container-medium position-relative">
        <Row className="g-0 justify-content-center">
          <Col lg={10} xl={8} xxl={7}>
            <div className="d-md-flex align-items-center gap-5 text-center text-md-start">
              <img
                src={iPhone}
                alt=""
                style={{ maxHeight: '540px' }}
                className="d-dark-none img-fluid"
              />
              <img
                src={iPhoneDark}
                alt=""
                style={{ maxHeight: '540px' }}
                className="d-light-none img-fluid"
              />
              <div className="mt-5 mt-md-0">
                <div className="d-none d-md-block">
                  <img
                    src={spotIllustration41}
                    alt=""
                    width={200}
                    className="d-dark-none"
                  />
                  <img
                    src={spotIllustrationDark41}
                    alt=""
                    width={200}
                    className="d-light-none"
                  />
                </div>
                <h3 className="fw-bolder mt-4">Get The App Now</h3>
                <p className="text-body-tertiary">
                  Designed to provide the best user experience possible to all
                  our customers with activities ranging from anything thinkable
                  to the unthinkables.
                </p>
                <Link to="#!">
                  <img src={playStore} alt="" height={32} className="me-2" />
                  <img src={appStore} alt="" height={32} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default GetApp;

import bgLeft from 'assets/img/bg/bg-left-25.png';
import bgRight from 'assets/img/bg/bg-right-25.png';
import classNames from 'classnames';
import { Stat, stats } from 'data/landing/alternate-landing-data';
import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Ref } from 'react';

const StatItem = ({ stat }: { stat: Stat }) => {
  return (
    <CountUp
      end={stat.value}
      prefix={stat.prefix}
      suffix={stat.suffix}
      separator=","
      enableScrollSpy
    >
      {({ countUpRef }) => (
        <div>
          <h1
            className="fs-3 fs-lg-1 fw-bolder text-info mb-3"
            ref={countUpRef as Ref<HTMLHeadingElement>}
          />
          <h4>{stat.title}</h4>
        </div>
      )}
    </CountUp>
  );
};

const Stats = () => {
  return (
    <section className="counter-container">
      <div className="position-absolute start-0 end-0 w-100 counter-overlay" />
      <div
        className="bg-holder d-none d-lg-block"
        style={{
          backgroundImage: `url(${bgLeft})`,
          backgroundSize: 'auto',
          backgroundPosition: 'left center'
        }}
      />
      <div
        className="bg-holder d-none d-lg-block"
        style={{
          backgroundImage: `url(${bgRight})`,
          backgroundSize: 'auto',
          backgroundPosition: 'right center'
        }}
      />
      <div className="container-small position-relative">
        <Row className="gx-0 gy-8 justify-content-center">
          {stats.map((stat, index) => (
            <Col
              sm={6}
              md="auto"
              key={stat.id}
              className={classNames('text-center', {
                'order-2 order-md-0': index === 0,
                'order-1 order-md-0': index === 1,
                'me-md-5 pe-md-5 border-end-md border-dashed border-translucent':
                  index !== stats.length - 1
              })}
            >
              <StatItem stat={stat} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Stats;

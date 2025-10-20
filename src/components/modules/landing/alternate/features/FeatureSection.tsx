import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { Feature } from 'data/landing/alternate-landing-data';
import { Col, Row } from 'react-bootstrap';

interface FeatureSectionProps {
  feature: Feature;
  isLast: boolean;
}

const FeatureSection = ({ feature, isLast }: FeatureSectionProps) => {
  return (
    <Row
      className={classNames('flex-between-center px-xl-11', {
        'mb-10 mb-md-9': !isLast
      })}
    >
      <Col
        xs={{ order: 1 }}
        md={{ span: 6, order: 0 }}
        className="text-center text-md-start"
      >
        <h4 className="mb-3">{feature.title}</h4>
        <p className="mb-5">{feature.description}</p>
        <Button
          variant="link"
          endIcon={<FontAwesomeIcon icon={faAngleRight} />}
          className="me-2 p-0 fs-9"
        >
          Check Demo
        </Button>
      </Col>
      <Col md={5} className="mb-5 mb-md-0 text-center">
        <img
          src={feature.lightImg}
          alt=""
          className="w-75 w-md-100 d-dark-none"
        />
        <img
          src={feature.darkImg}
          alt=""
          className="w-75 w-md-100 d-light-none"
        />
      </Col>
    </Row>
  );
};

export default FeatureSection;

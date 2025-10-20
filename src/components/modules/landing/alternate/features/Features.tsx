import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { features } from 'data/landing/alternate-landing-data';
import FeatureSection from './FeatureSection';

const Features = () => {
  return (
    <section id="features" className="pt-13 pb-10">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="text-center mb-10 mb-md-5">
          <h5 className="text-info mb-3">Features</h5>
          <h2 className="mb-3 lh-base">
            Complete suite of <br className="d-sm-none" />
            payment products.
          </h2>
          <p className="mb-0">
            Focus only on functionalities for your digital products with
            Phoenix! Leave the UIs for us.
          </p>
          <div className="text-center mt-5">
            <Button
              variant="outline-primary"
              endIcon={
                <FontAwesomeIcon icon={faAngleRight} transform="down-1" />
              }
            >
              See more
            </Button>
          </div>
        </div>
        {features.map((feature, index) => (
          <FeatureSection
            key={feature.id}
            feature={feature}
            isLast={index === features.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;

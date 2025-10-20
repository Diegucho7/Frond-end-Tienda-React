import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import {
  PricingAlternate,
  pricingFeaturesAlternate
} from 'data/landing/pricingData';
import React from 'react';
import { Card } from 'react-bootstrap';

const PricingItem = ({ pricing }: { pricing: PricingAlternate }) => {
  return (
    <div className="pricing-card">
      <Card
        className={classNames('bg-transparent', {
          'border border-2 border-info rounded-4':
            pricing.category === 'Business',
          'border-0 border-translucent': pricing.category !== 'Business'
        })}
      >
        <Card.Body className="p-7">
          <h3 className="mb-5">{pricing.category}</h3>
          <h1 className="fs-3 d-flex align-items-center gap-1 mb-3">
            ${pricing.price}
            <span className="fs-8 fw-normal"> / month</span>
          </h1>
          <Button
            variant={
              pricing.category === 'Business' ? 'primary' : 'outline-primary'
            }
            size="lg"
            className="w-100 mb-7"
          >
            Buy
          </Button>
          <h5 className="mb-4">What’s included</h5>
          <ul className="fa-ul ps-4 m-0 pricing">
            {pricingFeaturesAlternate.map((feature, index) => (
              <li
                key={feature.id}
                className={classNames('d-flex align-items-center', {
                  'mb-3': index !== pricingFeaturesAlternate.length - 1
                })}
              >
                {pricing.features.includes(feature.id) && (
                  <span className="fa-li">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="text-primary"
                    />
                  </span>
                )}
                <p className="mb-0">{feature.label}</p>
                {feature.new && pricing.category === 'Business' && (
                  <Badge variant="phoenix" bg="info" className="ms-2 fs-10">
                    New
                  </Badge>
                )}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PricingItem;

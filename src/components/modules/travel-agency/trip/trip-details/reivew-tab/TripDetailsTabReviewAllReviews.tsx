import React from 'react';
import { Col, Row } from 'react-bootstrap';
import type { TripOverallReview } from 'data/travel-agency/customer/trip';
import GenerateStar from 'components/common/GenerateStar';
import Badge from 'components/base/Badge';
import { numberFormat } from 'helpers/utils';
import classNames from 'classnames';
import TripDetailsReviewChart from 'components/charts/e-charts/TripDetailsReviewChart';

interface TripDetailsTabReviewAllReviewsProps {
  overallReview: TripOverallReview;
}

const TripDetailsTabReviewAllReviews = ({
  overallReview
}: TripDetailsTabReviewAllReviewsProps) => {
  return (
    <Row className="gy-5 align-items-center">
      <Col xl={5} xxl={4}>
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <h3 className="mb-0">
            {numberFormat(overallReview.rating, 'standard', {
              minimumFractionDigits: 1
            })}
          </h3>
          <div className="pe-3 border-end-sm border-translucent">
            <GenerateStar filledStars={5} className="me-1 fs-9" />
            <span className="fw-semibold text-body-tertiary">
              ( {overallReview.reviewCount} reviews )
            </span>
          </div>
          <Badge
            variant="phoenix"
            bg="success"
            className="border-0 px-3 py-2 fs-8 text-capitalize"
          >
            {overallReview.status}
          </Badge>
        </div>
      </Col>
      <Col xl={7} xxl={8}>
        <div className="d-flex gap-5 gap-md-6 gap-xl-8 gap-xxl-6 flex-wrap">
          {overallReview.reviewStates.map((statItem, index) => (
            <div
              key={statItem.id}
              className={classNames(
                'd-lg-flex d-xl-block d-xxl-flex align-items-center gap-3',
                {
                  'ms-xl-auto': index === 0
                }
              )}
            >
              <div className="order-lg-1 order-xl-0 order-xxl-1">
                <TripDetailsReviewChart
                  stat={statItem.count}
                  className="mx-auto"
                />
              </div>
              <h5 className="mb-0 mt-2 mt-lg-0 mt-xl-2 mt-xxl-0 text-center">
                {statItem.name}
              </h5>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default TripDetailsTabReviewAllReviews;

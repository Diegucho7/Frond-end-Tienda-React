import React from 'react';
import TripDetailsTabReviewAllReviews from './reivew-tab/TripDetailsTabReviewAllReviews';
import type { TripReview } from 'data/travel-agency/customer/trip';
import Button from 'components/base/Button';
import TripDetailsTabReviewCommentCard from './reivew-tab/TripDetailsTabReviewCommentCard';

interface TripDetailsTabReviewContentProps {
  tripDetailsReviews: TripReview;
}

const TripDetailsTabReviewContent = ({
  tripDetailsReviews
}: TripDetailsTabReviewContentProps) => {
  return (
    <>
      <TripDetailsTabReviewAllReviews
        overallReview={tripDetailsReviews.overallReview}
      />
      <Button variant="phoenix-secondary" className="my-5">
        Write a review
      </Button>
      <TripDetailsTabReviewCommentCard comments={tripDetailsReviews.comments} />
    </>
  );
};

export default TripDetailsTabReviewContent;

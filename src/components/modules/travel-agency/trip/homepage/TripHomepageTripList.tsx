import React from 'react';
import type { TripHomepageItems } from 'data/travel-agency/customer/trip';
import { Container, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import TripShowcaseItem from '../TripShowcaseItem';

interface TripHomepageTripListProps {
  tripItems: TripHomepageItems[];
}

const TripHomepageTripList = ({ tripItems }: TripHomepageTripListProps) => {
  return (
    <section className="pt-0 pb-9 mt-n13">
      <Container fluid="medium">
        <Row className="g-3">
          {tripItems.map(item => (
            <TripShowcaseItem key={item.id} showcaseItem={item} />
          ))}
        </Row>
        <div className="mt-5 position-relative text-center">
          <hr className="m-0 position-absolute top-50 translate-middle-y w-100" />
          <Button
            variant="phoenix-secondary"
            className="rounded-pill position-relative"
          >
            Show more
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default TripHomepageTripList;

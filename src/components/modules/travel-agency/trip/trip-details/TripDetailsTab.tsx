import { JSX } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import TripDetailsTabDetailsContent from './TripDetailsTabDetailsContent';
import TripDetailsTabReviewContent from './TripDetailsTabReviewContent';
import {
  tripDetailsTabDetailItems,
  tripDetailsReviews
} from 'data/travel-agency/customer/trip';

interface TabItemProps {
  name: string;
  content: JSX.Element;
}

const tabItems: TabItemProps[] = [
  {
    name: 'Details',
    content: (
      <TripDetailsTabDetailsContent
        tripDetailsItems={tripDetailsTabDetailItems}
      />
    )
  },
  {
    name: 'Review',
    content: (
      <TripDetailsTabReviewContent tripDetailsReviews={tripDetailsReviews} />
    )
  }
];

const TripDetailsTab = () => {
  return (
    <Tab.Container defaultActiveKey="Details">
      <Nav variant="pills" className="scrollbar flex-nowrap my-5">
        {tabItems.map(item => (
          <Nav.Item key={item.name} className="text-nowrap">
            <Nav.Link eventKey={item.name}>{item.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content>
        {tabItems.map(item => (
          <Tab.Pane key={item.name} eventKey={item.name}>
            {item.content}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};

export default TripDetailsTab;

import { useMemo, useState, type JSX } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import HotelDetailsAvailability from './HotelDetailsAvailability';
import HotelDetailsDescription from './HotelDetailsDescription';
import HotelDetailsPolicy from './HotelDetailsPolicy';
import HotelDetailsFacilities from './HotelDetailsFacilities';
import HotelReviews from './HotelReviews';
import {
  availableRooms,
  facilities,
  charges,
  ratings,
  reviews
} from 'data/travel-agency/customer/hotelDetails';

interface TabItemProps {
  name: string;
  content: JSX.Element;
}

const generateTabItems = (activeKey: string): TabItemProps[] => [
  {
    name: 'Availability',
    content: <HotelDetailsAvailability availableRooms={availableRooms} />
  },
  {
    name: 'Description',
    content: <HotelDetailsDescription activeKey={activeKey} />
  },
  {
    name: 'Policy',
    content: <HotelDetailsPolicy />
  },
  {
    name: 'Facilities',
    content: (
      <HotelDetailsFacilities facilities={facilities} charges={charges} />
    )
  },
  {
    name: 'Reviews',
    content: <HotelReviews ratings={ratings} reviews={reviews} />
  }
];

const HotelDetailsTab = () => {
  const [activeKey, setActiveKey] = useState('availability');

  const tabItems = useMemo(() => generateTabItems(activeKey), [activeKey]);

  const handleSelect = (key: string | null) => {
    if (key) {
      setActiveKey(key);
    }
  };
  return (
    <Tab.Container
      activeKey={activeKey}
      onSelect={handleSelect}
      mountOnEnter={false}
    >
      <Nav variant="pills" className="scrollbar flex-nowrap mt-5 pb-3 mb-3">
        {tabItems.map(item => (
          <Nav.Item key={item.name} className="text-nowrap">
            <Nav.Link eventKey={item.name.toLowerCase()}>{item.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content>
        {tabItems.map(item => (
          <Tab.Pane key={item.name} eventKey={item.name.toLowerCase()}>
            {item.content}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};

export default HotelDetailsTab;

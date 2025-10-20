import { useMemo, type JSX } from 'react';
import { TripDetailsTabDetailItem } from 'data/travel-agency/customer/trip';
import { Col, Row } from 'react-bootstrap';
import CollapsibleContainer from 'components/common/CollapsibleContainer';
import TripDetailsTabDetailsExpectation from './details-tab/TripDetailsTabDetailsExpectation';
import TripDetailsTabDetailsIncluded from './details-tab/TripDetailsTabDetailsIncluded';
import TripDetailsTabDetailsDeparture from './details-tab/TripDetailsTabDetailsDeparture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import TripDetailsTabDetailsAccessibility from './details-tab/TripDetailsTabDetailsAccessibility';
import TripDetailsTabDetailsPolicy from './details-tab/TripDetailsTabDetailsPolicy';
import TripDetailsSummary from './details-tab/TripDetailsSummary';
import TripDetailsMapCluster from './details-tab/TripDetailsMapCluster';

interface TripDetailsTabDetailsContentProps {
  tripDetailsItems: TripDetailsTabDetailItem;
}

interface CollapsibleContainerContentProps {
  id: string;
  title: string;
  defaultOpen: boolean;
  content: JSX.Element;
  className?: string;
}

const collapsibleContainerContent = (
  tripDetailsItems: TripDetailsTabDetailItem
): CollapsibleContainerContentProps[] => {
  return [
    {
      id: 'collapseWhatToExpect',
      title: 'What to expect',
      defaultOpen: true,
      content: (
        <TripDetailsTabDetailsExpectation
          expectations={tripDetailsItems.expectation}
        />
      )
    },
    {
      id: 'collapseIncluded',
      title: 'What are included or excluded',
      defaultOpen: false,
      className: 'mt-4',
      content: (
        <TripDetailsTabDetailsIncluded
          includedItems={tripDetailsItems.includeOrExclude}
        />
      )
    },
    {
      id: 'collapseDeparture',
      title: 'Departure and return',
      defaultOpen: false,
      className: 'mt-4',
      content: (
        <TripDetailsTabDetailsDeparture
          departureItems={tripDetailsItems.departOrReturn}
        />
      )
    },
    {
      id: 'collapseAccessibility',
      title: 'Accessibility',
      defaultOpen: false,
      className: 'mt-4',
      content: (
        <TripDetailsTabDetailsAccessibility
          accessibility={tripDetailsItems.accessibility}
        />
      )
    },
    {
      id: 'collapseAdditionalInformation',
      title: 'Additional Information',
      className: 'mt-4',
      defaultOpen: false,
      content: (
        <div className="py-6 px-4">
          <ul className="px-0">
            {tripDetailsItems.additional.map(item => (
              <li key={item.id} className="mb-1 d-flex">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-secondary-light me-3 fs-11"
                  transform="down-13 shrink-4"
                />
                {item.additionalItem}
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'collapsePolicy',
      title: 'Policy',
      defaultOpen: false,
      className: 'mt-4',
      content: (
        <TripDetailsTabDetailsPolicy policies={tripDetailsItems.policy} />
      )
    }
  ];
};

const TripDetailsTabDetailsContent = ({
  tripDetailsItems
}: TripDetailsTabDetailsContentProps) => {
  const contents = useMemo(() => {
    return collapsibleContainerContent(tripDetailsItems);
  }, [tripDetailsItems]);
  return (
    <Row className="justify-content-between gx-0 gy-5">
      <Col xl={7}>
        {contents.map(item => (
          <CollapsibleContainer
            key={item.id}
            id={item.id}
            collapseTitle={item.title}
            titleClass="fs-8 fs-sm-7 text-body-highlight"
            className={item.className}
            containerSize="trip"
            defaultOpen={item.defaultOpen}
          >
            {item.content}
          </CollapsibleContainer>
        ))}
      </Col>
      <Col xl={4}>
        <TripDetailsMapCluster />
        <TripDetailsSummary tourSummary={tripDetailsItems.tourSummary} />
      </Col>
    </Row>
  );
};

export default TripDetailsTabDetailsContent;

import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import * as Unicons from '@iconscout/react-unicons';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import { UilPlaneDeparture, UilRocket } from '@iconscout/react-unicons';
import { Card, Col, Row } from 'react-bootstrap';
import IconCard from 'components/cards/IconCard';
import { uniconList } from 'data/icons/uniconList';
import Unicon from 'components/base/Unicon';

const phoenixUniconCode = `
import Unicon from 'components/base/Unicon';

const element = <Unicon icon={UilHome} />
`;

const individualIconCode = `
import { UilHome } from '@iconscout/react-unicons';

const element = <UilHome />
`;

const fullPackageCode = `
import * as Unicons from '@iconscout/react-unicons';

const element = <Unicons.UilHome />
`;

const ExampleCode = `
import Unicon from 'components/base/Unicon';
import { UilRocket, UilPlaneDeparture } from '@iconscout/react-unicons';
import * as Unicons from '@iconscout/react-unicons';

<div>
  <div className="mb-3">
    <Unicon icon={UilRocket} fill="currentColor" className="text-danger me-2" size={32} />
    <Unicon icon={UilRocket} fill="currentColor" className="text-success me-2" size={24} />
    <Unicon icon={UilRocket} fill="currentColor" className="text-primary" size={16} />
  </div>
  <div className="mb-3">
    <UilPlaneDeparture fill="currentColor" className="text-danger me-2" size={32} />
    <UilPlaneDeparture fill="currentColor" className="text-success me-2" size={24} />
    <UilPlaneDeparture fill="currentColor" className="text-primary" size={16} />
  </div>
  <div>
    <Unicons.UilStretcher fill="currentColor" className="text-danger me-2" size={32} />
    <Unicons.UilStretcher fill="currentColor" className="text-success me-2" size={24}  />
    <Unicons.UilStretcher fill="currentColor" className="text-primary" size={16}  />
  </div>
</div>
`;

const UniconsExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="React Unicons"
        description="Pixel-perfect vector icons as React Components."
        link={{
          text: 'Unicons Documentation',
          url: `https://github.com/Iconscout/react-unicons`
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-2">Use Phoenix Unicon component</p>
            <PhoenixLiveEditor code={phoenixUniconCode} />
            <p className="mt-4 mb-2">Use individual icons</p>
            <PhoenixLiveEditor code={individualIconCode} />
            <p className="mt-4 mb-2">Usage as full Package</p>
            <PhoenixLiveEditor code={fullPackageCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body
            code={ExampleCode}
            scope={{ Unicons, Unicon, UilPlaneDeparture, UilRocket }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Icons" />
          <Card.Body>
            <Row className="mt-3">
              {Object.keys(uniconList).map(icon => (
                <Col xs={12} sm={6} md={4} lg={3} key={icon}>
                  <IconCard
                    icon={uniconList[icon]}
                    iconFamily="unicons"
                    name={icon}
                  />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default UniconsExample;

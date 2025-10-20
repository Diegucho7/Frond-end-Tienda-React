import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import FeatherIcon from 'feather-icons-react';
import { Youtube, Facebook, Twitter } from 'feather-icons-react';
import { Card, Col, Row } from 'react-bootstrap';
import IconCard from 'components/cards/IconCard';
import { featherIconList } from 'data/icons/featherIconList';

const defaultExportCode = `
import FeatherIcon from 'feather-icons-react';

const element = <FeatherIcon icon="close" />;
`;

const namedExportCode = `
import { Home } from 'feather-icons-react';

const element = <Home/>
`;

const exampleCode = `
import Home from 'feather-icons-react';
import { Youtube, Facebook, Twitter } from 'feather-icons-react';

<div>
  <div className="mb-3">
    <FeatherIcon icon='home' size={32} className='me-2 text-success' />
    <FeatherIcon icon='home' size={24} className='me-2 text-success' />
    <FeatherIcon icon='home' size={16} className='text-success' />
  </div>

  <div>
    <Facebook className='me-2 text-primary'/>
    <Twitter className='me-2 text-info'/>
    <Youtube className='text-danger'/>
  </div>
</div>
`;

const FeatherIconsExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Feather Icons"
        description="Simply beautiful open source icons"
        link={{
          text: 'Feather Icons Documentation',
          url: `https://github.com/ianmiller347/feather-icons-react`
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <p>
              You can use the default export and pass the <code>icon</code> prop
            </p>
            <PhoenixLiveEditor code={defaultExportCode} />
            <p className="my-3">
              Or you can use the provided named export in place of the{' '}
              <code>icon</code> prop
            </p>
            <PhoenixLiveEditor code={namedExportCode} />
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ FeatherIcon, Youtube, Facebook, Twitter }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard>
          <PhoenixDocCard.Header title="Icons" noPreview />
          <Card.Body>
            <Row className="mt-3">
              {featherIconList.map(icon => (
                <Col xs={12} sm={6} md={4} lg={3} key={icon}>
                  <IconCard icon={icon} iconFamily="feather" name={icon} />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FeatherIconsExample;

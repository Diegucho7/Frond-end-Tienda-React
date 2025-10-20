import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import IconCard from 'components/cards/IconCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import { faSolidIconList } from 'data/icons/faSolidIconList';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Card, Col, Row } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faRegularIconList } from 'data/icons/faRegularIconList';
import { faBrandIconList } from 'data/icons/faBrandIconList';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebook, faTwitter, faYoutube);

const importFromLibrary = `
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  facebook,
} from '@fortawesome/free-brands-svg-icons';
 library.add(fab, faFacebook, faTwitter);

<FontAwesomeIcon icon={['fab', 'facebook']} className="text-facebook fs-5 me-3" />`;

const individualAddIconCode = `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />`;

const exampleCode = `
<div>
  <div>
    <FontAwesomeIcon icon={faHome} className="text-success fs-5 me-3" />
    <FontAwesomeIcon icon={faHome} className="text-success fs-6 me-3" />
    <FontAwesomeIcon icon={faHome} className="text-success fs-7" />
  </div>
  <div className='mt-3'>
    <FontAwesomeIcon icon={['fab', 'facebook']} className="text-facebook fs-5 me-3" />
    <FontAwesomeIcon icon={['fab', 'twitter']} className="text-twitter fs-5 me-3"/>
    <FontAwesomeIcon icon={['fab', 'youtube']} className="text-youtube fs-5 me-3"/>
  </div>
</div>`;

const FontAwesomeExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="React Fontawesome"
        description="Font Awesome 6 React component using SVG with JS"
        link={{
          text: 'React Fontawesome Documentation',
          url: `https://fontawesome.com/v5/docs/web/use-with/react`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Usage" noPreview />
          <PhoenixDocCard.Body>
            <p className="mb-3">
              Import your icon from your desired icon module and then pass it to
              <code>library.add()</code> function.
            </p>
            <PhoenixLiveEditor code={importFromLibrary} />

            <p className="my-3">
              you can explicitly import icons into each component for individual
              use.
            </p>
            <PhoenixLiveEditor code={individualAddIconCode} />
            <p className="mb-0 mt-3">
              For better understanding you can visit{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fontawesome.com/v5/docs/web/use-with/react#using-icons-via-individual-use"
              >
                fontawesome usage
              </a>
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ FontAwesomeIcon, faHome }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid Icons" noPreview />
          <Card.Body>
            <p className="mb-2">
              Import solid icons from{' '}
              <code>@fortawesome/free-solid-svg-icons.</code>
            </p>
            <PhoenixLiveEditor
              code={`import {faHome} from @fortawesome/free-solid-svg-icons'`}
            />
            <Row className="mt-3">
              {Object.keys(faSolidIconList).map(icon => (
                <Col xs={12} sm={6} md={4} lg={3} key={icon}>
                  <IconCard
                    iconFamily="font-awesome"
                    icon={faSolidIconList[icon]}
                    name={icon}
                  />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Regular Icons" noPreview />
          <Card.Body>
            <p className="mb-2">
              Import regular icons from{' '}
              <code>@fortawesome/free-regular-svg-icons.</code>
            </p>
            <PhoenixLiveEditor
              code={`import {faHome} from @fortawesome/free-regular-svg-icons'`}
            />
            <Row className="mt-3">
              {Object.keys(faRegularIconList).map(icon => (
                <Col xs={12} sm={6} md={4} lg={3} key={icon}>
                  <IconCard
                    iconFamily="font-awesome"
                    icon={faRegularIconList[icon]}
                    name={icon}
                  />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Brand Icons" noPreview />
          <Card.Body>
            <p className="mb-2">
              Import brand icons from{' '}
              <code>@fortawesome/free-brands-svg-icons.</code>
            </p>
            <PhoenixLiveEditor
              code={`import {faHome} from @fortawesome/free-brands-svg-icons'`}
            />
            <Row className="mt-3">
              {Object.keys(faBrandIconList).map(icon => (
                <Col xs={12} sm={6} md={4} lg={3} key={icon}>
                  <IconCard
                    iconFamily="font-awesome"
                    icon={faBrandIconList[icon]}
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

export default FontAwesomeExample;

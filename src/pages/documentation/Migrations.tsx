import {
  faCircleInfo,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import migrations from 'data/migrations';
import { Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router';
import MigrationToNineteen from './MigrationToNineteen';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const Migrations = () => {
  const location = useLocation();
  useEffect(() => {
    if(location.hash){
      const el = document.getElementById(location.hash.replace('#', ''));
      if(el) {
        setTimeout(() => {
          el.scrollIntoView({behavior: 'smooth'})
        }, 0)
      }
    }
  }, [location])
  return (
    <div>
      <h2 className="mb-4 lh-sm">Migrations</h2>

      <Card className="mb-4">
        <Card.Body>
          <Alert variant="subtle-warning" className="mb-0">
            <div className="d-flex">
              <FontAwesomeIcon icon={faExclamationTriangle} className="fs-5" />
              <div className="ms-3 flex-1">
                <h4 className="alert-heading">Before you update!</h4>
                Backup your files and read the changelog before updating{' '}
                {import.meta.env.VITE_TITLE}-React on your project. If you come
                across with any problems with {import.meta.env.VITE_TITLE}
                -React template during the update, feel free to contact us at{' '}
                <a href="mailto:support@themewagon.com">
                  support@themewagon.com
                </a>
                .
              </div>
            </div>
          </Alert>
        </Card.Body>
      </Card>

      {migrations.map(migration => (
        <PhoenixDocCard className="mb-4" key={migration.from}>
          <PhoenixDocCard.Header noPreview>
            <div className="d-flex align-items-center" id={migration.to}>
              <p className="text-body text-nowrap mb-0">
                <code className="fs-7 opacity-50">{migration.from}</code>
                <span className="mx-3">to</span>
                <code className="fs-7">{migration.to}</code>
              </p>
              <Link
                to={`#${migration.to}`}
                className="opacity-0 hover-show fw-bold ps-2"
              >
                #
              </Link>
            </div>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body>
            {migration.to === 'v2.0.0' && (
              <MigrationToNineteen />
            )}
            {migration.to === 'v1.9.0' && (
              <>
                <div className="bg-body-highlight p-3 py-5 mb-5">
                  <Alert
                    variant={'subtle-warning'}
                    className="d-flex align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="text-warning fs-5 me-3"
                    />
                    This is a major update. Please backup your project before
                    upgrading to the latest version
                  </Alert>
                  <p>
                    In this version, we have migrated our project from Create
                    React App (CRA) to Vite. If you're upgrading from{' '}
                    <code>v1.8.0</code> to <code>v1.9.0</code>, please follow
                    the steps outlined below.
                  </p>
                  <h5 className="mb-2">1. Install Required packages</h5>
                  <PhoenixLiveEditor
                    code={`npm install vite vite-tsconfig-paths rtlcss @vitejs/plugin-react @types/rtlcss`}
                  />
                  <h5 className="mt-3 mb-2">
                    2. Uninstall CRA & webpack Related Packages
                  </h5>
                  <PhoenixLiveEditor
                    code={`npm uninstall react-scripts clean-webpack-plugin css-loader file-loader mini-css-extract-plugin sass-loader webp-converter webpack webpack-cli webpack-fix-style-only-entries @automattic/webpack-rtl-plugin @craco/craco @craco/types`}
                  />
                  <h5 className="mt-3">3. Update Entry File</h5>
                  <ul>
                    <li>
                      Rename <code>index.tsx</code> to <code>main.tsx</code> and
                      update the changes from this latest version.
                    </li>
                  </ul>
                  <h5 className="mt-3">4. Move and Add Files</h5>
                  <ul>
                    <li>
                      Move <code>index.html</code> from <code>src</code> to root
                      folder and update the changes.
                    </li>
                    <li>
                      Make sure you add the files listed below from this latest
                      version.
                      <ul>
                        <li>
                          <code>compile-scss.ts</code>
                        </li>
                        <li>
                          <code>eslint.config.js</code>
                        </li>
                        <li>
                          <code>global.d.ts</code>
                        </li>
                        <li>
                          <code>index.html</code>
                        </li>
                        <li>
                          <code>src/vite-env.d.ts</code>
                        </li>
                        <li>
                          <code>vite.config.ts</code>
                        </li>
                        <li>
                          <code>tsconfig.app.json</code>
                        </li>
                        <li>
                          <code>tsconfig.node.json</code>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h5 className="mt-3">5. Update SCSS imports</h5>
                  <ul>
                    <li>
                      In vite <code>~</code> is not supported SCSS files. You
                      need to update all the import paths to use relative or
                      absolute paths instead, like the examples below
                    </li>
                    <PhoenixLiveEditor
                      code={`@import '~bootstrap/scss/functions'\n//to \n@import '../../../node_modules/bootstrap/scss/functions'\n\nReview the files listed below and any other files where the ~ symbol is used to import from node_modules:\nsrc/assets/scss/theme.scss, \nsrc/assets/scss/_bootstrap.scss, \nsrc/assets/scss/user.scss`}
                    />
                  </ul>

                  <h5 className="mt-3">6. Update environment variables</h5>
                  <ul>
                    <li className="mt-2">
                      Rename all <code>REACT_APP_</code> prefix ➝ to{' '}
                      <code>VITE_</code>, following the example below.
                    </li>
                    <PhoenixLiveEditor
                      code={`VITE_PUBLIC_URL=\nVITE_PORT=\nVITE_NAME=\nVITE_TITLE=\nVITE_VERSION=\nVITE_BS_VERSION=\nVITE_TINYMCE_APIKEY=\nVITE_MAPBOX_ACCESS_TOKEN=\nVITE_RB_URL_PREFIX=\nVITE_PURCHASE_LINK=`}
                    />
                    <li className="mt-2">
                      Replace all <code>process.env</code> with{' '}
                      <code>import.meta</code> like the examples below
                    </li>
                    <PhoenixLiveEditor
                      code={`process.env.REACT_APP_API_URL \n//with \nimport.meta.env.VITE_API_URL`}
                    />
                  </ul>
                  <h5 className="mt-3 mb-2">
                    7. Update the following scripts in <code>package.json</code>
                    .
                  </h5>
                  <PhoenixLiveEditor
                    code={`"scripts": {\n "dev": "vite",\n "build": "vite build",\n "preview": "vite preview",\n}`}
                  />
                  <h5 className="mt-3 mb-2">8. Run the server</h5>
                  <PhoenixLiveEditor code={`npm run dev`} />
                </div>
              </>
            )}
            <ul className="bullet-inside ps-0">
              <li>
                <h6 className="d-inline-block">Add</h6>
                <ul>
                  {migration.new.map(file => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              </li>
              <li>
                <h6 className="d-inline-block">Modify</h6>
                <ul>
                  {migration.update.map(file => (
                    <li key={file}>{file}</li>
                  ))}
                </ul>
              </li>
              {migration.delete && (
                <li>
                  <h6 className="d-inline-block">Remove</h6>
                  <ul>
                    {migration.delete.map(file => (
                      <li key={file}>{file}</li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>
      ))}
    </div>
  );
};

export default Migrations;

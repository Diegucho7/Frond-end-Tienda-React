import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import { Alert } from 'react-bootstrap';
import {
  ecomTopRegionsMap,
  forawardRefCode,
  providerCode,
  scrollbarCodeType,
  scrollbarHelperCode,
  useContextReplaceCode
} from 'data/migrations';

const MigrationToNineteen = () => {
  return (
    <>
      <div className="bg-body-highlight p-3 py-5 mb-5">
        <Alert variant={'subtle-warning'} className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="text-warning fs-5 me-3"
          />
          <p>
            This is a major update. Please backup your project before upgrading
            to the latest version. This version is purely focused on updating
            the react version. See the{' '}
            <a
              href="https://react.dev/blog/2024/04/25/react-19-upgrade-guide"
              target="_blank"
            >
              migration guide
            </a>
          </p>
        </Alert>
        <p>
          In this version, we have migrated our project from{' '}
          <code>React 18.2.0</code> to <code>React 19.1.0</code> and all the
          dependencies that are compatible with <code>react 19</code>. If you're
          upgrading from <code>v1.10.0</code> to <code>v2.0.0</code>, please
          follow the steps outlined below.
        </p>
        <h5 className="mt-3 mb-2">
          1. Update the <code>package.json</code> file.
        </h5>
        <p>
          All Phoenix React packages are compatible with React 19. Please update
          all dependencies and devDependencies in your <code>package.json</code>{' '}
          to the latest versions from Phoenix React.
        </p>

        <h5 className="mt-3 mb-2">
          2. Updating the <code>react-router-dom</code> to{' '}
          <code>react-router</code>. See the{' '}
          <a href="https://reactrouter.com/upgrading/v6#upgrade-to-v7">
            migration
          </a>{' '}
          guide for more details.
        </h5>
        <p>
          As <code>react-router-dom</code> updates their package from{' '}
          <code>react-router-dom</code> to <code>react-router</code>. We have
          replaced all the occurrences of <code>react-router-dom</code> with{' '}
          <code>react-router</code>. So we have to update the imports in the
          components as such.
        </p>
        <h5 className="mt-3 mb-2">
          3. Updating the <code>Suspense</code> in <code>Route.tsx</code>
        </h5>
        <p>
          In the <code>Routes.tsx</code> where we have used suspense, we have to
          use the key property. So that it helps with the better transition of
          the page that avoid hiding already visible content.
        </p>
        <PhoenixLiveEditor
          code={`<Suspense key={location.pathname} fallback={'Loading..'}>`}
        />
        <h5 className="mt-3 mb-2">
          4. Updating the <code>forwardRef</code> to <code>ref</code>
        </h5>
        <p>
          Previously, we used <code>forwardRef</code> to forward the{' '}
          <code>ref</code>, just as React used to do. In the current version of
          react, we can use <code>ref</code> directly in the component. We need to update the
          components that use <code>forwardRef</code> to reference.
        </p>
        <PhoenixLiveEditor code={forawardRefCode} />
        <h5 className="mt-3 mb-2">
          5. Switch from <code>useContext</code> to the new <code>use()</code>{' '}
          API hook
        </h5>
        <p>
          React 19 introduces <code>use()</code> API Hook, which is useful for
          retrieving Context or async data. Now look for all occurrence of{' '}
          <code>useContext</code> and replace them with <code>use()</code> hook.
        </p>
        <PhoenixLiveEditor code={useContextReplaceCode} />
        <h5 className="mt-3 mb-2">
          6. Use the shorthand <code>Provider</code> syntax
        </h5>
        <p>
          In React 19, you can render <code>Context</code> as a provider instead
          of <code>{`<Context.Provider>`}</code>. So replace all the occurrences
          of <code>{`<Context.Provider>`}</code> with the shorthand
          <code>{`<Context>`}</code> syntax.
        </p>
        <PhoenixLiveEditor code={providerCode} />
        <h5 className="mt-3 mb-2">
          7. Check more updating guides using <code>Codemods</code>
        </h5>
        <p>
          Codemons help with upgrading the react 19. It list all the changes that can
          be made from react 18 to react 19 and changes them into react 19. It
          also supports typescript support. You can change the code following
          the list:
        </p>
        <PhoenixLiveEditor
          code={`
            npx types-react-codemod@latest preset-19 . // for TypeScript
          `}
        />
        <h5 className="mt-3 mb-2">
          8. Update the <code>Scrollbar</code> Component in{' '}
          <code>components/base</code> and its types.
        </h5>
        <p>
          Though we migrated our scrollbar from{' '}
          <code>react-custom-scrollbars-2</code> to <code>simplebar-react</code>
          . We have to update our <code>Scrollbar</code> base component in{' '}
          <code>src/component/base/Scrollbar.tsx</code> as such.
        </p>
        <p className="mt-2">
          Also we need to declare the types for the <code>simplebar-react</code>.
          Though it doesn't provide the types default. To write the types, create
          a file in the <code>src/types</code> named{' '}
          <code>simplebar-react.d.ts</code> and add the following code.
        </p>
        <PhoenixLiveEditor code={scrollbarCodeType} />
        <p className="mt-2">
          After fixing the scrollbar. We have to fix all the occurrences of
          Scrollbar. Though Scrollbar takes its own height. It will create
          design inconsistencies. So that we have to update the height as its
          design needs.
        </p>
        <PhoenixLiveEditor code={scrollbarHelperCode} />

        <h5 className="mt-3 mb-2">
          9. Updating the <code>EcomTopRegionsMap</code>
        </h5>
        <p>
          Previously we had used{' '}
          <code>@changey/react-leaflet-markercluster</code> to mark the
          cluster in the Leaflet map. In this version we have removed this
          package because it is incompatible with <code>react 19</code>. We have used{' '}
          <code>react-leaflet-markercluster</code>. So we have to update the
          <code>EcomTopRegionsMap</code> component accordingly.
        </p>
        <PhoenixLiveEditor code={ecomTopRegionsMap} />

        <h5 className="mt-3 mb-2">
          10. Updating the <code>Unicons</code> and <code>FontAwesome</code>{' '}
          icons.
        </h5>
        <p>
          In the current version of <code>@iconscout/react-unicons</code> and{' '}
          <code>font-awesome</code>. Some of the icons were removed. So, we have to
          update the icons in the corresponding components. The icons that
          removed are:
        </p>
        <strong>
          Unicons icon in (<code>react-unicons.d.ts</code> and{' '}
          <code>src/data/icons/uniconList.ts</code>)
        </strong>
        <ul className="list-inside">
          <li>UilArrowGrowth</li>
          <li>UilBabyCarriage</li>
          <li>UilBed</li>
          <li>UilBrowser</li>
          <li>UilCalender to UilCalendar</li>
          <li>UilCornerUpLeftAlt</li>
        </ul>
        <strong>
          Font-awesome icon (<code>src/data/icons/faSolidIconList.ts</code>)
        </strong>
        <ul className="list-inside">
          <li>FaArrowTurnRight</li>
        </ul>
        <p>
          Although Unicons no longer provide auto-fill color. Icons no longer 
          automatically apply the color. So we have to explicitly add the{' '}
          <code>fill="currentColor"</code> attribute in all the Unicons icons occurrences.
        </p>

        <h5 className="mt-3 mb-2">
          11. Updating the <code>PhoenixLiveProvider</code>.
        </h5>
        <p>
          In the <code>PhoenixLiveProvider</code> file. However,{' '}
          <code>prism-react-renderer</code> no longer provides the{' '}
          <code>defaultProps</code>. Therefore, we have to remove the{' '}
          <code>defaultProps</code> and their type from the file. Update the{' '}
          <code>PhoenixLiveProvider</code>.
        </p>
        <h5 className="mt-3 mb-2">
          12. Remove the <code>package-lock.js</code> and{' '}
          <code>node_modules</code>.
        </h5>
        <p>
          After replacing the <code>package.json</code> file, remove the existing{' '}
          <code>package-lock.json</code> and <code>node_modules</code>. Then run
          the install command to add the dependencies
        </p>
        <PhoenixLiveEditor
          code={`rm -rf package-lock.json node_modules && npm install`}
        />
        <h5 className="mt-3 mb-2">13. Run the project.</h5>
        <p>
          After updating all the changes. Run the project to see if everything
          works as expected.
        </p>
        <PhoenixLiveEditor code="npm run dev" />
      </div>
    </>
  );
};

export default MigrationToNineteen;

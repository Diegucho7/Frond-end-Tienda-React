import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <p className="text-primary">text-primary</p>
  <p className="text-secondary">text-secondary</p>
  <p className="text-success">text-success</p>
  <p className="text-info">text-info</p>
  <p className="text-warning">text-warning</p>
  <p className="text-danger">text-danger</p>
  <p className="text-body">text-body</p>
  <p className="text-body-highlight">text-body-highlight</p>
  <p className="text-body-secondary">text-body-secondary</p>
  <p className="text-body-tertiary">text-body-tertiary</p>
  <p className="text-body-quaternary">text-body-quaternary</p>
  <p className="text-body-emphasis">text-body-emphasis</p>
  <p className="text-primary-subtle bg-dark dark__bg-gray-400">text-primary-subtle</p>
  <p className="text-primary-light">text-primary-light</p>
  <p className="text-primary-lighter">text-primary-lighter</p>
  <p className="text-primary-dark">text-primary-dark</p>
  <p className="text-primary-darker">text-primary-darker</p>
  <p className="text-primary-emphasis">text-primary-subtle</p>
  <p className="text-secondary-subtle bg-dark dark__bg-gray-400">text-secondary-subtle</p>
  <p className="text-secondary-light">text-secondary-light</p>
  <p className="text-secondary-lighter">text-secondary-lighter</p>
  <p className="text-secondary-dark bg-white">text-secondary-dark</p>
  <p className="text-secondary-darker">text-secondary-darker</p>
  <p className="text-secondary-emphasis">text-secondary-subtle</p>
  <p className="text-success-subtle bg-dark dark__bg-gray-400">text-success-subtle</p>
  <p className="text-success-light">text-success-light</p>
  <p className="text-success-lighter">text-success-lighter</p>
  <p className="text-success-dark">text-success-dark</p>
  <p className="text-success-darker">text-success-darker</p>
  <p className="text-success-emphasis">text-success-subtle</p>
  <p className="text-info-subtle bg-dark dark__bg-gray-400">text-info-subtle</p>
  <p className="text-info-light">text-info-light</p>
  <p className="text-info-lighter">text-info-lighter</p>
  <p className="text-info-dark">text-info-dark</p>
  <p className="text-info-darker">text-info-darker</p>
  <p className="text-info-emphasis">text-info-subtle</p>
  <p className="text-warning-subtle bg-dark dark__bg-gray-400">text-warning-subtle</p>
  <p className="text-warning-light">text-warning-light</p>
  <p className="text-warning-lighter">text-warning-lighter</p>
  <p className="text-warning-dark">text-warning-dark</p>
  <p className="text-warning-darker">text-warning-darker</p>
  <p className="text-warning-emphasis">text-warning-subtle</p>
  <p className="text-danger-subtle bg-dark dark__bg-gray-400">text-danger-subtle</p>
  <p className="text-danger-light">text-danger-light</p>
  <p className="text-danger-lighter">text-danger-lighter</p>
  <p className="text-danger-dark">text-danger-dark</p>
  <p className="text-danger-darker">text-danger-darker</p>
  <p className="text-danger-emphasis">text-warning-subtle</p>

</>`;

const howItWorksCode = `
    .text-primary {
        --phoenix-text-opacity: 1;
        color: rgba(var(--phoenix-primary-rgb), var(--phoenix-text-opacity)) !important;
    }  
`;

const opacityCode = `
<>
  <div className="text-primary mb-1"> This is default primary text </div>
  <div
      className="text-primary mb-1"
      style={{ '--phoenix-text-opacity': 0.5 }}
  >
      This is 50% opacity primary text using inline css
  </div>
  <div className="text-primary text-opacity-75 mb-1">
      This is 75% opacity primary text using utility class
  </div>
  <div className="text-primary text-opacity-50 mb-1">
      This is 50% opacity primary text using utility class
  </div>
  <div className="text-primary text-opacity-25 mb-1">
     This is 25% opacity primary text using utility class
  </div>
</>
`;

const ColorsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Color"
        description="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Colors" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <DocPageHeader title="Opacity" className="mb-5">
          <p className="mb-0">
            Color opacity allows for real-time color changes without compilation
            and dynamic alpha transparency changes.
          </p>
        </DocPageHeader>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="How it works" noPreview>
            <p className="text-body-tertiary mb-0">
              Consider our default <code>.text-primary </code>utility.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={howItWorksCode} hidePreview />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Opacity Example" />

          <PhoenixDocCard.Body code={opacityCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ColorsExample;

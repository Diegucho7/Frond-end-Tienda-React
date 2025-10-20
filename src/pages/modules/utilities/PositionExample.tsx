import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
  .position-static
  .position-relative
  .position-absolute
  .position-sticky
  .fixed-top
  .fixed-bottom
`;

const arrangElementsCode = `<>
  <div className="position-relative bg-body-secondary mb-4" style={{ height: '200px' }}>
    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-0 start-0"></div>
    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-0 end-0"></div>
    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-50 start-50"></div>
    <div className="p-3 bg-body-quaternary rounded-1 position-absolute bottom-50 end-50"></div>
    <div className="p-3 bg-body-quaternary rounded-1 position-absolute bottom-0 start-0"></div>
    <div className="p-3 bg-body-quaternary rounded-1 position-absolute bottom-0 end-0"></div>
  </div>
  <div className="position-relative" style={{ height: '100px', width: '100px' }}>
    <div className="bg-body-quaternary rounded-1 text-white d-flex flex-center position-absolute all-0">
      .all-0
    </div>
  </div>
</>`;
const centerElementsCode = `<div className="position-relative bg-body-secondary" style={{height: '200px'}}>
  <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-0 start-50 translate-middle-x"></div>
  <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-50 start-0 translate-middle-y"></div>
  <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-50 start-50 translate-middle"></div>
  <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-50 end-0 translate-middle-y"></div>
  <div className="p-3 bg-body-quaternary rounded-1 position-absolute bottom-0 start-50 translate-middle-x"></div>
</div>`;

const PositionExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Position"
        description="Use these shorthand utilities for quickly configuring the position of an element."
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Position values"
            description="Quick positioning classes are available, though they are not responsive."
            noPreview
          />
          <PhoenixDocCard.Body hidePreview code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Arrange Elements">
            <p className="mb-0 mt-2 text-body-secondary">
              Arrange elements easily with the edge positioning utilities. The
              format is <code>{`{property}-{position}`}</code> has special
              utility class <code>.all-0 </code>
              to give full height/width to child element of parent element.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={arrangElementsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Center Elements">
            <p className="mb-0 text-body-secondary">
              In addition, you can also center the elements with the transform
              utility classes <code>.translate-middle</code>,{' '}
              <code>.translate-middle-x </code>,{' '}
              <code>.translate-middle-y</code>. Responsive variations also exist
              for <code>transform-middle</code>, For example:{' '}
              <code>
                transform-{`{xxl | xl | lg | md | sm}-middle-{x | y}`}
              </code>
              .
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={centerElementsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default PositionExample;

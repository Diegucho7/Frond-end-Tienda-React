import React from 'react';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixReactRange from 'components/forms/PhoenixReactRange';

const defaultRangeCode = `
function DefaultExample() {
  const [values, setValues] = useState([10]);
  return (
    <PhoenixReactRange
      values={values}
      variant='primary'
      onChange={val => setValues(val)}
    />
  )
}
`;

const RangeConnectCode = `
function RangeConnectExample() {
  const [values, setValues] = useState([20,80]);
  return (
    <PhoenixReactRange
      values={values}
      variant='primary'
      onChange={val => setValues(val)}
    />
  )
}
`;

const ColoredSliderCode = `
function ColoredSliderExample() {
  const [values, setValues] = useState({
    primary: [45],
    success: [35],
    info: [40],
    warning: [70],
    danger: [65]
  });
  return (
    <>
      <PhoenixReactRange
        values={values['primary']}
        variant="primary"
        onChange={val => setValues({...values, primary: val})}
        classNames={'mb-4'}
      />
      <PhoenixReactRange
        values={values['success']}
        variant="success"
        onChange={val => setValues({...values, success: val})}
        classNames={'mb-4'}
      />
      <PhoenixReactRange
      values={values['info']}
      variant="info"
      onChange={val => setValues({...values, info: val})}
      classNames={'mb-4'}
      />
      <PhoenixReactRange
      values={values['warning']}
      variant="warning"
      onChange={val => setValues({...values, warning: val})}
      classNames={'mb-4'}
      />
      <PhoenixReactRange
        values={values['danger']}
        variant="danger"
        onChange={val => setValues({...values, danger: val})}
      />
    </>
  )
}
`;

const StylingCode = `
function StylingExample() {
  const [values, setValues] = useState({
    slim: [45],
    medium: [45],
    large: [20, 150],
  });
  return (
    <>
      <PhoenixReactRange
        values={values['slim']}
        variant="primary"
        onChange={val => setValues({...values, slim: val})}
        trackHeight={'4px'}
        classNames= {'phoenix-react-range-slim mb-4'}
      />
      <PhoenixReactRange
        values={values['medium']}
        variant="primary-lighter"
        trackHeight={'6px'}
        onChange={val => setValues({...values, medium: val})}
        classNames={'phoenix-react-range-medium mb-4'}
      />
      <PhoenixReactRange
      values={values['large']}
      variant="primary-lighter"
      min={0}
      max={250}
      trackHeight={'1.5rem'}
      onChange={val => setValues({...values, large: val})}
      classNames={'phoenix-react-range-large'}
      />
    </>
  )
}
`;

const ReactRangeExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Range Slider"
        description={`${
          import.meta.env.VITE_TITLE
        } using React-range for advanced input with a slider which allows bring your own styles and markup.`}
        link={{
          text: 'React-range Documentation',
          url: 'https://github.com/tajo/react-range/'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="overflow-visible mb-4">
          <PhoenixDocCard.Header title="Default" />
          <PhoenixDocCard.Body
            code={defaultRangeCode}
            scope={{ PhoenixReactRange }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="overflow-visible mb-4">
          <PhoenixDocCard.Header title="Range Connect" />
          <PhoenixDocCard.Body
            code={RangeConnectCode}
            scope={{ PhoenixReactRange }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="overflow-visible mb-4">
          <PhoenixDocCard.Header title="Colored Sliders" />
          <PhoenixDocCard.Body
            code={ColoredSliderCode}
            scope={{ PhoenixReactRange }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="overflow-visible mb-4">
          <PhoenixDocCard.Header title="Styling" />
          <PhoenixDocCard.Body
            code={StylingCode}
            scope={{ PhoenixReactRange }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ReactRangeExample;

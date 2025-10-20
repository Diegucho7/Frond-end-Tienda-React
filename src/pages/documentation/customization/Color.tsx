import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import React from 'react';
import { Table } from 'react-bootstrap';

const BodyColorDemo = () => {
  return (
    <>
      <tr>
        <td rowSpan={2}>
          <strong>body</strong>
        </td>
        <td className="ps-0">
          <div
            className="p-5 rounded-2"
            style={{
              backgroundColor: 'var(--phoenix-body-color)'
            }}
          ></div>
        </td>
        <td>
          <code>--phoenix-body-color</code>
          <br />
          <code>--phoenix-body-color-rgb</code>
        </td>
        <td>
          <code>text-body</code>
        </td>
      </tr>
      <tr>
        <td>
          <div
            className="p-5 rounded-2"
            style={{
              backgroundColor: 'var(--phoenix-body-bg)'
            }}
          ></div>
        </td>
        <td>
          <code>--phoenix-bg-color</code>
          <br />
          <code>--phoenix-body-bg-rgb</code>
        </td>
        <td>
          <code>bg-body</code>
        </td>
      </tr>
    </>
  );
};
const ColorDemo = ({ color }: { color: string }) => {
  return (
    <>
      <tr>
        <td rowSpan={2}>
          <strong className="text-capitalize">{color}</strong>
        </td>
        <td className="ps-0">
          <div
            className="p-5 rounded-2"
            style={{
              backgroundColor: `var(--phoenix-${color}-color)`
            }}
          ></div>
        </td>
        <td>
          <code>--phoenix-{color}-color</code>
          <br />
          <code>--phoenix-{color}-color-rgb</code>
        </td>
        <td>
          {color === 'body-highlight' ? (
            <code>text-{color}</code>
          ) : (
            <code>text-body-{color}</code>
          )}
        </td>
      </tr>
      <tr>
        <td>
          <div
            className="p-5 rounded-2"
            style={{
              backgroundColor: `var(--phoenix-${color}-color)`
            }}
          />
        </td>
        <td>
          <code>--phoenix-{color}-bg</code>
          <br />
          <code>--phoenix-{color}-bg-rgb</code>
        </td>
        <td>
          {color === 'body-highlight' ? (
            <code>bg-{color}</code>
          ) : (
            <code>bg-body-{color}</code>
          )}
        </td>
      </tr>
    </>
  );
};
const ColorShadesDemo = ({ color }: { color: string }) => {
  const variants = ['subtle', 'lighter', 'light', 'dark', 'darker', 'emphasis'];
  return (
    <>
      <tr>
        <td rowSpan={7}>
          <strong className="text-capitalize">{color}</strong>
        </td>
        <td className="ps-0">
          <div className={`p-5 rounded-2 bg-${color}`}></div>
        </td>
        <td>
          <code>--phoenix-{color}</code>
          <br />
          <code>--phoenix-{color}-rgb</code>
        </td>
        <td>
          <code>text-{color}</code>
          <br />
          <code>bg-{color}</code>
        </td>
      </tr>
      {variants.map(variant => {
        const key = `${color}-${variant}`;

        if (variant === 'subtle') {
          return (
            <tr key={key}>
              <td className="ps-0">
                <div className={`p-5 rounded-2 bg-${color}-${variant}`}></div>
              </td>
              <td>
                <code>
                  --phoenix-{color}-bg-{variant}
                </code>
              </td>
              <td>
                <code>
                  text-{color}-{variant}
                </code>
                <br />
                <code>
                  bg-{color}-{variant}
                </code>
              </td>
            </tr>
          );
        }

        if (variant === 'emphasis') {
          return (
            <tr key={key}>
              <td className="ps-0">
                <div className={`p-5 rounded-2 bg-${color}-${variant}`}></div>
              </td>
              <td>
                <code>
                  --phoenix-{color}-{variant}
                </code>
              </td>
              <td>
                <code>
                  text-{color}-{variant}
                </code>
                <br />
                <code>
                  bg-{color}-{variant}
                </code>
              </td>
            </tr>
          );
        }

        return (
          <tr key={key}>
            <td className="ps-0">
              <div className={`p-5 rounded-2 bg-${color}-${variant}`}></div>
            </td>
            <td>
              <code>
                --phoenix-{color}-{variant}
              </code>
              <br />
              <code>
                --phoenix-{color}-{variant}-rgb
              </code>
            </td>
            <td>
              <code>
                text-{color}-{variant}
              </code>
              <br />
              <code>
                bg-{color}-{variant}
              </code>
            </td>
          </tr>
        );
      })}
    </>
  );
};
const Color = () => {
  return (
    <div>
      <DocPageHeader
        title="Color"
        description="Phoenix is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project."
      />
      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Config Context" noPreview>
          <p className="text-body-tertiary mb-0">
            Phoenix comes with lots of colors and variants. We added
            <code> quaternary </code>
            and <code> body-highlight </code> colors besides
            <code> secondary </code> and
            <code> tertiary </code> colors and also theme colors shades.
          </p>
        </PhoenixDocCard.Header>
        <PhoenixDocCard.Body>
          <Table responsive className="table-swatches">
            <thead>
              <tr>
                <th
                  className="ps-0"
                  style={{ width: '20%', minWidth: '100px' }}
                >
                  Name
                </th>
                <th
                  className="ps-0"
                  style={{ width: '20%', minWidth: '130px' }}
                >
                  Swatch
                </th>
                <th
                  className="ps-0"
                  style={{ width: '40%', minWidth: '330px' }}
                >
                  CSS variables
                </th>
                <th
                  className="ps-0"
                  style={{ width: '20%', minWidth: '230px' }}
                >
                  Class
                </th>
              </tr>
            </thead>
            <tbody>
              <BodyColorDemo />
              {['secondary', 'tertiary', 'quaternary', 'body-highlight'].map(
                (color, index) => (
                  <ColorDemo color={color} key={index} />
                )
              )}
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info'
              ].map((color, index) => (
                <ColorShadesDemo color={color} key={index} />
              ))}
            </tbody>
          </Table>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

export default Color;

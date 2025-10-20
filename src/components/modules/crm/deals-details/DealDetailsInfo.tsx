import { DealDetailsInfoType } from 'data/crm/dealDetailsInfo';
import { Col, Row, Table } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
interface DealDetailsInfoProps {
  data: DealDetailsInfoType[][];
  className?: string;
}

const DealDetailsInfo = ({ data, className }: DealDetailsInfoProps) => {
  return (
    <div className={classNames('px-xl-4', className)}>
      <Row className="mx-0 mx-sm-3 mx-lg-0 px-lg-0">
        {data.map((category, index) => (
          <Col
            key={index}
            sm={12}
            xxl={6}
            className={classNames('py-3 border-translucent', {
              'col-sm-12 col-xxl-6 border-bottom border-end-xxl': index === 0,
              'border-bottom': index === 1,
              'border-end-xxl border-bottom border-bottom-xxl-0 py-3':
                index === 2
            })}
          >
            <InfoCategory category={category} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const InfoCategory = ({ category }: { category: DealDetailsInfoType[] }) => {
  return (
    <Table borderless className="w-100 table-stats mb-0">
      <thead>
        <tr>
          <th className="p-0" />
          <th className="p-0" />
          <th className="p-0" />
        </tr>
      </thead>
      <tbody>
        {category.map((item, index) => (
          <InfoItem key={item.id} data={item} index={index} />
        ))}
      </tbody>
    </Table>
  );
};

const InfoItem = ({
  data,
  index
}: {
  data: DealDetailsInfoType;
  index: number;
}) => {
  return (
    <tr>
      <td className="py-2 lh-1">
        <div
          className={classNames('d-inline-flex align-items-center p-0', {
            'd-flex': index == 1
          })}
        >
          <div
            className={`d-flex bg-${data.color}-subtle rounded-circle flex-center me-3`}
            style={{ width: '24px', height: '24px' }}
          >
            <FeatherIcon
              icon={data.icon}
              className={`text-${data.color}-dark`}
              width={16}
              height={16}
            />
          </div>
          <p className="fw-bold mb-0">{data.title}</p>
        </div>
      </td>
      <td className="py-2 d-none d-sm-block pe-sm-2">:</td>
      <td className="py-2">
        {data.title === 'Email' ? (
          <a href={`mailto:${data.value}`} className="fw-semibold">
            {data.value}
          </a>
        ) : data.title === 'Phone' ? (
          <a href={`tel:${data.value}`} className="fw-semibold">
            {data.value}
          </a>
        ) : (
          <p
            className={classNames('ps-6 ps-sm-0 fw-semibold mb-0 py-0 pe-0', {
              'pb-3 pb-sm-0': index === 0
            })}
          >
            {data.value}
          </p>
        )}
      </td>
    </tr>
  );
};

export default DealDetailsInfo;

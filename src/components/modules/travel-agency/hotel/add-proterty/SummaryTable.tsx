import classNames from 'classnames';
import {
  PropertyDetails,
  SummaryTableProp
} from 'data/travel-agency/addProperty';
import { Table } from 'react-bootstrap';

const SummaryTable = (props: SummaryTableProp) => {
  const tableItems: PropertyDetails[] = [...props.tableData];

  return (
    <Table className="mb-0">
      <thead>
        <tr>
          <th style={{ width: 176 }} className="p-0" />
          <th style={{ width: 32 }} className="p-0" />
          <th className="p-0" />
        </tr>
      </thead>
      <tbody>
        {tableItems.map((item, index) => (
          <tr key={index}>
            <td
              className={classNames('border-top pt-3 text-nowrap', {
                'pb-0 border-bottom-0': index === tableItems.length - 1
              })}
            >
              <h5 className="fw-semibold text-body-highlight mb-0">
                {item.property}
              </h5>
            </td>
            <td
              className={classNames('border-top px-3 pt-3 w-max-conten', {
                'pb-0 border-bottom-0': index === tableItems.length - 1
              })}
            >
              <p className="mb-0 w-max-content">:</p>
            </td>
            <td
              className={classNames('border-top pt-3', {
                'pb-0 border-bottom-0': index === tableItems.length - 1
              })}
            >
              <p className="mb-0 text-body-secondary">{item.value}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SummaryTable;

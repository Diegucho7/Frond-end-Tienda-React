import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import AdvanceTable from 'components/base/AdvanceTable';
import { ColumnDef } from '@tanstack/react-table';
import { EmployeeRecordTableRowItem } from 'data/stock/stockDetails';
import classNames from 'classnames';
import { numberFormat } from 'helpers/utils';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';

const columns: ColumnDef<EmployeeRecordTableRowItem>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row: { original } }) => {
      const { date } = original;
      return (
        <p className="fs-9 fw-semibold text-body-secondary mb-0">{date}</p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle white-space-nowrap',
        style: { minWidth: '14rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'employees',
    header: 'Employees',
    cell: ({ row: { original } }) => {
      const { employees } = original;
      return (
        <p className="fs-9 fw-semibold text-body-secondary mb-0">
          {numberFormat(employees, 'standard')}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle white-space-nowrap text-center',
        style: { minWidth: '8rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap text-center'
      }
    }
  },
  {
    accessorKey: 'change',
    header: 'Change',
    cell: ({ row: { original } }) => {
      const { change } = original;
      return (
        <p className="fs-9 fw-semibold text-body-secondary mb-0">
          {numberFormat(change, 'standard')}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle text-center',
        style: { minWidth: '8rem' }
      },
      cellProps: {
        className: 'align-middle text-center'
      }
    }
  },
  {
    accessorKey: 'growth',
    header: 'Growth',
    cell: ({ row: { original } }) => {
      const {
        growth: { value, className }
      } = original;
      return (
        <p className={classNames('fs-9 fw-semibold mb-0', className)}>
          {numberFormat(value, 'standard', { minimumFractionDigits: 2 })}%
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle white-space-nowrap text-end',
        style: { minWidth: '11rem' }
      },
      cellProps: {
        className: 'align-middle text-end'
      }
    }
  }
];

const EmployeeRecordsTable = ({
  data
}: {
  data: EmployeeRecordTableRowItem[];
}) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 10,
    pagination: true,
    selection: false,
    sortable: true
  });
  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          className: 'phoenix-table border-top border-translucent fs-9 mb-0'
        }}
        headerClassName="text-uppercase"
      />
      <AdvanceTableFooter
        pagination
        className="py-2 pagination-subtle fs-9"
        nextPageLinkClassName="me-sm-n2"
      />
    </AdvanceTableProvider>
  );
};

export default EmployeeRecordsTable;

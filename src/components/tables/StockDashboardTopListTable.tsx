import AdvanceTable from 'components/base/AdvanceTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import { StockDashboardTableDataType } from 'data/stock/stockDashboard';
import { currencyFormat, numberFormat } from 'helpers/utils';
import classNames from 'classnames';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';

interface StockDashboardTopListTableProps {
  data: StockDashboardTableDataType[];
  tableType: string;
}

export const getColumn = (tableType: string) => {
  const columns: ColumnDef<StockDashboardTableDataType>[] = [
    {
      id: 'symbol',
      accessorKey: 'symbol',
      header: 'Symbol',
      meta: {
        headerProps: { style: { minWidth: '8rem' }, className: 'ps-4' },
        cellProps: {
          className: 'fs-9 text-body fw-semibold white-space-nowrap ps-4'
        }
      }
    },
    {
      accessorKey: 'name',
      header: 'Name',
      meta: {
        headerProps: {
          style: { minWidth: '10rem' },
          className: 'pe-6 align-middle'
        },
        cellProps: {
          className: 'text-body white-space-nowrap'
        }
      }
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row: { original } }) => {
        const { price } = original;
        return currencyFormat(price, { minimumFractionDigits: 2 });
      },
      meta: {
        headerProps: { style: { minWidth: '9.5rem' }, className: 'text-end' },
        cellProps: {
          className: 'text-body white-space-nowrap text-end'
        }
      }
    },
    {
      accessorKey: 'change',
      header: 'Change',
      cell: ({ row: { original } }) => {
        const { change } = original;
        const formatter =
          tableType === 'losers'
            ? `-${numberFormat(change, 'standard', {
                minimumFractionDigits: 2
              })}%`
            : `${numberFormat(change, 'standard', {
                minimumFractionDigits: 2
              })}%`;
        return formatter;
      },
      meta: {
        headerProps: {
          style: { minWidth: '8rem' },
          className: 'px-4 text-end'
        },
        cellProps: {
          className: classNames(
            'fs-9 fw-semibold white-space-nowrap text-end px-4',
            {
              'text-success': tableType === 'gainers',
              'text-danger': tableType === 'losers'
            }
          )
        }
      }
    }
  ];

  return columns;
};

const StockDashboardTopListTable = ({
  data,
  tableType
}: StockDashboardTopListTableProps) => {
  const table = useAdvanceTable({
    data,
    columns: getColumn(tableType),
    pageSize: 7,
    selectionColumnWidth: '30px',
    sortable: true,
    pagination: true
  });
  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        headerClassName="bg-body-highlight"
        tableProps={{
          className:
            'phoenix-table fs-9 table-striped border-top border-translucent'
        }}
      />
      <AdvanceTableFooter
        pagination
        className="pt-2 pe-0 pb-0 fs-9 pagination-subtle"
        nextPageLinkClassName="pe-0 me-0"
      />
    </AdvanceTableProvider>
  );
};

export default StockDashboardTopListTable;

import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import { StockDetailsOptionChainRow } from 'data/stock/optionChainTableData';
import TopStockAdvanceTable from 'components/modules/stock/TopStockAdvanceTable';
import { numberFormat } from 'helpers/utils';

interface StockDetailsOptionChainTableProps {
  data: StockDetailsOptionChainRow[];
}

const columns: ColumnDef<StockDetailsOptionChainRow>[] = [
  {
    header: 'Calls',
    footer: props => props.column.id,
    columns: [
      {
        header: 'BID',
        accessorKey: 'callsBid',
        cell: ({ row: { original } }) => {
          const { callsBid } = original;

          return numberFormat(callsBid, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'fs-10' },
          cellProps: {
            className: 'text-info-dark'
          }
        }
      },
      {
        header: 'ASK',
        accessorKey: 'callsAsk',
        cell: ({ row: { original } }) => {
          const { callsAsk } = original;

          return numberFormat(callsAsk, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'fs-10' },
          cellProps: {
            className: 'text-info-dark'
          }
        }
      }
    ],
    meta: {
      headerProps: { className: 'fs-9' }
    }
  },
  {
    header: 'Strike Price',
    footer: props => props.column.id,
    columns: [
      {
        accessorKey: 'strikePrice',
        header: 'STRIKE',
        cell: ({ row: { original } }) => {
          const { strikePrice } = original;
          return numberFormat(strikePrice, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: {
            className: 'border-x border-translucent fs-10'
          },
          cellProps: {
            className: 'border-x text-body-tertiary fw-bold border-translucent'
          }
        }
      }
    ],
    meta: {
      headerProps: {
        className: 'fs-9 border-x border-translucent'
      }
    }
  },
  {
    header: 'Puts',
    footer: props => props.column.id,
    columns: [
      {
        header: 'BID',
        accessorKey: 'putsBid',
        cell: ({ row: { original } }) => {
          const { putsBid } = original;

          return numberFormat(putsBid, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'fs-10' },
          cellProps: {
            className: 'text-info-dark'
          }
        }
      },
      {
        header: 'ASK',
        accessorKey: 'putsAsk',
        cell: ({ row: { original } }) => {
          const { putsAsk } = original;

          return numberFormat(putsAsk, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'fs-10 pe-0' },
          cellProps: {
            className: 'text-info-dark'
          }
        }
      }
    ],
    meta: {
      headerProps: { className: 'fs-9 pe-0' }
    }
  }
];

const StockDetailsOptionChainTable = ({
  data
}: StockDetailsOptionChainTableProps) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 11,
    sortable: false,
    selectionColumnWidth: '30px',
    pagination: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <TopStockAdvanceTable
        tableProps={{
          className: 'text-center border-top border-translucent'
        }}
        rowClassName="fs-9 fw-semibold"
      />
    </AdvanceTableProvider>
  );
};

export default StockDetailsOptionChainTable;

import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import { OptionTableRow } from 'data/stock/optionChainTableData';
import TopStockAdvanceTable from 'components/modules/stock/TopStockAdvanceTable';
import { numberFormat } from 'helpers/utils';

interface OptionChainTableProps {
  data: OptionTableRow[];
}

const columns: ColumnDef<OptionTableRow>[] = [
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
          headerProps: { className: 'fs-10', style: { minWidth: '6.688rem' } },
          cellProps: {
            className: 'text-info-dark lh-sm'
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
          headerProps: { className: 'fs-10', style: { minWidth: '6.688rem' } },
          cellProps: {
            className: 'text-info-dark lh-sm'
          }
        }
      },
      {
        header: 'LAST',
        accessorKey: 'callsLast',
        cell: ({ row: { original } }) => {
          const { callsLast } = original;

          return numberFormat(callsLast, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'fs-10', style: { minWidth: '6.688rem' } },
          cellProps: {
            className: 'lh-sm'
          }
        }
      },
      {
        header: 'DELTA',
        accessorKey: 'callsDelta',
        cell: ({ row: { original } }) => {
          const { callsDelta } = original;

          return numberFormat(callsDelta, 'standard', {
            maximumFractionDigits: 3,
            minimumFractionDigits: 3
          });
        },
        meta: {
          headerProps: { className: 'fs-10', style: { minWidth: '6.688rem' } },
          cellProps: {
            className: 'lh-sm'
          }
        }
      },
      {
        header: 'GAMMA',
        accessorKey: 'callsGamma',
        cell: ({ row: { original } }) => {
          const { callsGamma } = original;

          return numberFormat(callsGamma, 'standard', {
            maximumFractionDigits: 3,
            minimumFractionDigits: 3
          });
        },
        meta: {
          headerProps: { className: 'fs-10', style: { minWidth: '6.688rem' } },
          cellProps: {
            className: 'lh-sm'
          }
        }
      }
    ],
    meta: {
      headerProps: { className: 'text-capitalize' }
    }
  },
  {
    header: 'Strike Price',
    footer: props => props.column.id,
    columns: [
      {
        accessorKey: 'strikePrice',
        header: 'IV 19.4%',
        cell: ({ row: { original } }) => {
          const { strikePrice } = original;
          return numberFormat(strikePrice, 'standard', {
            maximumFractionDigits: 2
          });
        },
        meta: {
          headerProps: {
            className: 'border-x border-translucent bg-body-highlight fs-10',
            style: { minWidth: '7.5rem' }
          },
          cellProps: {
            className: 'bg-body-highlight border-x border-translucent lh-sm'
          }
        }
      }
    ],
    meta: {
      headerProps: {
        className:
          'bg-body-highlight border-x border-translucent text-nowrap text-capitalize'
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
          headerProps: { className: 'fs-10', style: { minWidth: '6.688rem' } },
          cellProps: {
            className: 'text-info-dark lh-sm'
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
          headerProps: { className: 'fs-10', style: { minWidth: '6.688rem' } },
          cellProps: {
            className: 'text-info-dark lh-sm'
          }
        }
      },
      {
        header: 'LAST',
        accessorKey: 'putsLast',
        cell: ({ row: { original } }) => {
          const { putsLast } = original;

          return numberFormat(putsLast, 'standard', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          });
        },
        meta: {
          headerProps: { className: 'fs-10', style: { minWidth: '6.688rem' } },
          cellProps: {
            className: 'lh-sm'
          }
        }
      },
      {
        header: 'DELTA',
        accessorKey: 'putsDelta',
        cell: ({ row: { original } }) => {
          const { putsDelta } = original;

          return numberFormat(putsDelta, 'standard', {
            maximumFractionDigits: 3,
            minimumFractionDigits: 3
          });
        },
        meta: {
          headerProps: { className: 'fs-10', style: { minWidth: '6.688rem' } },
          cellProps: {
            className: 'lh-sm'
          }
        }
      },
      {
        header: 'GAMMA',
        accessorKey: 'putsGamma',
        cell: ({ row: { original } }) => {
          const { putsGamma } = original;

          return numberFormat(putsGamma, 'standard', {
            maximumFractionDigits: 3,
            minimumFractionDigits: 3
          });
        },
        meta: {
          headerProps: {
            className: 'fs-10 pe-0',
            style: { minWidth: '6.688rem' }
          },
          cellProps: {
            className: 'lh-sm'
          }
        }
      }
    ],
    meta: {
      headerProps: { className: 'text-capitalize pe-0' }
    }
  }
];

const OptionChainTable = ({ data }: OptionChainTableProps) => {
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
          className: 'text-center mb-0'
        }}
        rowClassName="fs-9 fw-semibold"
      />
    </AdvanceTableProvider>
  );
};

export default OptionChainTable;

import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import AdvanceTable from 'components/base/AdvanceTable';
import { ColumnDef } from '@tanstack/react-table';
import { PortfolioTableDataRowItem } from 'data/stock/portfolio';
import { currencyFormat, numberFormat } from 'helpers/utils';

const columns: ColumnDef<PortfolioTableDataRowItem>[] = [
  {
    accessorKey: 'name',
    header: 'Portfolio Name',
    cell: ({ row: { original } }) => {
      const { name } = original;
      return <p className="mb-0 fw-semibold">{name}</p>;
    },
    meta: {
      headerProps: {
        className: 'white-space-nowrap align-middle',
        style: { minWidth: 180 }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'symbols',
    header: 'Symbols',
    cell: ({ row: { original } }) => {
      const { symbols } = original;
      return (
        <p className="mb-0 fw-semibold text-body-tertiary fs-9">{symbols}</p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle text-center',
        style: { minWidth: 120 }
      },
      cellProps: {
        className: 'align-middle text-center white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'costBasis',
    header: 'Cost Basis',
    cell: ({ row: { original } }) => {
      const { costBasis } = original;
      return (
        <p className="mb-0 text-body-tertiary fs-9">
          {currencyFormat(costBasis, { minimumFractionDigits: 2 })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-3',
        style: { minWidth: 150 }
      },
      cellProps: {
        className: 'align-middle text-center ps-3'
      }
    }
  },
  {
    accessorKey: 'marketValue',
    header: 'Market Value',
    cell: ({ row: { original } }) => {
      const {
        marketValue: { price, suffix }
      } = original;
      return (
        <p className="mb-0 text-body-tertiary fs-9">
          {currencyFormat(price, { minimumFractionDigits: 2 })} {suffix}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-3',
        style: { minWidth: 160 }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap ps-3'
      }
    }
  },
  {
    accessorKey: 'dayChange',
    header: 'Day Change',
    cell: ({ row: { original } }) => {
      const { dayChange } = original;

      if (dayChange) {
        const { amount, change, prefix, className } = dayChange;
        return (
          <div className={className}>
            <p className="mb-1 fs-9 fw-bold">
              {prefix}
              {currencyFormat(amount, { minimumFractionDigits: 2 })}
            </p>
            <p className="fs-9 fw-bold mb-1">
              {prefix}
              {numberFormat(change, 'standard', { minimumFractionDigits: 2 })}%
            </p>
          </div>
        );
      }

      return <p className="text-body-tertiary mb-0 fw-bold">---</p>;
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-3',
        style: { minWidth: 140 }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap ps-3'
      }
    }
  },
  {
    accessorKey: 'unrealizedGainLoss',
    header: 'Unrealized Gain / Loss',
    cell: ({ row: { original } }) => {
      const { unrealizedGainLoss } = original;

      if (unrealizedGainLoss) {
        const { amount, change, prefix, className } = unrealizedGainLoss;
        return (
          <div className={className}>
            <p className="mb-1 fs-9 fw-bold">
              {prefix}
              {currencyFormat(amount, { minimumFractionDigits: 2 })}
            </p>
            <p className="fs-9 fw-bold mb-1">
              {prefix}
              {numberFormat(change, 'standard', { minimumFractionDigits: 2 })}%
            </p>
          </div>
        );
      }

      return <p className="text-body-tertiary mb-0 fw-bold">---</p>;
    },
    meta: {
      headerProps: {
        className: 'align-middle pe-3 text-end',
        style: { minWidth: 220 }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap text-end pe-3'
      }
    }
  },
  {
    accessorKey: 'realizedGainLoss',
    header: 'Realized Gain / Loss',
    cell: ({ row: { original } }) => {
      const { realizedGainLoss } = original;

      if (realizedGainLoss) {
        const { amount, change, prefix, className } = realizedGainLoss;
        return (
          <div className={className}>
            <p className="mb-1 fs-9 fw-bold">
              {prefix}
              {currencyFormat(amount, { minimumFractionDigits: 2 })}
            </p>
            <p className="fs-9 fw-bold mb-1">
              {prefix}
              {numberFormat(change, 'standard', { minimumFractionDigits: 2 })}%
            </p>
          </div>
        );
      }

      return <p className="text-body-tertiary mb-0 fw-bold">---</p>;
    },
    meta: {
      headerProps: {
        className: 'align-middle text-end',
        style: { minWidth: 180 }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap text-end'
      }
    }
  }
];

const StockPortfolioTable = ({
  data
}: {
  data: PortfolioTableDataRowItem[];
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
          className: 'border-top phoenix-table mb-0'
        }}
        headerClassName="text-uppercase text-body fw-bold fs-9"
      />
    </AdvanceTableProvider>
  );
};

export default StockPortfolioTable;

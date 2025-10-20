import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import AdvanceTable from 'components/base/AdvanceTable';
import { ColumnDef } from '@tanstack/react-table';
import { WatchlistCashTransactionRowItem } from 'data/stock/watchlist';
import useAdvanceTable from 'hooks/useAdvanceTable';
import { currencyFormat } from 'helpers/utils';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const columns: ColumnDef<WatchlistCashTransactionRowItem>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row: { original } }) => {
      const { date } = original;

      return <p className="fw-semibold mb-0">{date}</p>;
    },
    meta: {
      headerProps: {
        className: 'align-middle white-space-nowrap ps-0',
        style: { minWidth: 240 }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row: { original } }) => {
      const { type } = original;

      return <p className="fs-9 fw-semibold text-body-tertiary mb-0">{type}</p>;
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-3',
        style: { minWidth: 240 }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap ps-3'
      }
    }
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row: { original } }) => {
      const { amount } = original;

      return (
        <p className="fw-semibold text-body-tertiary mb-0 fs-9">
          {currencyFormat(amount, { minimumFractionDigits: 2 })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-0',
        style: { minWidth: 140 }
      },
      cellProps: {
        className: 'align-middle ps-0'
      }
    }
  },
  {
    accessorKey: 'currency',
    header: 'Currency',
    cell: ({ row: { original } }) => {
      const { currency } = original;

      return <p className="text-body-tertiary fs-9 mb-0">{currency}</p>;
    },
    meta: {
      headerProps: {
        className: 'align-middle text-center',
        style: { minWidth: 120 }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap text-center'
      }
    }
  },
  {
    accessorKey: 'note',
    header: 'Note',
    cell: ({ row: { original } }) => {
      const { note } = original;

      return <p className="fs-9 text-body-tertiary mb-0">{note}</p>;
    },
    meta: {
      headerProps: {
        className: 'align-middle text-end',
        style: {
          minWidth: 350
        }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap text-end'
      }
    }
  },
  {
    accessorKey: 'action',
    header: '',
    enableSorting: false,
    cell: () => {
      return (
        <Button variant="link" size="sm" className="text-body-quaternary p-0">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle text-center',
        style: { minWidth: 72 }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap text-end'
      }
    }
  }
];

const WatchlistCashTransactionTable = ({
  data
}: {
  data: WatchlistCashTransactionRowItem[];
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
          className: 'mt-2'
        }}
        headerClassName="fs-9 text-uppercase text-body fw-bold"
      />
    </AdvanceTableProvider>
  );
};

export default WatchlistCashTransactionTable;

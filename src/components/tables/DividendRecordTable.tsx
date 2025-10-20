import AdvanceTable from 'components/base/AdvanceTable';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { ColumnDef } from '@tanstack/react-table';
import { DividendRecordDataTableRowItem } from 'data/stock/dividend';
import { currencyFormat } from 'helpers/utils';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const columns: ColumnDef<DividendRecordDataTableRowItem>[] = [
  {
    accessorKey: 'exDividendDate',
    header: 'Ex-Dividend Date',
    cell: ({ row: { original } }) => {
      const { exDividendDate } = original;
      return (
        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
          {exDividendDate}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'white-space-nowrap align-middle text-uppercase',
        style: { minWidth: '200px' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'cashAmount',
    header: 'Cash Amount',
    cell: ({ row: { original } }) => {
      const { cashAmount } = original;
      return (
        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
          {currencyFormat(cashAmount, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'white-space-nowrap align-middle text-uppercase',
        style: { minWidth: '200px' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'paymentStatus',
    header: 'Payment Status',
    cell: ({ row: { original } }) => {
      const {
        paymentStatus: { title, badgeBg }
      } = original;
      return (
        <Badge variant="phoenix" bg={badgeBg} className="fs-10 rounded-pill">
          {title}
        </Badge>
      );
    },
    meta: {
      headerProps: {
        className: 'text-center align-middle text-uppercase',
        style: { minWidth: '200px' }
      },
      cellProps: {
        className: 'align-middle text-center'
      }
    }
  },
  {
    accessorKey: 'recordDate',
    header: 'Record Date',
    cell: ({ row: { original } }) => {
      const { recordDate } = original;
      return (
        <p className="fs-9 fw-semibold text-body-emphasis mb-0">{recordDate}</p>
      );
    },
    meta: {
      headerProps: {
        className:
          'white-space-nowrap align-middle text-end pe-5 text-uppercase',
        style: { minWidth: '200px' }
      },
      cellProps: {
        className: 'align-middle text-end pe-5 white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'paymentDate',
    header: 'Pay Date',
    cell: ({ row: { original } }) => {
      const { paymentDate } = original;
      return (
        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
          {paymentDate}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'white-space-nowrap align-middle ps-5 text-uppercase',
        style: { minWidth: '200px' }
      },
      cellProps: {
        className: 'fs-9 align-middle ps-5 white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'action',
    enableSorting: false,
    header: '',
    cell: () => {
      return (
        <>
          <div className="position-relative">
            <div className="hover-actions">
              <Button
                variant="phoenix-secondary"
                className="me-1 fs-10"
                size="sm"
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button variant="phoenix-secondary" className="fs-10" size="sm">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </div>
          <RevealDropdown btnClassName="fs-10">
            <ActionDropdownItems />
          </RevealDropdown>
        </>
      );
    }
  }
];

const DividendRecordTable = ({
  data
}: {
  data: DividendRecordDataTableRowItem[];
}) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 10,
    pagination: true,
    selection: true,
    selectionColumnWidth: '30px',
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          className: 'phoenix-table fs-9 mb-0 border-top border-translucent'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter
        pagination
        className="py-2 pe-0 fs-9 pagination-subtle"
        nextPageLinkClassName="me-sm-n2"
      />
    </AdvanceTableProvider>
  );
};

export default DividendRecordTable;

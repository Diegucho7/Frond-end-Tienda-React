import { ColumnDef } from '@tanstack/react-table';
import classNames from 'classnames';
import AdvanceTable from 'components/base/AdvanceTable';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { EconomicPredictionTableRowItem } from 'data/stock/forecast';
import { currencyFormat, numberFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

const columns: ColumnDef<EconomicPredictionTableRowItem>[] = [
  {
    accessorKey: 'endingYear',
    header: 'Ending year',
    cell: ({ row: { original } }) => {
      const { endingYear } = original;

      return (
        <p className="fw-semibold mb-0 fs-9 text-body-emphasis">{endingYear}</p>
      );
    },
    meta: {
      headerProps: {
        className: 'white-space-nowrap align-middle',
        style: { minWidth: '7.5rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'revenue',
    header: 'Revenue',
    cell: ({ row: { original } }) => {
      const { revenue } = original;

      return (
        <p className="fw-semibold mb-0 fs-9 text-body-emphasis">
          {currencyFormat(revenue, {
            minimumFractionDigits: 2
          })}
          B
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle',
        style: { minWidth: '7.5rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'revenueGrowth',
    header: 'Revenue Growth',
    cell: ({ row: { original } }) => {
      const {
        revenueGrowth: { growth, className }
      } = original;

      return (
        <p className={classNames('fw-semibold mb-0 fs-9', className)}>
          {numberFormat(growth, 'standard', {
            minimumFractionDigits: 2
          })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle',
        style: { minWidth: '7.5rem' }
      },
      cellProps: {
        className: 'align-middle'
      }
    }
  },
  {
    accessorKey: 'eps',
    header: 'eps',
    cell: ({ row: { original } }) => {
      const { eps } = original;

      return (
        <p className="fw-semibold mb-0 fs-9 text-body-emphasis">
          {numberFormat(eps, 'standard', { minimumFractionDigits: 2 })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'ps-5 align-middle',
        style: { minWidth: '7.5rem' }
      },
      cellProps: {
        className: 'align-middle ps-5'
      }
    }
  },
  {
    accessorKey: 'epsGrowth',
    header: 'eps growth',
    cell: ({ row: { original } }) => {
      const {
        epsGrowth: { growth, className }
      } = original;

      return (
        <p className={classNames('fw-semibold mb-0 fs-9', className)}>
          {numberFormat(growth, 'standard', {
            minimumFractionDigits: 2
          })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'white-space-nowrap align-middle ps-5',
        style: { minWidth: '7.5rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap ps-5'
      }
    }
  },
  {
    accessorKey: 'forwardPE',
    header: 'forward pe',
    cell: ({ row: { original } }) => {
      const { forwardPE } = original;

      return (
        <p className="fw-semibold mb-0 fs-9 text-body-emphasis">
          {forwardPE
            ? numberFormat(forwardPE, 'standard', { minimumFractionDigits: 2 })
            : 'N/A'}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'ps-5 align-middle',
        style: { minWidth: '7.5rem' }
      },
      cellProps: {
        className: 'align-middle ps-5'
      }
    }
  },
  {
    accessorKey: 'noAnalysts',
    header: 'No. analysts',
    cell: ({ row: { original } }) => {
      const { noAnalysts } = original;

      return (
        <p className="fw-semibold mb-0 fs-9 text-body-emphasis">
          {noAnalysts
            ? numberFormat(noAnalysts, 'standard', { minimumFractionDigits: 2 })
            : 'N/A'}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'ps-5 align-middle',
        style: { minWidth: '7.5rem' }
      },
      cellProps: {
        className: 'align-middle ps-5'
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
          <RevealDropdown className="btn-reveal-trigger" btnClassName="fs-10">
            <ActionDropdownItems />
          </RevealDropdown>
        </>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle pe-0',
        style: { minWidth: '3rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap pe-0'
      }
    }
  }
];

const ForecastEconomicPredictionTable = ({
  data
}: {
  data: EconomicPredictionTableRowItem[];
}) => {
  const table = useAdvanceTable({
    data,
    columns,
    pageSize: 6,
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
        headerClassName="text-uppercase"
      />
    </AdvanceTableProvider>
  );
};

export default ForecastEconomicPredictionTable;

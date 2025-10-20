import { UilCalendar } from '@iconscout/react-unicons';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import Rating from 'components/base/Rating';
import RevealDropdown from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import MostRecentForecastTableFooter from 'components/modules/stock/stock-details/tab/MostRecentForecastTableFooter';
import { MostRecentForecastTableRowItem } from 'data/stock/forecast';
import { currencyFormat, numberFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';

const columns: ColumnDef<MostRecentForecastTableRowItem>[] = [
  {
    accessorKey: 'customer',
    header: 'Analyst',
    cell: ({ row: { original } }) => {
      const {
        customer: { name, avatar, placeholder }
      } = original;
      return (
        <Link to="#!" className="d-flex align-items-center text-body">
          {avatar ? (
            <Avatar
              src={avatar}
              size="m"
              rounded="circle"
              placeholder={placeholder && placeholder}
            />
          ) : (
            <Avatar variant="name" rounded="circle" size="m">
              {name.charAt(0).toUpperCase()}
            </Avatar>
          )}
          <h6 className="ms-2 mb-0">{name}</h6>
        </Link>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle white-space-nowrap',
        style: { minWidth: '13.75rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
    cell: ({ row: { original } }) => {
      const { rating } = original;
      return <Rating readonly initialValue={rating} emptyIconColor="warning" />;
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-3',
        style: { minWidth: '7.5rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap ps-3'
      }
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row: { original } }) => {
      const {
        status: { title, badgeBg }
      } = original;
      return (
        <Badge variant="phoenix" bg={badgeBg} className="fs-10">
          {title}
        </Badge>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle ps-3',
        style: { minWidth: '7.5rem' }
      },
      cellProps: {
        className: 'align-middle ps-3'
      }
    }
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row: { original } }) => {
      const { action } = original;
      return (
        <p className="fs-9 fw-semibold text-body-emphasis mb-0">{action}</p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle',
        style: { minWidth: '11.25rem' }
      },
      cellProps: {
        className: 'align-middle'
      }
    }
  },
  {
    accessorKey: 'priceTarget',
    header: 'Price Target',
    cell: ({ row: { original } }) => {
      const { priceTarget } = original;
      return (
        <p className="fs-9 fw-semibold mb-0">
          {currencyFormat(priceTarget, { minimumFractionDigits: 2 })}
        </p>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle',
        style: { minWidth: '10rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap'
      }
    }
  },
  {
    accessorKey: 'upside',
    header: 'Upside',
    cell: ({ row: { original } }) => {
      const {
        upside: { label, badgeBg, prefix }
      } = original;

      return (
        <Badge variant="phoenix" bg={badgeBg} className="fs-10">
          {prefix}
          {numberFormat(label, 'standard', { minimumFractionDigits: 2 })}%
        </Badge>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle',
        style: { minWidth: '9rem' }
      },
      cellProps: {
        className: 'align-middle'
      }
    }
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row: { original } }) => {
      const { date } = original;
      return (
        <div className="d-flex align-items-center justify-content-end gap-2">
          <UilCalendar
            fill='currentColor'
            style={{ width: 16, height: 23.828, transform: 'translateY(-2px)' }}
          />
          <h6 className="fw-semibold mb-0">{date}</h6>
        </div>
      );
    },
    meta: {
      headerProps: {
        className: 'align-middle text-end pe-3',
        style: { minWidth: '9rem' }
      },
      cellProps: {
        className: 'align-middle pe-3'
      }
    }
  },
  {
    accessorKey: 'tableAction',
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
        className: 'align-middle  pe-0',
        style: { minWidth: '3.6rem' }
      },
      cellProps: {
        className: 'align-middle white-space-nowrap pe-0'
      }
    }
  }
];

const MostRecentForecastTable = ({
  data
}: {
  data: MostRecentForecastTableRowItem[];
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
          className: 'phoenix-table border-top border-translucent fs-9 mb-0'
        }}
        headerClassName="text-uppercase"
      />
      <MostRecentForecastTableFooter className="pagination-subtle fs-9 flex-end-center" />
    </AdvanceTableProvider>
  );
};

export default MostRecentForecastTable;

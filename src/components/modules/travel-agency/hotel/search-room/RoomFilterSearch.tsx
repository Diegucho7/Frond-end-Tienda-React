import SearchBox from 'components/common/SearchBox';
import RoomFilterCheckbox from './RoomFilterCheckbox';
import { ChangeEvent } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import useAdvanceTable from 'hooks/useAdvanceTable';
import { roomFiltercheckbox } from 'data/travel-agency/admin/searchRoom';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';

export const columns: ColumnDef<roomFiltercheckbox>[] = [
  {
    // For filtering and searching projects by status
    id: 'name',
    accessorFn: ({ name }) => name
  },
  {
    // For searching projects by name
    accessorKey: 'name'
  }
];

const RoomFilterSearch = ({ items }: { items: roomFiltercheckbox[] }) => {
  const table = useAdvanceTable<roomFiltercheckbox>({
    data: items,
    columns,
    pageSize: 10
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };
  return (
    <>
      <AdvanceTableProvider {...table}>
        <SearchBox
          placeholder="Search..."
          size="sm"
          onChange={handleSearchInputChange}
          className="mx-auto mb-4 w-100"
        />

        {table
          .getRowModel()
          .rows.map(row => row.original)
          .map((item, index) => (
            <RoomFilterCheckbox
              name={item.name.split(' ').join('-')}
              value={item.name.split(' ').join('-')}
              label={item.name}
              key={index}
            />
          ))}
        <Link to="" className="mt-2 fw-bold d-inline-block">
          Show more items
        </Link>
      </AdvanceTableProvider>
    </>
  );
};

export default RoomFilterSearch;

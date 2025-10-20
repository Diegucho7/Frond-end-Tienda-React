import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import SearchBox from 'components/common/SearchBox';
import LeadEmailsTable, {
  leadEmailsColumns
} from 'components/tables/LeadEmailsTable';
import { dealEmailsTableData } from 'data/crm/leadsData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import React, { ChangeEvent, useMemo } from 'react';

const LeadEmails = () => {
  const table = useAdvanceTable({
    data: dealEmailsTableData,
    columns: leadEmailsColumns,
    pageSize: 5,
    pagination: true,
    sortable: true,
    selection: true,
    initialState: {
      columnVisibility: {
        type: false
      }
    }
  });

  const { setGlobalFilter, getPrePaginationRowModel, getColumn } = table;

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { type } }) => type === label
      ).length;

    return [
      {
        label: 'Mails',
        value: 'mails',
        onClick: () => handleFilterItemClick('type', 'mails'),
        count: getDataCount('mails')
      },
      {
        label: 'Drafts',
        value: 'drafts',
        onClick: () => handleFilterItemClick('type', 'drafts'),
        count: getDataCount('drafts')
      },
      {
        label: 'Scheduled',
        value: 'scheduled',
        onClick: () => handleFilterItemClick('type', 'scheduled'),
        count: getDataCount('scheduled')
      }
    ];
  }, [getPrePaginationRowModel]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <h2 className="mb-2">Emails</h2>
      <AdvanceTableProvider {...table}>
        <FilterTab tabItems={tabItems} />
        <SearchBox
          onChange={handleSearchInputChange}
          placeholder="Search Emails"
          className="w-100 mb-3"
        />
        <LeadEmailsTable />
      </AdvanceTableProvider>
    </div>
  );
};

export default LeadEmails;

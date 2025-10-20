import { flexRender } from '@tanstack/react-table';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { Table, TableProps } from 'react-bootstrap';
import classNames from 'classnames';

interface TopStockAdvanceTableProps {
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  tableProps?: TableProps;
  hasFooter?: boolean;
}

const TopStockAdvanceTable = ({
  headerClassName,
  bodyClassName,
  rowClassName,
  tableProps,
  hasFooter
}: TopStockAdvanceTableProps) => {
  const table = useAdvanceTableContext();
  const { getRowModel, getHeaderGroups, getFooterGroups } = table;
  return (
    <div className="table-responsive scrollbar">
      <Table {...tableProps}>
        <thead className={headerClassName}>
          {getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  {...header.column.columnDef.meta?.headerProps}
                  className={classNames(
                    header.column.columnDef.meta?.headerProps?.className,
                    {
                      sort: header.column.getCanSort(),
                      desc: header.column.getIsSorted() === 'desc',
                      asc: header.column.getIsSorted() === 'asc'
                    }
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={bodyClassName}>
          {getRowModel().rows.map(row => (
            <tr key={row.id} className={rowClassName}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} {...cell.column.columnDef.meta?.cellProps}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {hasFooter && (
          <tfoot>
            {getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id} className="border-0 border-translucent">
                {footerGroup.headers.map(header => {
                  return (
                    <th
                      key={header.id}
                      {...header.column.columnDef.meta?.footerProps}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </tfoot>
        )}
      </Table>
    </div>
  );
};

export default TopStockAdvanceTable;

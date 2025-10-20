import { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Button from 'components/base/Button';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import usePagination from 'hooks/usePagination';
import {
  faAngleRight,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

interface MostAdvanceTableFooterProps {
  className?: string;
  showViewAllBtn?: boolean;
  viewAllBtnClass?: string;
  tableInfo?: string;
}

const MostRecentForecastTableFooter = ({
  className,
  showViewAllBtn = true,
  viewAllBtnClass,
  tableInfo
}: MostAdvanceTableFooterProps) => {
  const {
    setPageSize,
    getCanNextPage,
    getCanPreviousPage,
    getState,
    getPrePaginationRowModel,
    getPaginationRowModel,
    getPageCount,
    setPageIndex
  } = useAdvanceTableContext();

  const {
    pagination: { pageSize, pageIndex }
  } = getState();

  const [perPage] = useState(pageSize);
  const { hasNextEllipsis, hasPrevEllipsis, visiblePaginationItems } =
    usePagination({
      currentPageNo: pageIndex + 1,
      totalPage: getPageCount(),
      maxPaginationButtonCount: 5
    });

  const [isAllVisible, setIsAllVisible] = useState(false);

  return (
    <div className={classNames(className, 'd-flex py-1')}>
      <div className="d-flex fs-9">
        <p
          className={classNames(
            tableInfo,
            'mb-0 d-none d-sm-block me-3 fw-semibold text-body'
          )}
        >
          {pageSize * pageIndex + 1} to{' '}
          {pageSize * pageIndex + getPaginationRowModel().rows.length}
          <span className="text-body-tertiary"> items of </span>
          {getPrePaginationRowModel().rows.length}
        </p>
        {showViewAllBtn && (
          <Button
            variant="link"
            className={classNames(viewAllBtnClass, 'p-0 fw-semibold')}
            endIcon={
              <FontAwesomeIcon icon={faAngleRight} className="ms-1 fs-9" />
            }
            onClick={() => {
              setIsAllVisible(!isAllVisible);
              setPageSize(
                isAllVisible ? perPage : getPrePaginationRowModel().rows.length
              );
            }}
          >
            View {isAllVisible ? 'less' : 'all'}
          </Button>
        )}
      </div>
      <div className="ms-4">
        <Pagination className="mb-0 justify-content-center align-items-center">
          <Pagination.Prev
            disabled={!getCanPreviousPage()}
            onClick={() => setPageIndex(pageIndex - 1)}
            className="m-0"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Pagination.Prev>

          {hasPrevEllipsis && (
            <>
              <Pagination.Item
                active={pageIndex === 0}
                onClick={() => setPageIndex(0)}
              >
                1
              </Pagination.Item>
              <Pagination.Ellipsis disabled />
            </>
          )}

          {visiblePaginationItems.map(page => (
            <Pagination.Item
              key={page}
              active={pageIndex === page - 1}
              onClick={() => setPageIndex(page - 1)}
            >
              {page}
            </Pagination.Item>
          ))}

          {hasNextEllipsis && (
            <>
              <Pagination.Ellipsis disabled />
              <Pagination.Item
                active={pageIndex === getPageCount() - 1}
                onClick={() => setPageIndex(getPageCount() - 1)}
              >
                {getPageCount()}
              </Pagination.Item>
            </>
          )}
          <Pagination.Next
            disabled={!getCanNextPage()}
            onClick={() => setPageIndex(pageIndex + 1)}
            className="me-sm-n2"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Pagination.Next>
        </Pagination>
      </div>
    </div>
  );
};

export default MostRecentForecastTableFooter;

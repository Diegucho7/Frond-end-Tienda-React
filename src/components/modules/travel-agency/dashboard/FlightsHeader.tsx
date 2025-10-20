import { useState } from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import usePagination from 'hooks/usePagination';
import {
  faAngleRight,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';

interface AdvanceTableFooterProps {
  className?: string;
  pagination?: boolean;
  navBtn?: boolean;
  showViewAllBtn?: boolean;
  viewAllBtnClass?: string;
}

const FlightsTableHeader = ({
  className,
  pagination,
  navBtn,
  showViewAllBtn = true,
  viewAllBtnClass
}: AdvanceTableFooterProps) => {
  const {
    setPageSize,
    previousPage,
    nextPage,
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
    <Row className={classNames(className, 'align-items-center')}>
      <Col className="d-flex">
        <p className="mb-0 me-3 fs-9 fw-semibold text-body">
          {pageSize * pageIndex + 1} to{' '}
          {pageSize * pageIndex + getPaginationRowModel().rows.length}
          <span className="text-body-tertiary"> items of </span>
          {getPrePaginationRowModel().rows.length}
        </p>
        {showViewAllBtn && (
          <Button
            variant="link"
            className={classNames(viewAllBtnClass, 'p-0 fw-semibold fs-9')}
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
      </Col>
      {navBtn && (
        <Col xs="auto" className="d-flex gap-2">
          <Button
            variant="phoenix-primary"
            startIcon={<FontAwesomeIcon icon={faChevronLeft} />}
            className={classNames('px-3', {
              disabled: !getCanPreviousPage()
            })}
            onClick={() => {
              previousPage();
            }}
          />

          <Button
            variant="phoenix-primary"
            endIcon={<FontAwesomeIcon icon={faChevronRight} />}
            className={classNames('px-3', {
              disabled: !getCanNextPage()
            })}
            onClick={() => {
              nextPage();
            }}
          />
        </Col>
      )}
      {pagination && (
        <Col xs="auto">
          <Pagination className="mb-0 justify-content-center">
            <Pagination.Prev
              disabled={!getCanPreviousPage()}
              onClick={() => setPageIndex(pageIndex - 1)}
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
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </Pagination.Next>
          </Pagination>
        </Col>
      )}
    </Row>
  );
};

export default FlightsTableHeader;

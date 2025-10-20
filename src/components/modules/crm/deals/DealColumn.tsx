import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { DealColumn as Column } from 'data/crm/deals';
import { currencyFormat } from 'helpers/utils';
import { Dropdown } from 'react-bootstrap';
import DealCard from 'components/cards/DealCard';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';

const DealColumn = ({
  column,
  handleOpenAddModal
}: {
  column: Column;
  handleOpenAddModal: () => void;
}) => {
  const { setNodeRef, listeners, attributes } = useSortable({
    id: column.id,
    data: {
      type: 'column'
    }
  });
  return (
    <div className="deals-column">
      <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
        <div>
          <h5 className="mb-2">{column.title}</h5>
          <p className="fs-9 text-body-tertiary mb-1">Forecast Revenue:</p>
          <h4 className="mb-3">
            {currencyFormat(column.revenue, {
              minimumFractionDigits: 2
            })}
          </h4>
        </div>
        <div className="d-flex gap-3">
          <Button className="p-0" onClick={handleOpenAddModal}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Dropdown align="end">
            <Dropdown.Toggle
              variant=""
              className="dropdown-caret-none p-0 fs-10"
            >
              <FontAwesomeIcon icon={faEllipsisH} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Edit</Dropdown.Item>
              <Dropdown.Item href="#">Add meeting</Dropdown.Item>
              <Dropdown.Item href="#">See all connected contacts</Dropdown.Item>
              <Dropdown.Item href="#">Clone</Dropdown.Item>
              <Dropdown.Item href="#">Delete</Dropdown.Item>
              <Dropdown.Item href="#">Display only bad deals</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="scrollbar flex-1 d-flex flex-column"
        onClick={e => e.stopPropagation()}
      >
        <SortableContext
          items={column.deals.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {column.deals.map(item => (
            <DealCard deal={item} key={item.id} columnId={column.id} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default DealColumn;

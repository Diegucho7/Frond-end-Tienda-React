import {
  faBars,
  faCircleXmark,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import PhoenixFloatingLabel from 'components/base/PhoenixFloatingLabel';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { ChangeEvent, useState } from 'react';
import { Form } from 'react-bootstrap';
import { CreateBoardFormData } from './CreateBoardWizardForm';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import type {
  DragEndEvent,
  DragStartEvent,
  UniqueIdentifier
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getRandomNumber } from 'helpers/utils';
import { useGetDndSensor } from 'hooks/useGetDndSensor';

interface ColumnItemProps {
  className?: string;
  label: string;
  index: number;
  columnItem: FormDataColumnProps;
  cursor?: boolean;
}

interface FormDataColumnProps {
  id: UniqueIdentifier;
  name: string;
  color: string;
}

const ColumnItem = ({
  className,
  label,
  index,
  columnItem,
  cursor
}: ColumnItemProps) => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();
  const [isFocused, setIsFocused] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    isDragging,
    transition,
    transform
  } = useSortable({
    id: columnItem.id,
    data: {
      type: 'column',
      item: columnItem,
      index
    },
    disabled: isFocused
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: 'name' | 'color'
  ) => {
    setFormData(prev => ({
      ...prev,
      columns: prev.columns.map(column =>
        column.id === columnItem.id
          ? { ...column, [field]: e.target.value }
          : column
      )
    }));
  };

  const handleClear = () => {
    setFormData({
      ...formData,
      columns: formData.columns.filter(column => column.id !== columnItem.id)
    });
  };

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
    cursor: cursor ? 'grabbing' : 'pointer'
  };

  return (
    <div ref={setNodeRef} {...attributes} style={styles}>
      <div className={classNames(className, 'd-flex gap-3')}>
        <PhoenixFloatingLabel
          label={label}
          className="flex-1"
          startComponent={
            <div className="hover-body-highlight" {...listeners}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          }
          endComponent={
            <button className="btn p-0 lh-1" onClick={handleClear}>
              <FontAwesomeIcon
                className="text-body-quaternary text-opacity-50"
                icon={faCircleXmark}
              />
            </button>
          }
        >
          <Form.Control
            type="text"
            placeholder="Board Name"
            value={columnItem.name}
            onBlur={() => setIsFocused(false)}
            onMouseDownCapture={() => setIsFocused(true)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, 'name')
            }
          />
        </PhoenixFloatingLabel>

        <div>
          <Form.Control
            type="color"
            className="kanban-color-picker"
            value={columnItem.color}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, 'color')
            }
          />
        </div>
      </div>
    </div>
  );
};

const ColumnForm = () => {
  const { formData, setFormData } = useWizardFormContext<CreateBoardFormData>();
  const [activeItem, setActiveItem] = useState<FormDataColumnProps | null>(
    null
  );
  const [activeColumnIndex, setActiveColumnIndex] = useState<number | null>(
    null
  );

  const sensor = useGetDndSensor();

  const handleAddNewColumn = () => {
    const updatedFormData = { ...formData };
    updatedFormData.columns.push({
      id: getRandomNumber(2, 100),
      name: '',
      color: '#000000'
    });
    setFormData(updatedFormData);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveItem(active.data.current?.item);
    setActiveColumnIndex(active.data.current?.index);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const activeIndex = formData.columns.findIndex(
        item => item.id === active.id
      );
      const overIndex = formData.columns.findIndex(item => item.id === over.id);

      const reorderedItem = arrayMove(formData.columns, activeIndex, overIndex);

      const updatedFormData = { ...formData, columns: reorderedItem };
      setFormData(updatedFormData);
    }
  };

  return (
    <div>
      <p className="mb-4">
        These will be the <b>Columns</b> of your Kanban board. They represent
        discrete stages in work process. Columns can be Edited, Removed,
        Rearranged or Added in future.
      </p>

      <DndContext
        sensors={sensor}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {formData.columns?.map((column, index) => (
          <SortableContext
            key={column.id}
            items={formData.columns.map(item => item.id)}
            strategy={verticalListSortingStrategy}
          >
            <ColumnItem
              key={column.id}
              className="mb-5"
              label={`Column ${index + 1}`}
              index={index}
              columnItem={column}
            />
          </SortableContext>
        ))}
        <DragOverlay>
          {activeItem && activeColumnIndex !== null && (
            <ColumnItem
              label={`Column ${activeColumnIndex + 1}`}
              index={activeColumnIndex}
              columnItem={activeItem}
              cursor={true}
            />
          )}
        </DragOverlay>
      </DndContext>

      <Button
        variant="phoenix-secondary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        className="w-100 fs-9"
        size="lg"
        onClick={handleAddNewColumn}
      >
        Add New Column
      </Button>
    </div>
  );
};

export default ColumnForm;

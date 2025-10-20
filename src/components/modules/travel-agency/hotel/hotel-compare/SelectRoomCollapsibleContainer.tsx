import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';

interface SelectRoomCollapsibleContainerProps {
  collapseTitle: string;
  id: string;
  children: React.ReactElement;
  className?: string;
}

const SelectRoomCollapsibleContainer = ({
  collapseTitle,
  children,
  id,
  className
}: SelectRoomCollapsibleContainerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant=""
        className={classNames(
          'p-3 d-flex flex-between-center collapse-indicator text-body-highlight bg-body-highlight w-100',
          className,
          {
            collapsed: open
          }
        )}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <h5 className="mb-0">{collapseTitle}</h5>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="toggle-icon text-body"
        />
      </Button>
      <Collapse in={open}>
        <div id={id}>{children}</div>
      </Collapse>
    </>
  );
};

export default SelectRoomCollapsibleContainer;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/base/Button';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';

interface CollapsibleContainerProps {
  collapseTitle: string;
  id: string;
  children: React.ReactElement;
  defaultOpen?: boolean;
  className?: string;
}

const UpcomingCollapsibleContainer = ({
  collapseTitle,
  children,
  id,
  defaultOpen = true,
  className
}: CollapsibleContainerProps) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <>
      <Button
        variant=""
        className={classNames(
          'px-4 py-3 d-flex flex-between-center collapse-indicator bg-body-highlight w-100',
          className,
          {
            collapsed: open
          }
        )}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
          {collapseTitle}
        </h4>
        <FontAwesomeIcon icon={faChevronDown} className="toggle-icon" />
      </Button>
      <Collapse in={open}>
        <div className="p-4" id={id}>
          {children}
        </div>
      </Collapse>
    </>
  );
};

export default UpcomingCollapsibleContainer;

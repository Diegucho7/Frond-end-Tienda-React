import React, { Dispatch, SetStateAction } from 'react';
import { Offcanvas } from 'react-bootstrap';
import HomepageFilterOffcanvasContent from './HomepageFilterOffcanvasContent';

interface HomepageFilterOffcanvasProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HomepageFilterOffcanvas = ({
  isOpen,
  setIsOpen,
  ...props
}: HomepageFilterOffcanvasProps) => {
  return (
    <Offcanvas
      show={isOpen}
      onHide={() => setIsOpen(false)}
      placement="end"
      {...props}
    >
      <Offcanvas.Header className="p-4 bg-body-highlight" closeButton>
        <h5 className="mb-0 text-body-highlight">Filter</h5>
      </Offcanvas.Header>
      <Offcanvas.Body className="scrollbar p-4">
        <HomepageFilterOffcanvasContent />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HomepageFilterOffcanvas;

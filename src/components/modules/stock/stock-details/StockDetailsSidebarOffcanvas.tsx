import { Dispatch, SetStateAction } from 'react';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import StockDetailsSideBarContent from './StockDetailsSideBarContent';
import { Offcanvas } from 'react-bootstrap';

interface StockDetailsSidebarOffcanvasProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const StockDetailsSidebarOffcanvas = ({
  open,
  setOpen
}: StockDetailsSidebarOffcanvasProps) => {
  const { breakpoints } = useBreakpoints();

  return (
    <>
      {breakpoints.down('xl') && (
        <Offcanvas
          show={open}
          onHide={() => setOpen(false)}
          className="stock-offcanvas-xl bg-body-emphasis scrollbar stock-details-sidebar"
          placement="end"
          fixed
        >
          <Offcanvas.Body className="p-0">
            <StockDetailsSideBarContent setOpen={setOpen} />
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default StockDetailsSidebarOffcanvas;

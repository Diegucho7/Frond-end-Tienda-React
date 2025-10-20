import { Dispatch, SetStateAction } from 'react';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { Offcanvas } from 'react-bootstrap';
import PortfolioSidebarContent from './PortfolioSidebarContent';
import { PortfolioSidebarItem } from 'data/stock/portfolio';

interface PortfolioOffcanvasProps {
  sidebarItems: PortfolioSidebarItem[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const PortfolioOffcanvas = ({
  open,
  setOpen,
  sidebarItems
}: PortfolioOffcanvasProps) => {
  const { breakpoints } = useBreakpoints();

  return (
    <>
      {breakpoints.down('xl') && (
        <Offcanvas
          show={open}
          onHide={() => setOpen(false)}
          className="stock-offcanvas-xl bg-body-emphasis scrollbar"
          placement="end"
        >
          <Offcanvas.Body className="p-0">
            <PortfolioSidebarContent
              sidebarItems={sidebarItems}
              setOpen={setOpen}
            />
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default PortfolioOffcanvas;

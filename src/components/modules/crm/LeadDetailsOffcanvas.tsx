import Button from 'components/base/Button';
import AboutLeadCard from 'components/cards/AboutLeadCard';
import LeadAddressCard from 'components/cards/LeadAddressCard';
import LeadProfileCard from 'components/cards/LeadProfileCard';
import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import { Dispatch, SetStateAction } from 'react';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import Unicon from 'components/base/Unicon';
import { UilTimes } from '@iconscout/react-unicons';

interface LeadDetailsOffcanvasProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const LeadDetailsOffcanvas = ({ open, setOpen }: LeadDetailsOffcanvasProps) => {
  const { breakpoints } = useBreakpoints();

  return (
    <>
      {breakpoints.down('md') && (
        <PhoenixOffcanvas
          open={open}
          onHide={() => setOpen(false)}
          style={{ maxWidth: 350 }}
          className="p-4 pt-3 phoenix-offcanvas-content scrollbar"
          placement="start"
          fixed
        >
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2 d-md-none">
              <h3 className="mb-0">Lead Details</h3>
              <Button className="p-0" onClick={() => setOpen(false)}>
                <Unicon fill='currentColor' size={24} icon={UilTimes} />
              </Button>
            </div>

            <LeadProfileCard className="mb-3" />
            <AboutLeadCard className="mb-3" />
            <LeadAddressCard />
          </div>
        </PhoenixOffcanvas>
      )}
    </>
  );
};

export default LeadDetailsOffcanvas;

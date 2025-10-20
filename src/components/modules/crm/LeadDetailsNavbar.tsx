import ScrollSpy from 'components/base/ScrollSpy';
import { Nav } from 'react-bootstrap';

const LeadDetailsNavbar = () => {
  return (
    <div className="pt-3 pb-4 px-0 sticky-top bg-body nav-underline-scrollspy z-5">
      <Nav className="nav-underline">
        <Nav.Item>
          <ScrollSpy.NavLink className="pt-0" href="#tasks">
            Tasks
          </ScrollSpy.NavLink>
        </Nav.Item>
        <Nav.Item>
          <ScrollSpy.NavLink className="pt-0" href="#deals">
            Deals
          </ScrollSpy.NavLink>
        </Nav.Item>
        <Nav.Item>
          <ScrollSpy.NavLink className="pt-0" href="#emails">
            Emails
          </ScrollSpy.NavLink>
        </Nav.Item>
        <Nav.Item>
          <ScrollSpy.NavLink className="pt-0" href="#attachments">
            Attachments
          </ScrollSpy.NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default LeadDetailsNavbar;

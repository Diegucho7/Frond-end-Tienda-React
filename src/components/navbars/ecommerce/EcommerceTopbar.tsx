import Logo from 'components/common/Logo';
import { Col, Dropdown, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import NotificationDropdownMenu from '../nav-items/NotificationDropdownMenu';
import ProfileDropdownMenu from '../nav-items/ProfileDropdownMenu';
import SearchBox from 'components/common/SearchBox';
import ThemeToggler from 'components/common/ThemeToggler';
import { useState, useEffect } from 'react';
const API_URL = import.meta.env.VITE_API_URL;

const EcommerceTopbar = () => {

  const [count, setCount] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const resp = await fetch(`${API_URL}/api/shoppingcart/number`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-token": token ?? "",
          },
        });

        const data = await resp.json();

        if (data.ok) {
          setCount(data.total);
        }
      } catch (error) {
        console.error("Error obteniendo cantidad del carrito", error);
      }
    };

    if (token) fetchCount();
  }, [token]);



  return (
    <div className="container-small">
      <div className="ecommerce-topbar">
        <Navbar className="px-0">
          <Row className="gx-0 gy-2 w-100 flex-between-center">
            <Col xs="auto">
              <Link to="/" className="text-decoration-none">
                <Logo />
              </Link>
            </Col>
            <Col xs="auto" className="order-md-1">
              <Nav as="ul" className="navbar-nav-icons flex-row me-n2">
                <Nav.Item as="li" className="d-flex align-items-center">
                  <ThemeToggler />
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link
                    as={Link}
                    to="/cart"
                    // to="/apps/e-commerce/customer/cart"
                    className="px-2 icon-indicator icon-indicator-primary"
                  >
                    <FeatherIcon icon="shopping-cart" size={20} />
                    <span className="icon-indicator-number">{count}</span>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Dropdown autoClose="outside">
                    <Dropdown.Toggle
                      as={Link}
                      to="#!"
                      className="dropdown-caret-none nav-link icon-indicator icon-indicator-sm icon-indicator-danger"
                      variant=""
                    >
                      <FeatherIcon icon="bell" size={20} />
                    </Dropdown.Toggle>
                    <NotificationDropdownMenu className="mt-2" />
                  </Dropdown>
                </Nav.Item>

                <Nav.Item as="li">
                  <Dropdown autoClose="outside">
                    <Dropdown.Toggle
                      as={Link}
                      to="#!"
                      className="dropdown-caret-none nav-link lh-1"
                      variant=""
                    >
                      <FeatherIcon icon="user" size={20} />
                    </Dropdown.Toggle>
                    <ProfileDropdownMenu className="mt-2" />
                  </Dropdown>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={12} md={6}>
              <SearchBox
                placeholder="Search..."
                className="ecommerce-search-box w-100"
                inputClassName="rounded-pill"
                size="sm"
              // style={{ width: '25rem' }}
              />
            </Col>
          </Row>
        </Navbar>
      </div>
    </div>
  );
};

export default EcommerceTopbar;

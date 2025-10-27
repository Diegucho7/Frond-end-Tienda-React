import Avatar from 'components/base/Avatar';
import { useState, useEffect } from 'react';
import { Card, Dropdown, Form, Nav } from 'react-bootstrap';
import avatar from 'assets/img/team/72x72/67.webp';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router';
import Scrollbar from 'components/base/Scrollbar';
import classNames from 'classnames';

type User = {
  name: string;
  lastname: string;
  email: string;
};

const ProfileDropdownMenu = ({ className }: { className?: string }) => {

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('accessToken'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accessToken');
    // Redirige al login o a donde quieras
    window.location.href = '/pages/authentication/card/sign-in';
  }
  useEffect(() => {

    const renewToken = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/renew/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token ?? '',
          },
          // body: JSON.stringify({}), // puedes enviar datos aquí si es necesario
        });

        if (!response.ok) {
          // console.error('Error al renovar el token');
          throw new Error('Error al renovar el token');
        }

        const data = await response.json();

        // Suponiendo que la API responde con { token: string, usuario: { name, lastname, email } }
        setToken(data.token);
        setUser(data.usuario[0]);
        localStorage.setItem('accessToken', data.token);
      } catch (error) {
        // console.error('Error al renovar el token:', error);dd
      }
    };

    if (token) {
      renewToken();
    }
  }, [token]);
  const [navItems] = useState([
    {
      label: 'Profile',
      icon: 'user'
    },
    {
      label: 'Dashboard',
      icon: 'pie-chart'
    },
    {
      label: 'Posts & Activity',
      icon: 'lock'
    },
    {
      label: 'Settings & Privacy ',
      icon: 'settings'
    },
    {
      label: 'Help Center',
      icon: 'help-circle'
    },
    {
      label: 'Language',
      icon: 'globe'
    }
  ]);
  return (
    <Dropdown.Menu
      align="end"
      className={classNames(
        className,
        'navbar-top-dropdown-menu navbar-dropdown-caret py-0 dropdown-profile shadow border'
      )}
    >
      <Card className="position-relative border-0">
        <Card.Body className="p-0">
          <div className="d-flex flex-column align-items-center justify-content-center gap-2 pt-4 pb-3">
            <Avatar src={avatar} size="xl" />
            <h6 className="text-body-emphasis">{user?.name} {user?.lastname}</h6>
          </div>
          <div className="mb-3 mx-3">
            <Form.Control
              type="text"
              placeholder="Update your status"
              size="sm"
            />
          </div>
          <div style={{ height: '10rem' }}>
            <Scrollbar style={{ maxHeight: '10rem' }}>
              <Nav className="nav flex-column mb-2 pb-1">
                {navItems.map(item => (
                  <Nav.Item key={item.label}>
                    <Nav.Link href="#!" className="px-3">
                      <FeatherIcon
                        icon={item.icon}
                        size={16}
                        className="me-2 text-body"
                      />
                      <span className="text-body-highlight">{item.label}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Scrollbar>
          </div>
        </Card.Body>
        <Card.Footer className="p-0 border-top border-translucent">
          <Nav className="nav flex-column my-3">
            <Nav.Item>
              <Nav.Link href="#!" className="px-3">
                <FeatherIcon
                  icon="user-plus"
                  size={16}
                  className="me-2 text-body"
                />
                <span>Add another account</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <hr />
          <div className="px-3">
            <button
              onClick={handleLogout}
              className="btn btn-phoenix-secondary d-flex flex-center w-100"
            >
              <FeatherIcon icon="log-out" className="me-2" size={16} />
              Sign out
            </button>
          </div>
          <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
            <Link className="text-body-quaternary me-1" to="#!">
              Privacy policy
            </Link>
            •
            <Link className="text-body-quaternary mx-1" to="#!">
              Terms
            </Link>
            •
            <Link className="text-body-quaternary ms-1" to="#!">
              Cookies
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Menu>
  );
};

export default ProfileDropdownMenu;

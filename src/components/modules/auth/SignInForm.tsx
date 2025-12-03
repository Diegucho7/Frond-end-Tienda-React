import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../../context/AuthContext';

const SignInForm = ({ layout }: { layout: 'simple' | 'card' | 'split' }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { login } = useAuth(); // <-- Aquí sí va

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const ok = await login(email, password);

    if (!ok) {
      setError("Credenciales incorrectas");
      return;
    }

    navigate('/', { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="text-center mb-7">
        <h3 className="text-body-highlight">Iniciar Sesión</h3>
        <p className="text-body-tertiary">Accede con tu cuenta</p>
      </div>

      {error && (
        <div className="alert alert-danger text-start" role="alert">
          {error}
        </div>
      )}

      <Form.Group className="mb-3 text-start">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <div className="form-icon-container">
          <Form.Control
            id="email"
            type="email"
            className="form-icon-input"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon icon={faUser} className="text-body fs-9 form-icon" />
        </div>
      </Form.Group>

      <Form.Group className="mb-3 text-start">
        <Form.Label htmlFor="password">Password</Form.Label>
        <div className="form-icon-container">
          <Form.Control
            id="password"
            type="password"
            className="form-icon-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faKey} className="text-body fs-9 form-icon" />
        </div>
      </Form.Group>

      <Row className="flex-between-center mb-7">
        <Col xs="auto">
          <Form.Check type="checkbox" className="mb-0">
            <Form.Check.Input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              defaultChecked
            />
            <Form.Check.Label htmlFor="remember-me" className="mb-0">
              Recuerdame
            </Form.Check.Label>
          </Form.Check>
        </Col>
        <Col xs="auto">
          <Link
            to={`/authentication/forgot-password`}
            className="fs-9 fw-semibold"
          >
            Olvide mi contraseña?
          </Link>
        </Col>
      </Row>

      <Button type="submit" variant="primary" className="w-100 mb-3">
        Sign In
      </Button>

      <div className="text-center">
        <Link
          to={`/authentication/sign-up`}
          className="fs-9 fw-bold"
        >
          Create an account
        </Link>
      </div>
    </Form>
  );
};

export default SignInForm;

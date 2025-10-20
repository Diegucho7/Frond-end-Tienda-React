import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import AuthSocialButtons from 'components/common/AuthSocialButtons';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';  // o 'react-router-dom'

const SignInForm = ({ layout }: { layout: 'simple' | 'card' | 'split' }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Evita que recargue la página

    try {
      const response = await fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login success:', data);

      localStorage.setItem('accessToken', data.token);
      navigate('/apps/e-commerce/customer/homepage', { replace: true });

    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="text-center mb-7">
        <h3 className="text-body-highlight">Sign In</h3>
        <p className="text-body-tertiary">Get access to your account</p>
      </div>

      <AuthSocialButtons title="Sign in" />

      <div className="position-relative">
        <hr className="bg-body-secondary mt-5 mb-4" />
        <div className="divider-content-center">or use email</div>
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
              Remember me
            </Form.Check.Label>
          </Form.Check>
        </Col>
        <Col xs="auto">
          <Link
            to={`/pages/authentication/${layout}/forgot-password`}
            className="fs-9 fw-semibold"
          >
            Forgot Password?
          </Link>
        </Col>
      </Row>

      <Button type="submit" variant="primary" className="w-100 mb-3">
        Sign In
      </Button>

      <div className="text-center">
        <Link
          to={`/pages/authentication/${layout}/sign-up`}
          className="fs-9 fw-bold"
        >
          Create an account
        </Link>
      </div>
    </Form>
  );
};


export default SignInForm;

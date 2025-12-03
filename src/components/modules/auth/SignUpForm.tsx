import { useState } from 'react';
import Button from 'components/base/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router';

const SignUpForm = ({ layout }: { layout: 'simple' | 'card' | 'split' }) => {
const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      // copiar datos y eliminar confirmPassword
      const dataToSend = {
        ...formData,
        role: "USER"
      };

      delete dataToSend.confirmPassword;

      const res = await fetch(`${API_URL}/api/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend)
      });

      const data = await res.json();

      if (!data.ok) {
        setError(data.msg);
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/dashboard");

    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <>
      <div className="text-center mb-7">
        <h3 className="text-body-highlight">Crear cuenta</h3>
        <p className="text-body-tertiary">Regístrate para continuar</p>
      </div>

      {error && <p className="text-danger text-center">{error}</p>}

      <Form onSubmit={handleSubmit}>

        <Row className="g-3 mb-3">
          <Col sm={6}>
            <Form.Group className="text-start">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control id="name" type="text" placeholder="Name"
                            value={formData.name} onChange={handleChange} />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group className="text-start">
              <Form.Label htmlFor="lastname">Lastname</Form.Label>
              <Form.Control id="lastname" type="text" placeholder="Lastname"
                            value={formData.lastname} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control id="email" type="email" placeholder="name@example.com"
                        value={formData.email} onChange={handleChange} />
        </Form.Group>

        <Row className="g-3 mb-3">
          <Col sm={6}>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control id="password" type="password" placeholder="Password"
                            value={formData.password} onChange={handleChange} />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group>
              <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
              <Form.Control
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" className="w-100 mb-3" type="submit">
          Sign up
        </Button>

        <div className="text-center">
          <Link to={`/authentication/sign-in`} className="fs-9 fw-bold">
            Sign in to an existing account
          </Link>
        </div>
      </Form>
    </>
  );
};

export default SignUpForm;

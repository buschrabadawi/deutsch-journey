
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";

import "../styles/LoginRegister.css";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      alert("Login form submitted successfully!");
    } else {
      alert("Registration form submitted successfully!");
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={5}>
            <Card className="auth-card">
              <Card.Body>
                <div className="auth-heading">
                  <h1>
                    {isLogin ? "Welcome Back!" : "Create Account"}
                  </h1>

                  <p>
                    {isLogin
                      ? "Continue your German learning journey."
                      : "Join Deutsch Journey and start learning German."}
                  </p>
                </div>

                <div className="auth-tabs">
                  <Button
                    className={isLogin ? "active-tab" : "inactive-tab"}
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </Button>

                  <Button
                    className={!isLogin ? "active-tab" : "inactive-tab"}
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </Button>
                </div>

                <Form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      minLength={6}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="auth-submit"
                  >
                    {isLogin ? "Login" : "Create Account"}
                  </Button>
                </Form>

                <p className="auth-switch">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}

                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? " Register" : " Login"}
                  </button>
                </p>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginRegister;

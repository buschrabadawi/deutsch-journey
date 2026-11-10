
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import "../styles/Contact.css";
import munichImage from "../assets/munich.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Deutsch Journey!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container fluid className="contact-page py-5">
      <Container>
        <Row className="align-items-center g-4">

          {/* Image Section */}
          <Col md={5} className="text-center">
            <Image
              src={munichImage}
              alt="German cities and landmarks collage"
              fluid
              rounded
              className="contact-image"
            />
          </Col>

          {/* Contact Form Section */}
          <Col md={7}>
            <div className="contact-content">
              <h1 className="text-danger mb-3">Contact Us</h1>

              <p className="text-muted mb-4">
                Have a question about learning German?
                We would love to hear from you!
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactEmail">
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

                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="danger" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Contact;




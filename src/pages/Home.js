
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import homeBanner from "../assets/home-banner.jpg";
import alphabetImage from "../assets/alphabet.jpg";
import greetingsImage from "../assets/greetings.jpg";
import numbersImage from "../assets/numbers.jpg";
import vocabularyImage from "../assets/vocabulary.jpg";

import "../styles/Home.css";

function Home() {
  const lessons = [
    {
      title: "German Alphabet",
      description: "Discover the German alphabet and learn how to pronounce its letters.",
      image: alphabetImage,
    },
    {
      title: "Basic Greetings",
      description: "Learn common German greetings and introduce yourself.",
      image: greetingsImage,
    },
    {
      title: "German Numbers",
      description: "Start counting and learn how to use numbers in German.",
      image: numbersImage,
    },
    {
  title: "Basic German Vocabulary",
  description: "Learn useful everyday German words and build your vocabulary.",
  image: vocabularyImage,
},
  ];

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="home-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <span className="hero-label">DEUTSCH JOURNEY • A1 COURSE</span>

              <h1>
                Start Your Journey
                <span> to Learning German</span>
              </h1>

              <p>
                Learn German step by step with beginner-friendly lessons,
                useful vocabulary, and simple exercises.
              </p>

              <Button
                as={Link}
                to="/lessons"
                className="home-button"
              >
                Explore Lessons
              </Button>
            </Col>

            <Col lg={6} className="hero-image-column">
              <img
                src={homeBanner}
                alt="Discover Germany"
                className="hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="home-introduction">
        <Container>
          <div className="section-heading">
            <span>WELCOME TO DEUTSCH JOURNEY</span>
            <h2>Learn German with Confidence</h2>
            <p>
              Deutsch Journey is a beginner-friendly platform designed
              to help you build your German language skills from the
              very beginning.
            </p>
          </div>

          <Row className="features-row">
            <Col md={4}>
              <div className="feature-item">
                <h4>Beginner Friendly</h4>
                <p>
                  Start with simple topics and gradually develop
                  your German skills.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="feature-item">
                <h4>Organized Lessons</h4>
                <p>
                  Follow structured A1 lessons covering essential
                  German language topics.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="feature-item">
                <h4>Learn at Your Pace</h4>
                <p>
                  Explore lessons and practice whenever you are ready.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Lessons */}
      <section className="featured-lessons">
        <Container>
          <div className="section-heading">
            <span>START LEARNING</span>
            <h2>Featured A1 Lessons</h2>
            <p>
              Begin with these essential topics and take your
              first steps in learning German.
            </p>
          </div>

          <Row className="g-4">
            {lessons.map((lesson, index) => (
              <Col sm={6} lg={3} key={index}>
                <Card className="lesson-card h-100">
                  <Card.Img
                    variant="top"
                    src={lesson.image}
                    alt={lesson.title}
                  />

                  <Card.Body>
                    <Card.Title>{lesson.title}</Card.Title>
                    <Card.Text>
                      {lesson.description}
                    </Card.Text>

                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        <div className="all-lessons-link">
  <Link to="/lessons">
    View All Lessons <span>→</span>
  </Link>
</div>
        </Container>
      </section>

      

    </div>
  );
}

export default Home;

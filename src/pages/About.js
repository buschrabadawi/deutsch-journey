import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/About.css";

import aboutImage from "../assets/Berlin.jpg";

function About() {
  return (
    <div className="about-page">

      {/* About Hero */}
      <section className="about-hero">
  <Container>
    <Row className="align-items-center justify-content-center g-5">
      <Col lg={5} md={6}>
        <span className="about-label">
          MY STORY • DEUTSCH JOURNEY
        </span>

        <h1>
          More Than a Language,
          <span> It's a Journey.</span>
        </h1>

        <p>
          Deutsch Journey is a personal project created to
          reconnect with a language, rediscover old memories,
          and take the first step towards a dream of travelling
          the world.
        </p>
      </Col>

      <Col lg={5} md={6}>
        <img
          src={aboutImage}
          alt="A snowy street in Berlin"
          className="about-main-image"
        />
      </Col>
    </Row>
  </Container>
</section>

      {/* My Story */}
      <section className="my-story">
        <Container>
          <div className="about-section-heading">
            <span>WHERE IT ALL STARTED</span>
            <h2>My Connection to Germany</h2>
          </div>

          <Row className="justify-content-center">
            <Col lg={9}>
              <p>
                Germany has always held a special place in my heart.
                I was born there, and even though I was very young
                when I left, I still remember little moments from
                that time.
              </p>

              <p>
                I remember the cold weather, the snow falling heavily,
                and playing outside when I was little. I also remember
                going on a school trip to visit an old church. These
                memories may be from my childhood, but they have
                stayed with me over the years.
              </p>

              <p>
                I also remember watching a cartoon that was originally
                created in Italy but translated into German. Later,
                listening to German songs brought back my curiosity
                about the language I had forgotten.
              </p>

              <p>
                All these little memories made me want to reconnect
                with Germany and rediscover a part of my childhood.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why I Created Deutsch Journey */}
      <section className="why-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto">
              <span className="about-label">
                THE IDEA BEHIND THE WEBSITE
              </span>

              <h2>Why Deutsch Journey?</h2>

              <p>
                I created Deutsch Journey to motivate myself to start
                learning German again, beginning with the basics and
                gradually improving step by step.
              </p>

              <p>
                I also wanted to create something that my sister and I
                could use together. Learning a language can be more
                enjoyable when you have someone to share the experience
                with.
              </p>

              <p>
                This website is not just a university project. It is
                also a reminder of my goals and a way to keep myself
                motivated to work towards them.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* My Dream */}
      <section className="dream-section">
        <Container>
          <div className="dream-content">
            <span>LOOKING AHEAD</span>
            <h2>A Dream Beyond Germany</h2>

            <p>
              One of my biggest dreams is to travel around the world
              and explore as many countries as I can. I want to discover
              different cultures, meet new people, and experience places
              I've only imagined visiting.
            </p>

            <p>
              Germany is the first destination I hope to return to.
              I want to reconnect with the language, revisit the place
              where my story began, and create new memories alongside
              the ones I still carry from childhood.
            </p>

            <h3>
              One language. Many memories. A world of possibilities.
            </h3>
          </div>
        </Container>
      </section>

    </div>
  );
}

export default About;

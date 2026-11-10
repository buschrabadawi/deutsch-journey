
import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../styles/Lessons.css";

const Lessons = () => {
  return (
    <div className="lessons-page">
      <Container className="lessons-container">

        <div className="lessons-header">
          <span>DEUTSCH JOURNEY</span>
          <h1>German A1 Lessons</h1>
          <p>
            Start learning German step by step.
            Explore beginner lessons, useful vocabulary,
            and everyday expressions.
          </p>
        </div>

        <Accordion alwaysOpen={false}>

          {/* Lesson 1 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div>
                <span className="lesson-number">LESSON 01</span>
                <h5>German Alphabet</h5>
                <p>Learn German letters and pronunciation.</p>
              </div>
            </Accordion.Header>

            <Accordion.Body>
              <h4>The German Alphabet</h4>
              <p>
                The German alphabet has 26 basic letters,
                just like the English alphabet. German also
                uses four additional characters: Ä, Ö, Ü and ß.
              </p>

              <h5>Special German Characters</h5>
              <ul>
                <li>Ä ä — called A-Umlaut</li>
                <li>Ö ö — called O-Umlaut</li>
                <li>Ü ü — called U-Umlaut</li>
                <li>ß — called Eszett</li>
              </ul>

              <h5>Examples</h5>
              <ul>
                <li>Ä — Mädchen (girl)</li>
                <li>Ö — schön (beautiful)</li>
                <li>Ü — fünf (five)</li>
                <li>ß — Straße (street)</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Lesson 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div>
                <span className="lesson-number">LESSON 02</span>
                <h5>Basic Greetings</h5>
                <p>Learn how to greet people in German.</p>
              </div>
            </Accordion.Header>

            <Accordion.Body>
              <h4>Basic German Greetings</h4>
              <p>
                Greetings are one of the first things you
                should learn when studying German.
              </p>

              <div className="vocabulary-list">
                <p><strong>Hallo</strong> — Hello</p>
                <p><strong>Guten Morgen</strong> — Good morning</p>
                <p><strong>Guten Tag</strong> — Good day</p>
                <p><strong>Guten Abend</strong> — Good evening</p>
                <p><strong>Gute Nacht</strong> — Good night</p>
                <p><strong>Tschüss</strong> — Bye</p>
                <p><strong>Auf Wiedersehen</strong> — Goodbye</p>
              </div>

              <h5>Introducing Yourself</h5>
              <p><strong>Ich heiße Buschra.</strong> — My name is Buschra.</p>
              <p><strong>Wie heißt du?</strong> — What is your name?</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Lesson 3 */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div>
                <span className="lesson-number">LESSON 03</span>
                <h5>German Numbers</h5>
                <p>Learn to count from 1 to 20.</p>
              </div>
            </Accordion.Header>

            <Accordion.Body>
              <h4>Numbers from 1 to 20</h4>

              <div className="numbers-grid">
                <p><strong>1 — eins</strong></p>
                <p><strong>2 — zwei</strong></p>
                <p><strong>3 — drei</strong></p>
                <p><strong>4 — vier</strong></p>
                <p><strong>5 — fünf</strong></p>
                <p><strong>6 — sechs</strong></p>
                <p><strong>7 — sieben</strong></p>
                <p><strong>8 — acht</strong></p>
                <p><strong>9 — neun</strong></p>
                <p><strong>10 — zehn</strong></p>
                <p><strong>11 — elf</strong></p>
                <p><strong>12 — zwölf</strong></p>
                <p><strong>13 — dreizehn</strong></p>
                <p><strong>14 — vierzehn</strong></p>
                <p><strong>15 — fünfzehn</strong></p>
                <p><strong>16 — sechzehn</strong></p>
                <p><strong>17 — siebzehn</strong></p>
                <p><strong>18 — achtzehn</strong></p>
                <p><strong>19 — neunzehn</strong></p>
                <p><strong>20 — zwanzig</strong></p>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Lesson 4 */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div>
                <span className="lesson-number">LESSON 04</span>
                <h5>Basic Vocabulary</h5>
                <p>Discover useful everyday German words.</p>
              </div>
            </Accordion.Header>

            <Accordion.Body>
              <h4>Everyday German Vocabulary</h4>

              <h5>People</h5>
              <p><strong>Der Mann</strong> — The man</p>
              <p><strong>Die Frau</strong> — The woman</p>
              <p><strong>Das Kind</strong> — The child</p>

              <h5>Everyday Objects</h5>
              <p><strong>Das Buch</strong> — The book</p>
              <p><strong>Der Tisch</strong> — The table</p>
              <p><strong>Der Stuhl</strong> — The chair</p>

              <h5>Useful Words</h5>
              <p><strong>Ja</strong> — Yes</p>
              <p><strong>Nein</strong> — No</p>
              <p><strong>Danke</strong> — Thank you</p>
              <p><strong>Bitte</strong> — Please / You're welcome</p>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
    </div>
  );
};

export default Lessons;


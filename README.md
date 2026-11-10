# Deutsch Journey 🇩🇪

A beginner-friendly German language learning website built with ReactJS.

**Course:** CSCI426 – Advanced Web Programming
**Name:** Buschra Nancy A. Badawi
**Instructor:** Kawthar Messelmani
**University:** Lebanese International University (LIU)

## About the Project

Deutsch Journey introduces beginners to German through simple, organized A1-level lessons. The website is responsive and works on desktop and mobile devices.

## Features

- Multi-page navigation with React Router (no page reloads)
- Responsive layout using Bootstrap and custom CSS media queries
- Mobile navigation menu with a toggle button
- Four expandable A1 lessons: German Alphabet, Basic Greetings, Numbers (1–20), and Basic Vocabulary
- Login/Register interface with form validation (frontend only for now)

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Lessons | `/lessons` |
| Login / Register | `/loginregister` |
| About | `/about` |
| Contact | `/contact` |

## Technologies Used

- ReactJS
- JavaScript, HTML/JSX, CSS
- Bootstrap and React-Bootstrap
- React Router DOM
- Git and GitHub
- Visual Studio Code

## Project Structure

frontend/
├── public/
└── src/
    ├── assets/
    │   └── alphabet.jpg
    |   └── Berlin.jpg
    |   └── greetings.jpg
    |   └── home-banner.jpg
    |   ├── logo.png
    |   ├── munich.jpg
    |   ├── numbers.jpg
    |   └── vocabulary.jpg
    |   
    ├── components/
    │   ├── Footer.js
    │   └── NavBar.js
    ├── pages/
    │   ├── Home.js
    │   ├── Lessons.js
    │   ├── LoginRegister.js
    │   ├── About.js
    │   └── Contact.js
    ├── styles/
    │   ├── Home.css
    │   ├── Lessons.css
    │   ├── LoginRegister.css
    │   ├── About.css
    │   ├── Contact.css
    │   ├── NavBar.css
    │   └── Footer.css
    ├── App.js
    ├── App.css
    ├── index.js
    └── index.css

    
## How to Run

1. Clone the repository:

git clone <your-repository-url>

2. Go to the frontend folder:

cd frontend

3. Install dependencies:

npm install

4. Start the app:

npm start

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Current Limitations and Future Work

This is Phase 1, a frontend-only application. The Login/Register form validates input but does not connect to a backend yet. Planned improvements:

- Backend with a database
- Working user authentication
- More lessons beyond A1
- Progress tracking

## Acknowledgements

Images sourced from Pinterest. Report designed with Canva.


import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import LoginRegister from "./pages/LoginRegister";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

       <Route path="/lessons" element={<Lessons />} />

       <Route path="/loginregister" element={<LoginRegister />}/>

       <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;



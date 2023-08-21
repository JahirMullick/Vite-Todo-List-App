import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import User from "./components/User";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App

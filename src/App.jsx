import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return <h1 className="text-white text-3xl">Home Page</h1>;
}

function Pages() {
  return <h1 className="text-white text-3xl">Pages</h1>;
}

function Contact() {
  return <h1 className="text-white text-3xl">Contact Us</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

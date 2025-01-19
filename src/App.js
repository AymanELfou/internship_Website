import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import AboutPage from "./Components/AboutUs/AboutPage";
import ServicesPage from "./Components/Services/ServicesPage";
import Contact from "./Components/ContactUs/Contact";

function App() {
  return (
    <div>
      {/* Navbar will always be visible */}
      <Navbar />

      {/* Route configuration to display components based on the path */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about"  element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </div>
  );
}

export default App;

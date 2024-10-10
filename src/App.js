import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import Pr1 from "./Components/AboutUs/Pr1";

function App() {
  return (
    <div>
      {/* Navbar will always be visible */}
      <Navbar />

      {/* Route configuration to display components based on the path */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Pr1 />} />
      </Routes>
    </div>
  );
}

export default App;

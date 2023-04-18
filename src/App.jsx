import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects";

// Components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

// Context State
export const DataContext = createContext()

function App() {
  // Data State
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://gitconnected.com/v1/portfolio/kitpasin")
    .then(res => setData(res.data))
  }, [])

  return (
    <DataContext.Provider value={data}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </DataContext.Provider>
  );
}

export default App;

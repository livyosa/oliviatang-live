import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GrowthMind from "./pages/GrowthMind";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* GrowthMind Page */}
        <Route path="/growthmind" element={<GrowthMind />} />
      </Routes>
    </Router>
  );
}

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GrowthMind from "./pages/GrowthMind";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/growthmind" element={<GrowthMind />} />
      </Routes>
    </Router>
  );
}

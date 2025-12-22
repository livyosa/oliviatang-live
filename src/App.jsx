import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GrowthMind from "./pages/GrowthMind";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/growthmind" element={<GrowthMind />} />
    </Routes>
  );
}

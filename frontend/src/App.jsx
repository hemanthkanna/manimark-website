import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        {/* Any unmatched route also lands on Coming Soon rather than a blank 404 */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

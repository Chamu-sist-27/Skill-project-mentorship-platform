import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SkillSelection from "./pages/SkillSelection";
import LearnerDashboard from "./pages/LearnerDashboard";
import MentorDashboard from "./pages/MentorDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/skills" element={<SkillSelection />} />
        <Route path="/learner/dashboard" element={<LearnerDashboard />} />
        <Route path="/mentor/dashboard" element={<MentorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

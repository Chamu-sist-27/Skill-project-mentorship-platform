import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import LearnerDashboard from "./pages/LearnerDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SkillSelection from "./pages/SkillSelection";


function App() {
  const role = localStorage.getItem("role");
  return (
    <BrowserRouter>
    <h1 style={{ textAlign: "center" }}>APP IS RENDERING</h1>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/learner/dashboard"
          element={role === "learner" ? <LearnerDashboard /> : <Login />}
        />

        <Route
          path="/mentor/dashboard"
          element={role === "mentor" ? <MentorDashboard /> : <Login />}
        />

        <Route
          path="/admin/dashboard"
          element={role === "admin" ? <AdminDashboard /> : <Login />}
        />

        <Route
          path="/skills"
          element={role === "learner" ? <SkillSelection /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

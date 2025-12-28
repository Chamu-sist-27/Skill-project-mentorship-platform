import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SkillSelection from "./pages/SkillSelection";
import LearnerDashboard from "./pages/LearnerDashboard";
import MentorDashboard from "./pages/MentorDashboard";

const role = localStorage.getItem("role");

function App() {
  return (
    <BrowserRouter>
      <Route
  path="/student/dashboard"
  element={role === "student" ? <StudentDashboard /> : <Login />}
/>

<Route
  path="/mentor/dashboard"
  element={role === "mentor" ? <MentorDashboard /> : <Login />}
/>

<Route
  path="/admin/dashboard"
  element={role === "admin" ? <AdminDashboard /> : <Login />}
/>

    </BrowserRouter>
  );
}

export default App;

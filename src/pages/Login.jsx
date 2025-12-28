import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!role) {
      alert("Please select a role");
      return;
    }

    localStorage.setItem("role", role);

    if (role === "learner") navigate("/learner/dashboard");
    if (role === "mentor") navigate("/mentor/dashboard");
    if (role === "admin") navigate("/admin/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="learner">Learner</option>
        <option value="mentor">Mentor</option>
        <option value="admin">Admin</option>
      </select>

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

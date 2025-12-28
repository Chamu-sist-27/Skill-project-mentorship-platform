const LearnerDashboard = () => {
  return <h2>Learner Dashboard</h2>;
};

export default LearnerDashboard;
const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

<button onClick={logout}>Logout</button>

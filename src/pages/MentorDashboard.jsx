const MentorDashboard = () => {
  return <h2>Mentor Dashboard</h2>;
};

export default MentorDashboard;
const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

<button onClick={logout}>Logout</button>

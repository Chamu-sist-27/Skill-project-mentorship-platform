const AdminDashboard = () => {
  return <h2>Admin Dashboard</h2>;
};

export default AdminDashboard;
const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

<button onClick={logout}>Logout</button>

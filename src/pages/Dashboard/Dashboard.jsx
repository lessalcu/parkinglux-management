import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><a href="/profile">Mi Perfil</a></li>
        <li><a href="/parking-lots">Parqueaderos</a></li>
        <li><a href="/reservations">Reservas</a></li>
        <li><a href="/vehicles">Vehículos</a></li>
      </ul>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
}

export default Dashboard;

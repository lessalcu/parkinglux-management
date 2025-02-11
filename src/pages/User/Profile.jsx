import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5002/users/1", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error al obtener el perfil:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      {user ? (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Correo: {user.email}</p>
          <p>Tipo: {user.type}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Profile;

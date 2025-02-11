import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("user");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/users", {
        name,
        email,
        password,
        type,
      });

      if (response.status === 201) {
        alert("Usuario registrado con éxito");
        navigate("/");
      } else {
        alert("Error en el registro");
      }
    } catch (error) {
      alert("Error en el registro");
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <input type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <select onChange={(e) => setType(e.target.value)}>
        <option value="user">Usuario</option>
        <option value="admin">Administrador</option>
      </select>
      <button onClick={handleRegister}>Registrarse</button>
      <p>¿Ya tienes cuenta? <a href="/">Inicia sesión</a></p>
    </div>
  );
}

export default Register;

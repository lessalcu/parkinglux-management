import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5004/login", { email, password });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        alert("Error en la autenticación");
      }
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
      <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import './Login.css'; // Hoja de estilos separada
import logoPolpaico from '../assets/Logo_PolpaicoSoluciones.png';
import { useNavigate } from 'react-router-dom';


const usuariosValidos = [
  { email: "test@empresa.cl", rut: "12.345.678-9" },
  { email: "jefa@polpaico.cl", rut: "10.000.000-1" }
];


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [rut, setRut] = useState('');
  const navigate = useNavigate();


const handleSubmit = (e) => {
  e.preventDefault();

  // Buscar si existe un usuario válido
  const userValido = usuariosValidos.find(
    (u) => u.email === email && u.rut === rut
  );

  if (userValido) {
    onLogin(userValido); // Éxito: lo dejamos pasar
    navigate("/home");
  } else {
    alert("Usuario no registrado"); // Falla: no se encuentra
  }
};


  return (
    <div className="login-container">
      <div className="login-card">
        <img
  src={logoPolpaico}
  alt="Logo Polpaico"
  className="login-logo"
/>
        <h2>Bienvenido a MisCapacitaciones</h2>
        <p>Ingresa con tu correo y RUT para continuar</p>
        <form onSubmit={handleSubmit}>
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="nombre@empresa.cl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>RUT</label>
          <input
            type="text"
            placeholder="12.345.678-9"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
          />

          <button type="submit">Ingresar</button>
        </form>

        <div className="login-footer">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;


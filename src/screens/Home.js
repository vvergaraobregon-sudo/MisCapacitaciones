import React from 'react';
import './Home.css';
import logoPolpaico from '../assets/Logo_PolpaicoSoluciones.png';

const capacitacionesMock = [
  {
    nombre: "Poscosecha temprana",
    fechas: "18 - 19 - 20 jul",
    modalidad: "Online",
    foco: "Técnico",
    idioma: "Español"
  },
  {
    nombre: "Charla comercial: manejo del suelo",
    fechas: "12 - 15 - 20 ago",
    modalidad: "Presencial",
    foco: "Liderazgo",
    idioma: "Español"
  }
];

const Home = ({ user }) => {
  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logoPolpaico} alt="Logo Polpaico" className="home-logo" />
        <div className="home-user">
          <span>{user.email}</span>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </header>

      <main className="home-main">
        {/* Saludo personalizado */}
        <h2>¡Bienvenido, {user.email}!</h2>
        <p>Tu RUT registrado es: {user.rut}</p>

        <h3>Mis Capacitaciones</h3>
        <table className="capacitaciones-table">
          <thead>
            <tr>
              <th>Curso</th>
              <th>Fechas</th>
              <th>Modalidad</th>
              <th>Foco estratégico</th>
              <th>Idioma</th>
            </tr>
          </thead>
          <tbody>
            {capacitacionesMock.map((cap, index) => (
              <tr key={index}>
                <td>{cap.nombre}</td>
                <td>{cap.fechas}</td>
                <td>{cap.modalidad}</td>
                <td>{cap.foco}</td>
                <td>{cap.idioma}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Home;


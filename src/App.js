import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Prestamos from './Prestamos/Prestamos';
import Simulacion from './Simulacion';
import Simulacion2 from './Simulacion2';
import Simular from './Simular';
import Simular2 from './Simular2';

function App() {
  const [token, setToken] = useState(null);
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Simular" element={<Simular />} />
          <Route path="/Simular2" element={<Simular2 />} />
          <Route path="/" element={<Home token={token} setToken={setToken} />} />
          <Route path="/Prestamos" element={<Prestamos />} />
          <Route path="/Simulacion/:nombres/:apellidos/:telefono/:email/:monto/:cuotas/:interes/:valorCuota" element={<Simulacion nombres="Francisca" apellidos="Figueroa" telefono="948016888"/>}/>
          <Route path="/Simulacion2/:nombres/:apellidos/:telefono/:email/:monto/:cuotas/:interes/:valorCuota" element={<Simulacion2 nombres="Francisca" apellidos="Figueroa" telefono="948016888"/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

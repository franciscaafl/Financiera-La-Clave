import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Prestamos from './Prestamos/Prestamos';
import Simulacion from './Simulacion';
import Simular from './Simular';

function App() {
  const [token, setToken] = useState(null);
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Simular" element={<Simular />} />
          <Route path="/" element={<Home token={token} setToken={setToken} />} />
          <Route path="/Prestamos" element={<Prestamos />} />
          <Route path="/Simulacion/:nombres/:apellidos/:telefono/:email/:monto/:cuotas/:interes/:valorCuota" element={<Simulacion nombres="francisca" apellidos="figueroa" telefono="12345678"/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

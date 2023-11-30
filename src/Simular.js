import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './Simular.module.css';
import { calcularCuota } from './calcularCuota';
import Header from './components/Header/Header';

function Simular() {

  const [ nombres, setNombres ] = useState('');
  const [ apellidos, setApellidos ] = useState('');
  const [ telefono, setTelefono ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ monto, setMonto ] = useState('');
  const [ cuotas, setCuotas ] = useState('');
  const [ interes, setInteres ] = useState('');
  const navigate = useNavigate();


  const recuperarDato = (name, value) => {

    switch (name) {
      case 'nombres':
        setNombres(value);
        break;
      case 'apellidos':
        setApellidos(value);
        break;
      case 'telefono':
        setTelefono(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'monto':
        setMonto(value);
        break;
      case 'cuotas':
        setCuotas(value);
        break;
      case 'interes':
        setInteres(value);
        break;
      default:
        break;
    }
  };

  let valorCuota = calcularCuota(monto, interes, cuotas);
  console.log(valorCuota);



  
  

  return (
    <div className={s.App}>
        <Header />
        <div className={s.wrapper}>
          <div className={s.box}>
            <div className={s.boxInfo}>
            <h1 className={s.title}>Información de la solicitud</h1>
            <h2 className={s.title}>Información personal</h2>
            <div className={s.infos}>
              <div className={s.info}>
                <label>Nombres</label>
                <input onChange={(e) => recuperarDato("nombres", e.target.value)} name="nombres" value={nombres} type="text" className={s.input} placeholder="ej: María José"/>
              </div>
              <div className={s.info}>
                <label>Apellidos</label>
                <input onChange={(e) => recuperarDato("apellidos", e.target.value)} name="apellidos" value={apellidos} className={s.input} type="text" placeholder="ej: González Torres"/>
              </div>
            </div>
            {/* Termine un div */}
            <div className={s.infos}>
              <div className={s.info}>
                <label>Teléfono</label>
                <input onChange={(e) => recuperarDato("telefono", e.target.value)} name="telefono" value={telefono}  className={s.input} type="text" placeholder="ej: +56 9 1234 5678"/>
              </div>
              <div className={s.info}>
                <label>Email</label>
                <input onChange={(e) => recuperarDato("email", e.target.value)} name="email"  value={email}  className={s.input} type="text" placeholder="ej: mariagonzalez@example.com"/>
              </div>
            </div>
            {/* Termina otro div */}
            <h2 className={s.title}>Datos del préstamo</h2>
            <div className={s.infos}>
              <div className={s.info}>
                <label>Monto del préstamo en UF</label>
                <input onChange={(e) => recuperarDato("monto", e.target.value)} name="monto" value={monto} className={s.input} type="text" placeholder="ej: 1000"/>
              </div>
              <div className={s.info}>
                <label>Cantidad de cuotas</label>
                <input onChange={(e) => recuperarDato("cuotas", e.target.value)} name="cuotas" value={cuotas} className={s.input} type="text" placeholder="ej: 12"/>
              </div>
            </div>
            {/* Termina otro div */}
            <div className={s.infos}>
              <div className={s.info}>
                <label>Tasa de interés en UF</label>
                <input onChange={(e) => recuperarDato("interes", e.target.value)} name="interes" value={interes} className={s.input} type="text" placeholder="ej: 5%"/>
              </div>
            </div>
            </div>
            <Link to={`/Simulacion/${nombres}/${apellidos}/${telefono}/${email}/${monto}/${cuotas}/${interes}/${valorCuota}`}>
              <button className={s.button}>Simular</button>
            </Link>
            
            </div>
          </div>    
    </div>

  );
}

export default Simular;
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import './Modal.css';
import s from './Prestamos.module.css';


function Prestamos() {

  const [ abrirModal, setAbrirModal ] = useState(false);
  const [ cerrarModal, setCerrarModal ] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const supervisores = ['Daniela Perez', 'Juan Hernandez', 'Camila Suarez', 'Felipe Mellado']
  //const [supervisores, setSupervisores] = useState([]);



  const abrir = () => {
    setAbrirModal(true);
  };

  const cerrar = () => {
    setAbrirModal(false);
  };

  // Función para manejar cambios en la selección
  const manejarCambio = (event) => {
    setOpcionSeleccionada(event.target.value);
  };


  return (
    <>
    <Header state="Cerrar sesión"/>
    <article className={s.wrapper}>
      <h2>Lista de préstamos</h2>
      <div className={s.infoBox}>
        <div className={s.info}>
          <img src="/totales.png" alt="Icono amarillo de billete"/>
          <div className={s.infoText}>
            <span className={s.rotulo}>PRÉSTAMOS TOTALES</span>
            <span className={s.cantidad}>4</span>
        </div>
      </div>
          <div className={s.info}>
          <img src="/aprobados.png" alt="Icono amarillo de billete"/>
          <div className={s.infoText}>
            <span className={s.rotulo}>PRÉSTAMOS APROBADOS</span>
            <span className={s.cantidad}>1</span>
          </div>
         </div>
      <div className={s.info}>
        <img src="/rechazado.png" alt="Icono amarillo de billete"/>
        <div className={s.infoText}>
          <span className={s.rotulo}>PRÉSTAMOS RECHAZADOS</span>
          <span className={s.cantidad}>0</span>
        </div>
      </div>
      </div>

    <div className={s.info2}>
      <div className={s.table}> 
        <span className={s.rotulo2}>ID</span>
        <span className={s.rotulo2}>NOMBRE</span>
        <span className={s.rotulo2}>MONTO EN UF</span>
        <span className={s.rotulo2}>ESTADO</span>
      </div>

      <div className={s.datos}>
        <div className={s.table}> 
          <span className={s.dato}>00001234</span>
          <span className={s.dato}>José Fuentes</span>
          <span className={s.dato}>500</span>
          <span className={s.dato}>Pendiente</span>
          <button className={s.buttonSecondary} onClick={abrir}>Derivar</button>
          {abrirModal && (
            <div className={`overlay ${abrirModal ? 'show' : 'hide'}`}>
            <div className={`modal ${abrirModal ? 'show' : 'hide'}`}>
              <div className='modal-content'>
                <div className={s.modal}>
                 <span>Seleccione al supervisor</span>
                 <select className={s.select} id="opciones" value={opcionSeleccionada} onChange={manejarCambio}>
                  <option value="">Seleccione</option>
                  {supervisores.map((nombre, index) => (
                    <option key={index} value={nombre}>
                      {nombre}
                    </option>
                  ))}
                </select>
                 <button className={s.buttonPrimary} onClick={cerrar}>Enviar</button>
                </div>
              </div>
            </div>
          </div>
            )}
        </div>
        <div className={s.table}> 
          <span className={s.dato}>00001234</span>
          <span className={s.dato}>Emilia Torres</span>
          <span className={s.dato}>800</span>
          <span className={s.dato}>Pendiente</span>
          <button className={s.buttonSecondary} onClick={abrir}>Derivar</button>
          {abrirModal && (
            <div className={`overlay ${abrirModal ? 'show' : 'hide'}`}>
            <div className={`modal ${abrirModal ? 'show' : 'hide'}`}>
              <div className='modal-content'>
                <div className={s.modal}>
                 <span>Seleccione al supervisor</span>
                 <select className={s.select} id="opciones" value={opcionSeleccionada} onChange={manejarCambio}>
                  <option value="">Seleccione</option>
                  {supervisores.map((opcion, index) => (
                    <option key={index} value={opcion}>
                      {opcion}
                    </option>
                  ))}
                </select>
                 <button className={s.buttonPrimary} onClick={cerrar}>Enviar</button>
                </div>
              </div>
            </div>
          </div>
            )}
        </div>
        <div className={s.table}> 
          <span className={s.dato}>00001235</span>
          <span className={s.dato}>Martín Caceres</span>
          <span className={s.dato}>1000</span>
          <span className={s.dato}>Aprobado</span>
          <button className={s.buttonSecondary} onClick={abrir}>Derivar</button>
          {abrirModal && (
            <div className={`overlay ${abrirModal ? 'show' : 'hide'}`}>
            <div className={`modal ${abrirModal ? 'show' : 'hide'}`}>
              <div className='modal-content'>
                <div className={s.modal}>
                 <span>Seleccione al supervisor</span>
                 <select className={s.select} id="opciones" value={opcionSeleccionada} onChange={manejarCambio}>
                  <option value="">Seleccione</option>
                  {supervisores.map((nombre, index) => (
                    <option key={index} value={nombre}>
                      {nombre}
                    </option>
                  ))}
                </select>
                 <button className={s.buttonPrimary} onClick={cerrar}>Enviar</button>
                </div>
              </div>
            </div>
          </div>
            )}
        </div>
        <div className={s.table}> 
          <span className={s.dato}>00001236</span>
          <span className={s.dato}>Christian Barrios</span>
          <span className={s.dato}>1200</span>
          <span className={s.dato}>Pendiente</span>
          <button className={s.buttonSecondary} onClick={abrir}>Derivar</button>
          {abrirModal && (
            <div className={`overlay ${abrirModal ? 'show' : 'hide'}`}>
            <div className={`modal ${abrirModal ? 'show' : 'hide'}`}>
              <div className='modal-content'>
                <div className={s.modal}>
                 <span>Seleccione al supervisor</span>
                 <select className={s.select} id="opciones" value={opcionSeleccionada} onChange={manejarCambio}>
                  <option value="">Seleccione</option>
                  {supervisores.map((nombre, index) => (
                    <option key={index} value={nombre}>
                      {nombre}
                    </option>
                  ))}
                </select>
                 <button className={s.buttonPrimary} onClick={cerrar}>Enviar</button>
                </div>
              </div>
            </div>
          </div>
            )}
        </div>
      </div>

    </div>
    </article>
    </>

  );
}

export default Prestamos;
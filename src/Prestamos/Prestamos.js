import React from 'react';
import Header from '../components/Header/Header';
import s from './Prestamos.module.css';

function Prestamos() {

  return (
    <>
    <Header />
    <article className={s.wrapper}>
      <h2>Lista de préstamos</h2>
      <div className={s.infoBox}>
        <div className={s.info}>
          <img src="/totales.png" alt="Icono amarillo de billete"/>
          <div className={s.infoText}>
            <span className={s.rotulo}>PRÉSTAMOS TOTALES</span>
            <span className={s.cantidad}>102</span>
        </div>
      </div>
          <div className={s.info}>
          <img src="/aprobados.png" alt="Icono amarillo de billete"/>
          <div className={s.infoText}>
            <span className={s.rotulo}>PRÉSTAMOS APROBADOS</span>
            <span className={s.cantidad}>72</span>
          </div>
         </div>
      <div className={s.info}>
        <img src="/rechazado.png" alt="Icono amarillo de billete"/>
        <div className={s.infoText}>
          <span className={s.rotulo}>PRÉSTAMOS RECHAZADOS</span>
          <span className={s.cantidad}>30</span>
        </div>
      </div>
      </div>

      <div className={s.table}> 
        <div className={s.propiedad}>
          <span className={s.rotulo2}>ID</span>
          <span className={s.dato}>00001234</span>
        </div>
        <div className={s.propiedad}>
          <span className={s.rotulo2}>NOMBRE</span>
          <span className={s.dato}>Francisca Figueroa</span>
        </div>
        <div className={s.propiedad}>
          <span className={s.rotulo2}>MONTO</span>
          <span className={s.dato}>$300,000</span>
        </div>
        <div className={s.propiedad}>
          <span className={s.rotulo2}>ESTADO</span>
          <span className={s.dato}>Pendiente</span>
        </div>
        <div className={s.propiedad}>
          <span className={s.rotulo2}>DERIVAR</span>
          <span className={s.dato}>Pendiente</span>
        </div>
      </div>
    </article>
    </>

  );
}

export default Prestamos;
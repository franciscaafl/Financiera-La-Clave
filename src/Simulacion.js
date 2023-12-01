import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './Simulacion.module.css';
import { calcularCuotaEnPesos } from './calcularCuotaPesos.js'; // Reemplaza con la ruta correcta
import Header from './components/Header/Header';


function Simulacion() {

  const { nombres, apellidos, telefono, email, monto, cuotas, interes, valorCuota } = useParams();
  const [valorCuotaEnPesos, setValorCuotaEnPesos] = useState(null);
  const [valorCuotaEnUF, setValorCuotaEnUF] = useState(null);

  useEffect(() => {
    const calcularValorCuota = async () => {
      try {
        // Convierte los parámetros de la URL a números según sea necesario
        const montoEnUF = parseFloat(monto);
        const tasaInteres = parseFloat(interes);
        const plazo = parseInt(cuotas);
        console.log('Valores de entrada:', monto, interes, cuotas);

        // Calcula la cuota en pesos utilizando la función calcularCuotaEnPesos
        const [cuotaEnPesos, cuotaEnUF] = await calcularCuotaEnPesos(montoEnUF, tasaInteres, plazo);

        // Actualiza el estado con el valor de la cuota en pesos
        setValorCuotaEnPesos(cuotaEnPesos);
        setValorCuotaEnUF(cuotaEnUF);

      } catch (error) {
        console.error('Error al calcular la cuota en pesos:', error);
      }
    };

    calcularValorCuota();
  }, [monto, interes, cuotas]);

  return (
    <>
    <Header />
    <article className={s.wrapper}>
      <h1>Simulación del préstamo</h1>
      <div className={s.box}>
      <div className={s.table}>
        <div className={s.infos}>
          <div className={s.info}>
            <text className={s.rotulo}>Nombres:</text>
            <span>{nombres}</span>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Teléfono:</tex>
            <text>{telefono}</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Monto en UF:</tex>
            <text>{monto}</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Tasa de interés:</tex>
            <text>{interes}</text>
          </div>
        </div>
        <div className={s.infos}>
          <div className={s.info}>
            <text className={s.rotulo}>Apellidos:</text>
            <text>{apellidos}</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Email:</tex>
            <text>{email}</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Valor de la cuota en UF:</tex>
            <text>{valorCuotaEnUF}</text>
          </div>
          <div className={s.info}>
                <tex className={s.rotulo}>Valor de la cuota en Pesos:</tex>
                <text>{valorCuotaEnPesos !== null ? valorCuotaEnPesos : 'Calculando...'}</text>
              </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Cantidad de cuotas:</tex>
            <text>{cuotas}</text>
          </div>
        </div>
      </div>
      <div className={s.buttons}>
        <button className={s.button}>Volver</button>
      </div>
      </div>
    </article>
    </>

  );
}

export default Simulacion;
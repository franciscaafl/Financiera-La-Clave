import { obtenerDatosUF } from "./obtenerDatosUF";

const calcularCuota = async (valorCredito, tasaMensual, plazo) => {


  let valorUF = await obtenerDatosUF();
  valorUF = parseInt(valorUF);
  console.log("Valor uf", valorUF);

  //Pasar de pesos a UF
  valorCredito = valorCredito * valorUF;
  tasaMensual = tasaMensual/100;
  console.log(tasaMensual)

  //Calcular la cuota
  var cuota = valorCredito / ((1 - ((1 + tasaMensual)**(-plazo))) / tasaMensual );

  return (cuota);

};

export { calcularCuota };

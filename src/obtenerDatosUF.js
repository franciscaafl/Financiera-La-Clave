// api.js

export async function obtenerDatosUF() {
  const url = "https://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=e22b0c0739c3c80bd59442fc6c6be36954d524e9&formato=json";

  try {
      const response = await fetch(url);

      if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
      }

      const data = await response.json();
      const valorUF = data.UFs[0].Valor; // Asumiendo que el valor de la UF está en la primera posición del array
      return valorUF;
  } catch (error) {
      console.error("Hubo un problema con la petición fetch:", error);
      throw error;
  }
}

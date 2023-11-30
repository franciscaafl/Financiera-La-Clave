const calcularCuotaEnPesos = async (valorCredito, tasaMensual, plazo) => {
    // Obtener la tasa de cambio UF a pesos desde la API
    const apiUrl = "https://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=e22b0c0739c3c80bd59442fc6c6be36954d524e9&formato=json";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Respuesta de la API:", data);
        
        if (data.UFs && data.UFs.length > 0) {
            const ufToPesosExchangeRate = parseFloat(data.UFs[0].Valor.replace('.', '').replace(',', '.'));
            console.log("Este es el valor de cambio en pesos: ", ufToPesosExchangeRate);

            if (!isNaN(ufToPesosExchangeRate)) {
                // Calcular la cuota en UF
                const tasaMensualDecimal = tasaMensual / 100; // Convertir tasa a decimal
                var cuotaEnUF = valorCredito / ((1 - Math.pow(1 + tasaMensualDecimal, -plazo)) / tasaMensualDecimal);
                console.log('Cuota en UF:', cuotaEnUF);

                // Convertir la cuota de UF a pesos
                var cuotaEnPesos = cuotaEnUF * ufToPesosExchangeRate;
                console.log('Cuota en Pesos:', cuotaEnPesos);

                // Redondear la cuota a 2 decimales
                cuotaEnPesos = parseFloat(cuotaEnPesos.toFixed(2));

                return [cuotaEnPesos, cuotaEnUF];
            } else {
                console.error('Error: Tasa de cambio UF a Pesos no válida.');
            }
        } else {
            console.error('Error al obtener la tasa de cambio desde la API.');
            return null;
        }
    } catch (error) {
        console.error('Error al realizar la solicitud a la API:', error);
        return null;
    }
};

export { calcularCuotaEnPesos };


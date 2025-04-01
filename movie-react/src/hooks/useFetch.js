import { useState, useEffect } from "react";

export default function useFetch(url, options) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Realiza el primer intento de obtener los datos
                let response = null;
                let json = null;

                // Mientras no haya datos válidos, realiza otro intento
                while (!json || json.length === 0) {
                    response = await fetch(url, options);
                    json = await response.json();

                    // Si no se obtuvo resultado, espera un momento antes de reintentar
                    if (!json || json.length === 0) {
                        console.log("No se encontraron datos, reintentando...");
                        await new Promise(resolve => setTimeout(resolve, 1000)); // Retardo de 1 segundo
                    }
                }

                // Si se obtienen datos válidos, actualizamos el estado
                setResult(json);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { loading, result, error };
}
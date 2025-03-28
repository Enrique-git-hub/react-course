import { useState, useEffect } from "react";

export default function useFetch(url, options) {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(true)
    const [error, setError] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json()
                setLoading(false)
                setResult(json)
            }catch(err){
                setError(err)
                setLoading(false)
            }
        })()
    }, [options, url])

    return {loading, result, error}
}
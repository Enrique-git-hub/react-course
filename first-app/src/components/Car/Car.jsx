import {React, useState, useEffect} from "react"

export default function Car() {
    const [carState, setCarState] = useState({
        started: false,
        countKM: 0
    })

    useEffect(() => {
        document.title = `Coche ${carState.started}`
    }, [carState.started])

    const checkStateCar = () => {
        if(carState.started) {
            return <span style={{ color: "green" }}>Encendido</span>
        }else{return <span style={{ color: "red" }}>Apagado</span>}
    }

    const increaseKM = num => {
        if(carState.started) {
            setCarState({
                ...carState,
                countKM: carState.countKM + num
            })
        }else{
            alert("el coche esta apagado")
        }
    }
        
    return (
        <div>
            <h2>Nuestro coche esta: {checkStateCar()}</h2>
            <h2>Kilometros recorridos: {carState.countKM} km</h2>
            <button onClick={() => {setCarState({
                ...carState,
                started: !carState.started
            })}}>Encender / Apagar</button>
            <button onClick={() => {increaseKM(5)}}>Incrementar kilometros</button>
        </div>
    )
}
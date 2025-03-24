import react from "react" 

export default function Saludar(props) {
    console.log(props)

    return (
        <div>
            <h2>Hola {props.name}, tienes {props.age} y tu color es {props.color}</h2>
        </div>
    )
}
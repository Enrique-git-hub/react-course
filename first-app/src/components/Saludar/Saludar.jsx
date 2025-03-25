import "./Saludar.scss"

export default function Saludar(props) {
    const {data: {name, age, color}} = props
    console.log(props.data)
    return (
        <div className="saludar">
            <p>Hola {name} ¿como estas?</p>
            <p>{age}</p>
            <p>{color}</p>
        </div>
    )
}
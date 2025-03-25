import React from "react";

export default function Formulario() {
    return (
    <form>
        <FormInput
        title="Email"
        name="email"
        type="email"
        placeholder="Escribe tu correo electronico."/>
        <br/>

        <FormInput
        title="Contraseña"
        name="password"
        type="password"
        placeholder="Escribe tu contraseña"/>
        <br/>
        <FormButtonSend/>
    </form>
    ) 
    
}

export function FormInput(props) {
    const { title, name, type, placeholder } = props
    return (
        <div>
            <label>{title} </label>
            <input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export function FormButtonSend() {
    return (
        <button type="submit">enviar</button>
    )
}
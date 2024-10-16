import { useState, useContext } from "react";
import { FirstContext } from "../context/FirstContext";

export const Login = () =>{
    const [usuarioInput, setUsuarioInput] = useState("");
    const [contrasenaInput, setContrasenaInput] = useState("");
    const {validacionLogin} = useContext(FirstContext);

    return (
        <>
            <h1>Bill Up</h1>

            <form onSubmit={e=>e.preventDefault()}>
                <label htmlFor="usuario">Usuario</label>
                <input onChange={(e)=>setUsuarioInput(e.target.value)} id="usuario" name="usuario" type="text" placeholder="Ingrese su usuario"/>

                <label htmlFor="contrasena">Contraseña</label>
                <input onChange={(e)=>setContrasenaInput(e.target.value)} id="contrasena" name="contrasena" type="text" placeholder="Ingrese su contraseña"/>

                <button onClick={()=>validacionLogin(usuarioInput,contrasenaInput)}>Ingresar</button>
                <button>Recuperar contraseña</button>
            </form>
        </>
    );
}
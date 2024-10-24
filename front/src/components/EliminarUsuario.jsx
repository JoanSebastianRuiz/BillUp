import { MenuUsuario } from "./MenuUsuario";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export const EliminarUsuario = () =>{
    const {setIdUsuario, setEstado} = useContext(UsuarioContext);
    

    return (
        <>
            <MenuUsuario></MenuUsuario>
            <form onSubmit={e=>e.preventDefault()}>
                <label htmlFor="idUsuario">Id de usuario</label>
                <input onChange={e=>setIdUsuario(e.target.value )} id="idUsuario" name="idUsuario" type="text" placeholder="Ingrese el id del usuario que desea eliminar" />
                <button onClick={()=>{
                    setEstado(false);
                }}>Eliminar</button>
            </form>
        </>
    );
}
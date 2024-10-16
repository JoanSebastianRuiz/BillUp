import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { BtnSalir } from "./BtnSalir";

export const MenuUsuario = () =>{
    const {opcionCrearUsuario, opcionEliminarUsuario} = useContext(UsuarioContext);
    return(
        <>
            <h1>Menu usuario</h1>
            <button onClick={()=>opcionCrearUsuario()}>Registrar usuario</button>
            <button onClick={()=>opcionEliminarUsuario()}>Eliminar usuario</button>
            <button>Editar usuario</button>
            <button>Consultar usuarios</button>
            <BtnSalir></BtnSalir>
        </>
    );
}
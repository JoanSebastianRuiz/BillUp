import { DatosInputUsuario } from "./DatosInputUsuario";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useContext } from "react";

export const EditarUsuario = () =>{
    const {setEstado} = useContext(UsuarioContext);

    return(
        <>
            <DatosInputUsuario 
            parrafo="Ingrese los datos del usuario que desea editar"
            classNumeroDocumento="order-first"
            nameButton="Editar"
            functionButton={async ()=>{
                setEstado(true);
                console.log("Usuario editado");
                }}></DatosInputUsuario>

        </>
    );
}
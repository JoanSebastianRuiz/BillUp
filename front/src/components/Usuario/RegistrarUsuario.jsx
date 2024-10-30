import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { DatosInputUsuario } from "./DatosInputUsuario";


export const RegistrarUsuario = () => {
    const {setEstado, postUsuario} = useContext(UsuarioContext);
    return (

        <>
            <DatosInputUsuario 
            parrafo="Ingrese los datos del usuario que desea registrar"
            nameButton="Registrar"
            functionButton={async ()=>{
                setEstado(true);
                await postUsuario();}}></DatosInputUsuario>

        </>
    );
}
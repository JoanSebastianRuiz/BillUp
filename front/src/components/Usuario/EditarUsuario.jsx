import { DatosInputUsuario } from "./DatosInputUsuario";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export const EditarUsuario = () =>{
    const { putUsuario} = useContext(UsuarioContext);
    const {id_usua} = useParams();

    return(
        <>
            <DatosInputUsuario 
            parrafo="Modifique los datos del usuario que desea editar"
            id_usua={id_usua}
            classNumeroDocumento="order-first"
            nameButton="Confirmar"
            functionButton={async ()=>{
                putUsuario(id_usua);
                }}></DatosInputUsuario>

        </>
    );
}
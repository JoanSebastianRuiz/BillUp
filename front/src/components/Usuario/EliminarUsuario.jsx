import { MenuUsuario } from "./MenuUsuario";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { BtnAccion } from "../Buttons/BtnAccion";
import { ContenedorFormCrud } from "../ElementosForm/ContenedorFormCrud";
import { ContenedorInputCrud } from "../ElementosForm/ContenedorInputCrud";
import { LabelCrud } from "../Labels/LabelCrud";
import { InputTextCrud } from "../ElementosForm/InputTextCrud";
import { ContenedorBtnAccion } from "../ElementosForm/ContenedorBtnAccion";
import { ParrafoCrud } from "../Text/ParrafoCrud";

export const EliminarUsuario = () =>{
    const {setNumeroDocumento, setEstado} = useContext(UsuarioContext);
    

    return (
        <>
            <MenuUsuario></MenuUsuario>
            <form onSubmit={e=>e.preventDefault()}>
                <ParrafoCrud name="Ingrese el numero de documento del usuario que desea eliminar"></ParrafoCrud>
                <ContenedorFormCrud>
                    <ContenedorInputCrud>
                        <LabelCrud htmlFor={numeroDocumento} name="Numero de documento"></LabelCrud>
                        <InputTextCrud onChange={e=>setNumeroDocumento(e.target.value)}></InputTextCrud>
                    </ContenedorInputCrud>
                </ContenedorFormCrud>

                <ContenedorBtnAccion>
                    <BtnAccion name="Eliminar" onClick={()=>setEstado(false)}></BtnAccion>
                </ContenedorBtnAccion>
                
            </form>
        </>
    );
}
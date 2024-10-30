import { BtnAccion } from "../Buttons/BtnAccion";

export const UserCard = ({nombre_usua, apellido_usua, nombre_rol, estado_usua, numero_documento_usua}) =>{
    return(
        <>
            <li className="p-6 bg-slate-50 rounded-xl">
                <p>Nombres: {nombre_usua}</p>
                <p>Apellidos: {apellido_usua}</p>
                <p>Numero de documento: {numero_documento_usua}</p>
                <p>Rol: {nombre_rol}</p>
                <p>Estado: {estado_usua}</p>
                <BtnAccion name="Mas informacion" onClick={console.log("Mas informacion")}></BtnAccion>
            </li>
        </>
    );
}
import { MenuUsuario } from "./MenuUsuario";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { BtnAccion } from "../Buttons/BtnAccion";

export const EliminarUsuario = () =>{
    const {setIdUsuario, setEstado} = useContext(UsuarioContext);
    

    return (
        <>
            <MenuUsuario></MenuUsuario>
            <form className="flex flex-wrap gap-y-10 gap-x-14 text-gray-200 w-7/12 mx-auto place-content-center relative mt-20 max-w-2xl place-self-center" onSubmit={e=>e.preventDefault()}>
                <div className="flex flex-col gap-y-4 items-center">
                    <label className="text-2xl font-bold text-slate-50" htmlFor="idUsuario">Id de usuario</label>
                    <input className="min-w-72 max-w-96 bg-slate-100 text-slate-500 rounded-xl focus:outline-none px-2 py-2" onChange={e=>setIdUsuario(e.target.value)} id="idUsuario" name="idUsuario" type="text" placeholder="Ingrese el id del usuario que desea eliminar" />
                    <BtnAccion name="Eliminar" onClick={()=>setEstado(false)}></BtnAccion>
                </div>
            </form>
        </>
    );
}
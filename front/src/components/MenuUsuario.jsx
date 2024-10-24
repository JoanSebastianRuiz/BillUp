import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { BtnSalir } from "./BtnSalir";
import { IoMenu } from "react-icons/io5";


export const MenuUsuario = () =>{
    const {opcionCrearUsuario, opcionEliminarUsuario} = useContext(UsuarioContext);

    const classBoton= "bg-slate-900 p-2 rounded-lg text-slate-50 hover:bg-slate-800 w-2/5";

    const classH1="text-4xl font-bold px-2 py-4 text-center invisible";

    return(
        <div className="relative bottom-44 flex flex-col items-center bg-gray-200 hover:translate-y-44 duration-200 mx-auto w-1/3 pt-6 rounded-b-xl">
            
            <div className="flex flex-wrap gap-y-3 gap-x-3 justify-center">
                <button className={classBoton} onClick={()=>opcionCrearUsuario()}>Registrar usuario</button>
                <button className={classBoton} onClick={()=>opcionEliminarUsuario()}>Eliminar usuario</button>
                <button className={classBoton}>Editar usuario</button>
                <button className={classBoton}>Consultar usuarios</button>
                <BtnSalir classBoton={classBoton}></BtnSalir>
            </div>
            <svg className="w-12 my-3 fill-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
        </div>
    );
}
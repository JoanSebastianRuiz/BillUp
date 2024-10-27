import { BtnMenuDesplegable } from "./BtnMenuDesplegable";
import {useNavigate} from "react-router-dom"


export const MenuUsuario = () => {
    const navigate = useNavigate();
    

    return (
        <div className="flex justify-center">
            <div className="absolute -top-64 flex flex-col items-center bg-gray-200 hover:translate-y-64 duration-200 w-1/4 pt-10 rounded-b-xl justify-center z-10 min-w-80">
                <div className="flex flex-wrap gap-y-3 gap-x-3 justify-center">
                    
                    <BtnMenuDesplegable name="Registrar" onClick={() => navigate("/usuarios/registrar")}></BtnMenuDesplegable>
                    <BtnMenuDesplegable name="Eliminar" onClick={() => navigate("/usuarios/eliminar")}></BtnMenuDesplegable>
                    <BtnMenuDesplegable name="Editar" onClick={() => navigate("/usuarios/editar")}></BtnMenuDesplegable>
                    <BtnMenuDesplegable name="Consultar" onClick={() => navigate("/usuarios")}></BtnMenuDesplegable>
                </div>
                <svg className="w-10 my-2 fill-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
            </div>
        </div>
    );
}
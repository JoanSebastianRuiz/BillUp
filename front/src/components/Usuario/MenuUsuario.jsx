import { BtnMenuDesplegable } from "../Buttons/BtnMenuDesplegable";
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';


export const MenuUsuario = () => {
    const navigate = useNavigate();
    

    return (
        <div className="flex justify-center">
            <div className="absolute -top-36 flex flex-col items-center bg-gray-200 hover:translate-y-36 duration-200 w-1/4 pt-10 rounded-b-xl justify-center z-10 min-w-80">
                <div className="flex flex-wrap gap-y-3 gap-x-3 justify-center">
                    
                    <BtnMenuDesplegable name="Registrar" onClick={() => navigate("/usuarios/registrar")}></BtnMenuDesplegable>
                    <BtnMenuDesplegable name="Consultar" onClick={() => navigate("/usuarios")}></BtnMenuDesplegable>
                </div>

                <FontAwesomeIcon icon={faSortDown} className=" h-10 my-2 text-slate-800"/>
            </div>
        </div>
    );
}
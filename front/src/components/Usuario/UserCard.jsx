import { BtnAccion } from "../Buttons/BtnAccion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ParrafoCard } from "../Text/ParrafoCard";
import { TituloCard } from "../Text/TituloCard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

export const UserCard = ({id_usua, nombre_usua, apellido_usua, nombre_rol, estado_usua, numero_documento_usua, abreviatura_tipo_docu}) =>{
    const nombreSplit = nombre_usua.split(" ");
    const primerNombre = nombreSplit[0];
    const apellidoSplit = apellido_usua.split(" ");
    const primerApellido = apellidoSplit[0];
    const navigate = useNavigate();
    const {deleteUsuario, usuarios, setUsuarios} = useContext(UsuarioContext);

    const handleEliminarUsuario = () =>{
        setUsuarios(usuarios.filter(({_id_usua})=>_id_usua!==id_usua));
        deleteUsuario(id_usua);
    }

    return(
        <>
            <li className="px-6 pt-6 pb-2 bg-slate-50 rounded-xl list-none w-3/12 max-w-80 min-w-72 shadow-slate-950 shadow-lg border-4 border-slate-800 ">
                <TituloCard name={`${primerNombre} ${primerApellido}`}></TituloCard>

                <ParrafoCard subtitulo={abreviatura_tipo_docu} name={numero_documento_usua}></ParrafoCard>
                <ParrafoCard subtitulo="Rol" name={nombre_rol}></ParrafoCard>
                <ParrafoCard subtitulo="Estado" name={estado_usua}></ParrafoCard>

                <div className="flex w-full h-12 justify-around items-center">
                    <FontAwesomeIcon icon={faPlus} className="h-6 text-slate-800 hover:text-slate-500 transition-colors duration-500 font-black" />

                    <FontAwesomeIcon onClick={()=>navigate(`/usuarios/editar/${id_usua}`)} icon={faPenToSquare} className="h-6 text-slate-800 hover:text-slate-500 transition-colors duration-500" />

                    <FontAwesomeIcon onClick={handleEliminarUsuario}  icon={faTrash} className="h-6 text-slate-800 hover:text-slate-500 transition-colors duration-500" />
                </div>
            </li>
        </>
    );
}
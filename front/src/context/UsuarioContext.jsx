import { createContext, useState, useContext } from "react";
import { CrearUsuario } from "../components/CrearUsuario";
import { EliminarUsuario } from "../components/EliminarUsuario";
import { FirstContext } from "./FirstContext";

export const UsuarioContext = createContext();

export const UsuarioContextProvider = (props) =>{
    const [idUsuario, setIdUsuario] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [tipoDocumento, setTipoDocumento] = useState("CC");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [estado, setEstado] = useState(true);

    const {setRender} = useContext(FirstContext);

    const opcionCrearUsuario = () =>{
        setRender(<CrearUsuario></CrearUsuario>);
    }

    const opcionEliminarUsuario = () =>{
        setRender(<EliminarUsuario></EliminarUsuario>);
    }
    return(
        <UsuarioContext.Provider value={
            {
                idUsuario,
                empresa,
                nombre,
                apellido,
                tipoDocumento,
                numeroDocumento,
                departamento,
                municipio,
                email,
                telefono,
                direccion,
                estado,
    
                setIdUsuario,
                setEmpresa,
                setNombre,
                setApellido,
                setTipoDocumento,
                setNumeroDocumento,
                setDepartamento,
                setMunicipio,
                setEmail,
                setTelefono,
                setDireccion,
                setEstado,
    
                opcionCrearUsuario,
                opcionEliminarUsuario
            }
        }>
            {props.children}
        </UsuarioContext.Provider>
    );
}
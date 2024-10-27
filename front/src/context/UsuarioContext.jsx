import { createContext, useState, useContext } from "react";
import { RegistrarUsuario } from "../components/RegistrarUsuario";
import { EliminarUsuario } from "../components/EliminarUsuario";
import { AutenticacionContext } from "./AutenticacionContext";

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
    const [clave, setClave] = useState("");
    const [estado, setEstado] = useState(true);

    const {setRender} = useContext(AutenticacionContext);

    const opcionCrearUsuario = () =>{
        setRender(<RegistrarUsuario></RegistrarUsuario>);
    }

    const opcionEliminarUsuario = () =>{
        setRender(<EliminarUsuario></EliminarUsuario>);
    }

    const postUsuario = async () =>{
        const url = "http://localhost:5000/usuarios";
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const body = {
            "idempresausuario": empresa,
            "idtipodocumentousuario": 1,
            "iddepartamentousuario": departamento,
            "idmunicipiousuario": municipio,
            "numerodocumentousuario": numeroDocumento,
            "nombreusuario": nombre,
            "apellidousuario": apellido,
            "correousuario": email,
            "telefonousuario": telefono,
            "direccionusuario": direccion,
            "claveusuario": numeroDocumento,
            "estadousuario": true
        }
        console.log(body);

        const opciones = {
            method: "POST",
            headers: cabeceras,
            body: JSON.stringify(body)
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                console.log(datos);
            }
        } catch (e){
            console.log(e);
        }
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
                opcionEliminarUsuario,
                postUsuario
            }
        }>
            {props.children}
        </UsuarioContext.Provider>
    );
}
import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsuarioContextProvider = (props) =>{
    const [idUsuario, setIdUsuario] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [estado, setEstado] = useState(true);
    const [departamentos,setDepartamentos]=useState([]);
    const [municipios,setMunicipios]=useState([]);
    const [tiposDocumento,setTiposDocumento]=useState([]);
    const [rol,setRol]=useState("");
    const [roles,setRoles]=useState([]);
    const [empresas,setEmpresas]=useState([]);
    const [usuarios,setUsuarios]=useState([]);

    const getDepartamentos = async ()=>{
        const url = "http://localhost:5000/departamentos";
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const opciones = {
            method: "GET",
            headers: cabeceras
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                //console.log((datos));
                return datos;
            }
        } catch (e){
            console.log(e);
            return [];
        }
    }

    const getMunicipios = async ()=>{
        const url = `http://localhost:5000/municipios?departamento=${departamento}`;
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const opciones = {
            method: "GET",
            headers: cabeceras
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                //console.log(datos);
                return datos;
            }
        } catch (e){
            console.log(e);
            return [];
        }
    }

    const getTiposDocumento = async ()=>{
        const url = `http://localhost:5000/tiposdocumento`;
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const opciones = {
            method: "GET",
            headers: cabeceras
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                //console.log(datos);
                return datos;
            }
        } catch (e){
            console.log(e);
            return [];
        }
    }

    const getRoles = async ()=>{
        const url = `http://localhost:5000/roles`;
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const opciones = {
            method: "GET",
            headers: cabeceras
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                //console.log(datos);
                return datos;
            }
        } catch (e){
            console.log(e);
            return [];
        }
    }

    const getEmpresas = async ()=>{
        const url = `http://localhost:5000/empresas`;
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const opciones = {
            method: "GET",
            headers: cabeceras
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                //console.log(datos);
                return datos;
            }
        } catch (e){
            console.log(e);
            return [];
        }
    }

    const getUsuarios = async ()=>{
        const url = `http://localhost:5000/usuarios`;
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const opciones = {
            method: "GET",
            headers: cabeceras
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                //console.log(datos);
                return datos;
            }
        } catch (e){
            console.log(e);
            return [];
        }
    }

    const getUsuarioId = async (id_usua)=>{
        const url = `http://localhost:5000/usuarios/${id_usua}`;
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const opciones = {
            method: "GET",
            headers: cabeceras
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                //console.log(datos);
                return datos;
            }
        } catch (e){
            console.log(e);
            return [];
        }
    }

    const validarUsuario = async (password)=>{
        const url = `http://localhost:5000/usuarios/validarusuario`;
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const body = {
            usuario: numeroDocumento,
            password: password
        }
        

        const opciones = {
            method: "POST",
            headers: cabeceras,
            body: JSON.stringify(body)
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                return datos;
            }
        } catch (e){
            console.log(e);
            return [];
        }
    }

    const postUsuario = async () =>{
        const url = "http://localhost:5000/usuarios";
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const body = {
            "idempresa": empresa,
            "idtipodocumento": tipoDocumento,
            "idrol": rol,
            "idmunicipio": municipio,
            "numerodocumento": numeroDocumento,
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "telefono": telefono,
            "direccion": direccion,
            "clave": numeroDocumento,
            "estado": estado
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
            return [];
        }
    }

    const putUsuario = async (id) =>{
        const url = "http://localhost:5000/usuarios";
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const body = {
            "id": id,
            "idempresa": empresa,
            "idtipodocumento": tipoDocumento,
            "idrol": rol,
            "idmunicipio": municipio,
            "numerodocumento": numeroDocumento,
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "telefono": telefono,
            "direccion": direccion,
            "clave": numeroDocumento,
            "estado": estado
        }
        console.log(body);

        const opciones = {
            method: "PUT",
            headers: cabeceras,
            body: JSON.stringify(body)
        }

        try{
            const respuesta = await fetch(url, opciones);
            if (respuesta.ok){
                const datos = await respuesta.json();
                //console.log(datos);
            }
        } catch (e){
            console.log(e);
            return [];
        }
    }

    const deleteUsuario = async (id) =>{
        const url = "http://localhost:5000/usuarios";
        const cabeceras = new Headers();
        cabeceras.set("Content-type", "application/json");

        const body = {
            "id": id
        }

        const opciones = {
            method: "DELETE",
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
            return [];
        }
    }

    return(
        <UsuarioContext.Provider value={
            {   //Variables
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
                departamentos,
                municipios,
                tiposDocumento,
                rol,
                roles,
                empresas,
                usuarios,

                //Set Variables
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
                setDepartamentos,
                setMunicipios,
                setTiposDocumento,
                setRol,
                setRoles,
                setEmpresas,
                setUsuarios,
                
                //Peticiones
                postUsuario,
                getDepartamentos,
                getMunicipios,
                getTiposDocumento,
                getRoles,
                getEmpresas,
                validarUsuario,
                getUsuarios,
                getUsuarioId,
                putUsuario
            }
        }>
            {props.children}
        </UsuarioContext.Provider>
    );
}
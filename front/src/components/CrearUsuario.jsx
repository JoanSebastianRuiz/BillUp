import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { MenuUsuario } from "./MenuUsuario";

export const CrearUsuario = () => {
    const {setEmpresa,
        setNombre,
        setApellido,
        setTipoDocumento,
        setNumeroDocumento,
        setDepartamento,
        setMunicipio,
        setEmail,
        setTelefono,
        setDireccion,
        setEstado} = useContext(UsuarioContext);

        setEstado(true);

    return (

        <>
        <MenuUsuario></MenuUsuario>

        <form onSubmit={e=>e.preventDefault()}></form>
            <label htmlFor="nombre">Empresa</label>
            <input onChange={e=>setEmpresa(e.target.value )} id="empresa" name="empresa" type="text" placeholder="Ingrese la empresa del usuario" />

            <label htmlFor="nombre">Nombres</label>
            <input onChange={e=>setNombre(e.target.value )} id="nombre" name="nombre" type="text" placeholder="Ingrese el nombre del usuario" />
|
            <label htmlFor="apellido">Apellidos</label>
            <input onChange={e=>setApellido(e.target.value )} id="apellido" name="apellido" type="text" placeholder="Ingrese el apellido del usuario" />

            <label htmlFor="tipoDocumento">Tipo de documento</label>
            <select onChange={e=>setTipoDocumento(e.target.value )} name="tipoDocumento" id="tipoDocumento">
                <option value="CC">C.C.</option>
                <option value="CE">C.E.</option>
                <option value="PP">P.P.</option>
            </select>

            <label htmlFor="numeroDocumento">Numero de documento</label>
            <input onChange={e=>setNumeroDocumento(e.target.value )} id="numeroDocumento" name="numeroDocumento" type="number" placeholder="Ingrese el numero del documento del usuario" />

            <label htmlFor="departamento">Departamento</label>
            <input onChange={e=>setDepartamento(e.target.value )} id="departamento" name="departamento" type="text" placeholder="Ingrese el departamento del usuario" />

            <label htmlFor="municipio">Municipio</label>
            <input onChange={e=>setMunicipio(e.target.value )} id="municipio" name="municipio" type="text" placeholder="Ingrese el municipio del usuario" />

            <label htmlFor="email">Email</label>
            <input onChange={e=>setEmail(e.target.value )} id="email" name="email" type="email" placeholder="Ingrese el email del usuario" />

            <label htmlFor="telefono">Telefono</label>
            <input onChange={e=>setTelefono(e.target.value )} id="telefono" name="telefono" type="number" placeholder="Ingrese el telefono del usuario" />

            <label htmlFor="direccion">Direccion</label>
            <input onChange={e=>setDireccion(e.target.value)} id="direccion" name="direccion" type="text" placeholder="Ingrese la direccion del usuario" />

            <button>Registrar</button>

        </>
    );
}
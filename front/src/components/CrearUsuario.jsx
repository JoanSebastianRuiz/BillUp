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
        setEstado,
        postUsuario} = useContext(UsuarioContext);

        const inputClass="w-96 bg-slate-100 text-slate-500 rounded-xl focus:outline-none px-2 py-2";
        const labelClass="text-3xl font-bold text_";
        const classBoton= "bg-slate-900 p-2 rounded-lg text-slate-50 hover:bg-slate-800 flex place-self-center mt-6 mx-";


    return (

        <div className="w-full">
            <MenuUsuario className="items-start"></MenuUsuario>

            <form className="flex flex-wrap gap-10 mt-6 place-content-center text-gray-200" onSubmit={e=>e.preventDefault()}>
                <div className="flex flex-col gap-y-4 ">
                    <label className={labelClass} htmlFor="nombre">Empresa</label>

                    <input className={inputClass} onChange={e=>setEmpresa(e.target.value )} id="empresa" name="empresa" type="text" placeholder="Ingrese la empresa del usuario" />

                </div>


                <div className="flex flex-col gap-y-4">
                    
                    <label className={labelClass} htmlFor="nombre">Nombres</label>
                    <input className={inputClass} onChange={e=>setNombre(e.target.value )} id="nombre" name="nombre" type="text" placeholder="Ingrese el nombre del usuario" />

                </div>


                <div className="flex flex-col gap-y-4">
                    <label className={labelClass} htmlFor="apellido">Apellidos</label>
                    <input className={inputClass} onChange={e=>setApellido(e.target.value )} id="apellido" name="apellido" type="text" placeholder="Ingrese el apellido del usuario" />
                </div>


                <div className="flex flex-col gap-y-4">
                    <label className={labelClass} htmlFor="tipoDocumento">Tipo de documento</label>
                    <select className={inputClass} onChange={e=>setTipoDocumento(e.target.value )} name="tipoDocumento" id="tipoDocumento">
                        <option value="CC">C.C.</option>
                        <option value="CE">C.E.</option>
                        <option value="PP">P.P.</option>
                    </select>
                </div>


                <div className="flex flex-col gap-y-4">
                    <label className={labelClass} htmlFor="numeroDocumento">Numero de documento</label>
                    <input className={inputClass} onChange={e=>setNumeroDocumento(e.target.value )} id="numeroDocumento" name="numeroDocumento" type="number" placeholder="Ingrese el numero del documento del usuario" />
                </div>


                <div className="flex flex-col gap-y-4">
                    <label className={labelClass} htmlFor="departamento">Departamento</label>
                    <input className={inputClass} onChange={e=>setDepartamento(e.target.value )} id="departamento" name="departamento" type="text" placeholder="Ingrese el departamento del usuario" />
                </div>


                <div className="flex flex-col gap-y-4">
                    <label className={labelClass} htmlFor="municipio">Municipio</label>
                    <input className={inputClass} onChange={e=>setMunicipio(e.target.value )} id="municipio" name="municipio" type="text" placeholder="Ingrese el municipio del usuario" />
                </div>


                <div className="flex flex-col gap-y-4">
                    <label className={labelClass} htmlFor="email">Email</label>
                    <input className={inputClass} onChange={e=>setEmail(e.target.value )} id="email" name="email" type="email" placeholder="Ingrese el email del usuario" />
                </div>


                <div className="flex flex-col gap-y-4">
                    <label className={labelClass} htmlFor="telefono">Telefono</label>
                    <input className={inputClass} onChange={e=>setTelefono(e.target.value )} id="telefono" name="telefono" type="number" placeholder="Ingrese el telefono del usuario" />
                </div>

                <div className="flex flex-col gap-y-4">
                    <label className={labelClass} htmlFor="direccion">Direccion</label>
                    <input className={inputClass} onChange={e=>setDireccion(e.target.value)} id="direccion" name="direccion" type="text" placeholder="Ingrese la direccion del usuario" />
                </div>
                <button className={classBoton} onClick={async ()=>{
                    setEstado(true);
                    await postUsuario();}}>Registrar</button>

            </form>


        </div>
    );
}
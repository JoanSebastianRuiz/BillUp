import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { MenuUsuario } from "./MenuUsuario";
import { BtnAccion } from "../Buttons/BtnAccion";
import { InputTextCrud } from "../ElementosForm/InputTextCrud";
import { InputNumberCrud } from "../ElementosForm/InputNumberCrud";
import { InputEmailCrud } from "../ElementosForm/InputEmailCrud";
import { LabelCrud } from "../Labels/LabelCrud";
import { SelectCrud } from "../ElementosForm/SelectCrud";

export const RegistrarUsuario = () => {
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
        postUsuario,
        getDepartamentos} = useContext(UsuarioContext);

    const [departamentos,setDepartamentos]=useState([{"id_depa":1,"nombre_depa":"Santander"}]);

    useEffect(()=>{
        const fetchDepartamentos = async () =>{
            const datosDepartamentos = await getDepartamentos();
            setDepartamentos(datosDepartamentos);
        }
        fetchDepartamentos();
        
    },[]);

    const inputClass="min-w-72 max-w-96 bg-slate-100 text-slate-500 rounded-xl focus:outline-none px-2 py-2";


    return (

        <>
            <MenuUsuario></MenuUsuario>

            <form className=""  onSubmit={e=>e.preventDefault()}>
                <div className="flex flex-wrap gap-y-10 gap-x-14 text-gray-200 w-7/12 mx-auto place-content-center relative mt-20 max-w-2xl place-self-center">
                    <div className="flex flex-col gap-y-4">
                        <LabelCrud htmlFor="nombre" name="Empresa"></LabelCrud>
                        <InputTextCrud onChange={e=>setEmpresa(e.target.value )} id="empresa" name="empresa"></InputTextCrud>
                    </div>


                    <div className="flex flex-col gap-y-4">
                        
                        <LabelCrud htmlFor="nombre" name="Nombres"></LabelCrud>
                        <InputTextCrud onChange={e=>setNombre(e.target.value )} id="nombre" name="nombre" />

                    </div>


                    <div className="flex flex-col gap-y-4">
                        <LabelCrud htmlFor="apellido" name="Apellidos"></LabelCrud>
                        <InputTextCrud onChange={e=>setApellido(e.target.value )} id="apellido" name="apellido" />
                    </div>


                    <div className="flex flex-col gap-y-4">
                        <LabelCrud htmlFor="tipoDocumento" name="Tipo de documento"></LabelCrud>
                        <select className={inputClass} onChange={e=>setTipoDocumento(e.target.value )} name="tipoDocumento" id="tipoDocumento">
                            <option value="CC">C.C.</option>
                            <option value="CE">C.E.</option>
                            <option value="PP">P.P.</option>
                        </select>
                    </div>


                    <div className="flex flex-col gap-y-4">
                        <LabelCrud htmlFor="numeroDocumento" name="Numero de documento"></LabelCrud>
                        <InputNumberCrud onChange={e=>setNumeroDocumento(e.target.value )} id="numeroDocumento" name="numeroDocumento" />
                    </div>


                    <div className="flex flex-col gap-y-4">
                        <LabelCrud htmlFor="departamento" name="Departamento"></LabelCrud>
                        <SelectCrud onChange={e=>setDepartamento(e.target.value )} id="departamento" name="departamento">
                            {departamentos.map((departamento)=>{
                                return(
                                    <option key={departamento.id_depa} value={departamento.id_depa}>{departamento.nombre_depa}</option>
                                )
                            })}
                        </SelectCrud>
                    </div>


                    <div className="flex flex-col gap-y-4">
                        <LabelCrud htmlFor="municipio" name="Municipio"></LabelCrud>
                        <InputTextCrud onChange={e=>setMunicipio(e.target.value )} id="municipio" name="municipio" />
                    </div>


                    <div className="flex flex-col gap-y-4">
                        <LabelCrud htmlFor="email" name="Email"></LabelCrud>
                        <InputEmailCrud onChange={e=>setEmail(e.target.value )} id="email" name="email" />
                    </div>


                    <div className="flex flex-col gap-y-4">
                        <LabelCrud htmlFor="telefono" name="Telefono"></LabelCrud>
                        <InputNumberCrud onChange={e=>setTelefono(e.target.value )} id="telefono" name="telefono" />
                    </div>

                    <div className="flex flex-col gap-y-4">
                        <LabelCrud htmlFor="direccion" name="Direccion"></LabelCrud>
                        <InputTextCrud onChange={e=>setDireccion(e.target.value)} id="direccion" name="direccion" />
                    </div>
                </div>

                <div className="mt-5 flex justify-center relative">
                    <BtnAccion name="Registrar" onClick={async ()=>{
                    setEstado(true);
                    await postUsuario();}}></BtnAccion>
                </div>
                
            </form>

        </>
    );
}
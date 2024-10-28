import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { MenuUsuario } from "./MenuUsuario";
import { BtnAccion } from "../Buttons/BtnAccion";
import { InputTextCrud } from "../ElementosForm/InputTextCrud";
import { InputNumberCrud } from "../ElementosForm/InputNumberCrud";
import { InputEmailCrud } from "../ElementosForm/InputEmailCrud";
import { LabelCrud } from "../Labels/LabelCrud";
import { SelectCrud } from "../ElementosForm/SelectCrud";
import { ContenedorInputCrud } from "../ElementosForm/ContenedorInputCrud";
import { ContenedorBtnAccion } from "../ElementosForm/ContenedorBtnAccion";

export const RegistrarUsuario = () => {
    const {
        departamento,
        departamentos,
        municipios,
        tiposDocumento,

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

        postUsuario,
        getDepartamentos,
        getMunicipios,
        getTiposDocumento
    } = useContext(UsuarioContext);

    useEffect(()=>{
        const fetchDepartamentos = async () =>{
            const datosDepartamentos = await getDepartamentos();
            setDepartamentos(datosDepartamentos);
            setDepartamento(datosDepartamentos[0].id_depa);
        }
        fetchDepartamentos();
    },[]);

    useEffect(()=>{
        const fetchMunicipios = async () =>{
            if (departamento){
                const datosMunicipios = await getMunicipios(departamento);
                setMunicipios(datosMunicipios);
                setMunicipio(datosMunicipios[0].id_muni);
            }
        } 
        fetchMunicipios();
    },[departamento]);

    useEffect(()=>{
        const fetchTiposDocumento = async ()=>{
            const datosTiposDocumento = await getTiposDocumento();
            setTiposDocumento(datosTiposDocumento);
            setTipoDocumento(datosTiposDocumento[0].id_tipo_docu)
        }
        fetchTiposDocumento();
    },[]);


    return (

        <>
            <MenuUsuario></MenuUsuario>

            <form className=""  onSubmit={e=>e.preventDefault()}>
                <div className="flex flex-wrap gap-y-10 gap-x-14 text-gray-200 w-7/12 mx-auto place-content-center relative mt-20 max-w-2xl place-self-center">

                    <ContenedorInputCrud>
                        <LabelCrud htmlFor="nombre" name="Empresa"></LabelCrud>
                        <InputTextCrud onChange={e=>setEmpresa(e.target.value )} id="empresa" name="empresa"></InputTextCrud>
                    </ContenedorInputCrud>


                    <ContenedorInputCrud>  
                        <LabelCrud htmlFor="nombre" name="Nombres"></LabelCrud>
                        <InputTextCrud onChange={e=>setNombre(e.target.value )} id="nombre" name="nombre" />
                    </ContenedorInputCrud>


                    <ContenedorInputCrud>
                        <LabelCrud htmlFor="apellido" name="Apellidos"></LabelCrud>
                        <InputTextCrud onChange={e=>setApellido(e.target.value )} id="apellido" name="apellido" />
                    </ContenedorInputCrud>


                    <ContenedorInputCrud>
                        <LabelCrud htmlFor="tipoDocumento" name="Tipo de documento"></LabelCrud>
                        <SelectCrud onChange={e=>setTipoDocumento(e.target.value )} name="tipoDocumento" id="tipoDocumento">
                            {tiposDocumento.map(({id_tipo_docu,nombre_tipo_docu})=>{
                                return(
                                    <option key={id_tipo_docu} value={id_tipo_docu}>{nombre_tipo_docu}</option>
                                );
                            })}
                        </SelectCrud>
                    </ContenedorInputCrud>


                    <ContenedorInputCrud>
                        <LabelCrud htmlFor="numeroDocumento" name="Numero de documento"></LabelCrud>
                        <InputNumberCrud onChange={e=>setNumeroDocumento(e.target.value )} id="numeroDocumento" name="numeroDocumento" />
                    </ContenedorInputCrud>


                    <ContenedorInputCrud>
                        <LabelCrud htmlFor="departamento" name="Departamento"></LabelCrud>
                        <SelectCrud onChange={e=>setDepartamento(e.target.value )} id="departamento" name="departamento">
                            {departamentos.map((departamento)=>{
                                return(
                                    <option key={departamento.id_depa} value={departamento.id_depa}>{departamento.nombre_depa}</option>
                                );
                            })}
                        </SelectCrud>
                    </ContenedorInputCrud>


                    <ContenedorInputCrud>
                        <LabelCrud htmlFor="municipio" name="Municipio"></LabelCrud>
                        <SelectCrud onChange={e=>setMunicipio(e.target.value )} id="municipio" name="municipio">
                            {municipios.map((municipio)=>{
                                return(
                                    <option key={municipio.id_muni} value={municipio.id_muni}>{municipio.nombre_muni}</option>
                                );
                            })}
                        </SelectCrud>
                    </ContenedorInputCrud>


                    <ContenedorInputCrud>
                        <LabelCrud htmlFor="email" name="Email"></LabelCrud>
                        <InputEmailCrud onChange={e=>setEmail(e.target.value )} id="email" name="email" />
                    </ContenedorInputCrud>


                    <ContenedorInputCrud>
                        <LabelCrud htmlFor="telefono" name="Telefono"></LabelCrud>
                        <InputNumberCrud onChange={e=>setTelefono(e.target.value )} id="telefono" name="telefono" />
                    </ContenedorInputCrud>

                    <ContenedorInputCrud>
                        <LabelCrud htmlFor="direccion" name="Direccion"></LabelCrud>
                        <InputTextCrud onChange={e=>setDireccion(e.target.value)} id="direccion" name="direccion" />
                    </ContenedorInputCrud>
                </div>

                <ContenedorBtnAccion>
                    <BtnAccion name="Registrar" onClick={async ()=>{
                    setEstado(true);
                    await postUsuario();}}></BtnAccion>
                </ContenedorBtnAccion>
                
            </form>

        </>
    );
}
import { UsuarioContext } from "../../context/UsuarioContext";
import { useContext, useEffect } from "react";
import { ListaUsuarios } from "./ListaUsuarios";
import {MenuUsuario} from "./MenuUsuario";
import { ParrafoCrud } from "../Text/ParrafoCrud";
import {SelectCrud} from "../ElementosForm/SelectCrud";
import {ContenedorFormCrud} from "../ElementosForm/ContenedorFormCrud";
import { LabelCrud } from "../Labels/LabelCrud";
import {ContenedorInputCrud} from "../ElementosForm/ContenedorInputCrud";
import { ContenedorFiltros } from "../ElementosForm/ContenedorFiltros";
import { useState } from "react";

export const ConsultarUsuarios = () =>{

    const {
        departamentos,
        departamento,
        municipios,
        tiposDocumento,
        roles,
        empresas,
        usuarios,

        setEmpresa,
        setEmpresas,
        setTipoDocumento,
        setDepartamento,
        setMunicipio,
        setDepartamentos,
        setTiposDocumento,
        setRoles,
        setRol,
        setUsuarios,
        setMunicipios,

        getDepartamentos,
        getTiposDocumento,
        getRoles,
        getEmpresas,
        getUsuarios,
        getMunicipios
    } = useContext(UsuarioContext);


    useEffect(()=>{
        const fetchDepartamentos = async () =>{
            const datosDepartamentos = await getDepartamentos();
            setDepartamentos(datosDepartamentos);
            setDepartamento(datosDepartamentos[0].id_depa);
        }

        const fetchTiposDocumento = async ()=>{
            const datosTiposDocumento = await getTiposDocumento();
            setTiposDocumento(datosTiposDocumento);
            setTipoDocumento(datosTiposDocumento[0].id_tipo_docu)
        }

        const fetchRoles = async () =>{
            const datosRoles = await getRoles();
            setRoles(datosRoles);
            setRol(datosRoles[0].id_rol);
        }

        const fetchEmpresas = async () =>{
            const datosEmpresas = await getEmpresas();
            setEmpresas(datosEmpresas);
            setEmpresa(datosEmpresas[0].id_empre);
        }

        fetchDepartamentos();
        fetchTiposDocumento();
        fetchRoles();
        fetchEmpresas();
    },[]);

    useEffect(()=>{
        const fetchMunicipios = async () =>{
            if (departamento){
                const datosMunicipios = await getMunicipios();
                setMunicipios(datosMunicipios);
                setMunicipio(datosMunicipios[0]._id_muni);
            }
        } 
        fetchMunicipios();
    },[departamento]);

    useEffect( ()=>{
        const fetchUsuarios = async () =>{
            const datosUsuarios = await getUsuarios();
            let datosFiltrados = datosUsuarios;

            if (departamento!==""){
                datosFiltrados = datosUsuarios.filter(({_id_depa})=>_id_depa==departamento);
            }
            setUsuarios(datosFiltrados);
        }
        fetchUsuarios();
    }, [departamento])

    return(
        <>
            <MenuUsuario></MenuUsuario>

            <ParrafoCrud name="Seleccione los filtros que desea aplicar a la consulta de usuarios"></ParrafoCrud>

            <ContenedorFiltros>
                <ContenedorInputCrud>
                    <LabelCrud htmlFor="empresa" name="Empresa"></LabelCrud>
                    <SelectCrud onChange={e=>setEmpresa(e.target.value )} id="empresa" name="empresa">
                        <option disabled>Seleccionar</option>
                        {empresas.map(({id_empre, nombre_empre})=>{
                            return(
                                <option key={id_empre} value={id_empre}>{nombre_empre}</option>
                            );
                        })}
                    </SelectCrud>
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
                    <LabelCrud htmlFor="rol" name="Rol"></LabelCrud>
                    <SelectCrud onChange={e=>setRol(e.target.value )} name="rol" id="rol">
                        {roles.map(({id_rol, nombre_rol})=>{
                            return (
                                <option key={id_rol} value={id_rol}>{nombre_rol}</option>
                            );
                        })}
                    </SelectCrud>
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
                                <option key={municipio._id_muni} value={municipio._id_muni}>{municipio._nombre_muni}</option>
                            );
                        })}
                    </SelectCrud>
                </ContenedorInputCrud>

            </ContenedorFiltros>

            <ListaUsuarios usuarios={usuarios}></ListaUsuarios>
            
        </>
        
    );
}
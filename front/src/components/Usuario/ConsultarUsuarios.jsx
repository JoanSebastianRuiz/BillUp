import { UsuarioContext } from "../../context/UsuarioContext";
import { useContext, useEffect } from "react";
import { ListaCard } from "./ListaCard";
import {MenuUsuario} from "./MenuUsuario";
import { ParrafoCrud } from "../Text/ParrafoCrud";
import {SelectCrud} from "../ElementosForm/SelectCrud";
import { LabelCrud } from "../Labels/LabelCrud";
import {ContenedorInputCrud} from "../ElementosForm/ContenedorInputCrud";
import {ContenedorBtnAccion} from "../ElementosForm/ContenedorBtnAccion";
import { ContenedorFiltros } from "../ElementosForm/ContenedorFiltros";
import { useState } from "react";
import { UserCard } from "./UserCard";
import { InputTextCrud } from "../ElementosForm/InputTextCrud";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BtnAccion } from "../Buttons/BtnAccion";
import { MenuPrincipal } from "../Menus/MenuPrincipal";

export const ConsultarUsuarios = () =>{
    const [busqueda,setBusqueda]=useState("");

    const {
        departamentos,
        departamento,
        municipios,
        tiposDocumento,
        roles,
        empresas,
        usuarios,
        tipoDocumento,
        empresa,
        municipio,
        rol,

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

    const inputEmpresa = document.querySelector("#empresa");
    const inputRol = document.querySelector("#rol");
    const inputDepartamento = document.querySelector("#departamento");
    const inputMunicipio = document.querySelector("#municipio");
    const inputTipoDocumento = document.querySelector("#tipoDocumento");
    const inputBusqueda = document.querySelector("#busqueda");

    const handleLimpiarFiltros = () =>{
        setEmpresa("");
        setRol("");
        setDepartamento("");
        setMunicipio("");
        setBusqueda("");
        setTipoDocumento("");

        inputEmpresa.value="";
        inputRol.value="";
        inputDepartamento.value="";
        inputMunicipio.value="";
        inputTipoDocumento.value="";
        inputBusqueda.value="";
    }


    useEffect(()=>{

        const inputEmpresa = document.querySelector("#empresa");
        const inputRol = document.querySelector("#rol");
        const inputDepartamento = document.querySelector("#departamento");
        const inputMunicipio = document.querySelector("#municipio");
        const inputTipoDocumento = document.querySelector("#tipoDocumento");
        const inputBusqueda = document.querySelector("#busqueda");
    
        const limpiarFiltros = () =>{
            setEmpresa("");
            setRol("");
            setDepartamento("");
            setMunicipio("");
            setBusqueda("");
            setTipoDocumento("");
    
            inputEmpresa.value="";
            inputRol.value="";
            inputDepartamento.value="";
            inputMunicipio.value="";
            inputTipoDocumento.value="";
            inputBusqueda.value="";
        }
        

        const fetchDepartamentos = async () =>{
            const datosDepartamentos = await getDepartamentos();
            setDepartamentos(datosDepartamentos);
        }

        const fetchTiposDocumento = async ()=>{
            const datosTiposDocumento = await getTiposDocumento();
            setTiposDocumento(datosTiposDocumento);
        }

        const fetchRoles = async () =>{
            const datosRoles = await getRoles();
            setRoles(datosRoles);
        }

        const fetchEmpresas = async () =>{
            const datosEmpresas = await getEmpresas();
            setEmpresas(datosEmpresas);
        }

        const fetchUsuarios = async () =>{
            const datosUsuarios = await getUsuarios();
            setUsuarios(datosUsuarios);
        }

        fetchDepartamentos();
        fetchTiposDocumento();
        fetchRoles();
        fetchEmpresas();
        limpiarFiltros();
        fetchUsuarios();
    },[]);

    useEffect(()=>{
        const fetchMunicipios = async () =>{
            if (departamento){
                const datosMunicipios = await getMunicipios();
                setMunicipios(datosMunicipios);
            }
        } 
        fetchMunicipios();
    },[departamento]);

    useEffect( ()=>{
        const fetchUsuarios = async () =>{
            const datosUsuarios = await getUsuarios();
            //console.log(usuarios);
            let datosFiltrados = [];
            let datosFinales = datosUsuarios;

            if (departamento!==""){
                datosFiltrados = datosFinales.filter(({_id_depa})=>_id_depa==departamento);
                datosFinales = datosFiltrados;
            }

            if (municipio!==""){
                datosFiltrados = datosFinales.filter(({_id_muni})=>_id_muni==municipio);
                datosFinales = datosFiltrados;
            }

            if (tipoDocumento!==""){
                datosFiltrados = datosFinales.filter(({_id_tipo_docu})=>_id_tipo_docu==tipoDocumento);
                datosFinales = datosFiltrados;
            }

            if (empresa!==""){
                datosFiltrados = datosFinales.filter(({_id_empre})=>_id_empre==empresa);
                datosFinales = datosFiltrados;
            }

            if (rol!==""){
                datosFiltrados = datosFinales.filter(({_id_rol})=>_id_rol==rol);
                datosFinales = datosFiltrados;
            }

            if (busqueda!==""){
                datosFiltrados = datosFinales.filter(({_nombre_usua, _apellido_usua})=>_nombre_usua.toLowerCase().includes(busqueda.toLowerCase()) || _apellido_usua.toLowerCase().includes(busqueda.toLowerCase()));
                datosFinales = datosFiltrados;
            }
            setUsuarios(datosFinales);
        }
        fetchUsuarios();
    }, [departamento, rol, municipio, empresa, tipoDocumento, busqueda]);


    return(
        <>
            {/* <MenuPrincipal></MenuPrincipal> */}
            <MenuUsuario></MenuUsuario>

            <ParrafoCrud name="Seleccione los filtros que desea aplicar a la consulta de usuarios"></ParrafoCrud>

            <ContenedorFiltros>
                <ContenedorInputCrud>
                    <LabelCrud htmlFor="empresa" name="Empresa"></LabelCrud>
                    <SelectCrud onChange={e=>setEmpresa(e.target.value )} id="empresa" name="empresa">
                        
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

                <ContenedorInputCrud>  
                    <LabelCrud htmlFor="busqueda" name="Nombre de usuario"></LabelCrud>
                    <InputTextCrud onChange={e=>setBusqueda(e.target.value )} id="busqueda" name="busqueda" />
                </ContenedorInputCrud>

            </ContenedorFiltros>

            <ContenedorBtnAccion>
                <BtnAccion name="Limpiar filtros" onClick={handleLimpiarFiltros}></BtnAccion>
            </ContenedorBtnAccion>

            <ListaCard>
                {usuarios.map(({_id_usua, _nombre_usua, _apellido_usua, _nombre_rol, _estado_usua, _numero_documento_usua, _abreviatura_tipo_docu})=>{
                    return(
                        <UserCard
                        key={_id_usua}
                        id_usua={_id_usua}
                        nombre_usua={_nombre_usua} 
                        apellido_usua={_apellido_usua}
                        nombre_rol={_nombre_rol}
                        estado_usua={_estado_usua? "Activo":"Inactivo"}
                        numero_documento_usua={_numero_documento_usua}
                        abreviatura_tipo_docu={_abreviatura_tipo_docu}></UserCard>
                    )
                })}
            </ListaCard>
            
            
        </>
        
    );
}
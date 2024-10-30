import { UsuarioContext } from "../../context/UsuarioContext";
import { useContext, useEffect } from "react";
import { ListaUsuarios } from "./ListaUsuarios";
import {MenuUsuario} from "./MenuUsuario";
import { ParrafoCrud } from "../Text/ParrafoCrud";
import { ContenedorFormCrud } from "../ElementosForm/ContenedorFormCrud";
import {SelectCrud} from "../ElementosForm/SelectCrud"

export const ConsultarUsuarios = () =>{
    const {usuarios, setUsuarios, getUsuarios} = useContext(UsuarioContext);

    useEffect( ()=>{
        const fetchUsuarios = async () =>{
            const datosUsuarios = await getUsuarios();
            setUsuarios(datosUsuarios);
        }
        fetchUsuarios();
    }, [])
    return(
        <>
            <MenuUsuario></MenuUsuario>
            <ParrafoCrud name="Seleccione los filtros que desea aplicar a la consulta de usuarios"></ParrafoCrud>

            <ContenedorForm>
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

            </ContenedorForm>

            <ListaUsuarios usuarios={usuarios}></ListaUsuarios>
            
        </>
        
    );
}
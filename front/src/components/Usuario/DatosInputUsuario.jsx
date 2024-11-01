import { useContext, useEffect } from "react";
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
import { ContenedorFormCrud } from "../ElementosForm/ContenedorFormCrud";
import { ParrafoCrud } from "../Text/ParrafoCrud";

export const DatosInputUsuario = ({id_usua="", parrafo, classNumeroDocumento="", nameButton, functionButton}) => {
    const {
        departamentos,
        municipios,
        tiposDocumento,
        roles,
        departamento,
        empresas,

        setEmpresa,
        setEmpresas,
        setNombre,
        setApellido,
        setTipoDocumento,
        setNumeroDocumento,
        setDepartamento,
        setMunicipio,
        setEmail,
        setTelefono,
        setDireccion,
        setDepartamentos,
        setMunicipios,
        setTiposDocumento,
        setRoles,
        setRol,
        setEstado,

        getDepartamentos,
        getMunicipios,
        getTiposDocumento,
        getRoles,
        getEmpresas,
        getUsuarioId
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

        if (id_usua!==""){
            const inputEmpresa = document.querySelector("#empresa");
            const inputRol = document.querySelector("#rol");
            const inputNombre = document.querySelector("#nombre");
            const inputApellido = document.querySelector("#apellido");
            const inputTipoDocumento = document.querySelector("#tipoDocumento");
            const inputNumeroDocumento = document.querySelector("#numeroDocumento");
            const inputDepartamento = document.querySelector("#departamento");
            const inputMunicipio = document.querySelector("#municipio");
            const inputEmail = document.querySelector("#email");
            const inputTelefono = document.querySelector("#telefono");
            const inputDireccion = document.querySelector("#direccion");
            const inputEstado = document.querySelector("#estado");
            

            const fetchUsuarioId = async () =>{
                const datosUsuario = await getUsuarioId(id_usua);
                const {_id_empre, _id_rol, _nombre_usua, _apellido_usua, _id_tipo_docu, _numero_documento_usua, _id_depa, _id_muni, _correo_usua, _telefono_usua, _direccion_usua, _estado_usua} = datosUsuario[0];
                
                inputEmpresa.value = _id_empre;
                inputRol.value = _id_rol;
                inputNombre.value = _nombre_usua;
                inputApellido.value = _apellido_usua;
                inputTipoDocumento.value = _id_tipo_docu;
                inputNumeroDocumento.value = _numero_documento_usua;
                inputDepartamento.value = _id_depa;
                inputMunicipio.value = _id_muni;
                inputEmail.value = _correo_usua;
                inputTelefono.value = _telefono_usua;
                inputDireccion.value = _direccion_usua;
                inputEstado.value = _estado_usua;

                setEmpresa(_id_empre);
                setRol(_id_rol);
                setNombre(_nombre_usua);
                setApellido(_apellido_usua);
                setTipoDocumento(_id_tipo_docu);
                setNumeroDocumento(_numero_documento_usua);
                setDepartamento(_id_depa);
                setMunicipio(_id_muni);
                setEmail(_correo_usua);
                setTelefono(_telefono_usua);
                setDireccion(_direccion_usua);
                setEstado(_estado_usua);
            }
            fetchUsuarioId();
        }
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




    return (

        <>
            <MenuUsuario></MenuUsuario>

            <form  onSubmit={e=>e.preventDefault()}>
                <ParrafoCrud name={parrafo}></ParrafoCrud>

                <ContenedorFormCrud>

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


                    <ContenedorInputCrud className={classNumeroDocumento}>
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
                                    <option key={municipio._id_muni} value={municipio._id_muni}>{municipio._nombre_muni}</option>
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

                    {id_usua!=="" && (
                        <ContenedorInputCrud>
                        <LabelCrud htmlFor="estado" name="Estado"></LabelCrud>
                        <SelectCrud onChange={e=>setEstado(e.target.value )} id="estado" name="estado">
                            <option value={true}>Activo</option>
                            <option value={false}>Inactivo</option>
                        </SelectCrud>
                    </ContenedorInputCrud>)
                    }
                    
                </ContenedorFormCrud>

                <ContenedorBtnAccion>
                    <BtnAccion name={nameButton} onClick={functionButton}></BtnAccion>
                </ContenedorBtnAccion>
                
            </form>

        </>
    );
}
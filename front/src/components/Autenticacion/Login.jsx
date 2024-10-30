import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AutenticacionContext } from "../../context/AutenticacionContext";
import { UsuarioContext } from "../../context/UsuarioContext";

export const Login = () =>{
    const {autenticado, setAutenticado} = useContext(AutenticacionContext);
    const {setNumeroDocumento,validarUsuario} = useContext(UsuarioContext);
    const password = useRef("");


    const navigate = useNavigate();

    useEffect(()=>{
        if (autenticado){
            navigate("/usuarios/registrar");
        }
    },[autenticado]);

    const handleIngresar = async () =>{
        const respuesta =  await validarUsuario(password.current.value);

        if (respuesta[0].usuariovalidado!=="FALSE"){
            setAutenticado(true);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-slate-100 w-80 mx-auto m-8 rounded-lg p-8">
                
                <h1 className="text-6xl font-bold to-slate-800 w-full mx-auto text-center mb-8">Bill Up</h1>

                <form onSubmit={e=>e.preventDefault()}>
                    <label className="pl-2 text-xl mb-3 block" htmlFor="usuario">Usuario</label>

                    <input onChange={(e)=>setNumeroDocumento(e.target.value)} id="usuario" name="usuario" type="text" placeholder="Ingrese su usuario" className="border border-gray-300 rounded-lg w-full px-3 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-slate-500"/>

                    <label htmlFor="contrasena" className="pl-2 text-xl mb-3 block" >Contraseña</label>

                    <input ref={password} id="contrasena" name="contrasena" type="password" placeholder="Ingrese su contraseña" className="border border-gray-300 rounded-lg w-full px-3 py-2 mb-4"/>

                    <button className="bg-slate-800 text-white rounded-lg px-4 py-2 w-full hover:bg-slate-700 mb-6 cursor-pointer " onClick={handleIngresar}>Ingresar</button>
                    
                    <button className="bg-slate-800 text-white rounded-lg px-4 py-2 hover:bg-slate-700 w-full cursor-pointer">Recuperar contraseña</button>
                </form>
            </div>
        </div>
        
    );
}

/* 
Cropping to text
w-screen => toda la pantalla
w-full => ocupa el total del contenedor padre

Estados:
- disabled
- hover
- focus
- invalid
invalid:focus:
peer  peer-invalid

Pseudoclases:
- after
- placeholder
- marker - viñetas de listas
- selection: modificar seleccion de textos
- first-line
- first-letter

Diseño responsive
- breakpoints - md - sm - xl

Flex
- place-content
- flex-col
- items-center
- self-center
- grow: si tienen espacio para crecer que crezcan
- shrink: no se contraigan, se vuelven mas pequeños manteniendo la relacion
- basis-1/2 

Grid
grid-cols
col-span
col-start col-end
row-span

Dark mode
- dark:

*/
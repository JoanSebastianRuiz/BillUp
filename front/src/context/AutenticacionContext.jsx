import { createContext, useState } from "react";


export const AutenticacionContext = createContext();

export const AutenticacionContextProvider = (props) => {
    const [autenticado, setAutenticado] = useState(false);

    const validacionLogin = (usuario, contrasena)=>{
        if (usuario==contrasena){
            
            setAutenticado(true);
        } 
        
    }

    const salir = () =>{
        setAutenticado(false);
    }

    return (
        <AutenticacionContext.Provider value={
            {
                autenticado,
                setAutenticado,
                validacionLogin,
                salir
            }
        }>
            {props.children}
        </AutenticacionContext.Provider>
    );
}
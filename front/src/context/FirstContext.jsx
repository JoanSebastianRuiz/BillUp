import { createContext, useState } from "react";
import { MenuUsuario } from "../components/MenuUsuario";


export const FirstContext = createContext();

export const FirstContextProvider = (props) => {
    const [login, setLogin] = useState(false);
    const [render, setRender]= useState("");

    const validacionLogin = (usuario, contrasena)=>{
        if (usuario==contrasena){
            
            setLogin(true);
            setRender(<MenuUsuario></MenuUsuario>);
        }
    }

    const salir = () =>{
        setLogin(false);
    }

    return (
        <FirstContext.Provider value={
            {
                login,
                setLogin,
                validacionLogin,
                render,
                setRender,
                salir
            }
        }>
            {props.children}
        </FirstContext.Provider>
    );
}
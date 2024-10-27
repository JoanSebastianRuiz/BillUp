import { AutenticacionContext } from "../context/AutenticacionContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export const RutaProtegida = ({children}) =>{
    const {autenticado} = useContext(AutenticacionContext);

    if (!autenticado){
        return <Navigate to="/"></Navigate>
    }
    return children;
}
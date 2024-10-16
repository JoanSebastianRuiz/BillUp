import { useContext } from "react";
import { FirstContext } from "../context/FirstContext";

export const BtnSalir = () =>{
    const {salir} = useContext(FirstContext)

    return (
        <button onClick={()=>salir()}>Salir</button>
    );
}
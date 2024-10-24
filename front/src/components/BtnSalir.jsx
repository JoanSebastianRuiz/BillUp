import { useContext } from "react";
import { FirstContext } from "../context/FirstContext";

export const BtnSalir = ({classBoton}) =>{
    const {salir} = useContext(FirstContext)

    return (
        <button className={classBoton} onClick={()=>salir()}>Salir</button>
    );
}
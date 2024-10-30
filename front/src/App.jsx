import { useContext, useEffect } from 'react';
import { AutenticacionContext } from './context/AutenticacionContext';
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";

//Importacion componentes
import { Login } from './components/Autenticacion/Login';
import { RegistrarUsuario } from './components/Usuario/RegistrarUsuario';
import { EliminarUsuario } from './components/Usuario/EliminarUsuario';
import {EditarUsuario} from "./components/Usuario/EditarUsuario"
import { RutaProtegida } from './components/Autenticacion/RutaProtegidad';
import { ConsultarUsuarios } from './components/Usuario/ConsultarUsuarios';



function App() {


  return(
    <BrowserRouter>
      <Routes>
        <Route path="/usuarios/registrar" element={<RutaProtegida><RegistrarUsuario></RegistrarUsuario></RutaProtegida>}></Route>
        <Route path='/usuarios/eliminar' element={<RutaProtegida><EliminarUsuario></EliminarUsuario></RutaProtegida>}></Route>
        <Route path='/usuarios/editar' element={<RutaProtegida><EditarUsuario></EditarUsuario></RutaProtegida>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/usuarios' element={<RutaProtegida><ConsultarUsuarios></ConsultarUsuarios></RutaProtegida>}></Route>
      </Routes>
    </BrowserRouter>
  );
  }

export default App

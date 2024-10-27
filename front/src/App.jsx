import { useContext, useEffect } from 'react';
import { AutenticacionContext } from './context/AutenticacionContext';
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";

//Importacion componentes
import { Login } from './components/Login';
import { RegistrarUsuario } from './components/RegistrarUsuario';
import { EliminarUsuario } from './components/EliminarUsuario';
import {EditarUsuario} from "./components/EditarUsuario"
import { RutaProtegida } from './components/RutaProtegidad';



function App() {


  return(
    <BrowserRouter>
      <Routes>
        <Route path="/usuarios/registrar" element={<RutaProtegida><RegistrarUsuario></RegistrarUsuario></RutaProtegida>}></Route>
        <Route path='/usuarios/eliminar' element={<RutaProtegida><EliminarUsuario></EliminarUsuario></RutaProtegida>}></Route>
        <Route path='/usuarios/editar' element={<RutaProtegida><EditarUsuario></EditarUsuario></RutaProtegida>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
  }

export default App

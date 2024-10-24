import { Login } from './components/Login';
import { useContext } from 'react';
import { FirstContext } from './context/FirstContext';
import { MenuUsuario } from './components/MenuUsuario';
import { CrearUsuario } from './components/CrearUsuario';



function App() {
  const {login, render} = useContext(FirstContext);
/*     
if (!login){
      return (
        <>
        <Login></Login>
        </>
      );
    } else{
      return (
        <>
          {render}
        </>
      );
    } */
  return <CrearUsuario ></CrearUsuario>
  }

export default App

import { Login } from './components/Login';
import { useContext } from 'react';
import { FirstContext } from './context/FirstContext';



function App() {
  const {login, render} = useContext(FirstContext);

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
    }
  }

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirstContextProvider } from './context/FirstContext.jsx'
import { UsuarioContextProvider } from './context/UsuarioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstContextProvider>
      <UsuarioContextProvider>
        <App />
      </UsuarioContextProvider>
    </FirstContextProvider>
  </StrictMode>,
)

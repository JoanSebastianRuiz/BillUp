import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AutenticacionContextProvider } from './context/AutenticacionContext.jsx'
import { UsuarioContextProvider } from './context/UsuarioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutenticacionContextProvider>
      <UsuarioContextProvider>
        <App />
      </UsuarioContextProvider>
    </AutenticacionContextProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import logo from './assets/logo.png'
import { applyFavicon } from './lib/favicon.js'
import './styles/globals.css'
import './styles/site.css'

applyFavicon(logo)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

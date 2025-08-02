import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'
import './assets/css/animate.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import 'react-loading-skeleton/dist/skeleton.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

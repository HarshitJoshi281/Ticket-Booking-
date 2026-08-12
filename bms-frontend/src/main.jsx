import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx' 
import {LocationProvide} from "./context/LocationContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <LocationProvide>
        <App/>
      </LocationProvide>
    </Router>
  </StrictMode>,
)

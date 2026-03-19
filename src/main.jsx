import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/Counter.jsx'
import NameInput from './components/Nameinput.jsx'
import CounterApp from './components/CounterApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
    <NameInput/>
    <CounterApp/>
    
  </StrictMode>,
)

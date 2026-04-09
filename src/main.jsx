import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IsSubscribed from './components/issubscribed.jsx'
import ReportCard from './components/ReportCard.jsx'
import App from './App.jsx'
import Counter from './components/Counter.jsx'
import NameInput from './components/Nameinput.jsx'
import CounterApp from './components/CounterApp.jsx'
import BasicList from './components/BasicList.jsx'
import TailwindCSSTest from './components/TailwindCSSTest.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <IsSubscribed status={false}></IsSubscribed> */}
    {/*<TailwindCSSTest/>*/}
    <ReportCard/>
    
  </StrictMode>
)

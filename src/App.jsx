import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import AddTask from './Pages/AddTask'
function App() {
  const [count, setCount] = useState(0)

  

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/home" element={<Home/>}/>
     <Route path="/addtask" element={<AddTask/>}/>
    <Route path="*" element={<Navigate to="/home" />}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App

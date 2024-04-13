import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TabBars from './tabs';
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
    <div style={{height:"100vh", overflow:"hidden", padding:"20px", width:"100%"}} className='d-flex' >
      <Routes>
        <Route index path='/' element={<TabBars/>} />
      </Routes>
    </div>
  )
}

export default App

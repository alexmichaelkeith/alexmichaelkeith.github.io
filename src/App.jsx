import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works"
import Menu from './components/menu/Menu';
import "./app.scss"
import MainComponent from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <Router>
      <div className='app'>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Routes>
          <Route path='/' element={<MainComponent/>} />
          <Route path='/p' element={<Works/>} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
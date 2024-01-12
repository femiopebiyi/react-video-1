
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Axios from "axios";
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';


  function App(){
    return <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/menu' element ={<Menu/>}/>
          <Route path='/contact' element ={<Contact/>}/>
          <Route path='*' element ={<h1>Page not found</h1>}/>
        </Routes>
      </Router>
    </div>
  }


export default App;



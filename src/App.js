
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Axios from "axios";
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';



function App() {
  const [username, setUsername] = useState("Femi")
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home username={username}/>}/>
          <Route path='/menu' element={<Profile username={username}/>} setUsername={setUsername}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/' element={<h1>Page not found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;


// const TopComponent = ()=>{
//   const [state, setState] = useState()

//   return <div>
//         <MiddleComponent state = {state}/>
//   </div>
// }
// const MiddleComponent = ()=>{

//   return <div>
//         <BottomComponent state = {state}/>
//   </div>
// }

// function BottomComponent (state){
//   return <div>{state}</div>
// }

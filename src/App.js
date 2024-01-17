
import './App.css';
import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';



function App() {
  const [username, setUsername] = useState("Femi");
    
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home username={username}/>}/>
          {/* Fix: Pass setUsername prop inside the element prop */}
          <Route path='/profile' element={<Profile username={username} setUsername={setUsername} />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>Page not found</h1>}/> {/* Adjusted route for 404 page */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;



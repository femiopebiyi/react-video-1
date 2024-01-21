
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Form } from './components/Form';
import { useToggle } from './useToggle';
import { Cat } from './components/Cat';
import { Counter } from './components/Counter';
import { Person } from './components/Person';




function App() {

 
  return <div className='App'> 
    <Person
    name = "Pedro"
    email = "femi@femi.com"
    age = {21}
    isMarried = {false}
    friends = {["jessica", 'francis', 'paul']}
    />
   </div>
  
}


export default App;



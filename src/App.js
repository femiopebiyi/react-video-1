
import './App.css';
import { useState, createContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Form } from './components/Form';

export const AppContext = createContext()


function App() {
  return (
    
    <div className="App">
      <Form/>
    </div>
  );
}


export default App;



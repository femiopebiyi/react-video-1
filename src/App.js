
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Form } from './components/Form';
import { useToggle } from './useToggle';




function App() {
  const [isVisible, toggle] = useToggle()
  return (
    
    <div className="App">
      <button onClick={toggle}>

        {isVisible ? "Hide" : "Show"}

      </button>

      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}


export default App;



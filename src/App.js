
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




function App() {

  const client =  new QueryClient()
  return (
    
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat/>
      </QueryClientProvider>
    </div>
  );
}


export default App;



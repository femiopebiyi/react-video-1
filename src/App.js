
import './App.css';
import { useState, createContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext()


function App() {
  // QueryCLient with configs
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
      
    }
  }})
    
  return (
    
    <div className="App">
      <QueryClientProvider client={client}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* Fix: Pass setUsername prop inside the element prop */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>Page not found</h1>}/> {/* Adjusted route for 404 page */}
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}


export default App;



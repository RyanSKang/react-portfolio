import './App.css';
import React from 'react'
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar';

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

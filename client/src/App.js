import './App.css';
import React from 'react'
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;

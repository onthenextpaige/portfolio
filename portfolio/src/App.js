import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import About from './components/About';
import Work from './components/work';

function App() {
  return (
    <main className="main"> 
        <Navbar />
        <Home/>

        <About />
        <Work />
    </main>
  );
}

export default App;
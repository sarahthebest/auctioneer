import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/Footer';
import './styling/Home.css'


function App() {
  return (
    <Router>
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auktioner" element={<div>Auktioner</div>} />
        </Routes>
        <Footer/>
      </> 
    </Router>
  );
}

export default App;

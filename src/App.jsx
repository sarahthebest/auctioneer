import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auktioner" element={<div>Auktioner</div>} />
        </Routes>
        <Footer/>
      </div> 
    </Router>
  );
}

export default App;

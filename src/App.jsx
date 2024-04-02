import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/Footer';
import Auctions from './components/Auctions';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auktioner" element={<Auctions />} />
        </Routes>
        <Footer/>
      </div> 
    </Router>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import CreateAuctionForm from './components/CreateAuctionForm'; // Importera din CreateAuctionForm-komponent

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auktioner" element={<div>Auktioner</div>} />
          {/* Använd CreateAuctionForm direkt med gruppkoden */}
          <Route path="/skapa-auktion" element={<CreateAuctionForm groupCode="p7u" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
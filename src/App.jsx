import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Auctions from './components/Auctions';

import CreateAuctionForm from './components/CreateAuctionForm'; // Importera din CreateAuctionForm-komponent

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auktioner" element={<Auctions />} />
          {/* Använd CreateAuctionForm direkt med gruppkoden */}
          <Route path="/skapa-auktion" element={<CreateAuctionForm groupCode="p7u" />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
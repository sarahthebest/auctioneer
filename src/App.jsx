import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Auctions from './components/Auctions';
import AuctionPage from './components/AuctionPage';


import CreateAuctionForm from './components/CreateAuctionForm'; // Importera din CreateAuctionForm-komponent
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auktioner" element={<Auctions />} />
          <Route path="/AuctionPage" element={<AuctionPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
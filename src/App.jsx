import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Auctions from './components/Auctions';
import AuctionPage from './components/AuctionPage';
import Homepage from './components/Homepage'
import './styling/index.css'

import CreateAuctionForm from "./components/CreateAuctionForm"; // Importera din CreateAuctionForm-komponent

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <>
    
       
        <Navbar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auktioner" element={<Auctions searchTerm={searchTerm} />} />
          <Route path="/auctionpage" element={<AuctionPage />} />
          <Route
            path="/skapa-auktion"
            element={<CreateAuctionForm groupCode="p7u" />}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/Footer';
import Auctions from './components/Auctions';
import AuctionPage from './components/AuctionPage';


function App() {
  return (
    <Router>
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auktioner" element={<Auctions />} />
          <Route path="/auctionpage" element={<AuctionPage />} />

        </Routes>
        <Footer/>
      </> 
    </Router>
  );
}

export default App;

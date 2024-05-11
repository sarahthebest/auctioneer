import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CreateAuctionForm from './CreateAuctionForm';
import '../styling/Navbar.css';

// Navbar-komponenten hanterar navigering och formulär för att skapa auktioner
function Navbar() {
  const [showCreateAuctionForm, setShowCreateAuctionForm] = useState(false); 

// Funktion för att växla synligheten av formuläret för att skapa auktioner
  const toggleCreateAuctionForm = () => {
    setShowCreateAuctionForm(!showCreateAuctionForm);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#d9c09e', color: '#333' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Min Auktionsplats
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ color: 'inherit' }}>
          Hem
        </Button>
        <Button color="inherit" component={Link} to="/auktioner" sx={{ color: 'inherit' }}>
          Auktioner
        </Button>
        <Button color="inherit" onClick={toggleCreateAuctionForm} sx={{ color: 'inherit' }}>
          Skapa Auktioner
        </Button>
      </Toolbar>
      {showCreateAuctionForm && <CreateAuctionForm />}
    </AppBar>
  );
}

export default Navbar;




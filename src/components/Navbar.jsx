import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CreateAuctionForm from './CreateAuctionForm';
import '../styling/Navbar.css';


function Navbar() {
  const [showCreateAuctionForm, setShowCreateAuctionForm] = useState(false);
  
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




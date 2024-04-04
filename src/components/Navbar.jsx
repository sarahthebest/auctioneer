import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CreateAuctionForm from './CreateAuctionForm'; 
import '../styling/Navbar.css';

function Navbar() {
  const [visaCreateAuctionForm, setVisaCreateAuctionForm] = useState(false);

  const hanteraSkapaAuktionKlick = () => {
    setVisaCreateAuctionForm(!visaCreateAuctionForm);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Min Auktionsplats
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Hem
        </Button>
        <Button color="inherit" component={Link} to="/auktioner">
          Auktioner
        </Button>
        <Button color="inherit" onClick={hanteraSkapaAuktionKlick}>
          Skapa Auktioner
        </Button>
        <div className="search">
          <InputBase
            placeholder="Sök…"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
      {visaCreateAuctionForm && <CreateAuctionForm />} {/* Visa CreateAuctionForm-komponenten om visaCreateAuctionForm är sann */}
    </AppBar>
  );
}

export default Navbar;

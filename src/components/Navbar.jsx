import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import CreateAuctionForm from './CreateAuctionForm'; 
import '../styling/Navbar.css';
import Search from './Search';

function Navbar() {
  const [visaCreateAuctionForm, setVisaCreateAuctionForm] = useState(false);

  const hanteraSkapaAuktionKlick = () => {
    setVisaCreateAuctionForm(!visaCreateAuctionForm);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
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
        <Search onSearch={handleSearch} />
      </Toolbar>
      {visaCreateAuctionForm && <CreateAuctionForm />}
    </AppBar>
  );
}

export default Navbar;

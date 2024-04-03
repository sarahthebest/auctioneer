import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import '../styling/Navbar.css';
import Auctions from './Auctions';


function Navbar() {
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
    </AppBar>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import '../styling/Navbar.css';

function Navbar({ setSearchTerm }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearchTerm(input);
  }
  return (
    <AppBar position="sticky">
      <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }} className='shadows-into'>
          Min Auktionsplats
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Hem
        </Button>
        <Button color="inherit" component={Link} to="/auktioner">
          Auktioner
        </Button>
        <Button color='inherit' component={Link} to="/skapa-auktion">
          Skapa Auktion
        </Button>
        <div className="search">
          <InputBase
            placeholder="Sök…"
            inputProps={{ 'aria-label': 'search' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton type="submit" aria-label="search" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

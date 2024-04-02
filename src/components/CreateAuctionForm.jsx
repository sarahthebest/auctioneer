import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
 
const CreateAuctionForm = ({ groupCode }) => {
  const [auctionDetails, setAuctionDetails] = useState({
    title: '',
    description: '',
    // Lägg till fler fält som ni behöver för auktionen
  });
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAuctionDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://auctioneer.azurewebsites.net/auction/${p7u}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(auctionDetails),
      });
      if (!response.ok) throw new Error('Något gick fel vid skapandet av auktionen.');
      // Hantera svaret, t.ex. rensa formuläret eller visa ett meddelande
    } catch (error) {
      console.error('Fel uppstod:', error);
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="title"
        label="Titel"
        value={auctionDetails.title}
        onChange={handleChange}
      />
      <TextField
        name="description"
        label="Beskrivning"
        value={auctionDetails.description}
        onChange={handleChange}
        multiline
        rows={4}
      />
      {/* Lägg till fler input-fält här */}
      <Button type="submit" color="primary" variant="contained">
        Skapa Auktion
      </Button>
    </form>
  );
};
 
export default CreateAuctionForm;
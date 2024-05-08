import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const CreateAuctionForm = ({ addAuction }) => {
  const [auctionTitle, setAuctionTitle] = useState('');
  const [auctionDescription, setAuctionDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [createdBy, setCreatedBy] = useState('')

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const newAuction = {
        Title: auctionTitle,
        Description: auctionDescription,
        StartDate: startDate,
        EndDate: endDate,
        GroupCode: 'p7u',
        StartingPrice: startingPrice,
        CreatedBy: createdBy,
      };

      const response = await fetch('https://auctioneer.up.railway.app/auction/p7u', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAuction)
      });

      const APIres = await response.json();
      console.log('API respons:', APIres);

      addAuction(newAuction);

      setAuctionTitle('');
      setAuctionDescription('');
      setStartDate('');
      setEndDate('');
      setStartingPrice('');
      setCreatedBy('');

    } catch (error) {
      console.error('Fel uppstod:', error);
    }
  };


  return (
    <form style={{ backgroundColor: 'white' }} onSubmit={handleSubmit}>
      <TextField
        name="Title"
        label="Titel"
        value={auctionTitle}
        onChange={(e) => setAuctionTitle(e.target.value)}
      />
      <TextField
        name="Description"
        label="Beskrivning"
        value={auctionDescription}
        onChange={(e) => setAuctionDescription(e.target.value)}
        multiline
        rows={4}
      />
      <TextField
        name="StartingPrice"
        label="Startpris"
        value={startingPrice}
        onChange={(e) => setStartingPrice(e.target.value)}
      />
      <TextField
        id="createdBy"
        label="Skapad av"
        variant="outlined"
        value={createdBy}
        onChange={(e) => setCreatedBy(e.target.value)}
      />
      <Typography>Skapad av: {createdBy}</Typography>

      <div label htmlFor="StartDate">
        Start Date
      </div>
      <input
        type="datetime-local"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <div label htmlFor="EndDate">
        End Date
      </div>
      <input
        type="datetime-local"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <Button type="submit" color="primary" variant="contained">
        Skapa Auktion
      </Button>
    </form>
  );
};

const ParentComponent = () => {
  const [auctions, setAuctions] = useState([]);


  const addAuction = (newAuction) => {
    setAuctions(prevAuctions => [...prevAuctions, newAuction]);
  };


  return (
    <div>
      <h1>Skapa en ny auktion</h1>
      <CreateAuctionForm addAuction={addAuction} />
    </div>
  );
};

export default ParentComponent;


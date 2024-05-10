import React, { useState, useEffect } from "react";
import AuctionCard from "./AuctionCard";
import { Box, Grid, Typography, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAuctions = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://auctioneer.up.railway.app/auction/p7u?search=${encodeURIComponent(searchTerm)}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const now = new Date();
        const activeAuctions = data.filter(auction => new Date(auction.EndDate) > now);
        setAuctions(activeAuctions);
      } catch (error) {
        setError("Failed to fetch auctions: " + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuctions();
  }, [searchTerm]);

  return (
    <Box sx={{ p: 2, minHeight: 680 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Current Auctions
        </Typography>
        <TextField
          size="small"
          placeholder="Search auctions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ marginRight: 1 }}
        />
        <IconButton onClick={() => fetchAuctions()}>
          <SearchIcon />
        </IconButton>
      </Box>
      {error && <Typography color="error">{error}</Typography>}
      {isLoading ? (
        <Typography>Loading auctions...</Typography>
      ) : (
        <Grid container spacing={2}>
          {auctions.length > 0 ? (
            auctions.map(auction => (
              <Grid item key={auction.AuctionID} xs={12} sm={6} md={4} lg={3}>
                <AuctionCard
                  AuctionId={auction.AuctionID}
                  AuctionTitle={auction.Title}
                  AuctionDesc={auction.Description}
                  AuctionBid={auction.StartingPrice}
                  EndDate={auction.EndDate}
                  CreatedBy={auction.CreatedBy}
                />
              </Grid>
            ))
          ) : (
            <Typography>No auctions found.</Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Auctions;


import React, { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { Box, Grid, Typography } from "@mui/material";

const Auctions = ({ searchTerm }) => {
  const [auctions, setAuctions] = useState([]);
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const fetchAuctions = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          searchTerm
            ? `https://auctioneer2.azurewebsites.net/auction/p7u?search=${encodeURIComponent(searchTerm)}`
            : "https://auctioneer2.azurewebsites.net/auction/p7u"
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
      <Typography variant="h4" sx={{ mb: 2 }}>
        Current Auctions
      </Typography>
      {error && (
        <Typography color="error">{error}</Typography>
      )}
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


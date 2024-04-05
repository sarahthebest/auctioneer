import React, { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { Box, Grid } from "@mui/material";



const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      const response = await fetch(
        "https://auctioneer.azurewebsites.net/auction/p7u"
      );

      const data = await response.json();
      setAuctions(data);
      console.log(data);
    };

    fetchAuctions();
  }, []);


  return (
    <Box sx={{ p: 2, minHeight:680 }}>
      <Grid
        container
        spacing={1}
        gap={2}
        className="auctions"
        sx={{ width: "100%" }}
      >
        {auctions.map((auction) => (
          <Grid item>
            <AuctionCard
              key={auction.AuctionID}
              AuctionId={auction.AuctionID}
              AuctionTitle={auction.Title}
              AuctionDesc={auction.Description}
              AuctionBid={auction.StartingPrice}
              EndDate={auction.EndDate}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Auctions;
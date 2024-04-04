import React, { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { Box, Grid } from "@mui/material";

const Auctions = ({ searchTerm }) => {
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

  const filtredAuctions = auctions.filter(auction =>
    (auction.Title ? auction.Title.toLowerCase().includes(searchTerm.toLowerCase()) : false) ||
    (auction.Description ? auction.Description.toLowerCase().includes(searchTerm.toLowerCase()) : false)
  );
  
  

  return (
    <Box sx={{p :2}}>
    <Grid container spacing={1} gap={2} className="auctions" sx={{width:'100%'}}>
    {filtredAuctions.map((auction) => (
   <Grid item key={auction.AuctionID}>
     <AuctionCard
       AuctionId={auction.AuctionID}
       AuctionTitle={auction.Title}
       AuctionDesc={auction.Description}
       AuctionBid={auction.StartingPrice}
     />
   </Grid>
))}
  </Grid>
  </Box>
  );
};

export default Auctions;

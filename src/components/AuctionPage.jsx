import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Stack,
  Typography,
  Paper,
  TextField
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import BidBtn from "./BidBtn";
import { useLocation, Link } from "react-router-dom";

const AuctionPage = () => {
  const location = useLocation();
  
  const { AuctionId, AuctionTitle, AuctionBid, AuctionDesc, EndDate, isAuctionActive } = location.state || {};

  // för att lagra återstående tid i nedräknaren
  const [timeLeft, setTimeLeft] = useState('');


  useEffect(() => {
    // Funktion för att uppdatera nedräknaren
    const updateCountdown = () => {
      const endTime = new Date(EndDate);
      const currentTime = new Date();
      const difference = endTime - currentTime;

      if (difference <= 0) {
        // Om tiden har gått ut, visa meddelande och rensa intervallet
        clearInterval(timer);
        setTimeLeft('Auktionen är över');
      } else {
        // Annars, beräkna timmar, minuter och sekunder kvar
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        const minutes = Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0');
        const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');
        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      }
    };

    // Startar intervallet 
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [EndDate]);

  return (
    <Box sx={{ py: 4, bgcolor: "", minHeight: 680 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 100,
          width: "100%",
          p: 0,
        }}
      >
        {/* Länk tillbaka till auktionslistan */}
        <Link
          style={{
            alignItems: "center",
            marginBottom: 15,
            fontSize: 16,
          }}
          to="/auktioner"
        >
          Tillbaka till auktioner
        </Link>
        {/* Auktionsinformation */}
        <Box
          width="100%"
          display="flex"
          flexDirection="Column"
          alignItems="start"
        >
          <Typography variant="h2" sx={{ fontSize: 24 }}>{AuctionTitle}</Typography>
          <Typography>{AuctionDesc}</Typography>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 2,
          gap: 2,
          p: 0,
          width: "100%",
        }}
      >
        {/* Budformulär och nedräknare */}
        <Stack direction='column' gap={2}>
          <TableContainer component={Paper} sx={{ width: 600, height: 'fit-content', border: 1 }}>
            {/* Dina TableRows och TableCells för att visa buden skulle gå här */}
          </TableContainer>
          {isAuctionActive && (
            // Visa formuläret för att lägga bud om auktionen är aktiv
            <Stack direction='row' gap={2} alignItems='center'>
              <TextField
                id="outlined-basic"
                label="Bud"
                variant="outlined"
                sx={{
                  width: 400
                }}
              />
              <BidBtn />
            </Stack>
          )}
        </Stack>
        {/* Information om högsta bud och nedräkningstid */}
        <Stack direction="row" sx={{ bgcolor: "lightGrey", height: 80, pt: 2, borderRadius: 2, width: 400 }}>
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Högsta Bud:</Typography>
            <div className="bid-info">
              <span className="highest-bid">{AuctionBid}</span>
            </div>
          </Container>
          <Container sx={{ display: "flex", flexDirection: "column", }}>
            <Typography>Avslutas om:</Typography>
            <div className="bid-time">
              {/* Visa nedräknaren om auktionen är aktiv, annars meddelanda att auktionen är över */}
              <span className="bid-countdown">{isAuctionActive ? timeLeft : 'Auktionen är över'}</span>
            </div>
          </Container>
        </Stack>
      </Container>
    </Box>
  );
};

export default AuctionPage;



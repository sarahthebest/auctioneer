import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Stack,
  Typography,
  Paper,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Button,
} from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const AuctionPage = () => {
  const location = useLocation();
  const { AuctionId, AuctionTitle, AuctionBid, AuctionDesc, EndDate, isAuctionActive } = location.state || {};
  const [timeLeft, setTimeLeft] = useState('');
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const updateCountdown = () => {
      const endTime = new Date(EndDate);
      const currentTime = new Date();
      const difference = endTime - currentTime;
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft('Auktionen är över');
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        const minutes = Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0');
        const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');
        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      }
    };
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [EndDate]);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await fetch(`https://auctioneer.azurewebsites.net/bid/p7u/${AuctionId}`);
        const data = await response.json();
        setBids(data);
      } catch (error) {
        console.error("Could not fetch bids", error);
      }
    };

    fetchBids();
  }, [AuctionId]);

  return (
    <Box sx={{ py: 4, minHeight: 680 }}>
      <Container sx={{ display: "flex", flexDirection: "column", p: 0 }}>
        <Link to="/auktioner" style={{ marginBottom: 15, fontSize: 16 }}>
          Tillbaka till auktioner
        </Link>
        <Typography variant="h2" sx={{ fontSize: 24, mt: 1, mb: 2 }}>
          {AuctionTitle}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {AuctionDesc}
        </Typography>
      </Container>
      <Container sx={{ display: "flex", flexDirection: "row", mt: 2, gap: 2, p: 0 }}>
        <TableContainer component={Paper} sx={{ flex: 1 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Bud</TableCell>
                <TableCell align="right">Namn</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bids.map((bid, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{bid.Amount} kr</TableCell>
                  <TableCell align="right">{bid.Bidder}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack sx={{ width: '100%', maxWidth: 360, ml: 2 }}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
            <Typography variant="subtitle1">Högsta Bud:</Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>{`${AuctionBid} kr`}</Typography>
            <Typography variant="subtitle1">Avslutas om:</Typography>
            <Typography variant="h6">{isAuctionActive ? timeLeft : 'Auktionen är över'}</Typography>
          </Paper>
          {isAuctionActive && (
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                id="bid-amount"
                label="Ditt bud"
                type="number"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary">
                Lägg bud
              </Button>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default AuctionPage;


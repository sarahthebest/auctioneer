import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useLocation, Link, useNavigate } from "react-router-dom";
import BidBtn from "./BidBtn";

const AuctionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { AuctionId, AuctionTitle, AuctionDesc, AuctionBid, EndDate } =
    location.state || {};

  const [bids, setBids] = useState([]);
  const [auctionBid, setAuctionBid] = useState(AuctionBid);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    fetchBids();
    const intervalId = setInterval(() => {
      updateCountdown();
      return () => clearInterval(intervalId);
    }, 1000);
  }, [AuctionId, EndDate]);

  const fetchBids = async () => {
    try {
      const response = await fetch(
        `https://auctioneer.up.railway.app/bid/p7u/${AuctionId}`
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        setBids(data);
        if (data.length > 0) {
          setAuctionBid(data[data.length - 1].Amount);
        }
      } else {
        console.error("Expected an array of bids, but received:", data);
      }
    } catch (error) {
      console.error("Error fetching bids:", error);
    }
  };

  const updateCountdown = () => {
    const now = new Date();
    const endDate = new Date(EndDate);
    const timeLeft = endDate - now;
    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else {
      setCountdown("Auktionen är över");
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const deleteAuction = async () => {
    try {
      const response = await fetch(
        `https://auctioneer.up.railway.app/auction/p7u/${AuctionId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            GroupCode: "p7u",
            AuctionID: AuctionId,
          }),
        }
      );

      if (response.ok) {
        alert("Auktionen borttagen!");
        navigate("/auktioner");
      } else {
        alert("Något gick fel, försök igen!");
      }
    } catch (error) {
      console.error("Fel uppstod:", error);
    }
  };

  return (
    <Box sx={{ py: 4, bgcolor: "background.default", minHeight: 680 }}>
      <Container sx={{ display: "flex", flexDirection: "column", p: 0 }}>
        <Link
          to="/auktioner"
          style={{ marginBottom: "15px", fontSize: "16px" }}
        >
          Tillbaka till auktioner
        </Link>
        <Typography variant="h2" sx={{ fontSize: "24px" }}>
          {AuctionTitle}
        </Typography>
        <Typography sx={{ pt: 1 }}>{AuctionDesc}</Typography>
        <Typography sx={{ pt: 1, color: "red" }}>{countdown}</Typography>
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
        <Stack direction="column" gap={2}>
          <TableContainer
            component={Paper}
            sx={{ width: 500, height: "fit-content" }}
          >
            <Table aria-label="Budhistorik">
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
        </Stack>

        <Container>
          <Stack
            direction="row"
            sx={{
              bgcolor: "lightGrey",
              height: 80,
              pt: 2,
              borderRadius: 2,
              width: 410,
            }}
          >
            <Container>
              <Typography>Högsta bud:</Typography>
              <Typography variant="h5" sx={{ color: "green" }}>
                {auctionBid} kr
              </Typography>
            </Container>
            <Container>
              <Typography>Avslutas om:</Typography>
              <Typography variant="body2">{countdown}</Typography>
            </Container>
          </Stack>

          <Stack direction="column" gap={2} sx={{ mt: 2 }}>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <TextField
                label="Bud"
                value={amount}
                onChange={handleAmountChange}
              />
              <TextField
                label="Namn"
                value={name}
                onChange={handleNameChange}
              />
            </Box>
            <BidBtn
              AuctionId={AuctionId}
              Amount={amount}
              Bidder={name}
              auctionBid={auctionBid}
              setAuctionBid={setAuctionBid}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "70%" }}
              onClick={deleteAuction}
            >
              Ta bort
            </Button>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
};

export default AuctionPage;

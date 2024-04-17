import {
  Box,
  Container,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BidBtn from "./BidBtn";
import { TextField, Button } from "@mui/material";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AuctionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const AuctionId = location.state?.AuctionId;
  const AuctionTitle = location.state?.AuctionTitle;
  const AuctionBid = location.state?.AuctionBid;
  const AuctionDesc = location.state?.AuctionDesc;
  const EndDate = location.state?.EndDate;

  const [bids, setBids] = useState([AuctionBid]);
  const [auctionBid, setAuctionBid] = useState(AuctionBid);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchBids = async () => {
      const response = await fetch(
        "https://auctioneer2.azurewebsites.net/bid/p7u/" + AuctionId
      );
      const data = await response.json();
      setBids(data);
      setAuctionBid(data[data.length - 1].Amount);
    };

    fetchBids();
  }, [auctionBid]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const deleteAuction = async () => {
    try {
      const response = await fetch(`https://auctioneer2.azurewebsites.net/auction/p7u/${AuctionId}`, {
        method: 'DELETE',
        body: JSON.stringify({
          GroupCode: 'p7u',
          AuctionID: AuctionId
        })
      });
      if (response.ok) {
        alert('Auktion borttagen!')
        navigate('/auktioner')
      } else {
        alert('Något gick fel, försök igen!')
      }
    } catch (error) {
      console.error('Fel uppstod:', error);
    }
  };

  return (
    <Box
      sx={{
        py: 4,
        bgcolor: "",
        minHeight: 680,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 100,
          width: "100%",
          p: 0,
        }}
      >
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
        <Box
          width="100%"
          display="flex"
          flexDirection="Column"
          alignItems="start"
        >
          <Typography variant="h2" sx={{ fontSize: 24 }}>
            {AuctionTitle}
          </Typography>
          <Typography sx={{ pt: 1 }}>{AuctionDesc}</Typography>
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
        <Stack direction="column" gap={2}>
          <TableContainer
            component={Paper}
            sx={{ width: 500, height: "fit-content" }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Bud</TableCell>
                  <TableCell align="right">Namn</TableCell>
                </TableRow>
              </TableHead>
              {bids && bids.map((bid) => (
                <TableBody>
                  <TableRow>
                    <TableCell align="left"> {bid.Amount} kr </TableCell>
                    <TableCell align="right">{bid.Bidder}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
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
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>Högsta Bud:</Typography>
              <div className="bid-info">
                <span
                  className="highest-bid"
                  style={{ fontSize: 20, color: "green" }}
                >
                  {auctionBid} kr
                </span>
              </div>
            </Container>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>Avslutas om:</Typography>
              <div className="bid-time">
                <span className="bid-countdown">{EndDate}</span>
              </div>
            </Container>
          </Stack>
          <Stack direction="column" gap={2} sx={{ mt: 2 }}>
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              sx={{
                gap: 1,
                width: 410,
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Bud"
                variant="outlined"
                value={amount}
                onChange={handleAmountChange}
              />
              <TextField
                id="outlined-basic"
                label="Namn"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />
            </Box>
            <BidBtn AuctionId={AuctionId} Amount={amount} Bidder={name} GroupCode='p7u' auctionBid={auctionBid} setAuctionBid={setAuctionBid} />
            <Button
              style={{ width: '70%' }}
              color="secondary"
              variant="contained"
              onClick={() => deleteAuction()}
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
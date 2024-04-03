import {
  Box,
  Container,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  Paper
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BidBtn from "./BidBtn";
import TextField from "@mui/material/TextField";
import { useLocation, Link } from "react-router-dom";

const AuctionPage = () => {
  const location = useLocation();
  const AuctionId = location.state?.AuctionId;
  const AuctionTitle = location.state?.AuctionTitle;
  const AuctionBid = location.state?.AuctionBid;
  const AuctionDesc = location.state?.AuctionDesc;


  return (
    <Box sx={{
      py: 4, bgcolor: "", border:1, minHeight:680
    }} >
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
            fontSize:16,
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
        <Stack direction='column' gap={2}>
          <TableContainer component={Paper} sx={{ width: 600, height: 'fit-content', border:1 }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Bud</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left">Bud</TableCell>
                  <TableCell align="right">Tid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Stack direction='row' gap={2} alignItems='center'>

          <Box
            component="form"
            display="flex"
            flexDirection="column"
            sx={{
              gap: 1,
              width: 400
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
            <BidBtn />
            </Stack>


        </Stack>
            <Stack direction="row" sx={{ bgcolor: "lightGrey", height: 80, pt: 2, borderRadius: 2, width:300 }}>
              <Container sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>Högsta Bud:</Typography>
                <div className="bid-info">
                  <span className="highest-bid">{AuctionBid}</span>
                </div>
              </Container>
              <Container sx={{ display: "flex", flexDirection: "column", }}>
                <Typography>Avslutas om:</Typography>
                <div className="bid-time">
                  <span className="bid-countdown">10 Days</span>
                </div>
              </Container>
            </Stack>
      </Container>
    </Box>
  );
};

export default AuctionPage;
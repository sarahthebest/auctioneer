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

const AuctionPage = () => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "red",
          height: 300,
          width: "100%",
          p: 0,
        }}
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="Column"
          alignItems="start"
          p={2}
        >
          <Typography>Auction Title</Typography>
        </Box>
        <Box
          width={"70%"}
          display="flex"
          flexDirection="Column"
          p={2}
          sx={{ border: "1px black solid" }}
        >
          <Typography>Auction Details</Typography>
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
        <Stack direction='row' gap={2}>
        <TableContainer component={Paper} sx={{ width: 600, height:'fit-content' }}>
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

        <Box
          component="form"
          display="flex"
          flexDirection="column"
          sx={{
            gap: 1,
            width:400
          }}
          noValidate
          autoComplete="off"
        >
          <Stack direction="row" sx={{bgcolor: "lightGrey", height:80, pt:2}}>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>Högsta Bud:</Typography>
              <div className="bid-info">
                <span className="highest-bid">300kr</span>
              </div>
            </Container>
            <Container sx={{ display: "flex", flexDirection: "column",  }}>
              <Typography>Avslutas om:</Typography>
              <div className="bid-time">
                <span className="bid-countdown">10 Days</span>
              </div>
            </Container>
          </Stack>
          <Stack direction='row' gap={2} alignItems='center'>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <BidBtn />
          </Stack>
        </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default AuctionPage;
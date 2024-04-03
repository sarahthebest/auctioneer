import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import BidBtn from "./BidBtn";
import TextField from "@mui/material/TextField";
import { useLocation, Link } from "react-router-dom";

const AuctionPage = () => {
  const location = useLocation();
  const AuctionId = location.state?.AuctionId;
  const AuctionTitle = location.state?.AuctionTitle;
  const AuctionBid = location.state?.AuctionBid;
  const AuctionDesc = location.state?.AuctionDesc;
  const EndDate = location.state?.EndDate;

  console.log(EndDate);

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
        <Container sx={{bgcolor:'blue'}}></Container>
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
                  {AuctionBid}
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
          <Stack direction="column" gap={2} sx={{mt:2}}>
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
                label="Outlined"
                variant="outlined"
              />
            </Box>
            <BidBtn />
          </Stack>
        </Container>
      </Container>
    </Box>
  );
};

export default AuctionPage;

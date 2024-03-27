import { Box, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box height={150} sx={{ bgcolor: "red" }}>
      <Container sx={{ display: "flex", flexDirection: "row", gap:2, p:1 , justifyContent:'space-between', alignContent:''}}>
        <Typography variant="h2">Auctioneer</Typography>
        <Link to="/">Test Link</Link>
        <Link to="/auktioner">Auktioner</Link>
      </Container>
    </Box>
  );
};

export default Footer;

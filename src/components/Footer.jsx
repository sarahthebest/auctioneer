import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box height={150} sx={{ bgcolor: "red" }}>
      <Container sx={{ display: "flex", flexDirection: "row", gap:2, p:1 , justifyContent:'space-between', alignContent:''}}>
        <Typography variant="h2">Auctioneer</Typography>
        <Link>Test Link</Link>
      </Container>
    </Box>
  );
};

export default Footer;

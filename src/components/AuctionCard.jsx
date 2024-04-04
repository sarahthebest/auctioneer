import { Box, Card, CardContent, Typography, Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const AuctionCard = ({
  AuctionId,
  AuctionTitle,
  AuctionDesc,
  AuctionBid,
  EndDate,
}) => {
  // Datumformateraren som använder svenskt datumformat
  const dateFormatter = new Intl.DateTimeFormat('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Formaterat datum
  const formattedDate = dateFormatter.format(new Date(EndDate));

  // Kontroll om auktionen är aktiv
  const isAuctionActive = new Date(EndDate) > new Date();

  return (
    <Box sx={{ width: 220, height: "fit-content", position: "relative" }}>
      <Link
        to="/AuctionPage"
        state={{
          AuctionId: AuctionId,
          AuctionTitle: AuctionTitle,
          AuctionDesc: AuctionDesc,
          AuctionBid: AuctionBid,
          EndDate: EndDate,
          isAuctionActive: isAuctionActive, // Skicka denna info till AuctionPage
        }}
      >
        <Paper elevation={1}>
          <Card variant="outlined" sx={{ height: 250 }}>
            <CardContent>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: "100%" }}
              >
                <Grid item>
                  <Typography sx={{ fontSize: 16 }} gutterBottom>
                    {AuctionTitle}
                  </Typography>
                  <Typography
                    sx={{ my: 2, color: "green" }}
                    variant="h5"
                    component="div"
                  >
                    {AuctionBid}
                  </Typography>
                  <Typography color="text.secondary">{AuctionDesc}</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ position: "absolute", bottom: 0, pb: 2 }}
                  >
                    {formattedDate} {/* Använd det formaterade datumet här */}
                  </Typography>
                  {isAuctionActive ? null : (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ position: "absolute", bottom: 0, pb: 2, right: 0 }}
                    >
                      Avslutad
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Link>
    </Box>
  );
};

export default AuctionCard;

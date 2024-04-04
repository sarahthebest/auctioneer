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
  return (
    <Box sx={{ width: 240, height: "fit-content", position: "relative" }}>
      <Link
        to="/AuctionPage"
        state={{
          AuctionId: AuctionId,
          AuctionTitle: AuctionTitle,
          AuctionDesc: AuctionDesc,
          AuctionBid: AuctionBid,
          EndDate: EndDate,
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
                    {`${AuctionBid} kr`}
                  </Typography>
                  <Typography color="text.secondary">{AuctionDesc}</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ position: "absolute", bottom: 0, pb: 2 }}
                  >
                    {EndDate}
                  </Typography>
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

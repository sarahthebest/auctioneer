import Button from "@mui/material/Button";
import { useState } from "react";

export default function BidBtn({
  AuctionId,
  Amount,
  Bidder,
  auctionBid,
  setAuctionBid,
  updateBids  
}) {
  const [submittedAmount, setSubmittedAmount] = useState(null);

  const postBid = async (AuctionId, Amount, Bidder) => {
    const response = await fetch(
      "https://auctioneer.up.railway.app/bid/p7u/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          AuctionID: AuctionId,
          Amount: Amount,
          Bidder: Bidder,
          GroupCode: "p7u",
        }),
      }
    );
    const data = await response.json();
    if (data.success) {
      setAuctionBid(Amount);
      updateBids();  // Uppdatera listan av bud
    }
  };

  const handleClick = async () => {
    setSubmittedAmount(Amount);
    await postBid(AuctionId, Amount, Bidder);
  };

  return (
    <>
      {submittedAmount && submittedAmount <= auctionBid && (
        <div className="errMsg">Du budar för lågt!</div>
      )}
      <Button
        variant="contained"
        color="success"
        sx={{ width: 410, height: 40 }}
        onClick={handleClick}
      >
        Buda
      </Button>
    </>
  );
}

import React, { useEffect, useState } from "react";

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      const response = await fetch(
        "https://auctioneer.azurewebsites.net/auction/p7u"
      );

      const data = await response.json();
      setAuctions(data);
    };

    fetchAuctions();
  }, []);

  return (
    <div>
      <div className="h-full flex items-center justify-center"></div>
      <div className="h-full">
        <h1 className="font-semibold text-4xl px-8 mt-14"></h1>
        <ul className="w-full px-8 flex flex-col mt-10 sm:flex-wrap sm:flex-row item-center gap-14">
          {auctions.map((auction) => (
            <li key={auction.AuctionID}>
              <h2 className="font-semibold text-2xl">{auction.Title}</h2>
              <p>{auction.Description}</p>
              <p>Pris: {auction.StartingPrice}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Auctions;

import React from "react";

export default function SearchResults({ results }) {
  return (
    <div>
      <h2>Search results</h2>
      {results && results.map((result) => (
        <div key={result.AuctionID}>
          <p>Auction ID: {result.AuctionID}</p>
          <p>Title: {result.Title}</p>
          <p>Description: {result.Description}</p>
          <p>Start date: {result.StartDate}</p>
          <p>End date: {result.EndDate}</p>
          <p>Starting price: ${result.StartingPrice}</p>
        </div>
      ))}
    </div>
  );
}

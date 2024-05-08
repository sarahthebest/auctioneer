import React, { useState } from "react";
import SearchResults from "./SearchResults";

const URL = "https://auctioneer.up.railway.app/auction/p7u";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setNotFound(false);
    setIsLoading(true);
    
    try {
      const response = await fetch(`${URL}?search=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error("Nätverk error");
      }
      const data = await response.json();
      if (data.length > 0) {
        setSearchResults(data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error("Gick inte att hämta auktioner:", error);
      setNotFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleSearchTerm}
        value={searchTerm}
        type="text"
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading && <p>Loading...</p>}
      {notFound && <p>No auctions found for: {searchTerm}</p>}
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </div>
  );
}

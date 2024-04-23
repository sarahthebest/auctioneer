import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

const URL = "https://auctioneer2.azurewebsites.net/auction/p7u";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  
  
  useEffect(() => {
    const handleSearch = () => {
      setNotFound(false);
      const searchedItem = searchData.find((item) =>
        item.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (searchedItem) {
        setSearchResult(searchedItem);
      } else {
        setNotFound(true);
        setSearchResult(null);
      }
    };
  
    handleSearch();
  }, [searchData, searchTerm]);
  
   
  const handleSearchTerm = (e) => {
    setNotFound(false);
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
      {notFound && <p>Id not found: {searchTerm}</p>}
      {searchResult && <SearchResult result={searchResult} />}
    </div>
  );
}

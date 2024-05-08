import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URL = "https://auctioneer.up.railway.app/auction/p7u";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSearch = async () => {
    setNotFound(false);
    setIsLoading(true);
  
    try {
      const response = await fetch(`${URL}?search=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error("Network error");
      }
      const data = await response.json();
      setSearchData(data);
      console.log(searchData);
      navigate("/searchresults", { state: { searchResults: data } });
    } catch (error) {
      console.error("Failed to fetch auctions:", error);
      setNotFound(true);
      setSearchData([]);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else {
      setSearchData([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const searchedItem = searchData.find(
      (item) => item.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchedItem) {
      setSearchResult(searchedItem);
    } else {
      setNotFound(true);
      setSearchResult(null);
    }
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
      {isLoading && <p>Loading...</p>}
      {notFound && <p>No auctions found for: {searchTerm}</p>}
    </div>
  );
}

// Searchbar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearchChange }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <input
      type="text"
      placeholder="Search books..."
      className="search-bar"
      value={searchInput}
      onChange={(e) => {
        setSearchInput(e.target.value);
        onSearchChange(e.target.value);
      }}
    />
  );
};

export default SearchBar;

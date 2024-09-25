import React from "react";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={onFilterChange} />
    </label>
  );
};

export default SearchBox;

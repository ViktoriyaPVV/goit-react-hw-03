import React from "react";
import s from './SearchBox.module.css'
const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <label className={s.lable}>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={onFilterChange} className={s.input} />
    </label>
  );
};

export default SearchBox;

import "./search-box.style.css";

import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      placeholder={placeholder}
      type="search"
      onChange={e => handleChange(e.target.value)}
    />
  );
};

import React from "react";
import "../styles/searchForm.css";

function SearchForm({ keyword, onChange, onSubmit, onClear }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Enter a keyword..."
        className="search-input"
      />
      {keyword.length > 0 && (
        <button onClick={onClear} className="clear-input-button">
          <i className="fa-solid fa-x clear-icon"></i>
        </button>
      )}
    </form>
  );
}

export default SearchForm;

import React from "react";
import "../styles/searchForm.css";

function SearchForm({ keyword, onChange, onSubmit, onClear }) {
  return (
    <form className="search__form" onSubmit={onSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Enter a keyword or phrase to search for..."
        className="search__input"
        name="keywords-to-search"
      />
      {keyword.length > 0 && (
        <button onClick={onClear} className="clear__button">
          <i className="fa-solid fa-x clear-icon"></i>
        </button>
      )}
    </form>
  );
}

export default SearchForm;

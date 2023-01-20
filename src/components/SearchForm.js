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
      />
      {keyword.length ? (
        <p className="clear__button" onClick={onClear}>
          <i className="fa-solid fa-x clear-icon"></i>
        </p>
      ) : null}
    </form>
  );
}

export default SearchForm;

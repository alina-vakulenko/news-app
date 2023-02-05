import React from "react";
import "../../styles/sortingMethodSelection.css";

export default function SortingMethodSelection({
  defaultValue,
  handleInputChange,
}) {
  return (
    <form name="sort-method-form">
      <fieldset className="sort-methods-list">
        <legend className="sort-methods-legend">Sorting</legend>
        <label className="sort-methods-label">
          <input
            type="radio"
            name="sort-method"
            id="sort-by-relevancy"
            className="sort-methods-option"
            value="relevancy"
            checked={defaultValue === "relevancy"}
            onChange={(e) => handleInputChange(e)}
          />
          By relevancy
        </label>
        <label className="sort-methods-label">
          <input
            type="radio"
            name="sort-method"
            id="sort-by-popularity"
            className="sort-methods-option"
            value="popularity"
            checked={defaultValue === "popularity"}
            onChange={(e) => handleInputChange(e)}
          />
          By popularity
        </label>
        <label lassName="sort-methods-label">
          <input
            type="radio"
            name="sort-method"
            id="sort-by-date"
            className="sort-methods-option"
            value="publishedAt"
            checked={defaultValue === "publishedAt"}
            onChange={(e) => handleInputChange(e)}
          />
          By publication date
        </label>
      </fieldset>
    </form>
  );
}

import React from "react";
import "../styles/headerSearchForm.css";

export default function HeaderSearchForm() {
  return (
    <form className="header-search-form">
      <input
        type="text"
        className="header-search-field"
        placeholder="Search for"
      />
    </form>
  );
}

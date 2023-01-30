import React from "react";
import "../../styles/headerSearchForm.css";

export default function HeaderSearchForm({ keywords, onChange, onSubmit }) {
  return (
    <form className="header-search-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="header-search-field"
        placeholder={keywords}
        onChange={onChange}
      />
    </form>
  );
}

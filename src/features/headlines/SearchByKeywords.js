import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchForm from "../../components/SearchForm";

export default function SearchByKeywords() {
  const dispatch = useDispatch();
  let [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleInputClear = () => {
    setUserInput("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // dispatch(setUserPreferences({ q: userInput.toLowerCase().trim() }));
  };

  return (
    <div className="content-wrapper">
      <SearchForm
        keyword={userInput}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
        onClear={handleInputClear}
      />
    </div>
  );
}

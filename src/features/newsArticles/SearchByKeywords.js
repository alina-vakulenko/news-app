import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setKeywords } from "../../features/userPreferences/userPreferencesSlice";
import HeaderSearchForm from "../../components/header/HeaderSearchForm";

export default function SearchByKeywords() {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setKeywords(userInput.toLowerCase().trim()));
    setUserInput("");
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <HeaderSearchForm
      keywords={userInput}
      onChange={handleInputChange}
      onSubmit={handleSearchFormSubmit}
    />
  );
}

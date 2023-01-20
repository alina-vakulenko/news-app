import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQueryParams } from "./queryParamsSlice";
import SearchForm from "../../components/SearchForm";

function SearchByKeywords() {
  const dispatch = useDispatch();
  let [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const clearInput = () => {
    setUserInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQueryParams({ q: userInput.toLowerCase().trim() }));
  };

  return (
    <div className="content__wrapper">
      <SearchForm
        keyword={userInput}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        onClear={clearInput}
      />
    </div>
  );
}

export default SearchByKeywords;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, selectCategory } from "./searchArticlesSlice";
import SearchForm from "../../components/SearchForm";

function SearchArticles() {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  let [userInput, setUserInput] = useState(category);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const clearInput = () => {
    setUserInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length) {
      userInput.toLowerCase().trim();
      dispatch(setCategory(userInput));
      setUserInput("");
    }
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

export default SearchArticles;

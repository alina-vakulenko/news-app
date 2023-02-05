import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadNewsSources, selectNewsSources } from "./newsSourcesSlice";
import {
  selectCurrentCountry,
  selectCurrentLanguage,
  setMarkedSources,
} from "../userPreferences/userPreferencesSlice";

export default function NewsSources(props) {
  const dispatch = useDispatch();
  const [currentSourceCategory, setCurrentSourceCategory] = useState("");
  const currentCountry = useSelector(selectCurrentCountry);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const sources = useSelector(selectNewsSources);
  const categoriesList = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Technology",
    "Sports",
  ];

  useEffect(() => {
    dispatch(
      loadNewsSources({
        country: currentCountry,
        language: currentLanguage,
        category: currentSourceCategory,
      })
    );
  }, [dispatch, currentCountry, currentLanguage, currentSourceCategory]);

  const handleCategoryChange = (event) => {
    setCurrentSourceCategory(event.target.value);
  };

  const handleSourcesChange = () => {
    // dispatch(setMarkedSources(event.target.value));
  };

  return (
    <form name="select-sources-form">
      <fieldset>
        <legend>Find sources by name or within desired category:</legend>
        <label for="select-sources-category">Category:</label>
        <select
          name="sselect-sources-category"
          id="select-sources-category"
          onChange={handleCategoryChange}
        >
          <option value="" disabled>
            --All categories--
          </option>
          {categoriesList.map((category) => (
            <option
              key={category.toLowerCase() + "Category"}
              value={category.toLowerCase()}
            >
              {category}
            </option>
          ))}
        </select>
        <label for="select-sources">Choose up to 20 sources:</label>
        <select name="select-sources" id="select-sources" multiple size="5">
          <option value="" disabled>
            --All sources--
          </option>
          {sources.map((source) => (
            <option key={source.id || source.name} value={source.id}>
              {source.name}
            </option>
          ))}
        </select>
        <input
          type="submit"
          onSubmit={handleSourcesChange}
          value="Apply"
        ></input>
      </fieldset>
      {/* <button>Reset</button> */}
    </form>
  );
}

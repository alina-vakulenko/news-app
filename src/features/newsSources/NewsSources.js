import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadNewsSources, selectNewsSources } from "./newsSourcesSlice";
import {
  selectCurrentCountry,
  selectCurrentLanguage,
} from "../userPreferences/userPreferencesSlice";

export default function NewsSources() {
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const sources = useSelector(selectNewsSources);

  useEffect(() => {
    dispatch(
      loadNewsSources({
        country: currentCountry,
        language: currentLanguage,
      })
    );
  }, [dispatch, currentCountry, currentLanguage]);

  return (
    <div className="news-sources">
      <select className="sources-list">
        {sources.map((source) => (
          <option key={source.id} className="source-item">
            {source.name}
          </option>
        ))}
      </select>
    </div>
  );
}

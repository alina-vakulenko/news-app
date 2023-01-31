import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadNewsSources, selectNewsSources } from "./newsSourcesSlice";
import {
  selectCurrentCountry,
  selectCurrentLanguage,
} from "../userPreferences/userPreferencesSlice";
import NewsSourcesSelect from "../../components/newsSources/NewsSourcesSelect";

export default function NewsSources() {
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const sources = useSelector(selectNewsSources);

  // useEffect(() => {
  //   dispatch(
  //     loadNewsSources({
  //       country: currentCountry,
  //       language: currentLanguage,
  //     })
  //   );
  // }, [dispatch, currentCountry, currentLanguage]);

  return sources && <NewsSourcesSelect sourcesList={sources} />;
}

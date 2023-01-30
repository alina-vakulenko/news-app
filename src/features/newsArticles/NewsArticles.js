import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadArticlesSortedByPopularity,
  selectNewsArticles,
  newsArticlesStatus,
  newsArticlesError,
  newsArticlesTotalResults,
} from "./newsArticlesSlice";
import {
  selectCurrentLanguage,
  selectCurrentKeywords,
} from "../userPreferences/userPreferencesSlice";
import GeneralSection from "../../components/GeneralSection";

export default function NewsArticles() {
  const dispatch = useDispatch();
  const articles = useSelector(selectNewsArticles);
  const status = useSelector(newsArticlesStatus);
  const error = useSelector(newsArticlesError);
  const totalResults = useSelector(newsArticlesTotalResults);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const currentKeywords = useSelector(selectCurrentKeywords);

  // useEffect(() => {
  //   dispatch(
  //     loadArticlesSortedByPopularity({
  //       language: currentLanguage,
  //       q: currentKeywords,
  //       pageSize: 1,
  //       page: 1,
  //     })
  //   );
  // }, [dispatch, currentLanguage, currentKeywords]);

  /* {status === "loading" && <Loader message={`Searching news for you...`} />}
  {error && <h2>An error occured: {error}</h2>}
  {totalResults === 0 && <h3>No articles found </h3>}
  {totalResults === 1 && <h3>{totalResults} article was found</h3>}
  {totalResults > 1 && <h3>{totalResults} articles were found</h3>} */

  if (articles) {
    return <GeneralSection />;
  } else {
    return null;
  }
}

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadArticles,
  selectNewsArticles,
  newsArticlesStatus,
  newsArticlesError,
  newsArticlesTotalResults,
  loadArticlesSortedByRelevancy,
} from "./newsArticlesSlice";
import {
  selectCurrentLanguage,
  selectCurrentKeywords,
  selectCurrentSortMethod,
} from "../userPreferences/userPreferencesSlice";
import GeneralSection from "../../components/articles/GeneralSection";

export default function NewsArticles() {
  const dispatch = useDispatch();
  const articles = useSelector(selectNewsArticles);
  const status = useSelector(newsArticlesStatus);
  const error = useSelector(newsArticlesError);
  const totalResults = useSelector(newsArticlesTotalResults);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const currentKeywords = useSelector(selectCurrentKeywords);
  const currentSortMethod = useSelector(selectCurrentSortMethod);

  useEffect(() => {
    dispatch(
      loadArticles({
        language: currentLanguage,
        q: currentKeywords,
        sortBy: currentSortMethod,
        pageSize: 15,
        page: 1,
      })
    );
  }, [dispatch, currentLanguage, currentKeywords, currentSortMethod]);

  /* {status === "loading" && <Loader message={`Searching news for you...`} />}
  {error && <h2>An error occured: {error}</h2>}
  {totalResults === 0 && <h3>No articles found </h3>}
  {totalResults === 1 && <h3>{totalResults} article was found</h3>}
  {totalResults > 1 && <h3>{totalResults} articles were found</h3>} */

  return articles && <GeneralSection newsList={articles} />;
}

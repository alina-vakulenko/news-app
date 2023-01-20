import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadAllPreviews,
  selectArticles,
  selectArticlesStatus,
  selectArticlesError,
  selectTotalResults,
} from "./previewsSlice";
import { selectQueryParams } from "./queryParamsSlice";
import PreviewArticle from "../../components/PreviewArticle";
import Loader from "../../components/Loader";
import { dispalayCurrentArticle } from "../currentArticle/currentArticleSlice";
import SelectedSearchOptions from "../../components/SelectedSearchOptions";

function Previews() {
  const dispatch = useDispatch();
  const queryParams = useSelector(selectQueryParams);
  const articles = useSelector(selectArticles);
  const status = useSelector(selectArticlesStatus);
  const error = useSelector(selectArticlesError);
  const totalResults = useSelector(selectTotalResults);

  useEffect(() => {
    dispatch(loadAllPreviews(queryParams));
  }, [dispatch, queryParams]);

  return (
    <div className="previews">
      <SelectedSearchOptions />
      {status === "loading" && <Loader message={`Searching news for you...`} />}
      {error && <h2>An error occured: {error}</h2>}
      {totalResults === 0 && <h3>No headlines found </h3>}
      {totalResults === 1 && <h3>{totalResults} headline was found</h3>}
      {totalResults > 1 && <h3>{totalResults} top headlines were found</h3>}
      {articles.map((article) => (
        <div
          key={article.id}
          onClick={() => dispatch(dispalayCurrentArticle(article))}
        >
          <PreviewArticle article={article} />
        </div>
      ))}
    </div>
  );
}

export default Previews;

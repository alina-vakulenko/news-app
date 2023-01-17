import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PreviewArticle from "../../components/PreviewArticle";
import {
  loadAllPreviews,
  selectAllPreviews,
  isLoadingPreviews,
} from "./previewsSlice";
import { loadCurrentArticle } from "../currentArticle/currentArticleSlice";
import { selectCategory } from "../previews/searchArticlesSlice";
import "../../styles/previews.css";

function Previews() {
  const dispatch = useDispatch();
  const previews = useSelector(selectAllPreviews);
  const category = useSelector(selectCategory);
  const previewsAreLoading = useSelector(isLoadingPreviews);

  useEffect(() => {
    dispatch(loadAllPreviews(category));
  }, [dispatch, category]);

  if (previewsAreLoading) {
    return <div>Searching news for "{category}"...</div>;
  }

  return (
    <section className="articles-container">
      <h2 className="category">See the latest news on topic "{category}"</h2>
      {previews.map((article) => (
        <div
          key={article.id}
          onClick={(e) => dispatch(loadCurrentArticle(article.id))}
        >
          <PreviewArticle article={article} />
        </div>
      ))}
    </section>
  );
}

export default Previews;

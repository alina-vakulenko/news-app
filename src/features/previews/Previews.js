import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PreviewArticle from "../../components/PreviewArticle";
import {
  loadAllPreviews,
  selectAllPreviews,
  isLoadingPreviews,
} from "./previewsSlice";
import { dispalayCurrentArticle } from "../currentArticle/currentArticleSlice";
import { selectCategory } from "../previews/searchArticlesSlice";
import Loader from "../../components/Loader";

function Previews() {
  const dispatch = useDispatch();
  const previews = useSelector(selectAllPreviews);
  const category = useSelector(selectCategory);
  const previewsAreLoading = useSelector(isLoadingPreviews);

  useEffect(() => {
    dispatch(loadAllPreviews(category));
  }, [dispatch, category]);

  if (previewsAreLoading) {
    return <Loader message={`Searching news for you...`} />;
  }
  return (
    <div className="previews">
      {/* <h2 className="category">What we have found on topic "{category}"</h2> */}
      {previews.map((article) => (
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

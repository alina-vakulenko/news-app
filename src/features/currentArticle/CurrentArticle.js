import React from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentArticle,
  isLoadingCurrentArticle,
} from "../currentArticle/currentArticleSlice";
import FullArticle from "../../components/FullArticle";
import "../../styles/currentArticle.css";

const CurrentArticle = () => {
  const article = useSelector(selectCurrentArticle);
  const currentArticleIsLoading = useSelector(isLoadingCurrentArticle);

  if (currentArticleIsLoading) {
    return <div>Article is loading</div>;
  } else if (!article) {
    return null;
  }

  return (
    <div className="current-article">
      <FullArticle article={article} />
    </div>
  );
};

export default CurrentArticle;

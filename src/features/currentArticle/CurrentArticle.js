import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentArticle,
  hideCurrentArticle,
} from "../currentArticle/currentArticleSlice";
import FullArticle from "../../components/FullArticle";
import "../../styles/currentArticle.css";

const CurrentArticle = () => {
  const dispatch = useDispatch();
  const article = useSelector(selectCurrentArticle);

  if (!Object.keys(article).length) return null;

  return (
    <div className="full__article">
      <button
        className="hide__full__article__button"
        onClick={() => dispatch(hideCurrentArticle())}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <FullArticle article={article} />
    </div>
  );
};

export default CurrentArticle;

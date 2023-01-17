import React from "react";
import "../styles/fullArticle.css";

function FullArticle({ article }) {
  const { id, title, fullText, image } = article;
  return (
    <div key={id}>
      <div className="article-full-image-container">
        <img src={image} alt="" />
      </div>
      <div className="current-article-container">
        <h1 className="current-article-title">{title}</h1>
        <div className="article-full-text">{fullText}</div>
      </div>
    </div>
  );
}

export default FullArticle;

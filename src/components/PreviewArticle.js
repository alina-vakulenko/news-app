import React from "react";
import "../styles/previewArticle.css";

function PreviewArticle({ article }) {
  return (
    <button className="article-container">
      <div className="article-image-container">
        <img src={article.urlToImage} alt="" className="article-image" />
      </div>
      <div className="article-content-container">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-preview">{article.description}</p>
        <div className="article-source-date">
          <div className="source">Source: {article.source.name}</div>
          <div className="published-at">
            Published at: {article.publishedAt}
          </div>
        </div>
      </div>
    </button>
  );
}

export default PreviewArticle;

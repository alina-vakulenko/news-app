import React from "react";
import "../styles/previewArticle.css";

function PreviewArticle({ article }) {
  return (
    <button className="article-container">
      <div className="article-content-container">
        <h3 className="article-title">{article.title}</h3>
        <div className="article-source-date">
          <div className="published-at">
            Published at: {article.publishedAt}
          </div>
          <div className="source">Source: {article.source.name}</div>
        </div>
      </div>
    </button>
  );
}

export default PreviewArticle;

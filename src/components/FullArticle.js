import React from "react";

function FullArticle({ article }) {
  if (!article) return null;
  return (
    <div>
      <div className="full__article__image__container">
        <img src={article.urlToImage} alt="" />
      </div>
      <div className="full__article__content__container">
        <h1 className="full__article__title">{article.title}</h1>
        <div className="full__article__published__date">
          Published at: {article.publishedAt}
        </div>
        <div className="full__article__text">{article.content}</div>
        <div className="full__article__source">
          Source: {article.source ? article.source.name : ""}
        </div>
        <a
          className="full__article__source__link"
          href={article.url}
          target="_blank"
          rel="noreferrer"
        >
          {article.url}
        </a>
      </div>
    </div>
  );
}

export default FullArticle;

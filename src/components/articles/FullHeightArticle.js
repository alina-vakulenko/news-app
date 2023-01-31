import React from "react";
import { cutText } from "../../utils/textHandler";
import { formatIsoDate } from "../../utils/dateHandler";

export default function FullHeightArticle(props) {
  const { id, title, author, publishedAt, urlToImage, description } =
    props.article;
  return (
    <article key={props.id} className="full-height-article">
      <div className="full-height-article-image-wrapper">
        <img
          src={urlToImage}
          alt={cutText(title, 5)}
          className="full-height-article-image"
        />
      </div>
      <span className="full-height-article-author">{author} - </span>
      <span className="full-height-article-date">
        {formatIsoDate(publishedAt)}
      </span>
      <h4 className="full-height-article-title">{title}</h4>
      <p className="full-height-article-description">{description}</p>
    </article>
  );
}

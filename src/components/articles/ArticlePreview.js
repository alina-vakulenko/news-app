import React from "react";
import { cutText } from "../../utils/textHandler";
import { formatIsoDate } from "../../utils/dateHandler";

export default function ArticlePreview(props) {
  const { id, title, author, publishedAt, urlToImage } = props.article;
  return (
    <article key={props.id} className="headline-container">
      <a href="#!" className="headline-link"></a>
      <div className="headline-image-container">
        <img
          src={urlToImage}
          alt={cutText(title, 5)}
          className="headline-image"
        />
      </div>
      <div className="headline-text">
        <span className="headline-author">{author} - </span>
        <span className="headline-date">{formatIsoDate(publishedAt)}</span>
        <h4 className="headline-title">{cutText(title, 5)}</h4>
      </div>
    </article>
  );
}

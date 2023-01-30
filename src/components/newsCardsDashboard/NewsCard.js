import React from "react";
import { cutText } from "../../utils/textHandler";
import { formatIsoDate } from "../../utils/dateHandler";
import "../../styles/newsPhotoCard.css";

export default function NewsCard({ newsItem }) {
  if (!newsItem) return null;
  const { title, author, publishedAt, urlToImage } = newsItem;
  return (
    <figure className="news-card">
      <img src={urlToImage} alt={cutText(title, 5)} className="news-card-pic" />
      <figcaption className="news-card-caption">
        <p className="caption-content">
          <span className="date">{formatIsoDate(publishedAt)}</span>
          <span className="author">{author}</span>
          <h3 className="title">{title}</h3>
        </p>
      </figcaption>
      <a href="#!" className="news-card-link"></a>
    </figure>
  );
}

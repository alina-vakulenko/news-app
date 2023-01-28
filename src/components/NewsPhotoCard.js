import React from "react";
import { cutText } from "../utils/textHandler";
import { formatIsoDate } from "../utils/dateHandler";
import "../styles/newsPhotoCard.css";

export default function NewsPhotoCard({ newsItem, size }) {
  return (
    <figure className={"news-card news-card-" + size}>
      <img
        src={newsItem.urlToImage}
        alt={cutText(newsItem.title, 5)}
        className="news-card-pic"
      />
      <figcaption className="news-card-info-layer">
        <div className="info-layer-caption">
          <p
            className={"info-layer-author-date info-layer-author-date-" + size}
          >
            {newsItem.author} - {formatIsoDate(newsItem.publishedAt)}
          </p>
          <h3 className={"info-layer-title info-layer-title-" + size}>
            {newsItem.title}
          </h3>
        </div>
      </figcaption>
      <a href="#!" className="news-card-link"></a>
    </figure>
  );
}

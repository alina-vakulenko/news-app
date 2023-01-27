import React from "react";
import "../styles/newsPhotoCard.css";

export default function NewsPhotoCard({ newsObject, category }) {
  return (
    <figure className="news-card news-card-size-l">
      <img src={newsObject.urlToImage} alt="" className="news-card-pic" />
      <figcaption className="news-card-info-layer">
        <p className="info-layer-category category-bg-color-1">{category}</p>
        <div className="info-layer-caption">
          <p className="info-layer-author-date info-layer-author-date-size-l">
            {newsObject.author} - {newsObject.publishedAt}
          </p>
          <h3 className="info-layer-title info-layer-title-size-l">
            {newsObject.title}
          </h3>
        </div>
      </figcaption>
      <a href="#!" className="news-card-link"></a>
    </figure>
  );
}

import React from "react";
import { cutText } from "../../utils/textHandler";
import { formatIsoDate } from "../../utils/dateHandler";

export default function HeadlinesSectionContent({ topNews, bottomNews }) {
  return (
    <div className="headlines-section-content">
      <figure className="news-card news-card-full-width">
        <img
          src={topNews.urlToImage}
          alt={cutText(topNews.title, 5)}
          className="news-card-pic"
        />
        <figcaption className="news-card-info-layer">
          <div className="info-layer-caption">
            <h3 className="info-layer-title">{topNews.title}</h3>
            <p className="info-layer-description">{topNews.description}</p>
          </div>
        </figcaption>
        {/* <a href="#!" className="news-card-link"></a> */}
      </figure>

      <div className="headlines-bottom">
        {bottomNews.map((newsItem) => {
          return (
            <div key={newsItem.id} className="headline-container">
              {/* <a href="#!" className="headline-link"></a> */}
              <div className="headline-image-container">
                <img
                  src={newsItem.urlToImage}
                  alt={cutText(newsItem.title, 5)}
                  className="headline-image"
                />
              </div>
              <div className="headline-text">
                <span className="headline-author">
                  {newsItem.author ? newsItem.author : "Unknown"} -{" "}
                </span>
                <span className="headline-date">
                  {formatIsoDate(newsItem.publishedAt)}
                </span>
                <h4 className="headline-title">
                  {cutText(newsItem.title, 10)}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import "../styles/generalSection.css";

export default function GeneralSection({ newsList }) {
  if (!newsList) return null;
  const { title, author, publishedAt, description, urlToImage } = newsList;
  return (
    <section className="general-section">
      <div className="section-title">
        <h2 className="section-title-category">Don't miss</h2>
        {/* <div className="section-title-buttons">
          <button className="section-title-button category-bg-color-1">All</button>
          <button className="section-title-button category-bg-color-2">
            Lifestyle
          </button>
          <button className="section-title-button category-bg-color-3">
            Vogue
          </button>
          <button className="section-title-button category-bg-color-4">
            Travel
          </button>
          <button className="section-title-button category-bg-color-5">
            Gadgets
          </button>
        </div> */}
      </div>
      <div className="general-section-content">
        <div className="full-height-article">
          <div className="full-height-article-image-wrapper">
            <img
              src={urlToImage}
              alt=""
              className="full-height-article-image"
            />
          </div>
          <span className="full-height-article-author">{author} - </span>
          <span className="full-height-article-date">{publishedAt}</span>
          <h4 className="full-height-article-title">{title}</h4>
          <p className="full-height-article-description">{description}</p>
        </div>

        <div className="headlines-side">
          <div className="headline-container">
            <a href="#!" className="headline-link"></a>
            <div className="headline-image-container">
              <img src={urlToImage} alt="" className="headline-image" />
            </div>
            <div className="headline-text">
              <span className="headline-author">{author} - </span>
              <span className="headline-date">{publishedAt}</span>
              <h4 className="headline-title">{title}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import ArticlePreview from "./ArticlePreview";
import FullHeightArticle from "./FullHeightArticle";
import "../../styles/generalSection.css";

export default function GeneralSection({ newsList }) {
  if (!newsList) return null;
  return (
    <section className="general-section">
      <div className="section-title">
        <h2 className="section-title-category">Articles</h2>
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
        {newsList[0] && (
          <FullHeightArticle key={newsList[0].id} article={newsList[0]} />
        )}

        <div className="headlines-side">
          {newsList.length > 1 &&
            newsList
              .slice(1)
              .map((article) => (
                <ArticlePreview key={article.id} article={article} />
              ))}
        </div>
      </div>
    </section>
  );
}

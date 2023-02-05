import React from "react";
import Filter from "../features/newsArticles/Filter";
import NewsArticles from "../features/newsArticles/NewsArticles";
import "../styles/page1.css";

export default function Page1() {
  return (
    <section className="page-container">
      <div className="main-section">
        <NewsArticles />
      </div>
      <div className="side-section">
        <Filter />
      </div>
    </section>
  );
}

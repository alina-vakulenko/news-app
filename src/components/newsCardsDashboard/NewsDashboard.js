import React from "react";
import NewsCard from "./NewsCard";
import buttonLeftPointer from "../../images/left-pointer.svg";
import buttonRightPointer from "../../images/right-pointer.svg";
import "../../styles/newsDashboard.css";

export default function NewsDashboard({
  newsList,
  currentDashboardPage,
  setCurrentDashboardPage,
}) {
  if (!newsList) return null;
  const dashboardTemplate = [
    "card-container-size-l",
    "card-container-size-s",
    "card-container-size-s",
    "card-container-size-m",
  ];

  const goToNextPage = () => {
    const nextPage = currentDashboardPage + 1;
    // if (nextPage > totalPages) {
    //   return;
    // }
    setCurrentDashboardPage(nextPage);
  };

  const goToPreviousPage = () => {
    const previousPage = currentDashboardPage - 1;
    if (previousPage <= 0) {
      return;
    }
    setCurrentDashboardPage(previousPage);
  };

  return (
    <section className="news-dashboard">
      <header className="section-title">
        <h2 className="section-title-category">Don't miss</h2>
        <div className="section-title-buttons">
          <button
            className="section-title-left-button"
            onClick={() => goToPreviousPage()}
          >
            <img
              src={buttonLeftPointer}
              alt="<"
              className="left-button-thumbnail"
            />
          </button>
          {currentDashboardPage}
          <button
            className="section-title-right-button"
            onClick={() => goToNextPage()}
          >
            <img
              src={buttonRightPointer}
              alt=">"
              className="right-button-thumbnail"
            />
          </button>
        </div>
      </header>

      <div className="news-cards">
        {newsList.map((newsItem, index) => (
          <article key={newsItem.id} className={dashboardTemplate[index]}>
            <NewsCard newsItem={newsItem} />
          </article>
        ))}
      </div>
    </section>
  );
}

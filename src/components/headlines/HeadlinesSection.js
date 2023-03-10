import React from "react";
import buttonLeftPointer from "../../images/left-pointer.svg";
import buttonRightPointer from "../../images/right-pointer.svg";
import HeadlinesSectionContent from "./HeadlinesSectionContent";
import "../../styles/headlinesSection.css";

export default function HeadlinesSection({
  title,
  headlines,
  currentPage,
  setPage,
}) {
  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    // if (nextPage > totalPages) {
    //   return;
    // }
    setPage(nextPage);
  };

  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage <= 0) {
      return;
    }
    setPage(previousPage);
  };

  return (
    <section id={title} className="news-category-section">
      <div className="section-title">
        <h2 className="section-title-category">{title}</h2>
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
          {currentPage}
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
      </div>
      {headlines.error}
      {headlines.headlines.length ? (
        <HeadlinesSectionContent
          topNews={headlines.headlines[0]}
          bottomNews={headlines.headlines.slice(1, 4)}
        />
      ) : null}
    </section>
  );
}

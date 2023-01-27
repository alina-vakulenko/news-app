import React from "react";
import NewsPhotoCard from "./NewsPhotoCard";
import "../styles/newsDashboard.css";

export default function NewsDashboard(newsList) {
  return (
    <div class="news-dashboard">
      <div class="news-cards">
        {newsList.map((newsItem) => (
          <div key={newsItem.id}>
            <NewsPhotoCard newsObject={newsItem} />
          </div>
        ))}

        {/* <figure class="news-card news-card-size-s">
          <img
            src="img/post-2.jpg"
            alt="They’re back! Kennedy Darling named
              to return to"
            class="news-card-pic"
          />
          <figcaption class="news-card-info-layer">
            <p class="info-layer-category category-bg-color-2">Category</p>
            <div class="info-layer-caption">
              <p class="info-layer-author-date info-layer-author-date-size-s">
                Craig Bator - 27 Dec 2020
              </p>
              <h3 class="info-layer-title info-layer-title-size-s">
                They’re back! Kennedy Darling named to return to
              </h3>
            </div>
          </figcaption>
          <a href="#!" class="news-card-link"></a>
        </figure>
        <figure class="news-card news-card-size-s">
          <img
            src="img/post-3.jpg"
            alt="Swiss authorities say Uber drivers should"
            class="news-card-pic"
          />
          <figcaption class="news-card-info-layer">
            <p class="info-layer-category category-bg-color-3">Category</p>
            <div class="info-layer-caption">
              <p class="info-layer-author-date info-layer-author-date-size-s">
                Craig Bator - 27 Dec 2020
              </p>
              <h3 class="info-layer-title info-layer-title-size-s">
                Swiss authorities say Uber drivers should
              </h3>
            </div>
          </figcaption>
          <a href="#!" class="news-card-link"></a>
        </figure>
        <figure class="news-card news-card-size-m">
          <img
            src="img/post-4.jpg"
            alt="Tourism in Dubai is booming by
              international tourist"
            class="news-card-pic"
          />
          <figcaption class="news-card-info-layer">
            <p class="info-layer-category category-bg-color-4">Category</p>
            <div class="info-layer-caption">
              <p class="info-layer-author-date info-layer-author-date-size-l">
                Craig Bator - 27 Dec 2020
              </p>
              <h3 class="info-layer-title info-layer-title-size-m">
                Tourism in Dubai is booming by international tourist
              </h3>
            </div>
          </figcaption>
          <a href="#!" class="news-card-link"></a>
        </figure> */}
      </div>
    </div>
  );
}

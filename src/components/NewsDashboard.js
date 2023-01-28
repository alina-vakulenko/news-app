import React, { useEffect } from "react";
import NewsPhotoCard from "./NewsPhotoCard";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCountry } from "../features/userPreferences/userPreferencesSlice";
import { loadAllHeadlines } from "../features/headlines/headlinesSlice";
import "../styles/newsDashboard.css";

export default function NewsDashboard() {
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);
  const newsList = useSelector((state) => state.headlines.all.headlines);

  useEffect(() => {
    dispatch(
      loadAllHeadlines({
        country: currentCountry,
        pageSize: 4,
        page: 1,
      })
    );
  }, [dispatch, currentCountry]);

  return (
    <div class="news-dashboard">
      <div class="news-cards">
        <NewsPhotoCard newsItem={newsList[0]} size="size-l" />
        <NewsPhotoCard newsItem={newsList[1]} size="size-s" />
        <NewsPhotoCard newsItem={newsList[2]} size="size-s" />
        <NewsPhotoCard newsItem={newsList[3]} size="size-m" />

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

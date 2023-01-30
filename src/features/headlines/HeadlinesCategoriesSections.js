import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadBusinessHeadlines,
  loadSportsHeadlines,
  loadTechnologyHeadlines,
  loadEntertainmentHeadlines,
} from "./headlinesSlice";
import { selectCurrentCountry } from "../userPreferences/userPreferencesSlice";
import HeadlinesSection from "../../components/headlines/HeadlinesSection";

export default function HeadlinesCategoriesSections() {
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);
  const articlesPerPage = 4;

  const businessHeadlines = useSelector((state) => state.headlines.business);
  const technologyHeadlines = useSelector(
    (state) => state.headlines.technology
  );
  const entertainmentHeadlines = useSelector(
    (state) => state.headlines.entertainment
  );
  const sportsHeadlines = useSelector((state) => state.headlines.sports);

  const [businessHeadlinesPage, setBusinessHeadlinesPage] = useState(1);
  const [sportsHeadlinesPage, setSportsHeadlinesPage] = useState(1);
  const [entertainmentHeadlinesPage, setEntertainmentHeadlinesPage] =
    useState(1);
  const [technologyHeadlinesPage, setTechnologyHeadlinesPage] = useState(1);

  // useEffect(() => {
  //   dispatch(
  //     loadBusinessHeadlines({
  //       category: "business",
  //       country: currentCountry,
  //       pageSize: articlesPerPage,
  //       page: businessHeadlinesPage,
  //     })
  //   );
  // }, [dispatch, currentCountry, businessHeadlinesPage]);

  // useEffect(() => {
  //   dispatch(
  //     loadSportsHeadlines({
  //       category: "sports",
  //       country: currentCountry,
  //       pageSize: articlesPerPage,
  //       page: sportsHeadlinesPage,
  //     })
  //   );
  // }, [dispatch, currentCountry, sportsHeadlinesPage]);

  // useEffect(() => {
  //   dispatch(
  //     loadEntertainmentHeadlines({
  //       category: "entertainment",
  //       country: currentCountry,
  //       pageSize: articlesPerPage,
  //       page: entertainmentHeadlinesPage,
  //     })
  //   );
  // }, [dispatch, currentCountry, entertainmentHeadlinesPage]);

  // useEffect(() => {
  //   dispatch(
  //     loadTechnologyHeadlines({
  //       category: "technology",
  //       country: currentCountry,
  //       pageSize: articlesPerPage,
  //       page: technologyHeadlinesPage,
  //     })
  //   );
  // }, [dispatch, currentCountry, technologyHeadlinesPage]);
  return (
    <div className="headlines-sections">
      <HeadlinesSection
        title="Business"
        headlines={businessHeadlines}
        currentPage={businessHeadlinesPage}
        setPage={setBusinessHeadlinesPage}
      />
      <HeadlinesSection
        title="Sports"
        headlines={sportsHeadlines}
        currentPage={sportsHeadlinesPage}
        setPage={setSportsHeadlinesPage}
      />
      <HeadlinesSection
        title="Entertainment"
        headlines={entertainmentHeadlines}
        currentPage={entertainmentHeadlinesPage}
        setPage={setEntertainmentHeadlinesPage}
      />
      <HeadlinesSection
        title="Technology"
        headlines={technologyHeadlines}
        currentPage={technologyHeadlinesPage}
        setPage={setTechnologyHeadlinesPage}
      />
    </div>
  );
}

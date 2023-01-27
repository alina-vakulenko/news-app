import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadBusinessHeadlines,
  loadSportsHeadlines,
  loadTechnologyHeadlines,
  loadEntertainmentHeadlines,
} from "./headlinesSlice";
import { selectCurrentCountry } from "../userPreferences/userPreferencesSlice";
import HeadlinesSection from "../../components/HeadlinesSection";

export default function HeadlinesCategoriesSections() {
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);
  const articlesPerPage = 4;

  const [businessHeadlinesPage, setBusinessHeadlinesPage] = useState(1);
  const [sportsHeadlinesPage, setSportsHeadlinesPage] = useState(1);
  const [entertainmentHeadlinesPage, setEntertainmentHeadlinesPage] =
    useState(1);
  const [technologyHeadlinesPage, setTechnologyHeadlinesPage] = useState(1);

  useEffect(() => {
    dispatch(
      loadBusinessHeadlines({
        country: currentCountry,
        pageSize: articlesPerPage,
        page: businessHeadlinesPage,
      })
    );
  }, [dispatch, currentCountry, businessHeadlinesPage]);

  useEffect(() => {
    dispatch(
      loadSportsHeadlines({
        country: currentCountry,
        pageSize: articlesPerPage,
        page: sportsHeadlinesPage,
      })
    );
  }, [dispatch, currentCountry, sportsHeadlinesPage]);

  useEffect(() => {
    dispatch(
      loadEntertainmentHeadlines({
        country: currentCountry,
        pageSize: articlesPerPage,
        page: entertainmentHeadlinesPage,
      })
    );
  }, [dispatch, currentCountry, entertainmentHeadlinesPage]);

  useEffect(() => {
    dispatch(
      loadTechnologyHeadlines({
        country: currentCountry,
        pageSize: articlesPerPage,
        page: technologyHeadlinesPage,
      })
    );
  }, [dispatch, currentCountry, technologyHeadlinesPage]);
  return (
    <div className="headlines-sections">
      <HeadlinesSection
        category="Business"
        currentPage={businessHeadlinesPage}
        setPage={setBusinessHeadlinesPage}
      />
      <HeadlinesSection
        category="Sports"
        currentPage={sportsHeadlinesPage}
        setPage={setSportsHeadlinesPage}
      />
      <HeadlinesSection
        category="Entertainment"
        currentPage={entertainmentHeadlinesPage}
        setPage={setEntertainmentHeadlinesPage}
      />
      <HeadlinesSection
        category="Technology"
        currentPage={technologyHeadlinesPage}
        setPage={setTechnologyHeadlinesPage}
      />
    </div>
  );
}

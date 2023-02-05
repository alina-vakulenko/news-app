import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCountry } from "../features/userPreferences/userPreferencesSlice";
import { loadAllHeadlines } from "../features/headlines/headlinesSlice";
import NewsDashboard from "../components/newsCardsDashboard/NewsDashboard";

export default function Dashboard() {
  const [currentDashboardPage, setCurrentDashboardPage] = useState(1);
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectCurrentCountry);
  const newsList = useSelector((state) => state.headlines.all.headlines);

  useEffect(() => {
    dispatch(
      loadAllHeadlines({
        category: "",
        country: currentCountry,
        pageSize: 4,
        page: currentDashboardPage,
      })
    );
  }, [dispatch, currentCountry, currentDashboardPage]);

  return (
    newsList && (
      <NewsDashboard
        newsList={newsList}
        currentDashboardPage={currentDashboardPage}
        setCurrentDashboardPage={setCurrentDashboardPage}
      />
    )
  );
}

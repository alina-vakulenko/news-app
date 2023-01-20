import React from "react";
import CategoriesList from "../../components/CategoriesList";
import { setQueryParams } from "./queryParamsSlice";
import { useDispatch } from "react-redux";

export default function QueryParams() {
  const dispatch = useDispatch();

  const CATEGORIES = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Technology",
    "Science",
    "Sports",
  ];

  const handleCategoryClick = (e) => {
    dispatch(setQueryParams({ category: e.target.textContent.toLowerCase() }));
  };

  return (
    <CategoriesList
      categories={CATEGORIES}
      onCategoryClickHandler={handleCategoryClick}
    />
  );
}

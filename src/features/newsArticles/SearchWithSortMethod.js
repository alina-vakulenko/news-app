import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentSortMethod,
  setSortMethod,
} from "../userPreferences/userPreferencesSlice";

export default function SearchWithSortMethod() {
  const currentSortMethod = useSelector(selectCurrentSortMethod);
  const dispatch = useDispatch();
  return (
    <select
      defaultValue={currentSortMethod}
      onChange={(e) => dispatch(setSortMethod(e.target.value))}
    >
      <option value="relevancy">By relevancy</option>
      <option value="popularity">By popularity</option>
      <option value="publishedAt">By publication date</option>
    </select>
  );
}

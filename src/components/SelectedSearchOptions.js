import React from "react";
import { selectQueryParams } from "../features/previews/queryParamsSlice";
import { useSelector } from "react-redux";
import cl from "../styles/selectedSearchOptions.module.css";

export default function SelectedSearchOptions() {
  const queryParams = useSelector(selectQueryParams);

  return (
    <ul className={cl.selected__search__options}>
      {Object.entries(queryParams)
        .filter((option) => option[1].length > 0)
        .map((option) => (
          <li key={option[0]}>{option[1]}</li>
        ))}
    </ul>
  );
}

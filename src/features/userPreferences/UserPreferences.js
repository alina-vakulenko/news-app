import React from "react";
import {
  selectCurrentCountry,
  setCountry,
  setLanguage,
} from "./userPreferencesSlice";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/userPreferences.css";

export default function UserPreferences() {
  const dispatch = useDispatch();
  let currentCountry = useSelector(selectCurrentCountry);

  const handleCountryChange = (e) => {
    dispatch(setCountry(e.target.value === "All" ? "" : e.target.value));
  };

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value === "All" ? "" : e.target.value));
  };

  return (
    <div className="user-preferences">
      <select
        name="user-preferences-country"
        onChange={(e) => handleCountryChange(e)}
        defaultValue={currentCountry}
        className="countries"
      >
        <option key="us" value="us">
          US
        </option>
        <option key="de" value="de">
          DE
        </option>
        <option key="ua" value="ua">
          UA
        </option>
        <option key="all" value="">
          All
        </option>
      </select>
      {" | "}
      <select
        name="user-preferences-language"
        onChange={(e) => handleLanguageChange(e)}
        className="languages"
      >
        <option key="en" value="en">
          EN
        </option>
        <option key="de" value="de">
          DE
        </option>
        <option key="ru" value="ru">
          RU
        </option>
      </select>
    </div>
  );
}

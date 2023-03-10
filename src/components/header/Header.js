import React from "react";
import logo from "../../images/logo.svg";
import Menu from "./Menu";
import UserPreferences from "../../features/userPreferences/UserPreferences";
import SearchByKeywords from "../../features/newsArticles/SearchByKeywords";
import "../../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="content-wrapper">
        <div className="header-logo">
          <a href="/" className="header-logo-link">
            <img src={logo} alt="Newscast" className="header-logo-pic" />
          </a>
        </div>
        <div className="menu-wrapper">
          <Menu />
          <UserPreferences />
          <SearchByKeywords />
        </div>
      </div>
    </header>
  );
}

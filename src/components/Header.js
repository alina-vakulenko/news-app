import React from "react";
import HeaderSearchForm from "./HeaderSearchForm";
import Menu from "./Menu";
import "../styles/header.css";
import logo from "../images/logo.svg";

export default function Header() {
  const menuItems = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Technology",
    "Science",
    "Sports",
  ];
  return (
    <header className="header">
      <div className="content-wrapper">
        <div className="header-logo">
          <a href="/" className="header-logo-link">
            <img src={logo} alt="Newscast" className="header-logo-pic" />
          </a>
        </div>
        <div className="menu-wrapper">
          <Menu menuItems={menuItems} />
          <HeaderSearchForm />
        </div>
      </div>
    </header>
  );
}

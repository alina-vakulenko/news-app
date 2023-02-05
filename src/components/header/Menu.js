import React from "react";
import { Link } from "react-router-dom";
import "../../styles/menu.css";

export default function Menu() {
  return (
    <nav className="header-nav">
      <ul className="header-nav-list">
        <li className="header-nav-item">
          <Link to="/" className="header-nav-link">
            Home
          </Link>
        </li>
        <li className="header-nav-item">
          <Link to="/headlines" className="header-nav-link">
            Top Headlines
          </Link>
        </li>
        <li className="header-nav-item">
          <Link to="/articles" className="header-nav-link">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
}

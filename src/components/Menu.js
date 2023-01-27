import React from "react";
import "../styles/menu.css";

export default function Menu({ menuItems }) {
  return (
    <nav className="header-nav">
      <ul className="header-nav-list">
        {menuItems.map((item) => (
          <li key={item} className="header-nav-item">
            <a href="#!" className="header-nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

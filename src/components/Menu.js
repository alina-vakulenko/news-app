import React from "react";
import "../styles/menu.css";

export default function Menu({ menuItems }) {
  const highlightCurrentMenuItem = (menuItem) => {
    document
      .querySelector(`#${menuItem.text}`)
      .classList.add("header-nav-item-current");
  };

  return (
    <nav className="header-nav">
      <ul className="header-nav-list">
        {menuItems.map((item) => (
          <li key={item} id={item} className="header-nav-item">
            <a
              href="#!"
              className="header-nav-link"
              onClick={(e) => highlightCurrentMenuItem(e.target)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

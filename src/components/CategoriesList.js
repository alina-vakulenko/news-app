import React from "react";
import cl from "../styles/categories.module.css";

export default function CategoriesList({ categories, onCategoryClickHandler }) {
  return (
    <section className={cl.categories__wrapper}>
      <div className="content__wrapper">
        <ul className={cl.categories__list}>
          {categories.map((item, index) => (
            <li key={index}>
              <button
                className={cl.category__item}
                onClick={onCategoryClickHandler}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

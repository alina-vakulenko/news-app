import React from "react";
import CategoriesList from "../components/CategoriesList";
import SearchArticles from "../features/previews/SearchArticles";
import Previews from "../features/previews/Previews";
import CurrentArticle from "../features/currentArticle/CurrentArticle";
import "../styles/app.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <CategoriesList />
        <SearchArticles />
      </header>
      <main>
        <div className="content__wrapper">
          <div className="content">
            <section className="headlines">{<Previews />}</section>
            <section className="selected__article">
              {<CurrentArticle />}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

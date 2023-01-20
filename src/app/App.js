import React from "react";
import SearchByCategory from "../features/previews/SearchByCategory";
import SearchByKeywords from "../features/previews/SearchByKeywords";
import Previews from "../features/previews/Previews";
import CurrentArticle from "../features/currentArticle/CurrentArticle";
import "../styles/app.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <SearchByCategory />
        <SearchByKeywords />
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

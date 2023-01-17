import React from "react";
import CurrentArticle from "../features/currentArticle/CurrentArticle";
import Previews from "../features/previews/Previews";
import SearchArticles from "../features/previews/SearchArticles";
import "../styles/app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <SearchArticles />
        <CurrentArticle />
        <Previews />
      </main>
    </div>
  );
}

export default App;

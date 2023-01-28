import React from "react";
import Header from "../components/Header";
import NewsDashboard from "../components/NewsDashboard";
import HeadlinesCategoriesSections from "../features/headlines/HeadlinesCategoriesSections";
import NewsSources from "../features/newsSources/NewsSources";
import "../styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="content-wrapper">
          <NewsSources />
          <NewsDashboard />
          <HeadlinesCategoriesSections />
        </div>
      </main>
    </div>
  );
}

export default App;

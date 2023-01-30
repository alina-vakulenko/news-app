import React from "react";
import Header from "../components/header/Header";
import Dashboard from "../features/headlines/Dashboard";
import HeadlinesCategoriesSections from "../features/headlines/HeadlinesCategoriesSections";
import NewsArticles from "../features/newsArticles/NewsArticles";
import NewsSources from "../features/newsSources/NewsSources";
import Footer from "../components/footer/Footer";
import "../styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="content-wrapper">
          <NewsSources />
          <NewsArticles />
          <Dashboard />
          <HeadlinesCategoriesSections />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

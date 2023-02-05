import React from "react";
import Dashboard from "../pages/Dashboard";
import HeadlinesCategoriesSections from "../pages/HeadlinesCategoriesSections";
import Page1 from "../pages/Page1";
import NewsSources from "../features/newsSources/NewsSources";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/app.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route
            path="/headlines"
            element={<HeadlinesCategoriesSections />}
          ></Route>
          <Route path="/articles" element={<Page1 />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

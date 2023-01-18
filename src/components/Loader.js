import React from "react";
import cl from "../styles/loader.module.css";

const Loader = ({ message }) => {
  return (
    <div className={cl.wrapper}>
      <h3 className={cl.message}>{message}</h3>
      <div className={cl.loader}></div>
    </div>
  );
};

export default Loader;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <p>Ooopppsss! Page not found.</p>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};

export default Error;

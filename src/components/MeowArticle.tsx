"use client";

import React from "react";
import styles from "../app/layout.module.css";

const MeowArticle = () => {
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://meowfacts.herokuapp.com");
      const data = await res.json();
      const factText = data.data[0];
      setText(factText);
    };
    getData();
  }, []);
  return <article className={styles.article}>{text}</article>;
};

export default MeowArticle;

import Link from "next/link";
import React from "react";
import styles from "../layout.module.css";

const products = ["shirts", "pants", "hats", "shoes"];

const page = () => {
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.ul}>
        {products.map((product) => (
          <li key={product}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;

import Link from "next/link";
import React from "react";
import styles from "../layout.module.css";

const page = () => {
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/products/shirts">shirts</Link>
        </li>
        <li>
          <Link href="/products/pants">pants</Link>
        </li>
        <li>
          <Link href="/products/hats">hats</Link>
        </li>
        <li>
          <Link href="/products/shoes">shoes</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;

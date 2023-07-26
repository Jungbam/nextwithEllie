import Link from "next/link";
import React from "react";
import styles from "../layout.module.css";
import { getProducts } from "@/service/products";

// export const revalidate = 3;

const ProductsPage = async () => {
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 3 },
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.ul}>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.name}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </div>
  );
};

export default ProductsPage;

import Link from "next/link";
import React from "react";
import styles from "../layout.module.css";
import { getProducts } from "@/service/products";

export const revalidate = 3;
const page = async () => {
  const product = await getProducts();
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.ul}>
        {product.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.name}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;

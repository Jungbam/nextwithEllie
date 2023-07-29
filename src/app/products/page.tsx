import Link from "next/link";
import React from "react";
import styles from "../layout.module.css";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";

import nextImage from "/public/next.svg";
export const revalidate = 3;

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
      <Image src={nextImage} width={500} height={500} alt="넥스트" />
      <Image
        src="https://plus.unsplash.com/premium_photo-1689750423556-b246f05cd301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        width={500}
        height={500}
        alt="넥스트"
      />

      <ul className={styles.ul}>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.name}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
};

export default ProductsPage;

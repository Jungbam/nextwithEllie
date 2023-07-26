import { getProduct, getProducts } from "@/service/products";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  return {
    title: `${product?.name} 제품 소개`,
  };
}

const page = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);
  return <div>{product?.name} 제품 설명 페이지</div>;
};

export default page;

export const generateStaticParams = async () => {
  const product = await getProducts();
  return product.map((slug) => ({
    slug: slug.name,
  }));
};

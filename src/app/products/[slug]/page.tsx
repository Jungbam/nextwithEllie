import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug} 제품 소개`,
  };
}

const page = ({ params }: Props) => {
  return <div>{params.slug}</div>;
};

export default page;

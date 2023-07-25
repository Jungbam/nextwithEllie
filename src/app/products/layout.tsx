import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "../layout.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "멋진 제품 소개 페이지",
  description: "제품 소개 페이지입니다.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className={styles.header}>
        <h1>분류</h1>
        <nav className={styles.nav}>
          <Link href="/products/woman" scroll={false}>
            여성옷
          </Link>
          <Link href="/products/man">남성옷</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}

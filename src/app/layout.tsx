import React from "react";
import "./globals.css";
import type { Metadata } from "next";

import ReactTest from "@/components/provider/Provider";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body className="w-full max-w-screen-xl overflow-auto">
        <ReactTest>
          <>
            <Header />
            {children}
          </>
        </ReactTest>
      </body>
    </html>
  );
};
export default RootLayout;

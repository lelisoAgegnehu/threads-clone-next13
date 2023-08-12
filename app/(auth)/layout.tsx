import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import type { AppProps } from "next/app";
export const metadata = {
  title: "Threads",
  description: "A Next.js 14 Meta Threads App",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: AppProps;
}) {
  return (
    <ClerkProvider {...pageProps}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
